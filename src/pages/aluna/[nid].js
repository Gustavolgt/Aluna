import Head from 'next/head';
import Image from 'next/image';
import {
  Flex, Box, Text, Avatar, Container, Center, Button
} from '@chakra-ui/react';
import Card from './card';
import { useAxios } from '../../hooks/useAxios';
import { useRouter } from 'next/router';
import Footer from './footer'

const index = () => {
  const router = useRouter();
  const { nid } = router.query
  let formatedNid = `${nid}@s.whatsapp.net`
  const { data } = useAxios(`client/${formatedNid}`);
  return (
    <>
      <Head>
        <title>Mini Curso Arts Amigurumi</title>
      </Head>
      <Flex bgColor="blue.500" justifyContent="space-between" px={4} py={4}>
        <Flex>
          <Image src="/Logo.webp" width={550 / 4} height={200 / 4} alt="Logo" />
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">

          <Avatar w={42} height={42} src={data?.picture} />
        </Flex>
      </Flex>
      <Flex bgColor="blue.800" py={2} px={4} justifyContent="space-between">
        <Text color="#FFF" fontSize="14">
          {`Aluna: ${data?.name}`}
        </Text>
        <Text fontSize="14" fontWeight="bold" color="green.200">GRÁTIS</Text>
      </Flex>
      <Container display="flex" flexDirection="column" bgColor="#FFF" mb={20}>
        <Flex flexDirection="column" justifyContent="center">
          <Flex alignItems="center" flexDirection="column" mt={4} minH="100vh">
            <Text color="#000" fontSize="24px" py={2} fontWeight="bold">Minhas Aulas</Text>
            {data?.recipes.map((recipe) => (
              <Box py={2}>
                <Card id={recipe} />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

export default index;
