import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { Button, Center, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleRegister() {
    console.log(email, password, name);
  }
  
  return (
    <>
      <Head>
        <title>Crie sua conta</title>
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
            type="text"
            placeholder="Nome da barbearia"
            background="barber.400"
            variant="filled"
            size="lg"
            mb={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="example@example.com"
            background="barber.400"
            variant="filled"
            size="lg"
            mb={3}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="*********"
            background="barber.400"
            variant="filled"
            size="lg"
            mb={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            background="button.cta"
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>

          <Center mt={2}>
            <Link href="/login">
              <Text cursor="pointer">
                Já possui uma conta? <strong>Entre</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
