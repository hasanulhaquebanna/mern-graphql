import { gql } from "@apollo/client";
import { Clients } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import { client } from "./_app";

const Home: NextPage = ({ clients }: any) => {
  return (
    <div>
      <Head>
        <title>MERN With GraphQL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Clients clients={clients} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query GetClients {
          clients {
            id
            name
            email
            phone
          }
        }
      `,
    });
    return {
      props: {
        clients: data.clients,
      },
    };
  } catch (err) {}
};

export default Home;
