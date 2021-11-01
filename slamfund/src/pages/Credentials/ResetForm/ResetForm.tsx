import React, { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../context/user/useAuth";
import {
  Button,
  Container,
  ContentContainer,
  ContentP3,
  ContentP3Light,
  ContentP4,
  Form,
  Input,
  InputContainer,
  Label,
  ReturnButton,
  ReturnContainer,
} from "../../../components/credentials/components";
import { Margin } from "../../../components/Layout";
import { Loading } from "../../../components/loading/Loading";

interface ISignUpCredentials {
  email: string;
}

export default function ResetForm() {
  const history = useHistory();
  const [credentials, setCredentials] = useState<ISignUpCredentials>({
    email: "",
  });
  const { user, loading, error, login, signUp, logout } = useAuth();

  const handleInput = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    console.log("reset function");
    history.push("/reset");
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
              <ContentP4>Reset Password </ContentP4>
              <ContentP3>Reset password with email</ContentP3>
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
