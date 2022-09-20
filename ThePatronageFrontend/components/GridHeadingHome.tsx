import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { TextUnderline } from './TextUnderline';


// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function GridListWithHeading() {
  return (
    <Box p={20}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        {/* <Heading fontSize={'3xl'}>This is the headline</Heading> */}
         <Heading
            as={'h2'}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            maxW={'2xl'}>
            <TextUnderline>Benefits</TextUnderline> of
            using The Patronage...
          </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
           The Best Benefits for our Users
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
