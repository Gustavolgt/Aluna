/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Image from 'next/image';

import {
  Flex, Box, Text, Center, Avatar, Container,
} from '@chakra-ui/react';

const index = () => {
  const data = [
    {},
    {},
    {},
  ];
  return (
    <>
      <Head>
        <title>Mini Curso Arts Amigurumi</title>
      </Head>
      <Flex bgColor="blue.500" justifyContent="space-between" px={4} py={4}>
        <Flex>
          <Image src="/Logo.png" width={550 / 4} height={200 / 4} alt="Logo" />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">

          <Avatar w={42} height={42} />
        </Flex>
      </Flex>
      <Flex bgColor="blue.800" py={2} px={4} justifyContent="space-between">
        <Text color="#FFF" fontSize="14">Aluna: Renato Hudson</Text>
        <Text color="#FFF" fontSize="14" fontWeight="bold" color="green.200">GRÁTIS</Text>
      </Flex>
      <Container display="flex" flexDirection="column" bgColor="#FFF">
        <Flex flexDirection="column" justifyContent="center">
          <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={4}>
            <Text color="#000">Minhas Aulas</Text>
            {data.map((value, index) => (
              <Flex flexDirection="column" key={index}>
                <Text>Titulo</Text>
                <img />

              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default index;
