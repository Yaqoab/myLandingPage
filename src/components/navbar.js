import React, { Component } from 'react';
import {Flex,Link, HStack, Spacer,Image} from '@chakra-ui/react';

class Navbar extends Component {

    render() { 
     return(  
            <Flex  w='100%' p='15px'>
         <Image src="./images/logo.svg" alt="logo" width="70px" />
         <Spacer />
        <HStack spacing='16px' fontSize={[17,20,22]}>
        <Link href=''>Features</Link>
         <Link href=''>Teams</Link>
         <Link href=''>sign in</Link>
        </HStack>

        </Flex>
        
     )
  }
}
 
export default Navbar;