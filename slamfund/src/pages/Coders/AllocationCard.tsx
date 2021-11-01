import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button, ContentP3Bold } from "../../components/credentials/components";
import { CardBorder, Margin } from "../../components/Layout";
import { Coder } from "./Coders";

interface IAllocationCardProps {
  toggleAllocateMenu: () => void;
  setSelectedCoders: (a: number[]) => void;
  selectedCoders: number[];
  coders: Coder[];
}

const AllocationCard: React.FC<IAllocationCardProps> = (props) => {

  const [allocations, setAllocations] = useState<string[]>([]);

  const handleChange = (e:any, idx: number) =>{
    const allocationsTemp = allocations;
    allocationsTemp[idx] = e.target.value;
    setAllocations(allocationsTemp);
  }

  const removeCard = (id: number) => {
    const a = props.selectedCoders.filter(c=>c !== id)
    props.setSelectedCoders(a);
  }
  return (
    <Container>
      <MarginTop>
        <PopupContainer>
          <InfoContainer>
            <MarginTop>
              <ContentP3Bold>Balance: $50,000</ContentP3Bold>
              <ContentP3Bold>Allocating: $20,000</ContentP3Bold>
            </MarginTop>
            <CloseButton>
              <Margin>
                <MarginTop onClick={() => props.toggleAllocateMenu()}>
                  close
                </MarginTop>
              </Margin>
            </CloseButton>
          </InfoContainer>
          <CardsContainer>
            {props.coders.map((c,idx) => {
              if (props.selectedCoders.includes(c.userId)) {
                return (
                  <CardBorder key={idx} border={true}>
                    <Margin>
                      <MarginTop>
                        <CardContainer>
                          <CardInfo>
                            <Remove onClick={()=> removeCard(c.userId)}>-</Remove>
                            <ContentP3Bold>{c.name}</ContentP3Bold>
                            <Form>
                              <Input
                                type="text"
                                name={c.userId.toString()}
                                placeholder="0"
                                value={allocations[idx]}
                                onChange={(e) => handleChange(e, idx)}
                              />
                            </Form>
                          </CardInfo>
                        </CardContainer>
                      </MarginTop>
                    </Margin>
                  </CardBorder>
                );
              }
            })}
          </CardsContainer>
          <CardBorder>
            <Margin>
              <MarginTop>
                <RemoveAll onClick={() => props.setSelectedCoders([])}>
                  Remove all selection
                </RemoveAll>
              </MarginTop>
            </Margin>
          </CardBorder>
          <Margin>
            <ButtonsContainer>
              <Button
                action={true}
                style={{
                  backgroundColor: "var(--color-orange)",
                  color: "var(--font-color)",
                }}
              >
                allocate
              </Button>
              <Button action={false} onClick={props.toggleAllocateMenu}>
                cancel
              </Button>
            </ButtonsContainer>
          </Margin>
        </PopupContainer>
      </MarginTop>
    </Container>
  );
};
const Rise = keyframes`
from {
    transform:translateY(100vh);
}
to{
    transform:translateY(0);
}
`;
const Container = styled.div`
  position: sticky;
  bottom: 0;
  top: 20%;
  background-color: var(--color-white);
  border-radius: var(--padding-p6);
  width: 100vw;
  box-shadow: var(--shadow-s2);
  z-index: 200 !important;
  animation: ${Rise} 0.2s;
  justify-self:end;
  overflow-y:scroll;
  @media (min-width: 768px) {
    max-width:450px;
    padding-top: var(--padding-p4);
   }
   
   @media (min-width: 1024px) {
     max-width:650px;
     padding-top: var(--padding-p4);
   }
`;

const PopupContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--padding-p4);
`;
const InfoContainer = styled.div`
  grid-row: 1/2;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: var(--padding-p2);
`;

const CloseButton = styled.div`
  position: absolute;
  right: 0;
  color: var(--font-color-blue);

  @media (min-width: 768px) {
    font-size: var(--font-size-p4);
   }
   
   @media (min-width: 1024px) {
    font-size: var(--font-size-p4);
   }
`;
const MarginTop = styled.div`
  padding: var(--padding-p3) 0 var(--padding-p3) 0;
  display: grid;
  grid-row-gap: var(--padding-p1);
  background-color: var(--color-white);
`;
const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: var(--padding-p2);

  @media (min-width: 768px) {
    overflow-y: hidden;
   }
   
   @media (min-width: 1024px) {
    overflow-y: hidden;
   }
`;
const CardContainer = styled.div`
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
`;

const CardInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: var(--padding-p4);
`;

const Remove = styled.div`
  grid-column: 1/2;
  color: var(--font-color-red);
  border-radius: var(--padding-p4);
  border: solid 1px var(--font-color-red);
  width: var(--padding-p4);
  height: var(--padding-p4);
  text-align: center;
  align-items: center;
  display: grid;
`;

const Form = styled.form``;

const Input = styled.input``;

const RemoveAll = styled.div`
  display: grid;
  color: var(--font-color-red);
  justify-items: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: grid;
  row-gap: var(--padding-p4);
`;

export default AllocationCard;
