import React, { useState } from "react";
import { useHistory } from "react-router";
import { authApi } from "../../../apis/config";
import useAuth from "../../../context/user/useAuth";
import {
  Button,
  Container,
  ContentContainer,
  ContentP3Light,
  ContentP4,
  Form,
  Input,
  InputContainer,
  Label,
  ReturnButton,
  ReturnContainer,
  ErrorMessage,
  ContentP3,
} from "../../../layout/credentials/components";
import { Margin } from "../../../layout/Layout";
import { Loading } from "../../../layout/loading/Loading";

interface ISignUpCredentials {
  email: string;
  confirmEmail: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [credentials, setCredentials] = useState<ISignUpCredentials>({
    email: "",
    confirmEmail: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { user, loading, error, login, signUp, logout } = useAuth();
  const history = useHistory();
  const [warn, setWarn] = useState<boolean>(false);
  // const [warned, setWarned] = useState<number>(0);
  const handleInput = (e: any) => {
    if (warn) setWarn(false);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, confirmEmail, password, confirmPassword } = credentials;
    if (email === confirmEmail && password === confirmPassword) {
      signUp(credentials.email, credentials.username, credentials.password);
      const res = await authApi.post("/ping");
      console.log(res);
    } else {
      setWarn(true);
    }
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
              <ContentP4>Sign Up</ContentP4>
              <ContentP3>Enter credentials to sign up</ContentP3>
            </ContentContainer>
            <InputContainer>
              <Label>
                username
                <Input
                  type="text"
                  name="username"
                  value={credentials.username}
                  placeholder="username"
                  onChange={handleInput}
                />
              </Label>
            </InputContainer>
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
                {credentials.email !== credentials.confirmEmail ? (
                  <ErrorMessage activate={warn}>*email must match</ErrorMessage>
                ) : (
                  <>confirm email</>
                )}
                <Input
                  type="text"
                  name="confirmEmail"
                  value={credentials.confirmEmail}
                  placeholder="confirm email"
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
              <Label>
                {credentials.password !== credentials.confirmPassword ? (
                  <ErrorMessage activate={warn}>
                    *password must match
                  </ErrorMessage>
                ) : (
                  <>confirm password</>
                )}
                <Input
                  type="password"
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  placeholder="confirm password"
                  onChange={handleInput}
                />
              </Label>
            </InputContainer>
            <InputContainer>
              <Button onClick={handleSubmit} action={true}>
                SIGN UP
              </Button>
            </InputContainer>
            <InputContainer>
              <Button
                onClick={() => {
                  history.push("/login");
                }}
                action={false}
              >
                ALREADY HAVE AN ACCOUNT?
              </Button>
            </InputContainer>
          </Container>
        </Form>
      )}
    </Margin>
  );
}
