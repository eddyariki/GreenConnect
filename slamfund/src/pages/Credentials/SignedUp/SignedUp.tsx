import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { authApi } from "../../../apis/config";
import useAuth, { User } from "../../../context/user/useAuth";
import {
  Button,
  Container,
  ContentContainer,
  ContentP3,
  ContentP3Light,
  ContentP4,
  Form,
  InputContainer,
  ReturnButton,
  ReturnContainer,
} from "../../../components/credentials/components";
import { Margin } from "../../../components/Layout";
import { Loading } from "../../../components/loading/Loading";

interface ISignUpCredentials {
  email: string;
}

export default function SignedUp() {
  const history = useHistory();
  const { user, loading, error, login, signUp, logout } = useAuth();
  const [name, setName] = useState("");

  const handleSubmit = async (e: any) => {
    history.push("/");
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
              <ContentP4>Welcome, {user?.username}! </ContentP4>
              <ContentP3>Your account has been successfully created</ContentP3>
            </ContentContainer>

            <InputContainer>
              <Button onClick={handleSubmit} action={true}>
                START
              </Button>
            </InputContainer>
          </Container>
        </Form>
      )}
    </Margin>
  );
}
