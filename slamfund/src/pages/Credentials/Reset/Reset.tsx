import React, { useState } from "react";
import { useHistory } from "react-router";
import { authApi } from "../../../apis/config";
import useAuth from "../../../context/user/useAuth";
import {
  Button,
  Container,
  ContentContainer,
  ContentP4,
  Form,
  Input,
  InputContainer,
  Label,
  ReturnButton,
  ReturnContainer,
  ErrorMessage,
  ContentP3,
} from "../../../components/credentials/components";
import { Margin } from "../../../components/Layout";
import { Loading } from "../../../components/loading/Loading";

interface ISignUpCredentials {
  password: string;
  confirmPassword: string;
}

export default function Reset() {
  const [credentials, setCredentials] = useState<ISignUpCredentials>({
    password: "",
    confirmPassword: "",
  });
  const { user, loading, error, login, signUp, logout } = useAuth();
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
    const { password, confirmPassword } = credentials;
    if (password === confirmPassword) {
      // signUp(credentials.email, credentials.username, credentials.password);
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
              <ContentP4>Reset Password</ContentP4>
              <ContentP3>Enter new password</ContentP3>
            </ContentContainer>
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
                RESET
              </Button>
            </InputContainer>
          </Container>
        </Form>
      )}
    </Margin>
  );
}
