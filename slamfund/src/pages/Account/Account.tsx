import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { authApi } from "../../apis/config";
import useAuth from "../../context/user/useAuth";
import { CardBorder, Margin } from "../../components/Layout";
import { CgProfile } from "react-icons/cg";
import { RiBillLine } from "react-icons/ri";
import { ContentP4 } from "../../components/credentials/components";
interface IUserInfo {
  username: string;
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  postalCode: string;
  country: string;
  address: string;
}

export default function Account() {
  const { user, loading, error, login, signUp, logout } = useAuth();
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    username: "login required",
    firstName: "login required",
    lastName: "login required",
    birthday: "login required",
    email: "login required",
    postalCode: "login required",
    country: "login required",
    address: "login required",
  });
  const history = useHistory();
  useEffect(() => {
    const getUser = async () => {
      if (user) {
        const res: AxiosResponse<IUserInfo> = await authApi.get("/user", {
          params: { userId: user ? user.userId : -1 },
        });
        setUserInfo(res.data);
      } else {
        history.push("/login");
      }
    };
    getUser();
  }, []);
  return (
    <Container>
      <Margin>
        <ContentP4>Account</ContentP4>
      </Margin>
      <CardBorder border={true}>
        <Margin>
          <Card>
            <TitleContainer>
              <Icon>
                <CgProfile size={50}></CgProfile>
              </Icon>
              <Title>Basic Information</Title>
              <Edit onClick={() => history.push("/account/edit")}>edit</Edit>
            </TitleContainer>
            <InfoContainerCard title={"username"} text={userInfo.username} />
            <InfoContainerCard
              title={"name"}
              text={userInfo.firstName + " " + userInfo.lastName}
            />
            <InfoContainerCard title={"birthday"} text={userInfo.birthday} />
            <InfoContainerCard
              title={"email"}
              text={
                userInfo.email.length > 16
                  ? userInfo.email.slice(0, 15) +
                    " " +
                    userInfo.email.slice(15, userInfo.email.length)
                  : userInfo.email
              }
            />
          </Card>
        </Margin>
      </CardBorder>
      <CardBorder border={true}>
        <Margin>
          <Card>
            <TitleContainer>
              <Icon>
                <RiBillLine size={50}></RiBillLine>
              </Icon>
              <Title>Billing Address</Title>
              <Edit>edit</Edit>
            </TitleContainer>
            <InfoContainerCard
              title={"name"}
              text={userInfo.firstName + " " + userInfo.lastName}
            />
            <InfoContainerCard
              title={"postal code"}
              text={userInfo.postalCode}
            />
            <InfoContainerCard title={"country"} text={userInfo.country} />
            <InfoContainerCard title={"address"} text={userInfo.address} />
          </Card>
        </Margin>
      </CardBorder>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: var(--padding-p2);
  background-color: var(--color-background);
`;

const Card = styled.div`
  padding: var(--padding-p4) 0 var(--padding-p4) 0;
  min-height: 35vh;
  background-color: var(--color-white);
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: var(--padding-p4);
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr auto;
  align-items: center;
`;

const Title = styled.div`
  font-size: var(--font-size-p4);
  font-weight: bold;
`;

const Icon = styled.div`
  height: var(--font-size-p6);
  width: var(--font-size-p6);
  background-color: transparent;
`;
const Edit = styled.div`
  font-size: var(--font-size-p4);
  color: var(--font-color-blue);
  font-weight: bold;
  text-decoration: underline;
  grid-column: 2/3;
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--padding-p0);
`;

const InfoLabel = styled.div`
  grid-row: 1/2;
  font-size: var(--font-size-p3);
`;
const Info = styled.div`
  grid-row: 2/3;
  font-size: var(--font-size-p4);
  font-weight: bold;
`;

const InfoContainerCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <InfoContainer>
      <InfoLabel>{title}</InfoLabel>
      <Info>{text}</Info>
    </InfoContainer>
  );
};
