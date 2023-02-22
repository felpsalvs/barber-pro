import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Barber</title>
      </Head>
      <Flex as="main" w="100vw" h="100vh" align="center" justify="center">
        <Text fontSize="5xl" fontWeight="bold">
          Dashboard
        </Text>
      </Flex>
    </>
  );
}
