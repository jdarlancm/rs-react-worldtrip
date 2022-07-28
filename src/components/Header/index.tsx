import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex w="100vw" h={[50, 100]} align="center" justify="center" p="4">
      <Image src="/images/logo.svg" alt="Logo" w={["81px", "184px"]} />
    </Flex>
  );
}
