import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  Button,
  ContentP3,
  ContentP3Bold,
  ContentP4,
} from "../../layout/credentials/components";
import { CardBorder, Margin } from "../../layout/Layout";
import { DropDown, Option } from "../Earnings/Earnings";
import AllocationCard from "./AllocationCard";
import { coders } from "./mockup";

export type Coder = {
  name: string;
  acc: number;
  users: number;
  fees: number;
  age: number;
  userId: number;
};

type Filter = {
  label: string;
  above: boolean;
  value: number;
};

export default function Coders() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<Filter>({
    label: "acc.",
    above: true,
    value: 12,
  });
  const [selectedCoders, setSelectedCoders] = useState<number[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleCardSelect = (userId: number) => {
    if (selectedCoders.includes(userId)) {
      if (selectedCoders.length === 1) {
        setSelectedCoders([]);
        return;
      }
      const indexOf = selectedCoders.indexOf(userId);
      const temp: number[] = [
        ...selectedCoders.slice(0, indexOf),
        ...selectedCoders.slice(indexOf + 1, selectedCoders.length),
      ];
      setSelectedCoders(temp);
      return;
    }
    setSelectedCoders((prevState: number[]) => {
      return [...prevState, userId];
    });
  };

  const handleFilterAdd = (e: any) => {
    e.preventDefault();
    setFilters((prevState) => {
      return [...prevState, selectedFilter];
    });
  };

  const handleInput = (e: any) => {
    setSelectedFilter((prevState) => {
      if (e.target.name === "above") {
        return {
          ...prevState,
          above: e.target.value === ">",
        };
      }
      if (e.target.name === "value") {
        if (e.target.value === "") {
          return {
            ...prevState,
            [e.target.name]: "",
          };
        }
        const val = parseInt(e.target.value);
        if (val <= 100) {
          return {
            ...prevState,
            [e.target.name]: val,
          };
        } else {
          return prevState;
        }
      }
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleDelete = (idx: number, e: any) => {
    e.preventDefault();
    if (idx === filters.length - 1) {
      const a: Filter[] = filters.slice(0, idx);
      setFilters(a);
    } else {
      const a: Filter[] = [
        ...filters.slice(0, idx),
        ...filters.slice(idx + 1, filters.length),
      ];
      setFilters(a);
    }
  };

  const toggleAllocateMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <Container>
      <ContentP4>
        <Margin>Meet the Modelers</Margin>
      </ContentP4>

      <CardBorder>
        <Margin>
          <MarginTop>
            <ContentP3>Filter coders</ContentP3>
            <Form>
              <DropDownWrapper>
                <DropDown onChange={handleInput} name="label">
                  <Option>acc.</Option>
                  <Option>fees</Option>
                </DropDown>
                <DropDown onChange={handleInput} name="above">
                  <Option>{">"}</Option>
                  <Option>{"<"}</Option>
                </DropDown>
              </DropDownWrapper>
              <InputWrapper>
                <Input
                  type="number"
                  placeholder="10"
                  onChange={handleInput}
                  name="value"
                  value={selectedFilter.value}
                />
                <InputLabel>%</InputLabel>
                <SelectButton onClick={handleFilterAdd}>add</SelectButton>
              </InputWrapper>
              <FilterContainer>
                {filters.map((c, idx) => {
                  return (
                    <Filters>
                      {c.above ? ">" : "<"}
                      {c.value}% {c.label}{" "}
                      <CancelButton onClick={(e) => handleDelete(idx, e)}>
                        X
                      </CancelButton>
                    </Filters>
                  );
                })}
              </FilterContainer>
            </Form>
          </MarginTop>
        </Margin>
        <HR />

        <MarginTop>
          <Margin>
            <ContentP3Bold>Leaderboard</ContentP3Bold>
          </Margin>

          <CoderListContainer>
            {coders.map((c) => {
              if (selectedCoders.includes(c.userId)) {
                return (
                  <CoderCard
                    props={{ ...c, handleCardSelect, selected: true }}
                  />
                );
              }
              return (
                <CoderCard
                  props={{ ...c, handleCardSelect, selected: false }}
                />
              );
            })}
          </CoderListContainer>
        </MarginTop>
      </CardBorder>
      {selectedCoders.length > 0 && (
        <AllocationButtonContainer>
          <Info>{selectedCoders.length} selected</Info>
          <Button
            action={true}
            style={{
              width: "fit-content",
              backgroundColor: "var(--color-orange)",
              color: "var(--font-color)",
            }}
            onClick={toggleAllocateMenu}
          >
            allocate
          </Button>
        </AllocationButtonContainer>
      )}
      {showMenu && (
        <AllocationCard
          toggleAllocateMenu={toggleAllocateMenu}
          setSelectedCoders={setSelectedCoders}
          selectedCoders={selectedCoders}
          coders={coders}
        />
      )}
    </Container>
  );
}
interface ICoderCard {
  name: string;
  acc: number;
  users: number;
  fees: number;
  age: number;
  handleCardSelect: (e: any) => void;
  selected: boolean;
  userId: number;
}
type CoderCardType = {
  props: ICoderCard;
};
const CoderCard: React.FC<CoderCardType> = ({ props }) => {
  const history = useHistory();
  const handleRedirect = (userId: number) => {
    history.push(`/modeler?userId=${userId}`);
  };
  return (
    <CardBorder
      style={
        props.selected ? { backgroundColor: "var(--color-blue-light)" } : {}
      }
    >
      <Margin
        style={
          props.selected ? { backgroundColor: "var(--color-blue-light)" } : {}
        }
      >
        <CardContainer onClick={() => props.handleCardSelect(props.userId)}>
          <Name>{props.name}</Name>
          <StatsContainer>
            <Stats>
              <Label>acc: </Label> <Stat>{props.acc}</Stat>
            </Stats>
            <Stats>
              <Label>users: </Label> <Stat>{props.users}</Stat>
            </Stats>
            <Stats>
              <Label>fees: </Label> <Stat>{props.fees}</Stat>
            </Stats>
            <Stats>
              <Label>age: </Label> <Stat>{props.age} days</Stat>
            </Stats>
          </StatsContainer>
          <VR />
          <Link onClick={() => handleRedirect(props.userId)}>view profile</Link>
        </CardContainer>
      </Margin>
    </CardBorder>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;
const MarginTop = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-row-gap: var(--padding-p1);
  background-color: var(--color-white);
`;

const HR = styled.div`
  width: 100%;
  border: 1px solid var(--color-black-light);
`;

const CardContainer = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 1fr auto;
  grid-row-gap: var(--padding-p0);
  grid-column-gap: var(--padding-p4);
`;

const CoderListContainer = styled.div`
  display: grid;
  grid-row-gap: var(--padding-p2);
`;

const Name = styled.div`
  font-size: var(--font-size-p3);
  font-weight: bold;
  grid-row: 1/2;
  grid-column: 1/2;
`;

const StatsContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: var(--padding-p4);
  /* justify-items: center; */
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.div`
  justify-self: start;
  color: var(--font-color-light);
  font-size: var(--font-size-p2);
`;

const Stat = styled.div`
  justify-self: end;
  color: var(--font-color);
  font-weight: bold;
  font-size: var(--font-size-p2);
`;

const VR = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  border-left: 1px solid var(--color-black-lighter);
`;

const Link = styled.div`
  grid-row: 1/3;
  grid-column: 3/4;
  align-self: center;
  color: var(--font-color-blue);
  font-weight: bold;
  z-index: 2923;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 50%;
  justify-self: start;
  column-gap: var(--padding-p0);
`;
const Input = styled.input`
  padding: var(--padding-p0);
  width: 75%;
`;

const InputLabel = styled.div`
  justify-self: end;
  align-self: center;
`;
const SelectButton = styled.button`
  width: fit-content;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  row-gap: var(--padding-p2);
  column-gap: var(--padding-p2);
`;
const DropDownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1/2;
  grid-column: 1/2;
`;
const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column: 1 / end;
  row-gap: var(--padding-p1);
`;

const Filters = styled.div`
  border: solid 1px var(--color-blue);
  background-color: var(--color-blue);
  color: var(--font-color-white);
  border-radius: 5px;
  width: fit-content;
  padding: var(--padding-p0);
`;

const CancelButton = styled.button`
  border: none;
  background: transparent;
  color: var(--font-color-white);
`;

const AllocationButtonContainer = styled.div`
  position: fixed;
  top: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-self: center;
  align-items: center;
  border: 1px solid var(--color-black-light);
  border-radius: var(--padding-p6);
  background-color: var(--color-white);
  padding: var(--padding-p2);
  z-index: 200000;
`;

const Info = styled.div``;
