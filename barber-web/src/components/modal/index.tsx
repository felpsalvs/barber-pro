import { FiUser, FiScissors } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { ScheduleItem } from "@/pages/dashboard";
import {
  Flex,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface ModalInfoProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: ScheduleItem;
  finishService: () => Promise<void>;
}

export function ModalInfo({
  isOpen,
  onOpen,
  onClose,
  data,
  finishService,
}: ModalInfoProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="barber.400">
        <ModalHeader>Próximo</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex align="center" mb={3}>
            <FiUser size={28} color="#ffb13e" />
            <Text ml={3} fontSize="2xl" fontWeight="bold" color="white">
              {data?.customer}
            </Text>
          </Flex>
          <Flex align="center" mb={3}>
            <FiScissors size={28} color="#ffb" />
            <Text ml={3} fontSize="large" fontWeight="bold" color="white">
              {data?.haircut?.name}
            </Text>
          </Flex>
          <Flex align="center" mb={3}>
            <FaMoneyBillAlt size={28} color="#46EF75" />
            <Text ml={3} fontSize="large" fontWeight="bold" color="white">
              R$ {data?.haircut?.price}
            </Text>
          </Flex>

          <ModalFooter>
            <Button
              bg="button.cta"
              _hover={{ bg: "#ffb13e" }}
              color="#fff"
              mr={3}
              onClick={() => finishService()}
            >
              Finalizar Serviço
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
