import { Button, Grid, GridItem, Heading, Input, Text } from "@chakra-ui/react";

const ThirdComponent = () => {
    return ( 
        <div className="Thirdcomponent">
            <Grid templateAreas={[`"text3"
                                  "input"`,
                                  `"text3"
                                  "input"`,
                                  `"text3 input"`]} 
                                  gap={10} pt="50" 
                                  textAlign={["center","left"]}
                                   bg="#475999"
                                    color="white" p="30px">
            <GridItem area="text3">
             <Heading>Get early access today</Heading>
             <Text>it only takes a minutes to sign up our free starter tier is extremely generous.
                 if you have any questions, our support team would be happy to help you.
             </Text>
            </GridItem>
            <GridItem area="input">
             <Input type="text" placeholder="emaiil@example.com" mb="10px" bg="white" />
             <Button bg="blue.500" w={["100%","auto"]}>Get started for free</Button>
            </GridItem>

            </Grid>
            
        </div>
     );
}
 
export default ThirdComponent;