import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect, memo } from 'react'

export default function SiblingComponentWithMemo() {
  return (
    <>
      <h1>SiblingComponentWithMemo</h1>  
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

const UpdateCounter = memo(
  function UpdateCounter() {
    const updatedTimes = useRef(0)
    useEffect(() => updatedTimes.current++)

    return (
      <p>updated times {updatedTimes.current}</p>
    )
  }
)

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

const UpdateCounter = React.memo(() => { /* Do something */ })
` 