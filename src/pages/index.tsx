import { Divider, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { GetStaticProps } from "next";

import Header from "../components/Header";
import ContinentSlide from "../components/Home/ContinentSlide";
import TravelTypes from "../components/Home/TravelTypes";
import { api } from "../services/api";

interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex w="100vw" direction="column">
        <Header />

        <Image
          w="100vw"
          src="/images/banner-home.png"
          alt="Banner airplane in star's sky"
        />

        <TravelTypes />

        <Divider w="90px" alignSelf="center" mt="16" borderColor="gray.600" />

        <VStack mt="16">
          <Heading fontSize={["2xl", "3xl", "4xl"]}>Vamos nessa?</Heading>
          <Heading fontSize={["2xl", "3xl", "4xl"]}>
            Então escolha seu continente
          </Heading>
        </VStack>

        <ContinentSlide continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>("continents");
  return {
    props: {
      continents: response.data,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
