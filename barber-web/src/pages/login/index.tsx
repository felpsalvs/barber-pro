import Head from "next/head";
import Image from "next/image";
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
              width={200}
              quality={100}
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

          <Center mt={2}>
            <Link href="/register">
              <Text cursor='pointer'>
                Ainda não possui conta? <strong>Cadastre-se</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
