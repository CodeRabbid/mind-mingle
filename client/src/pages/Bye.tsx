import React from "react";
import { useByeQuery } from "../generated/graphql";

const Bye: React.FC = () => {
  const { data, error, loading } = useByeQuery();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>err</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }
  console.log(data);

  return <div>{}</div>;
};

export default Bye;
