import { Image, Text, VStack } from "@chakra-ui/react";

interface TravelTypeProps {
  title: string;
  icon: string;
}

export default function TravelType({ title, icon }: TravelTypeProps) {
  return (
    <VStack w="162px" align="center" justifyContent="center">
      <Image src={icon} alt={title} w={["46px", "64px", "85px"]} />
      <Text fontSize={["xl", "xl", "2xl"]} fontWeight="semibold">
        {title}
      </Text>
    </VStack>
  );
}
