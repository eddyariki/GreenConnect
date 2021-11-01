import styled, { keyframes } from "styled-components";

const load8 = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

`;

export const LoadingDiv = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid var(--color-black-light);
  border-right: 1.1em solid var(--color-black-light);
  border-bottom: 1.1em solid var(--color-black-light);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1.1s infinite linear;
  animation: ${load8} 1.1s infinite linear;
`;

export const Loading = () => {
  return (
    <LoadingScreen>
      <LoadingDiv />
    </LoadingScreen>
  );
};

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-black-lightest);
  display: grid;
  justify-items: center;
  align-items: center;
`;
