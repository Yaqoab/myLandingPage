import { Button, Heading, Stack, Image, Input, Text, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import  validator  from "validator";

const FirstComponent = () => {
    const [emailError, setEmailError]=useState({msg:"", color:"green.300"});
    const validateEmail=(e)=>{
    const email=e.target.value;
    if(validator.isEmail(email)){
        setEmailError({
            msg:'is valid',
            err:"green.300"
        });
    }else{
        setEmailError({
            msg:'please use valid email',
            err:"red.300"
        })
    }
    }
    
     const handleSubmit=(e)=>{
     e.preventDefault()
     }

    return ( 
        <div className="firstContent" p="20px">
            <Grid templateAreas={[` 
                                  "img"
                                  "text"`,
                                                                  
                                 `"text img"`]} 
             templateColumns={['1fr','1fr 1fr']} gap={10} p='30px'>
               <GridItem area={'img'}>
               <Image src="./images/illustration-1.svg" boxSize="100%" objectFit='cover' alt="" />
               </GridItem>
               <GridItem area={'text'} textAlign={["center","left"]}>
               <Heading>All your files in one secure location,accessible anywhere</Heading>
               <Text mb='10px'>Fylo stores your mostimportant files in one secure location,
                 Access them anywhere you need, share and collaborate with friends,
                   family, and co-workers
               </Text>
               <form onSubmit={handleSubmit}>
               <Stack direction={['column','row']}>
               <Input
                type='text' 
                 onChange={(e)=>validateEmail(e)}
                placeholder="Enter your email" 
                outline='none'
                />
                 <Text color={emailError.err}>{emailError.msg}</Text>
               <Button 
               type="submit" 
               bg='blue.600'
               color='white' 
               width='auto'
               pl='20px'
               paddingRight="20px"
               >Get started</Button>
               </Stack>
               </form>
               
           </GridItem>
           </Grid>
        </div>
     );
}
 
export default FirstComponent;