import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect } from 'react'

export default function SiblingComponentWithoutMemo() {
 return (
    <>
      <h1>SiblingComponentWithoutMemo</h1>  
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
      <Counter />
    </>
  );
}

function Counter() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <UpdateCounter />
      </>
  )
}

function UpdateCounter() {
  const updatedTimes = useRef(0)
  useEffect(() => updatedTimes.current++)

  return (
    <p>updated times {updatedTimes.current}</p>
  )
}

const code = `
export default function Counter() {
  const [x, setX] = useState(0)
 
  return (
    <>
      <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

      <UpdateCounter />
    </>
  );
}

const UpdateCounter = () => { /* Do something */ }
` 