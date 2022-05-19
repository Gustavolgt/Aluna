import { Flex, Text, Center, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import 'animate.css'

const footer = () => {
  const [text, setText] = useState('Acesse Video Aulas Exclusivas')
  const url = 'https://www.clubeamigurumi.com/'

  useEffect(() => {
    const texts = [
      'Acesse Video Aulas Exclusivas',
      '+5 Mil Modelos de Amigurumis',
      'Tudo em Português',
      'Aproveite e Comece Hoje Mesmo!',
      'Acesso VIP'
    ]
    const changeText = () => {
      setTimeout(() => {
        console.log('teste', text)
        if (text === texts[0]) {
          setText(texts[1])
          console.log('1')
        } else if (text === texts[1]) {
          setText(texts[2])
          console.log('2')
        } else if (text === texts[2]) {
          setText(texts[3])
          console.log('2')
        } else if (text === texts[3]) {
          setText(texts[0])
          console.log('2')
        }
      }, 3000)
    }
    changeText()
  }, [text])
  return (
    <Flex position='fixed' cursor='pointer' bottom='0' w='100%' h='100px' bgColor='red' alignItems='center' justifyContent='center' px={4}>
      <Text fontSize={20} color='white' w='60%'>{text}</Text>
      <Center w='30%'><a href={url}><Button colorScheme='whatsapp' className="animate__animated animate__infinite animate__heartBeat animate__slow">Clique Aqui</Button></a></Center>
    </Flex>
  );
}

export default footer;