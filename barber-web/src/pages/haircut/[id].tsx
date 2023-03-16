import Head from "next/head";
import {
  Flex,
  Text,
  Heading,
  Button,
  useMediaQuery,
  Link,
  Input,
  Stack,
  Switch,
} from "@chakra-ui/react";

import { Sidebar } from "../../components/sidebar";
import { FiChevronLeft } from "react-icons/fi";

export default function EditHaircut() {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <Head>
        <title>Edite modelo de corte</title>
      </Head>
      <Sidebar>
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Flex
            direction={isMobile ? "column" : "row"}
            w="100%"
            alignItems={isMobile ? "flex-start" : "center"}
            justifyContent="flex-start"
            mb={isMobile ? 4 : 0}
          >
            <Link href="/haircuts">
              <Button
                mr={3}
                p={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FiChevronLeft size={24} color="#fff" />
                Voltar
              </Button>
            </Link>
            <Heading fontSize={isMobile ? "22px" : "3xl"} color="white">
              Editar corte
            </Heading>
          </Flex>

          <Flex
            mt={4}
            maxW="700px"
            pt={8}
            pb={8}
            w="100%"
            bg="barber.400"
            direction="column"
            align="center"
            justify="center"
          >
            <Heading fontSize={isMobile ? "22px" : "3xl"} mb={4}>
              Editar corte
            </Heading>
            <Flex w="85%" direction="column">
              <Input
                placeholder="Nome do corte"
                bg="gray.900"
                mb={3}
                size="lg"
                type="text"
                w="100%"
              />
              <Input
                placeholder="Valor do seu corte"
                bg="gray.900"
                mb={3}
                size="lg"
                type="number"
                w="100%"
              />

              <Stack mb={6} align="center" direction="row">
                <Text fontWeight="bold">Desativar corte</Text>
                <Switch size="lg" colorScheme="red" />
              </Stack>

              <Button
                mb={6}
                w="100%"
                bg="button.cta"
                color="gray.900"
                _hover={{ bg: "#ffb13e" }}
              >
                Salvar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Sidebar>
    </>
  );
}
