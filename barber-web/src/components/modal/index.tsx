
import { FiUser, FiScissors } from "react-icons/fi";
import { FaMoneyBillAlt } from 'react-icons/fa'
import { ScheduleItem } from "@/pages/dashboard";
import { Flex, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface ModalInfoProps{
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: ScheduleItem;
  finishService: () => Promise<void>;
}

export function ModalInfo({ isOpen, onOpen, onClose, data, finishService }: ModalInfoProps){
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent bg='barber.400'>
        <ModalHeader>Próximo</ModalHeader>
        <ModalCloseButton/>

        <ModalBody>
          <Flex align='center' mb={3}>
            <Text>Teste</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}