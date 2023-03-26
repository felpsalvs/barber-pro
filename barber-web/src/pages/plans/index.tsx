import { Sidebar } from "@/components/sidebar";
import { Flex, Heading, useMediaQuery, Text, Button } from "@chakra-ui/react";
import Head from "next/head";

export default function Plans() {
  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <>
      <Head>
        <title>Assinaturas</title>
      </Head>
      <Sidebar>
        <Flex
          w="100%"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Heading color="white" fontSize="3xl" mt={4} mb={4} mr={4}>
            Planos
          </Heading>
        </Flex>

        <Flex
          pb={8}
          maxW="780px"
          w="100%"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Flex gap={8} w="100%" flexDirection={isMobile ? "column" : "row"}>
            <Flex
              rounded={4}
              p={2}
              flex={1}
              bg="barber.400"
              flexDirection="column"
            >
              <Heading
                textAlign="center"
                fontSize="2xl"
                mt={2}
                mb={4}
                color="gray.100"
              >
                Plano Grátis
              </Heading>

              <Text fontWeight="medium" ml={4} mb={2}>
                Registrar cortes
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Criar apenas 3 modelos de corte
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Editar dados do perfil
              </Text>
            </Flex>
            <Flex
              rounded={4}
              p={2}
              flex={1}
              bg="barber.400"
              flexDirection="column"
            >
              <Heading
                textAlign="center"
                fontSize="2xl"
                mt={2}
                mb={4}
                color="#31fb6a"
              >
                Premium
              </Heading>
              <Text fontWeight="medium" ml={4} mb={2}>
                Registrar cortes ilimitados.
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Criar modelos ilimitados.
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Editar dados do perfil.
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Editar modelos de corte.
              </Text>
              <Text fontWeight="medium" ml={4} mb={2}>
                Receber todas as atualizações.
              </Text>
              <Text
                color="#31fb6a"
                fontWeight="bold"
                fontSize="2xl"
                ml={4}
                mb={2}
              >
                R$ 9.99
              </Text>

              <Button bg="button.cta" m={2} color="white" onClick={() => {}}>
                VIRAR PREMIUM
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Sidebar>
    </>
  );
}
