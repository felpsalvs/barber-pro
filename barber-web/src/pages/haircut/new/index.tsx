import { Sidebar } from "@/components/sidebar";
import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import { FiChevronLeft } from "react-icons/fi";

export default function NewHaircut() {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <Head>
        <title>BarberPRO - Novo modelo de corte</title>
      </Head>
      <Sidebar>
        <Flex
          direction={isMobile ? "column" : "row"}
          w="100%"
          align={isMobile ? "flex-start" : "center"}
          mb={isMobile ? 4 : 0}
        >
          <Link href="/haircuts">
            <Button>
              <FiChevronLeft size={24} color="white" />
              Voltar
            </Button>
          </Link>
          <Heading
            color="orange.900"
            mt={4}
            mb={4}
            mr={4}
            fontSize={isMobile ? "28px" : "3xl"}
          >
            Modelos de corte
          </Heading>
        </Flex>
        <Flex
          maxW="700px"
          bg="barber.400"
          w="100%"
          align="center"
          justify="center"
          pt={8}
          pb={8}
          direction="column"
        >
          <Heading mb={4} fontSize={isMobile ? "22px" : "3xl"} color="white">
            Cadastrar modelo
          </Heading>
          <Input
            placeholder="Nome do corte"
            size="lg"
            type="text"
            w="85%"
            bg="gray.900"
            mb={3}
          />
          <Input
            placeholder="Valor do corte ex: 34.99"
            size="lg"
            type="text"
            w="85%"
            bg="gray.900"
            mb={4}
          />

          <Button
            w="85%"
            size="lg"
            color="gray.900"
            mb={6}
            bg="button.cta"
            _hover={{ bg: "#ffb13e" }}
          >
            Cadastrar
          </Button>
        </Flex>
      </Sidebar>
    </>
  );
}
