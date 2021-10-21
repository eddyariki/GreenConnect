import React, { useState } from "react";
import { useHistory } from "react-router";
import styled, { css, keyframes } from "styled-components";
import useAuth from "../context/user/useAuth";
import { Margin } from "./Layout";
import LogoSrc from "../assets/logo.png";
export default function Header() {
  const { user, loading, error, login, signUp, logout } = useAuth();
  const [menu, setMenu] = useState<boolean>(false);
  const history = useHistory();
  const handleClick = () => {
    setMenu((c) => !c);
  };
  return (
    <Container>
      <Margin style={{ alignSelf: "center" }}>
        <SubContainer>
          <LogoContainer>
            <Logo>
              <LogoImage src={LogoSrc}></LogoImage>
            </Logo>
          </LogoContainer>
          <MenuContainer>
            {user ? <Logout>logout</Logout> : null}
            <HamburgerContainer onClick={handleClick}>
              <Hamburger />
              <Hamburger />
              <Hamburger />
            </HamburgerContainer>
          </MenuContainer>
        </SubContainer>
        {menu ? (
          <DropDownMenuContainer onClick={handleClick}>
            <LinkContainer>
              <CustomLink onClick={() => history.push("/")}>home</CustomLink>
              <CustomLink onClick={() => history.push("/coders")}>
                modelers
              </CustomLink>
              <CustomLink onClick={() => history.push("/account")}>
                account
              </CustomLink>
              <CustomLink onClick={() => history.push("/portfolio")}>
                portfolio
              </CustomLink>
              <CustomLink onClick={() => history.push("/analysis")}>
                analysis
              </CustomLink>
            </LinkContainer>
          </DropDownMenuContainer>
        ) : null}
      </Margin>
    </Container>
  );
}

const Container = styled.div`
  height: var(--padding-p7);
  background-color: white;
  box-shadow: var(--shadow-s2);
  position: sticky;
  top: 0;
  width: 100vw;
  margin: 0 0 var(--padding-p2) 0;
  display: grid;
`;
const SubContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: center;
  height: max-content;
`;
const LogoContainer = styled.div`
  align-self: center;
  grid-column: 1/2;
  justify-items: start;
  align-items: center;
`;

const Logo = styled.div`
  height: var(--padding-p7);
`;

const LogoImage = styled.img`
  height: var(--padding-p7);
`;

const MenuContainer = styled.div`
  grid-column: 3/4;
  justify-self: end;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: var(--padding-p2);
`;
const Logout = styled.div`
  text-decoration: underline;
  grid-column: 1/2;
  align-self: center;
`;
const HamburgerContainer = styled.div`
  grid-column: 2/4;
  display: grid;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  row-gap: var(--padding-p0);
`;

const Hamburger = styled.div`
  background: var(--color-black-lighter);
  border-radius: var(--padding-p0);
  height: var(--padding-p1);
  width: var(--padding-p5);
`;
const DropDownAimation = keyframes`
from{
    opacity: 0;
}
to {
    opacity:100%;
}
`;
const DropDownMenuContainer = styled.div`
  animation: ${DropDownAimation} 0.2s;
  position: fixed;
  background-color: var(--color-black-light);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  z-index: 30000;
`;

const LinkContainer = styled.div`
  display: grid;
  justify-items: center;
  height: 60vh;
`;
const CustomLink = styled.div`
  color: var(--font-color-white);
  font-size: var(--font-size-p4);
  font-weight: bold;
`;
