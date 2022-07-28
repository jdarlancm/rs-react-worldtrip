import {
  Box,
  Flex,
  SimpleGrid,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import TravelType from "./TravelType";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w="100vw" p={["4", "6", "8"]} mt="16">
      <SimpleGrid
        ml={[0, 0, 0, 140]}
        mr={[0, 0, 0, 140]}
        columns={[2, 3, 5]}
        spacing={10}
      >
        <TravelType title="Vida Noturna" icon="/images/cocktail.png" />
        <TravelType title="Praia" icon="/images/surf.png" />
        <TravelType title="Moderno" icon="/images/building.png" />
        <TravelType title="Clássico" icon="/images/museum.png" />
        <TravelType title="e mais..." icon="/images/earth.png" />
      </SimpleGrid>
    </Box>
  );
}
