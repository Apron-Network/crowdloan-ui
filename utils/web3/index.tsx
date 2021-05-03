import React, { useContext, useMemo, useRef } from 'react'
import {
  ExtentionContext,
  _defaultContextValue,
  ExtensionContextValue,
  AccountModal,
} from './common'
import { useModal } from '@geist-ui/react'
import _Web3Provider from './dynamic'

const Web3Provider: React.FC = ({ children }) => {
  const { current: hasWindow } = useRef(() => typeof window !== 'undefined')
  const accountModal = useModal()

  const value = useMemo(
    () => ({
      ..._defaultContextValue,
      accountModal,
      openModal: () => accountModal.setVisible(true),
    }),
    [accountModal]
  )

  return (
    <>
      {hasWindow ? (
        <_Web3Provider modal={accountModal}>{children}</_Web3Provider>
      ) : (
        <ExtentionContext.Provider value={value}>
          <AccountModal isEnabled={true} modal={accountModal} />
          {children}
        </ExtentionContext.Provider>
      )}
    </>
  )
}

export const useWeb3 = (): ExtensionContextValue => useContext(ExtentionContext)

export default Web3Provider
