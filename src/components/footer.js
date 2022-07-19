import { Grid, GridItem, Link, VStack, Image, HStack, Text, Center } from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram
}from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <div >
            <Grid templateAreas={[
                `"logo" 
                "about" 
                "cont" 
                "social"`, 
                `"logo about"
                "cont social"
                `,
                `"logo about cont social"`
            ]}
            bg="#0c1e42"
            color="white"
            p="30px"
            textAlign="center"
            gap={10}
            >
                <GridItem area="logo">
                  <VStack spacing={2} alignItems="start">
                  <Image src="./images/footerlogo.svg" alt="logo" width="100px" mb='20px'/>
                   <HStack>
                       <Image src="./images/icon-phone.svg" alt="call" width="15px" />
                       <Text>Phone: +1-543-123-4567</Text>
                   </HStack>
                   <HStack>
                       <Image src="./images/icon-email.svg" alt="call" width="15px" />
                       <Text> example@fylo.com</Text>
                   </HStack>
                  </VStack>
                </GridItem>
                <GridItem area="about" >
                <VStack spacing={2} alignItems="start">
                <Link href="">About us</Link>
                <Link href="">Jobs</Link>
                <Link href="">Press</Link>
                <Link href="">Blogs</Link>
                </VStack>
                </GridItem>
                <GridItem area="cont">
                <VStack spacing={2} alignItems="start">
                <Link href="">Contact us</Link>
                <Link href="">Terms</Link>
                <Link href="">Privacy</Link>
                </VStack>
                </GridItem>
                <GridItem area="social">
             <HStack  spacing={4} fontSize="25px" display={["inline-flex","flex"]} >
             <FontAwesomeIcon icon={faFacebook} />
             <FontAwesomeIcon icon={faTwitter}  />
             <FontAwesomeIcon icon={faInstagram} />
                 </HStack>
                </GridItem>              
            </Grid>
            <Center bg="#0c1e42" color="white" pb="20px">
               <Text> Designed by Yaqoab Abdulmalik</Text>
                </Center>
               
        </div>
     );
}
 
export default Footer;