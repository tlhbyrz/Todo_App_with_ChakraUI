import React from 'react'
import { VStack, IconButton, HStack, Text, StackDivider, Spacer   } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

const TodoList = () => {
    const todos = [
        {
            id: 1,
            body: "make payments"
        },
        {
            id: 2,
            body: "go to school"
        }
    ]
    
    return (
        <VStack 
        divider={<StackDivider borderColor="gray.200" />}
        width="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        padding={4}
        align="stretch"
        borderColor="gray.200"
        borderWidth="2px"
        borderRadius="lg">
            {
                todos.map(todo => (
                    <HStack 
                        key={todo.id}
                        padding={4}>
                        <Text>{todo.body}</Text>
                        <Spacer />
                        <IconButton icon={ <FaTrash/> } isRound={true}/>
                    </HStack>
                ))
            }
        </VStack>
    )
}

export default TodoList
