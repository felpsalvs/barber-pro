import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/images/logo.svg";
import { Button, Center, Flex, Input, Link, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>BarberPRO - Faça login</title>
      </Head>
      <Flex
        background="barber.900"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              fill
              style={{ objectFit: "fill" }}
              alt="BarberPRO"
            />
          </Center>

          <Input
            type="email"
            placeholder="example@example.com"
            background="barber.400"
            variant="filled"
            size="lg"
            mb={3}
          />

          <Input
            type="password"
            placeholder="*********"
            background="barber.400"
            variant="filled"
            size="lg"
            mb={6}
          />

          <Button
            background="button.cta"
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
          >
            Acessar
          </Button>

          <Center>
            <Link href="/register">
              <Text cursor='pinter'>
                Ainda não possui conta? <strong>Cadastre-se</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
