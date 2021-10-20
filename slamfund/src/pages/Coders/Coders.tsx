import React from "react";
import styled from "styled-components";
import {
  Button,
  ContentP3,
  ContentP3Bold,
  ContentP4,
  ContentP4Light,
  Form,
  InputContainer,
} from "../../layout/credentials/components";
import { CardBorder, Margin } from "../../layout/Layout";
import { DropDown, Option } from "../Earnings/Earnings";

export default function Coders() {
  return (
    <Container>
      <ContentP4>
        <Margin>Coders</Margin>
      </ContentP4>

      <CardBorder>
        <Margin>
          <MarginTop>
            <ContentP3>Select coders to allocate your funds to</ContentP3>
            <Form>
              <DropDown>
                <Option>acc. above</Option>
                <Option>fees below</Option>
              </DropDown>
              <Options type="text" placeholder="0.5" />
              <SelectButton
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                add
              </SelectButton>
              <FilterContainer>
                <Filters>
                  {">"}60% acc. <CancelButton>X</CancelButton>
                </Filters>
                <Filters>
                  {"<"}1% fees <CancelButton>X</CancelButton>
                </Filters>
                <Filters>
                  {">"}60% acc. <CancelButton>X</CancelButton>
                </Filters>
              </FilterContainer>
            </Form>
          </MarginTop>
        </Margin>
        <HR />
        <Margin>
          <ContentP3Bold>Leaderboard</ContentP3Bold>
        </Margin>

        <CoderListContainer>
          <CardBorder>
            <Margin>
              <CardContainer>
                <Name>Coder A</Name>
                <StatsContainer>
                  <Stats>
                    <Label>acc: </Label> <Stat>66.55%</Stat>
                  </Stats>
                </StatsContainer>
                <VR />
                <Link>more info</Link>
              </CardContainer>
            </Margin>
          </CardBorder>

          <CardBorder>
            <Margin>
              <CardContainer>
                <Name>Coder A</Name>
                <StatsContainer>
                  <Stats>
                    <Label>acc: </Label> <Stat>66.55%</Stat>
                  </Stats>
                </StatsContainer>
                <VR />
                <Link>more info</Link>
              </CardContainer>
            </Margin>
          </CardBorder>
        </CoderListContainer>
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
  grid-row-gap: var(--padding-p0);
`;
const SelectButton = styled.button``;
const CancelButton = styled.button``;

const Options = styled.input``;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Filters = styled.div`
  border: solid 1px black;
  border-radius: 5px;
  width: fit-content;
`;

const HR = styled.div`
  width: 100%;
  border: 1px solid var(--color-black-light);
`;

const CardContainer = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  grid-template-columns: auto auto auto;
  grid-row-gap: var(--padding-p0);
`;

const CoderListContainer = styled.div`
  display: grid;
  grid-row-gap: var(--padding-p2);
`;

const Name = styled.div``;

const StatsContainer = styled.div``;

const Stats = styled.div``;

const Label = styled.div``;

const Stat = styled.div``;

const VR = styled.div``;

const Link = styled.div``;
