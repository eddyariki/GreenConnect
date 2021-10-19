import React from "react";
import styled from "styled-components";
import { authApi } from "../../apis/config";
import { Margin } from "../../layout/Layout";

export default function Home() {
  const handleClick = async () => {
    const res = await authApi.post("ping");
  };
  return (
    <Margin>
      <Container onClick={handleClick}>tets</Container>
    </Margin>
  );
}

const Container = styled.div`
  height: 150vh;
`;
