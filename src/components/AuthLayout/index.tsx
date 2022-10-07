// External Libraries
import React, { useState } from "react";

// Components
import AuthInput from "../../components/AuthInput";

// Assets
import { WarningIcon } from "../../styles/icons";

// Hooks
import useAuth from "../../data/hook/useAuth";

// Stylization
import {
  Container,
  Content,
  Title,
  Error,
  Button,
  ChangeModeText,
  Link,
} from "./styles";

const AuthLayout: React.FC = () => {
  const { register, login, loginGoogle } = useAuth();

  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const source = "https://source.unsplash.com/random";

  function showError(msg, sec = 5) {
    setError(msg);
    setTimeout(() => setError(null), sec * 1000);
  }

  async function submit() {
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (e) {
      showError(e?.message ?? "Unexpected Error");
    }
  }

  return (
    <Container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={source} alt="authentication page image" />
      <Content>
        <Title>
          {mode === "login" ? "Login with your account" : "Register in the app"}
        </Title>

        {error && (
          <Error>
            {WarningIcon}
            <span>{error}</span>
          </Error>
        )}

        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChangeValue={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChangeValue={setPassword}
          required
        />

        <Button onClick={submit}>
          {mode === "login" ? "Login" : "Register"}
        </Button>

        <hr />

        <Button google onClick={loginGoogle}>
          Login with Google
        </Button>

        {mode === "login" ? (
          <ChangeModeText>
            Novo por aqui?
            <Link onClick={() => setMode("register")}>
              Crie uma conta gratuitamente
            </Link>
          </ChangeModeText>
        ) : (
          <ChangeModeText>
            Já faz parte da nossa comunidade?
            <Link onClick={() => setMode("login")}>
              Entre com suas credenciais
            </Link>
          </ChangeModeText>
        )}
      </Content>
    </Container>
  );
};

export default AuthLayout;
