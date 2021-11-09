import styled, { css, keyframes } from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export const Container = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: var(--padding-p2);
  grid-row-gap: var(--padding-p4);
  padding-top: var(--padding-p4);
  margin-bottom: var(--padding-p4);

  @media (min-width: 768px) {
    min-width: 250px;
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    min-width: 250px;
    max-width: 900px;
  }
`;

export const ReturnContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1 / end;
  display: grid;
  justify-items: start;
  align-items: end;
`;
export const Return = styled.div`
  height: 24px;
  width: 24px;
  color: var(--font-color-blue);
  &:hover {
    cursor: pointer;
  }
`;

export const ReturnButton = ({ children }: { children: React.ReactNode }) => {
  const history = useHistory();
  return <Return onClick={() => history.goBack()}>{children}</Return>;
};

export const ContentContainer = styled.div`
  display: grid;
  grid-column: 1 / end;
  grid-template-rows: 1fr 1fr;
  align-items: end;
`;

export const ContentP4 = styled.div`
  font-size: var(--font-size-p4);
  font-weight: bold;
`;
export const ContentP4Light = styled.div`
  font-size: var(--font-size-p4);
`;
export const ContentP3 = styled.div`
  font-size: var(--font-size-p3);
  color: var(--font-color-light);
`;
export const ContentP3Bold = styled.div`
  font-size: var(--font-size-p3);
  color: var(--font-color-light);
  font-weight: bold;
`;
export const ContentP3Light = styled.div`
  font-size: var(--font-size-p2);
  font-weight: lighter;
  color: var(--font-color-lightest);
`;

export const ToggleButton = styled.div`
  justify-self: end;
`;

export const ToggleButtonBackground = styled.div`
  height: var(--font-size-p4);
  width: var(--font-size-p6);
  background-color: var(--color-black-lighter);
  border-radius: var(--font-size-p4);
  display: grid;
`;
type ToggleProps = {
  active?: boolean;
};

export const ToggleButtonCircle = styled.div<ToggleProps>`
  height: var(--font-size-p4);
  width: var(--font-size-p4);
  background-color: var(--color-blue);
  border-radius: var(--font-size-p4);
  justify-self: ${(props) => (props?.active ? "end" : "start")};
  opacity: ${(props) => (props?.active ? "100%" : "50%")};
`;

export const Form = styled.form`
  @media (min-width: 768px) {
    display: grid;
    justify-items: center;
  }

  @media (min-width: 1024px) {
    display: grid;
    justify-items: center;
  }
`;

export const InputContainer = styled.div`
  grid-column: 1 / end;
  align-self: end;

  @media (min-width: 768px) {
    min-width: 40vw;
    max-width: 500px;
    display: grid;
  }

  @media (min-width: 1024px) {
    min-width: 40vw;
    max-width: 500px;
    display: grid;
  }
`;
export const Label = styled.label`
  color: var(--font-color-lighter);
  display: grid;
  row-gap: var(--padding-p2);
  grid-template-rows: 1fr 1fr;
  align-items: end;
  font-size: var(--font-size-p2);
  grid-template-columns: 1fr 1fr;
`;

export const Input = styled.input`
  grid-column: 1 / end;
  color: var(--font-color-normal);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid var(--color-black-light) 1px;
  font-size: var(--font-size-p3);
  &:focus {
    text-decoration: none;
    outline: none;
  }
`;

type ButtonProps = {
  action?: boolean;
};
export const Button = styled.button<ButtonProps>`
  width: 100%;
  align-self: center;
  border: none;
  font-size: var(--font-size-p3);
  padding: var(--padding-p3);
  border-radius: var(--padding-p4);
  text-align: center;
  background-color: ${(props) =>
    props?.action ? "var(--color-blue)" : "var(--color-black-lighter)"};
  color: ${(props) =>
    props?.action ? "var(--font-color-white)" : "var(--font-color-light)"};

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    min-width: 150px
    max-width: 200px;
    justify-self:center;
  }
  
  @media (min-width: 1024px) {
    min-width: 250px;
    max-width: 400px;
    justify-self:center;
  }
`;

export const Trouble = styled.div`
  text-decoration: underline;
  color: var(--font-color-light);
  text-align: center;
  font-size: var(--font-size-p3);
`;

export const shake = keyframes`
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;
type ErrorProps = {
  activate?: boolean;
};
export const ErrorMessage = styled.div<ErrorProps>`
  color: var(--font-color-red);
  font-size: var(--font-size-p2);
  animation: ${(props) =>
    props.activate
      ? css`
          ${shake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
        `
      : "none"};
`;
