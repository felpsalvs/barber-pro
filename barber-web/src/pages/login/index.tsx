import Head from "next/head";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import { Button, Center, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { canSSRGuest } from "../../utils/canSSRGuest";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === "" || password === "") {
      return;
    }
    await signIn({
      email,
      password,
    });
  }

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
            mb={6}
            background="button.cta"
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
            onClick={handleLogin}
          >
            Acessar
          </Button>

          <Center mt={2} color='gray.100'>
            <Link href="/register">
              <Text cursor="pointer">
                Ainda não possui conta? <strong>Cadastre-se</strong>
              </Text>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
