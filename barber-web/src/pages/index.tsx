import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>BarberPRO - O sistema da barbeiro</title>
      </Head>
      <Flex background="barber.900">
        <Text>Home</Text>
      </Flex>
    </>
  );
}
