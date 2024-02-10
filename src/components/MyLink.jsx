import { Box, Link } from '@chakra-ui/react'
import React from 'react'

function MyLink({ text }) {
    return (
        <Box
            w={"100%"}
            color={"#2b7bfe"}
            fontSize={"md"}
            mx={"auto"}
            textAlign={"center"}
            mb={"20px"}
        >
            <Link
            >
                {text}
            </Link>
        </Box>
    )
}

export default MyLink