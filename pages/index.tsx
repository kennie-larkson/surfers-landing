import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Abdulrafiu Lawal</title>
      </Head>
      <Header />
      <Banner />
      <main className=""></main>

      <footer className="flex h-24 w-full items-center justify-center border-t text-gray-500">
        <a
          className="flex items-center justify-center gap-2"
          href="https://kenniecodecamp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Abdulrafiu Lawal{" "}
        </a>
      </footer>
    </div>
  );
};

export default Home;
