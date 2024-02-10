import React from 'react'
import { Text } from '@chakra-ui/react'

function MyText({ text }) {
  return (
    <Text
      mt={"10px"}
      fontSize={{base:"18px", md: "2xl" ,  lg: "3xl"}}
      textAlign={["center", "", "start"]}

    // textAlign={"center"}
    >
      {text}
    </Text>
  )
}

export default MyText;