import React from "react";
import styled from "styled-components";
import { authApi } from "../../apis/config";
import { ContentP4 } from "../../layout/credentials/components";
import { CardBorder, Margin } from "../../layout/Layout";

import { mockUpList } from "./mockup";

export default function Home() {
  const handleClick = async () => {
    const res = await authApi.post("ping");
    console.log(res.data);
  };

  return (
    <Container>
      <ContentP4>
        <Margin>Current Bets</Margin>
      </ContentP4>
      {mockUpList.map((item) => {
        return (
          <CardBorder>
            <Margin>
              <MarginTop>
                <Team row="1/2">
                  <TeamIcon src={item.teamA.image} />
                  <TeamName>{item.teamA.name}</TeamName>
                  <TeamScore>{item.teamA.score}</TeamScore>
                </Team>
                <Team row="2/3">
                  <TeamIcon src={item.teamB.image} />
                  <TeamName>{item.teamB.name}</TeamName>
                  <TeamScore>{item.teamB.score}</TeamScore>
                </Team>
                <VR />
                <Link row="1/2">Box Score</Link>
                <Link row="2/3">Gamecast</Link>
                <BetStatsContainer>
                  <Stats>
                    <Bet>winner:</Bet>
                    <Result>{item.teamA.name}</Result>
                  </Stats>
                  <Stats>
                    <Bet>spread:</Bet>
                    <Result>+4.5</Result>
                  </Stats>
                  <Stats>
                    <Bet>o/u:</Bet>
                    <Result>over</Result>
                  </Stats>
                </BetStatsContainer>
              </MarginTop>
            </Margin>
          </CardBorder>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;

type TeamProps = {
  row?: string;
};
const Team = styled.div<TeamProps>`
  grid-row: ${({ row }) => row};
  grid-row-gap: var(--padding-p2);
  display: grid;
  grid-template-columns: repeat(8, var(--padding-p4));
  align-items: center;
`;
const TeamIcon = styled.img`
  height: var(--padding-p5_5);
  width: var(--padding-p5_5);
  grid-column: 1/3;
`;
const TeamName = styled.div`
  grid-column: 4/7;
  font-weight: bold;
`;
const TeamScore = styled.div`
  grid-column: 7/9;
  font-weight: bold;
  justify-self: end;
`;
const MarginTop = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  grid-template-columns: auto auto auto;
  grid-row-gap: var(--padding-p0);
`;

const VR = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  border-left: 1px solid var(--color-black-lighter);
  margin: var(--padding-p2) 0 var(--padding-p2) 0;
`;
type LinkProps = {
  row?: string;
};
const Link = styled.div<LinkProps>`
  grid-column: 3/4;
  grid-row: ${({ row }) => row};
  align-self: center;
  color: var(--font-color-blue);
  font-weight: bold;
`;

const BetStatsContainer = styled.div`
  display: grid;
  grid-column-gap: var(--padding-p1);
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-column: 1 / end;
  grid-row: 3 / end;
`;
const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Bet = styled.div`
  justify-self: start;
  color: var(--font-color-light);
  font-size: var(--font-size-p2);
`;

const Result = styled.div`
  justify-self: end;
  color: var(--font-color);
  font-weight: bold;
  font-size: var(--font-size-p2);
`;
