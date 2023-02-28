
import { Sidebar } from "../../components/sidebar";

export default function Profile(){
  return(
    <>
    <Head>
      <title>Minha conta - BarberPRO</title>
    </Head>
    <Sidebar>
      <Flex direction='column' alignItems='flex-start' justifyContent='flex-start'>

        <Flex w='100%' direction='row' alignItems='center' justifyContent='flex-start'>
          <Heading fontSize='3x1' mt={4} mb={4} mr={4} color='orange.900'>Minha conta</Heading>
        </Flex>

        <Flex pt={8} pb={8} background='barber.400' maxW='700px' w='100%' direction='column' alignItems='center' justifyContent='center'>
          <Flex direction='column' w='85%'>
            
          </Flex>
        </Flex>
      </Flex>
    </Sidebar>
    </>
  )
}
