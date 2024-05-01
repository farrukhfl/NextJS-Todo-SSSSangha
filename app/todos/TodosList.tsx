import { Todo } from "@/typings"
import Link from "next/link"

const fetchTodo = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todos: Todo[] = await res.json()
    console.log(todos)
    return todos

}


async function TodosList() {
    const todos = await fetchTodo()

    
  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              Todo:{todo.title}
            </Link>
        </p>
      ))}
    </>
  )
}

export default TodosList

