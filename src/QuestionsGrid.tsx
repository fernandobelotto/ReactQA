import { CheckCircleIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, SimpleGrid, TabPanel, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { modals } from './components/modals';
import { colletions } from './data/colletions';
import { Question } from './question';
import { useAppDispatch } from './store';
import { onOpenModal } from './store/slices/modal.slice';
import { setQuestion } from './store/slices/question.slice';
export default function QuestionsGrid() {


    const dispatch = useAppDispatch()
    function handleOpenQuestionModal(question: any) {
        dispatch(setQuestion(question))
        dispatch(onOpenModal(modals.NEW_ENTITE))
    }


    return (colletions.map((collection) => (
        <TabPanel>
            <SimpleGrid spacing={5} columns={5} minChildWidth={250}>
                {collection.questions.map((question, index) => {

                    const [checked, setChecked] = useState(false)
                    return (
                        <Flex
                            p={3}
                            border="1px solid"
                            borderColor="gray.400"
                            rounded="lg"
                            flexDir='row'
                            justify='space-between'
                            gap={2}
                            h='100%'
                        >
                            <Button variant='unstyled' size='sm' onClick={() => handleOpenQuestionModal(question)}>
                                <Text noOfLines={2}>
                                    {index + 1} - {question.title}
                                </Text>
                            </Button>

                            <IconButton
                                alignSelf='center'
                                onClick={() => setChecked(!checked)}
                                icon={
                                    checked ?
                                        <CheckCircleIcon /> : <></>
                                } size='sm' aria-label='done' />

                        </Flex>
                    );
                })}
            </SimpleGrid>
        </TabPanel>
    ))
    )
}
