import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../../context/user/useAuth";
import { authApi } from "../../../apis/config";
import { Margin } from "../../../components/Layout";
import { Loading } from "../../../components/loading/Loading";
import {
  Button,
  Container,
  ContentContainer,
  ContentP3,
  ContentP4,
  Form,
  Input,
  InputContainer,
  Label,
  ReturnButton,
  ReturnContainer,
  ToggleButton,
  ToggleButtonBackground,
  ToggleButtonCircle,
  Trouble,
} from "../../../components/credentials/components";
import { useHistory } from "react-router";

interface ICredentials {
  email: string;
  password: string;
}

export default function Login() {
  const { user, loading, error, login, signUp, logout } = useAuth();
  const [remember, setRemember] = useState(false);
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });

  const history = useHistory();
  // const { user, setUser } = useUser();
  const handleInput = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
    // const res = await authApi.post("/ping");
    // console.log(res);
  };

  const handleToggle = () => {
    setRemember((c) => !c);
  };
  return (
    <Margin>
      {loading ? (
        <Loading />
      ) : (
        <Form>
          <Container>
            <ReturnContainer>
              <ReturnButton>back</ReturnButton>
            </ReturnContainer>
            <ContentContainer>
              <ContentP4>Welcome Back!</ContentP4>
              <ContentP3>Enter credentials to continue</ContentP3>
            </ContentContainer>
            <InputContainer>
              <Label>
                email
                <Input
                  type="text"
                  name="email"
                  value={credentials.email}
                  placeholder="email"
                  onChange={handleInput}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Label>
                password
                <Input
                  type="password"
                  name="password"
                  value={credentials.password}
                  placeholder="password"
                  onChange={handleInput}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <RememberMe>
                <ContentP3>remember me</ContentP3>
                <ToggleButton onClick={handleToggle}>
                  <ToggleButtonBackground>
                    <ToggleButtonCircle active={remember} />
                  </ToggleButtonBackground>
                </ToggleButton>
              </RememberMe>
            </InputContainer>
            <InputContainer>
              <Button onClick={handleSubmit} action={true}>
                LOGIN
              </Button>
            </InputContainer>
            <InputContainer>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/signup");
                }}
                action={false}
              >
                DON'T HAVE AN ACCOUNT?
              </Button>
            </InputContainer>
            <InputContainer>
              <Trouble
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/resetform");
                }}
              >
                Trouble Logging In?
              </Trouble>
            </InputContainer>
          </Container>
        </Form>
      )}
    </Margin>
  );
}

const RememberMe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: var(--font-size-p2);
`;
