import {
  Avatar,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

type City = {
  name: string;
  Country: string;
  countryFlag: string;
  cityImage: string;
};

interface PanelCitiesProps {
  cities: City[];
}
export default function PanelCities({ cities }: PanelCitiesProps) {
  return (
    <Box
      ml={["4", "8", "16", "32"]}
      mr={["4", "8", "16", "32"]}
      mt="8"
      alignSelf="center"
    >
      <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="medium">
        Cidades +100
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={8} paddingTop="8">
        {cities &&
          cities.map((city) => (
            <Box
              w="256px"
              h="279px"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={city.cityImage} h="173px" />
              <Flex p="6" alignItems="center">
                <Box>
                  <Heading fontSize="xl" fontWeight="semibold" mb="4">
                    {city.name}
                  </Heading>
                  <Text>{city.Country}</Text>
                </Box>
                <Spacer />
                <Avatar bg="teal.500" size="sm" src={city.countryFlag} />
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}
