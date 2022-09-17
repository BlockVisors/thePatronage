
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Stack, Container, Heading, Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';




export default function FAQ() {

return (
       <Container
            paddingBottom={100}>
            <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 7 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={400}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            // lineHeight={'110%'}
            >
            FAQ 
           
          </Heading>
          <Text color={'gray.500'}>
           You have questions...we have answers
          </Text>
        </Stack>

        <Accordion allowMultiple>
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                What is The Patronage?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
         <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                What is an NFT?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
         <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                Section 1 title
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            {({ isExpanded }) => (
            <>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Section 2 title
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </AccordionPanel>
            </>
            )}
        </AccordionItem>
        </Accordion>

        </Container>
        );
        }