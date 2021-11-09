import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api, authApi } from "../../apis/config";
import { ContentP4 } from "../../components/credentials/components";
import { CardBorder, Margin } from "../../components/Layout";

import { mockupImage } from "./mockup";
interface ITeam {
  teamId: number;
  teamName: string;
}
interface IBets {
  betId: number;
  game: {
    teamA: ITeam;
    teamB: ITeam;
    score: number[];
  };
  bet: {
    winner: string;
    spread: number;
    ou: string;
  };
}
type Bets = {
  bets: IBets[];
};
export default function Home() {
  const [bets, setBets] = useState<IBets[]>();
  useEffect(() => {
    const fetchBets = async () => {
      const res: AxiosResponse<Bets> = await api.get("/bets");
      console.log(res.data.bets);
      setBets(res.data.bets);
    };
    fetchBets();
  }, []);

  const handleClick = async () => {
    const res = await authApi.post("ping");
    console.log(res.data);
  };
  const imageSwitch = (name: string) => {
    switch (name) {
      case "Lakers":
        return mockupImage.Lakers;

      case "Warriors":
        return mockupImage.Warriors;

      case "Bulls":
        return mockupImage.Bulls;

      case "Hornets":
        return mockupImage.Hornets;

      case "Raptors":
        return mockupImage.Raptors;

      default:
        break;
    }
  };
  return (
    <Container>
      <ContentP4>
        <Margin>Current Bets</Margin>
      </ContentP4>
      {bets
        ? bets.map((item, idx) => {
            return (
              <CardBorder key={idx} border={true}>
                <Margin>
                  <MarginTop>
                    <Team row="1/2">
                      <TeamIcon src={imageSwitch(item.game.teamA.teamName)} />
                      <TeamName>{item.game.teamA.teamName}</TeamName>
                      <TeamScore>{item.game.score[0]}</TeamScore>
                    </Team>
                    <Team row="2/3">
                      <TeamIcon src={imageSwitch(item.game.teamB.teamName)} />
                      <TeamName>{item.game.teamB.teamName}</TeamName>
                      <TeamScore>{item.game.score[1]}</TeamScore>
                    </Team>
                    <VR />
                    <Link row="1/2">Box Score</Link>
                    <Link row="2/3">Gamecast</Link>
                    <BetStatsContainer>
                      <Stats>
                        <Bet>winner:</Bet>
                        <Result>
                          {item.bet.winner === "teamA"
                            ? item.game.teamA.teamName
                            : item.game.teamB.teamName}
                        </Result>
                      </Stats>
                      <Stats>
                        <Bet>spread:</Bet>
                        <Result>{item.bet.spread}</Result>
                      </Stats>
                      <Stats>
                        <Bet>o/u:</Bet>
                        <Result>{item.bet.ou}</Result>
                      </Stats>
                    </BetStatsContainer>
                  </MarginTop>
                </Margin>
              </CardBorder>
            );
          })
        : null}
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
