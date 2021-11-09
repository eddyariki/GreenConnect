import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  ContentP3,
  ContentP3Bold,
  ContentP3Light,
  ContentP4,
  ContentP4Light,
} from "../../components/credentials/components";
import { CardBorder, Margin } from "../../components/Layout";

export default function Portfolio() {
  const [netVal, setNetVal] = useState(10000);
  const [active, setActive] = useState(2000);
  const formatText = (num: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(num);
  };
  return (
    <Container>
      <Margin>
        <ContentP4>Portfolio</ContentP4>
      </Margin>
      <CardBorder border={true}>
        <Margin>
          <MarginTop>
            <ContentP4>Portfolio</ContentP4>
            <ContentP3>Total Value</ContentP3>
            <ContentP4Light>{formatText(netVal)}</ContentP4Light>
            <ActionsContainer>
              <ActionButton>Deposit</ActionButton>
              <GreyButton>Withdraw</GreyButton>
            </ActionsContainer>
          </MarginTop>
        </Margin>
      </CardBorder>
      <CardBorder>
        <Margin>
          <MarginTop>
            <InfoContainer>
              <ContentP3>Active</ContentP3>
              <ContentP3Bold>{formatText(active)}</ContentP3Bold>
            </InfoContainer>
            <InfoContainer>
              <ContentP3>Inactive</ContentP3>
              <ContentP3Bold>{formatText(netVal - active)}</ContentP3Bold>
            </InfoContainer>
          </MarginTop>
        </Margin>
      </CardBorder>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;

const MarginTop = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: var(--padding-p3);
`;
const ActionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media (min-width: 768px) {
    column-gap: var(--padding-p6);
  }
`;

const ActionButton = styled(Button)`
  width: fit-content;
  background-color: var(--color-orange);
  color: var(--font-color);
  font-weight: bold;
  border-radius: var(--padding-p1);
  padding: var(--padding-p2);
`;

const GreyButton = styled(Button)`
  width: fit-content;
  background-color: var(--color-black-lighter);
  color: var(--font-color);
  font-weight: bold;
  border-radius: var(--padding-p1);
  padding: var(--padding-p2);
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;
