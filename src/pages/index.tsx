import Navbar from '@/components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import PageBase from '@/components/PageBase'
import { Grid, Loading } from '@geist-ui/react'
import React, { useMemo, useState } from 'react'
import StakeActionSection from '@/components/StakeActionSection'
import StakeInfoSection from '@/components/StakeInfoSection'
import RankSection from '@/components/RankSection'
import AuctionChartSection from '@/components/AuctionChartSection'
import PriceChartSection from '@/components/PriceChartSection'
import { useMeta } from '@/utils/meta'
import Announcement from '@/components/Announcement'
import Milestones from '@/components/Milestones'
import { CalculatorContext } from '@/components/StakeActionSection/Calculator'
import { Helmet } from 'react-helmet'
import useSentry from '@/hooks/useSentry'

const StyledContainer = styled(Grid.Container)`
  .item {
    width: 100%;
  }
`
const PageLoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  place-content: center;
`

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: #03FFFF;
    color: #fff;
  }
`

const PageLoading: React.FC = () => {
  return (
    <PageLoadingWrapper>
      <Loading />
    </PageLoadingWrapper>
  )
}

const CalculatorContextProvider: React.FC = (props) => {
  const [contributingReward, setContributingReward] = useState(0)
  const [hasReferrer, setHasReferrer] = useState(false)

  return (
    <CalculatorContext.Provider
      value={{
        contributingReward,
        setContributingReward,
        hasReferrer,
        setHasReferrer,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

const _Home: React.FC = () => {
  // don't delete it, just for test mobile
  // useEffect(() => {
  //   import('vconsole').then((VConsole) => new VConsole.default())
  // }, [])

  const {
    campaignQuery: { data },
  } = useMeta()
  useSentry()

  return data ? (
    <CalculatorContextProvider>
      <Helmet>
        <title>Apron Crowdloan</title>
      </Helmet>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <PageBase>
        <Milestones></Milestones>
        <Announcement></Announcement>
        <StakeActionSection />
        <StakeInfoSection />
        <Grid xs={24} md={24} lg={8}>
          <StyledContainer gap={1.4} direction="row">
            <AuctionChartSection />
            <PriceChartSection />
          </StyledContainer>
        </Grid>
        <RankSection />
      </PageBase>
    </CalculatorContextProvider>
  ) : (
    <PageLoading />
  )
}

const Home: React.FC = () => {
  const hasWindow = useMemo(
    () => typeof window !== 'undefined',
    [typeof window !== 'undefined']
  )
  return hasWindow ? <_Home /> : null
}

export default Home
