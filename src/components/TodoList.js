import React from 'react'
import { VStack, IconButton, HStack, Text, StackDivider, Spacer, Badge  } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

const TodoList = ({deleteTodo, todos}) => {

    if(todos.length === 0){
        return <Badge colorScheme="green" p="4" m="4" borderRadius="lg">No task found!</Badge>
    }

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
                        <IconButton icon={ <FaTrash/> } isRound={true} onClick={() => deleteTodo(todo.id)} />
                    </HStack>
                ))
            }
        </VStack>
    )
}

export default TodoList
