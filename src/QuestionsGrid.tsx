import { CheckCircleIcon } from '@chakra-ui/icons';
import { TabPanel, SimpleGrid, Box, Text, IconButton, Flex } from '@chakra-ui/react';
import { colletions } from './data/colletions';
import { useState } from 'react'
import { FaCheckDouble } from 'react-icons/fa';
export default function QuestionsGrid() {
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
                            <Text noOfLines={2}>
                                {index + 1} - {question.title}
                            </Text>
                            <IconButton
                                alignSelf='center'
                                onClick={() => setChecked(!checked)}
                                icon={
                                    checked ?
                                        <CheckCircleIcon /> : <></>
                                } size='sm' aria-label='done'></IconButton>
                        </Flex>
                    );
                })}
            </SimpleGrid>
        </TabPanel>
    ))
    )
}
