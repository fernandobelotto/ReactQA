import { Box, Heading, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../store";

export default function QuestionModal() {

  const question = useAppSelector(state => state.question.question)

  return (
    <Box p={1} pb={3}>
      <VStack alignItems='flex-start' spacing={2} w='100%'>
        <Heading>{question?.title}</Heading>
      </VStack>
    </Box>
  );
}
