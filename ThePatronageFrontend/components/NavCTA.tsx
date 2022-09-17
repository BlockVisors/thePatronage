import { useState, useEffect } from "react";
import { Center, Heading } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from "wagmi";
import ColorModeToggle from "./ColorMode";
import { Logo } from './Logo';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';



export default function NavCTA() {
  const [mounted, setMounted] = useState(false);
    const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();


  useEffect(() => {
    setMounted(true);
  }, []);



  return ( 
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />

          <Text
            fontSize='xl'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            href={'/'}
            color={useColorModeValue('gray.800', 'white')}>
            The Patronage
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
           
          </Flex>
          
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
         {/* <ColorModeToggle /> */}
          <Flex justifyContent="right" alignItems="right" padding={2}>
            <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              icon={
                colorMode == 'light' ? (
                  <BsMoonStarsFill size={18} />
                ) : (
                  <BsSun size={18} />
                )
              }
            />
            </Flex>
         <Flex justifyContent="right" alignItems="right" padding={2}>

          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            fontSize={'md'}
            fontWeight={600}
            colorScheme='plum'
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            MarketPlace
          </Button>
         </Flex>
        </Stack>
         <Flex paddingLeft={6}>
         <Box paddingRight={4}
            maxWidth={300}>
                <ConnectButton />
            </Box>
            </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} marginLeft={100}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
        <Flex>

        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      
       <Box paddingRight={2}>
                <ConnectButton />
            </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Explore',
    children: [
      {
        label: 'Explore Experiences',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Working with Us',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'About Us',
        subLabel: 'Our Story',
        href: '#',
      },
      {
        label: 'For Businesses',
        subLabel: 'Create Experience NFTs with us to increase revenue opportunity',
        href: '#',
      },
       {
        label: 'For Customers',
        subLabel: 'Get setup with the Patronage',
        href: '#',
      },
      {
        label: 'FAQ',
        subLabel: 'You have questions.....we have answers',
        href: '#',
      },
    ],
  },
  {
    label: 'Redeem',
    href: '/redeem',
  },
   {
    label: 'Patronage Pass',
    children: [
      {
        label: 'VIP NFT',
        subLabel: 'Purchase one of our limited Patronage Pass NFTs for access to limited edition drops',
        href: '#',
      },
      {
        label: '$EXCH Token',
        subLabel: 'Our Platform Token - The Patron Exchange Token - Coming Soon',
        href: '#',
      },
       {
        label: 'Patronage DAO',
        subLabel: 'Join the DAO- Coming Soon',
        href: '/DAO',
      },
    ]
   },
  {
    label: 'Docs',
    href: '#',
  },
    {
    label: 'Contact',
    children: [
      {
        label: 'Email',
        subLabel: 'Send us a note',
        href: 'mailto:info@thepatronage.io',
      },
      {
        label: 'Newsletter',
        subLabel: 'Sign up for our Newsletter',
        href: '/newsletter',
      },
       {
        label: 'Twitter',
        subLabel: 'Follus Us on Twitter',
        href: '/DAO',
      },
      {
        label: 'Instagram',
        subLabel: 'Follus Us on the Gram',
        href: '/DAO',
      },
    ]
   },
   
];