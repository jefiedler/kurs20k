import React from "react";

import LoginScreen from "../components/Login/LoginScreen";
import Footer from "../components/Footer/Footer";
import styled from "@emotion/styled";

function LoginPage() {
  return (
    <Container>
      <LoginComponent />
      <Footer />
    </Container>
  );
}

export default LoginPage;

//PropTyps

// Styling

const Container = styled.div`
  display: grid;
  background-color: #f2f2f2;
`;
const LoginComponent = styled(LoginScreen)`
  width: 898px;
  height: 501px;
`;
