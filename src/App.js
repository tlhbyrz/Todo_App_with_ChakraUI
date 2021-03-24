import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Heading, VStack, IconButton   } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"

function App() {
  return (
    <VStack padding={8}>
      <IconButton 
        alignSelf="flex-end"
        aria-label="toggle theme" 
        icon={<FaSun />} 
        size="lg" 
        isRound={true} />
      <Heading 
        mb={8}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text" >Todo Application</Heading>

      <TodoList />  
    </VStack>
  );
}

export default App;
