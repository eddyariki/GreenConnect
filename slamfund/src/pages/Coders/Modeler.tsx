import React, { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import {
  ContentP3,
  ContentP3Bold,
  ContentP4,
  ContentP4Light,
  ReturnButton,
  ReturnContainer,
} from "../../components/credentials/components";
import { CardBorder, Margin } from "../../components/Layout";

export default function Modeler() {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params.get("reviewId"));
    const modelerUserId = params.get("userId");
  }, []);

  return (
    <Container>
      <CardBorder>
        <Margin>
          <MarginTop>
            <ReturnContainer>
              <ReturnButton>back</ReturnButton>
            </ReturnContainer>
            <BioContainer>
              <ContentP4>Modeler A</ContentP4>
              <InfoContainer>
                <ContentP3>Year Joined: </ContentP3>
                <ContentP3Bold>2021</ContentP3Bold>
              </InfoContainer>
              <InfoContainer>
                <ContentP3>Fee: </ContentP3>
                <ContentP3Bold>2.5%</ContentP3Bold>
              </InfoContainer>
              <InfoContainer>
                <ContentP3>Accuracy: </ContentP3>
                <ContentP3Bold>70%</ContentP3Bold>
              </InfoContainer>
              <Bio>
                <ContentP4Light>Bio:</ContentP4Light>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec ultricies purus. Nulla at ante purus. Mauris feugiat, nunc
                  eu dictum aliquet, enim nisi interdum ex, et varius justo
                  purus vitae diam. Mauris eu dolor vel nibh elementum finibus
                  et posuere ante. Ut pellentesque est vel urna tincidunt, a
                  vehicula dui vehicula.
                </Text>
              </Bio>
            </BioContainer>
          </MarginTop>
        </Margin>
      </CardBorder>
    </Container>
  );
}

const Container = styled.div``;

const MarginTop = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-row-gap: var(--padding-p1);
  background-color: var(--color-white);
`;

const BioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Bio = styled.div`
  display: grid;
  grid-row-gap: var(--padding-p2);
`;

const Text = styled.div`
  font-size: var(--font-size-p3);
  color: var(--font-color);
`;
