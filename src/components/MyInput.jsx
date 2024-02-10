import React from 'react'
import { Input } from '@chakra-ui/react'

function MyInput({type, placeholder , mb}) {
  return (
    <Input 
    h={"50px"}
    placeholder={placeholder}
    type={type}
    mb={mb}
    // focusBorderColor="#2b7bfe"
    // outline={"#2b7bfe"}
    _focus={{
      boxShadow: "0 0 0 2px #a7c7f1", // Customize the shadow here
    }}
    
     />
  )
}

export default MyInput