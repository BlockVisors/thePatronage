import { chakra } from '@chakra-ui/react';
import { ReactNode} from 'react';
import { Button } from '@chakra-ui/react';

//import { Header } from '@/components/Header';
import NavCTA from './NavCTA'
import NewsletterFooter from './NewsletterFooter';
import useColorMode from '@chakra-ui/react';
import ColorMode from './ColorMode';

interface AppLayoutProps {
  children: ReactNode;
}


//   const { colorMode, toggleColorMode } = useColorMode()
//  <header>
//       <Button onClick={toggleColorMode}>
//         Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
//       </Button>
//     </header>
   

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>

      <NavCTA />
      <ColorMode />
      {children}
      <NewsletterFooter />
    </>
  );
};