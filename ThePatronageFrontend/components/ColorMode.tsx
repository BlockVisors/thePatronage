import { Button, ButtonProps, Flex, useColorMode, Box } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    /**
     * Ideally, only the button component should be used (without Flex).
     * Props compatible with <Button /> are supported.
     */
        <Flex justifyContent="right" alignItems="right" padding={8}>
      <Button
        padding={2}
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
      </Flex>
  );
}