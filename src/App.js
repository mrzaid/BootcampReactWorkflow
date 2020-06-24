import React, { useEffect, useState } from 'react'

const App = () => {
  let data = { title: "waiting for response from server" };
  const [todo, setTodo] = useState(data);
  const [isData, setData] = useState(false)
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        setFetching(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
        setTodo(data=await response.json());
        setFetching(false)
        console.log(data);
      }
      fetchData();

    }, 2000);
  }, [isData])


  if (isFetching) { //slow network call plz
    return <div>data is loading....</div>
  }


  return (
    <div>
      <h1>CLASS 8 USE EFECT
      </h1>
      <div>
        {data.title == !null ? <span>data is loading babay</span> : <span>
          {todo.title}
        </span>}
      </div>
    </div>
  )
}

export default App