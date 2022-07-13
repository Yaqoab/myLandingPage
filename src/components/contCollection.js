import { Flex } from "@chakra-ui/react";
import FirstComponent from "./containerComp/firstcomponent";
import SecComponent from "./containerComp/secondcomponent";
import ThirdComponent from "./containerComp/thirdcomponent";


const ComponentsCollections = () => {
    return ( 
        <Flex  pt="45px">
             <div>
             <FirstComponent />
             <SecComponent />
             <ThirdComponent />
             </div>
        </Flex>
       
     );
}
 
export default ComponentsCollections;