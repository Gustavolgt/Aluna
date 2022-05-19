import {
  Box, Badge, Button, Flex, Image, useDisclosure, Modal, Text,
  ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';
import { useAxios } from '../../hooks/useAxios';

const card = ({id}) => {
  const { data } = useAxios(`recipe/${id}`);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" borderColor="#e9e9e9" textAlign='center'>
        <Text py={4} fontWeight={500} fontSize={24}>{data?.name}</Text>
        
         <Image src={data?.image} alt={data?.name} width={360} height={360} />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="red">
              Nova Aula
            </Badge>
          </Box>
          <Flex
            justifyContent="space-between"
          >
            <Box
              mt={2}
              fontWeight="semibold"
              fontSize={12}
              lineHeight="tight"
              isTruncated
              color="#000"
            >
              {data?.title}
            </Box>
            <Button bgColor="green.700" color='white' _hover={{bgColor:'orange'}} fontWeight={500} px={8} onClick={onOpen}>Ver Aula</Button>
          </Flex>
        </Box>

      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" flexDirection="column">
            { id > 10 && <Image src={data?.image} alt={data?.name} width={200} height={200} /> }
              <Text dangerouslySetInnerHTML={{ __html: data?.body }} />
            </Flex>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default card;
