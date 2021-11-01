import styled from "styled-components";

export const Margin = styled.div`
  padding: 0 var(--padding-p4) 0 var(--padding-p4);
  height: auto;
  width: auto;
  /* background-color: var(--color-white); */
`;
type CardBorderOptions = {
  stretch?: boolean;
  border?: boolean;
}
export const CardBorder = styled.div<CardBorderOptions>`
  border-top: solid var(--color-black-lighter) 1px;
  border-bottom: solid var(--color-black-lighter) 1px;
  border-left: none;
  border-right: none;
  max-width: 100vw;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    min-width:${({stretch})=>stretch? '100vw' : '450px'};
    border-left: ${({border})=>border? 'solid var(--color-black-lighter) 1px;' : 'none'};
    border-right: ${({border})=>border? 'solid var(--color-black-lighter) 1px;' : 'none'};
    border-radius:${({border})=>border? '5px' : 'none'};
    justify-self:center;
  }
  
  @media (min-width: 1024px) {
    min-width:${({stretch})=>stretch? '100vw' : '550px'};
    border-left: ${({border})=>border? 'solid var(--color-black-lighter) 1px;' : 'none'};
  border-right: ${({border})=>border? 'solid var(--color-black-lighter) 1px;' : 'none'};
  border-radius:${({border})=>border? '5px' : 'none'};
    justify-self:center;
  }
`;

export const Spacer = styled.div`
  max-width: 100vw;
  height: var(--padding-p4);
`;
