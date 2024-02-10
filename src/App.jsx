import * as React from 'react'
import { Box, ChakraProvider, Flex, Grid, GridItem } from '@chakra-ui/react'
import MyHeading from './components/MyHeading';
import MyText from './components/MyText';
import MyInput from './components/MyInput';
import MyButton from './components/MyButton';
import MyLink from './components/MyLink';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        bg={"#f0f2f5"}
        height={"100vh"}
      >
        <Grid templateColumns={{ sm: 'repeat(1, 2fr)', md: 'repeat(2, 2fr)' }} >
          <GridItem w={"100%"}>
            <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={{base:"center" , md:"start"}}
            justifyContent={"center"}
              w={{base: "90%", lg: "80%"}}
              h={"100%"}
              mt={{base: "20px", md: "auto"}}
              mx={{base: " auto " , lg:"120px"}}
              mb={{base: "10px" , md: "auto"}}
            >
              <MyHeading text={"facebook"} />
              <MyText text={"Facebook helps you connect and share with the people in your life."} />
            </Box>
          </GridItem>
          <GridItem
            w='100%'
            m={{ lg: "auto" }}
            mx={"auto"}
          >
            <Box
              w={{base:"90%", lg: "60%"}}
              mx={"auto"}
              bg={"white"}
              p={{base:"12px", lg: "20px"}}
              borderRadius={"10px"}
              boxShadow='lg'
              mt={{base:"20px", lg:"0px"}}
            >
              <MyInput type={"email"} placeholder={"Email Address or phone number"} mb={"20px"} />
              <MyInput type={"password"} placeholder={"Password"} mb={"5px"} />
              <MyButton text={"Log in"} bg={"#2b7bfe"} width={"100%"} hover={{ bg: "#0c54c8" }} />
              <MyLink text={"Forgotten Password"} />
              <hr />
              <MyButton text={"Create new account"} bg={"#42b72a"} width={"70%"} hover={{ bg: "#349022" }} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider >
  )
}
export default App;