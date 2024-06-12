import React, { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [register] = useRegisterMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await register({
          variables: {
            email,
            password,
          },
        });
        navigate("/");
      }}
    >
      <div>
        <div>
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
