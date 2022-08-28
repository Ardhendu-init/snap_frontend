import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeLayout from "../containers/home/HomeLayout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
};

export default Home;
