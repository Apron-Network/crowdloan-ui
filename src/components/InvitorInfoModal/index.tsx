import {
  Container,
  Input,
  Loading,
  Modal,
  Spacer,
  useModal,
} from '@geist-ui/react'
import React from 'react'
import { useWeb3 } from '@/utils/web3'
import ReactDOM from 'react-dom'
import { useI18n } from '@/i18n'
import NormalButton from '@/components/NormalButton'
import useInvitorAction from '@/hooks/useInvitorAction'
import NormalModal from './NormalModal'
import MobileModal from './MobileModal'
import { useMediaQuery } from 'react-responsive'
import Medal from './Medal'

type Props = {
  modal: ReturnType<typeof useModal>
}

const InvitorInfoModal: React.FC<Props> = ({ modal }) => {
  const { openModal, currentAccount } = useWeb3()
  const { t } = useI18n()
  const {
    txWaiting,
    referrer,
    tryInvite,
    txPaymentInfo,
    isLoading,
    setInvitor,
    invitor,
    referrerCheck,
  } = useInvitorAction()
  const isXS = useMediaQuery({ maxWidth: 760 })

  const content = isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <Modal.Content>
        {isXS && <Medal></Medal>}
        <div>{t('affiliationRewardText')}</div>

        {currentAccount && (
          <div>
            <Spacer y={1}></Spacer>
            <div style={{ marginBottom: 6 }}>{t('yourIntroducer')}</div>
            {referrer && <div>{referrer}</div>}
            {!referrer && (
              <Container>
                <Input
                  onChange={(e) => setInvitor(e.target.value)}
                  value={invitor}
                  width="100%"
                  placeholder={t('Fill_in_the_introducer_to_get_extra_rewards')}
                />
                {referrerCheck && (
                  <>
                    <Spacer x={1}></Spacer>
                    <div>
                      <NormalButton
                        primary
                        loading={txWaiting}
                        onClick={tryInvite}
                      >
                        {t('ok')}
                      </NormalButton>
                      <div>
                        {txPaymentInfo
                          ? `${t('Fee')}: ${txPaymentInfo.partialFee.toHuman()}`
                          : '...'}
                      </div>
                    </div>
                  </>
                )}
              </Container>
            )}
          </div>
        )}
      </Modal.Content>
      {!currentAccount && (
        <div style={{ textAlign: isXS ? 'center' : 'right', marginTop: 20 }}>
          <NormalButton
            auto
            primary
            onClick={() => {
              openModal()
              modal.setVisible(false)
            }}
          >
            {t('connectWallet')}
          </NormalButton>
        </div>
      )}
    </>
  )

  return ReactDOM.createPortal(
    React.createElement(isXS ? MobileModal : NormalModal, { modal }, content),
    document.body
  )
}

export default InvitorInfoModal
