import { Grid } from '@geist-ui/react'
import React from 'react'
import styled from 'styled-components'
import ContentCard from './ContentCard'

const Image = styled.div`
  width: 130px;
  height: 124px;
  background-image: url('/landing/basicReward.svg');
  margin: auto;
`

const Title = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.0494px;
  color: #000000;
`

const Content = styled.div`
  margin-top: 20px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0494px;
  color: #000000;
`

const CardBasicReward: React.FC = () => {
  return (
    <ContentCard type="vertical" name={['BASIC REWARD']} index={1}>
      <Grid.Container gap={3}>
        <Grid sm={17} md={17} xs={24}>
          <div>
            <Title>1 KSM = 100 PHA</Title>
            <Content>
              In Khala’s crowdloan, every KSM that supports Khala in the Kusama
              slot auction through the Crowdloan will be entitled to 100 PHA as
              rewards (PHA: KSM = 100:1).
            </Content>
          </div>
        </Grid>
        <Grid sm={7} md={7} xs={24}>
          <Image></Image>
        </Grid>
      </Grid.Container>
    </ContentCard>
  )
}

export default CardBasicReward
