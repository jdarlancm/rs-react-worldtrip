import { BsInfoCircle } from "react-icons/bs";
import { Box, Center, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";

interface InfoCardProps {
  value: number;
  description: string;
  info?: string;
}

export default function InfoCard({ value, description, info }: InfoCardProps) {
  return (
    <Center w="200px" h="99px" flexDirection="column">
      <Heading
        fontSize={["3xl", "4xl", "5xl"]}
        color="yellow.500"
        fontWeight="semibold"
      >
        {value}
      </Heading>
      <HStack>
        <Text
          fontSize={["md", "lg", "xl"]}
          color="gray.600"
          fontWeight="semibold"
        >
          {description}
        </Text>
        {info && (
          <Tooltip
            hasArrow
            label="Mais informações"
            bg="gray.300"
            color="black"
            fontSize="md"
          >
            <BsInfoCircle />
          </Tooltip>
        )}
      </HStack>
    </Center>
  );
}
