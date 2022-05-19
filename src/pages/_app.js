import { ChakraProvider } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5NFWWW3' });

  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
