import React, {useState} from 'react'
import { HStack, Input, Button, useToast  } from "@chakra-ui/react"
import { nanoid } from "nanoid"

const AddTodo = ({addTodo}) => {
    const toast = useToast()
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const task = {
            id: nanoid(),
            body: content
        }

        addTodo(task);
        setContent("");

        toast({
            title: "Task is added!",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
  
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="12">
                <Input variant="filled" placeholder="Type your task here..." value={content} onChange={e => setContent(e.target.value)} />
                <Button colorScheme="pink" px="8" type="submit" isDisabled={content.length > 0 ? false : true}>
                    Add Task
                </Button>
            </HStack>
        </form>
    )
}

export default AddTodo
