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
  InputContainer,
  ReturnButton,
  ReturnContainer,
} from "../../../layout/credentials/components";
import { Margin } from "../../../layout/Layout";
import { Loading } from "../../../layout/loading/Loading";

interface ISignUpCredentials {
  email: string;
}

export default function SignedUp() {
  const history = useHistory();
  const { user, loading, error, login, signUp, logout } = useAuth();

  const handleSubmit = async (e: any) => {
    console.log("reset function");
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
              <ContentP4>Welcome! </ContentP4>
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
