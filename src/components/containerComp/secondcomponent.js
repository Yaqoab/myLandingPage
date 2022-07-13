import { Grid, GridItem, Heading, Image, Text,Link,HStack, Center,Box } from "@chakra-ui/react";

const SecComponent = () => {
    return ( 
        <div className="secComponent">
        <Grid templateAreas={[` 
                              "image"
                              "text2"`,   
                              
                             `"text2 image"`]} 
             templateColumns={['1fr','1fr 1fr']} gap={10} mt='50px' pt="100px" 
             bgImage={["url(./images/bg-curve-mobile.svg)","url(./images/bg-curve-desktop.svg)"]}
              bgRepeat="no-repeat" bgPos="center" bgSize="cover" p="30px" >
            <GridItem area={"image"}>
                <Image src="./images/illustration-2.svg" alt="" />
            </GridItem>
            <GridItem area={"text2"} textAlign={["center","left"]}>
              <Heading>Stay connected wherever you are</Heading>
              <Text>never let location be an issue when accesssing your files.
                  Fylo has you covered from all your file storage need.
              </Text>
              <Text>Securely share files and folders with friends family and 
                  collegues for live collaboration no email attachment required!
              </Text>
              <Center>
              <HStack>
              <Link 
              href="" 
              borderBottom="2px solid #429783" 
              color='#429783' 
              fontWeight="bold"
              fontSize="18px"
             
              > See how fylo work </Link>
              <Image src="./images/icon-arrow.svg" alt=""  width="20px" mt={3}/>
              </HStack>
              </Center>
              <Box boxShadow="xl" p="20px" mt='20px' bg="white" textAlign="left">
                  <Image src="./images/icon-quotes.svg" />
                  <Text p="20px 0 20px 0">Fylo has improve our team productivity by an order or 
                      magnitude. since making the switch our team has become a
                      well-oiled collaboration machine.
                  </Text>
                  <HStack direction="column">
                      
                      <Image src="./images/avatar-testimonial.jpg" w="50px" borderRadius="50%"/>
                      
                      <div>
                        <Heading fontSize="16px">Kyle Burton</Heading>
                        <Text>Founder & CEO Huddle</Text>
                      </div>
                  </HStack>
              </Box>
            </GridItem>
        </Grid>
        </div>
     );
}
 
export default SecComponent;