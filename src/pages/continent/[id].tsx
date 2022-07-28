import { Box, Flex, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

import InfoCard from "../../components/Continents/InfoCard";
import PanelCities from "../../components/Continents/PanelCities";
import Header from "../../components/Header";

import { api } from "../../services/api";

interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  qtdLanguages: number;
  qtdCountries: number;
  topCities: [];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | WorldTrip</title>
      </Head>
      <Flex w="100vw" direction="column">
        <Header />

        <Box h={[150, 300, 500]} bgImage="/images/europe.png" bgSize="cover">
          <Text
            ml={["4", "8", "16", "32"]}
            color="gray.50"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="semibold"
            mt={[100, 200, 370]}
          >
            {continent.name}
          </Text>
        </Box>

        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={12}
          mt="12"
          ml={["4", "8", "16", "32"]}
          mr={["4", "8", "16", "32"]}
        >
          <Box>
            <Text textAlign="justify">{continent.fullDescription}</Text>
          </Box>
          <Flex w="100%" alignItems="center">
            <InfoCard value={continent.qtdCountries} description="países" />
            <Spacer />
            <InfoCard value={continent.qtdLanguages} description="línguas" />
            <Spacer />
            <InfoCard
              value={continent.topCities?.length}
              description="cidades +100"
              info="Aqui"
            />
          </Flex>
        </SimpleGrid>

        <PanelCities cities={continent.topCities} />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await api.get<Continent>(`continents/${id}`);

  return {
    props: {
      continent: response.data,
    },
  };
};
