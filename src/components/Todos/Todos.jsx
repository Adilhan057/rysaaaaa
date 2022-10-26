import React, { useEffect } from 'react'

export const Todos = () => {
    const [data, setData] = React.useState([])

    useEffect(() => {
        const fetchTodos = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const parse = response.json()
            setData(parse)
        }
        fetchTodos()
    }, [])

  return (
    <div>
        <h1>Todos</h1>
        <ul>
            {
                data.map(todo => {
                    return <li>{todo.title}</li>
                })
            }
        </ul>
    </div>
  )
}
