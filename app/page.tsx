"use client"
import { gql, useQuery } from "@apollo/client";

const HELLO = gql`
query Query {
  hello
}
`;

export default function Home() {
  const { data } = useQuery(HELLO, {
    fetchPolicy: "network-only",
  });
  console.log("data ", data)

  return (
    <div className="flex flex-col w-full min-h-screen p-20 items-center justify-center">hola </div>
  );
}
