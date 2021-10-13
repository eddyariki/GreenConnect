import React from "react";
import styled from "styled-components";
import { CardBorder, Margin } from "../../layout/Layout";

export default function Account() {
  return (
    <Container>
      <CardBorder>
        <Margin>
          <Card>
            <TitleContainer>
              <Icon></Icon>
              <Title>Basic Information</Title>
              <Edit>edit</Edit>
            </TitleContainer>
            <InfoContainerCard title={"name"} text={"John Smith"} />
            <InfoContainerCard title={"birthday"} text={"1999/02/02"} />
            <InfoContainerCard title={"email"} text={"johnsmit@gmail.com"} />
          </Card>
        </Margin>
      </CardBorder>
      <CardBorder>
        <Margin>
          <Card>
            <TitleContainer>
              <Icon></Icon>
              <Title>Billing Address</Title>
              <Edit>edit</Edit>
            </TitleContainer>
            <InfoContainerCard title={"name"} text={"John Smith"} />
            <InfoContainerCard title={"postal code"} text={"22222-22"} />
            <InfoContainerCard title={"country"} text={"US"} />
            <InfoContainerCard title={"state"} text={"Arizona"} />
            <InfoContainerCard
              title={"address"}
              text={"placeholder street 1-2020"}
            />
            <InfoContainerCard title={"billing account"} text={"******-002"} />
          </Card>
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
`;

const Card = styled.div`
  margin: var(--padding-p4) 0 var(--padding-p4) 0;
  max-width: 100vw;
  min-height: 35vh;
  background-color: var(--color-white);
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr auto;
  align-items: center;
`;

const Title = styled.div`
  font-size: var(--font-size-p4);
  font-weight: bold;
`;

const Icon = styled.div`
  height: var(--font-size-p6);
  width: var(--font-size-p6);
  background-color: black;
`;
const Edit = styled.div`
  font-size: var(--font-size-p4);
  color: var(--font-color-blue);
  font-weight: bold;
  text-decoration: underline;
  grid-column: 2/3;
  justify-self: end;
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--padding-p0);
`;

const InfoLabel = styled.div`
  grid-row: 1/2;
  font-size: var(--font-size-p3);
`;
const Info = styled.div`
  grid-row: 2/3;
  font-size: var(--font-size-p4);
  font-weight: bold;
`;

const InfoContainerCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <InfoContainer>
      <InfoLabel>{title}</InfoLabel>
      <Info>{text}</Info>
    </InfoContainer>
  );
};
