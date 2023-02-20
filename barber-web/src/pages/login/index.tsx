import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { Flex, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>BarberPRO - Faça login</title>
      </Head>
      <Flex background="barber.900">
        <Text>Home</Text>
      </Flex>
    </>
  );
}
