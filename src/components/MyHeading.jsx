import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function MyHeading({text}) {
  return (
    <Heading
    size={"3xl"}
    color={"#2b7bfe"}
    textAlign={["center" ,"" , "start" ]}
    >
        {text}
    </Heading>
  )
}

