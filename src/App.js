import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/theme/index";
import { Box, HStack } from "@chakra-ui/layout";
import Form from "./components/Form";
import CarList from "./components/CarList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HStack>
        <Form />
        <CarList />
      </HStack>
    </ChakraProvider>
  );
}

export default App;
