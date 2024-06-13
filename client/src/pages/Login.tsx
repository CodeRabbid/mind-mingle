import React, { useState } from "react";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../accessToken";

const Login: React.FC = () => {
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await login({
          variables: {
            email,
            password,
          },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                me: data.login.user,
              },
            });
          },
        });
        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }

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
        <button type="submit">Login </button>
      </div>
    </form>
  );
};

export default Login;
