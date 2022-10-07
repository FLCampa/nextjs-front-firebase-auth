// External Libraries
import React from "react";

// Stylization
import { Container, Input } from "./styles";

// Interface
interface AuthInputProps {
  label: string;
  value: any;
  required: boolean;
  type?: "text" | "email" | "password";
  onChangeValue: (newValue: any) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  value,
  required,
  type,
  onChangeValue,
}) => {
  return (
    <Container>
      <label>{label}</label>
      <Input
        type={type ?? "text"}
        value={value}
        onChange={(event) => onChangeValue?.(event.target.value)}
        required={required}
      />
    </Container>
  );
};

export default AuthInput;
