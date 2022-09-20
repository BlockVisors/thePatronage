
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
                What is the Patron Exchange Token - $EXCH?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            The $EXCH utility token is at the core of the Patronage ecosystem. $EXCH is passively earned daily through staking of Patronage Passes. It can also be earned as rewards by participating in certain events and exclusive drops.

            </AccordionPanel>
        </AccordionItem>
          <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                What types of experiences are availbable on The Patronage?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            There will be many types of real-life experiences. However, in the beginning we will focus on Resort Packages, Entertainment, Hotels, Excursions, Unique dining experiences, and celebrity meetups.

            </AccordionPanel>
        </AccordionItem>
          <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                How does redemption work?
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
           Redemption works by issuing an Apple Wallet or Google Pay pass that is tied to an NFT. After a pass has been issued, we verify ownership so that the holder can be admitted entrace or access. Businesses can scan the QR code passes to verify.

            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            {({ isExpanded }) => (
            <>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    What is the Patronage Pass?
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               It is a limited edition NFT pass which will grant you access to exclusive drops on our platform. In the future...the will discounts and rewards from our partners.
                </AccordionPanel>
            </>
            )}
        </AccordionItem>
        </Accordion>

        </Container>
        );
        }