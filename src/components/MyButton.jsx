import { Button } from '@chakra-ui/react'
import React from 'react'

function MyButton({text , hover, bg, width}) {
  console.log(hover);
  return (
    <Button
    display={"flex"}
    justifyContent={"center"}
    background={bg}
    // size={"lg"}
    width={width}
    mx={"auto"}
    _hover={hover}
    color={"white"}
    fontSize={"15px"}
    my={"20px"}
    // mb={"20px"}
    >
        {text}

    </Button>
  )
}

export default MyButton