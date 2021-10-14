import styled from "styled-components";

export const Margin = styled.div`
  padding: 0 var(--padding-p4) 0 var(--padding-p4);
  height: auto;
  width: auto;
  background-color: var(--color-white);
`;

export const CardBorder = styled.div`
  border-top: solid var(--color-black-lighter) 1px;
  border-bottom: solid var(--color-black-lighter) 1px;
  border-left: none;
  border-right: none;
  max-width: 100vw;
`;

export const Spacer = styled.div`
  max-width: 100vw;
  height: var(--padding-p4);
`;
