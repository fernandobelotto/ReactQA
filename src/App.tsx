import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorMode";

import { colletions } from "./data/colletions";
import QuestionsGrid from "./QuestionsGrid";

export default function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Container maxW="container.lg">
        <Box padding={5}>
          <VStack spacing={5}>
            <Heading>React Interview Questions</Heading>
            <Tabs w="100%">
              <TabList display="flex" flexWrap="wrap" gap={3}>
                {colletions.map((collection, index) => (
                  <Tab _selected={{ border: "1px solid white" }}>
                    {index + 1} - {collection.label}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {QuestionsGrid()}
              </TabPanels>
            </Tabs>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
