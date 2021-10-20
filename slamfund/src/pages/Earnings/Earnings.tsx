import React from "react";
import { CardBorder, Margin, Spacer } from "../../layout/Layout";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { ContentP4 } from "../../layout/credentials/components";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function Earnings() {
  return (
    <Container>
      <CardBorder>
        <Margin>
          <ChartContainer>
            <Spacer />
            <ContentP4>Earnings Analysis</ContentP4>
            <DropDown>
              <Option>1D</Option>
              <Option>1W</Option>
              <Option>1M</Option>
            </DropDown>
            <LineChart />
            <Spacer />
            <AnalysisBackground>
              <AnalysisContainer>
                <Title>Profit and Loss Analysis</Title>
                <Name>total profits</Name>
                <Value>12,222.233 USD</Value>

                <Name>total loss</Name>
                <Value>5,000.222 USD</Value>

                <Name>net profit/loss</Name>
                <Value>7,222.0 USD</Value>

                <Name>total bets played</Name>
                <Value>4</Value>

                <Name>% profitable</Name>
                <Value>75%</Value>
              </AnalysisContainer>
            </AnalysisBackground>
            <Spacer />
          </ChartContainer>
        </Margin>
      </CardBorder>

      <CardBorder>
        <Margin>
          <ChartContainer>
            <Spacer />
            <ContentP4> Performance (Types)</ContentP4>
            <DropDown>
              <Option>%</Option>
              <Option>amount</Option>
            </DropDown>
            <BarChart />
            <Spacer />
          </ChartContainer>
        </Margin>
      </CardBorder>

      <CardBorder>
        <Margin>
          <ChartContainer>
            <Spacer />
            <ContentP4>Performance (Teams)</ContentP4>
            <DropDown>
              <Option>spread</Option>
              <Option>moneyline</Option>
              <Option>o/u</Option>
            </DropDown>
            <PieChart />
            <Spacer />
          </ChartContainer>
        </Margin>
      </CardBorder>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: var(--padding-p2);
  background-color: var(--color-background);
  max-width: 100vw;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p2);
`;
export const DropDown = styled.select`
  outline: none;
  border: solid 1px var(--color-black-light);
  height: var(--padding-p4);
  border-radius: var(--padding-p0);
  width: fit-content;
`;
export const Option = styled.option``;

const AnalysisBackground = styled.div`
  background-color: var(--color-black-lightest);
`;
const AnalysisContainer = styled.div`
  margin: var(--padding-p2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: var(--padding-p2);
`;

const Title = styled.div`
  grid-column: 1 / end;
  justify-items: center;
  text-align: center;
  font-weight: bold;
  color: var(--font-color);
  font-size: var(--font-size-p3);
`;
const Name = styled.div`
  grid-column: 1/2;
  justify-items: start;
  text-align: start;
  color: var(--font-color-light);
  font-size: var(--font-size-p3);
`;

const Value = styled.div`
  grid-column: 2/3;
  justify-items: end;
  text-align: end;
`;
