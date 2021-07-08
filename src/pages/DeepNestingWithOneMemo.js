import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect, memo, useCallback } from 'react'

export default function DeepNestingWithOneMemoPage() {
 return (
    <>
      <h1>DeepNestingWithOneMemo</h1>  
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
      <DeepNestingWithOneMemo />
    </>
  );
}

function DeepNestingWithOneMemo() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <MemoizedUpdateCounter name="first">
            <UpdateCounter name="second">
                <UpdateCounter name="third" passedProp={x}>
                    <UpdateCounter name="forth"/>
                </UpdateCounter>
            </UpdateCounter>
        </MemoizedUpdateCounter>
      </>
  )
}

function UpdateCounter({ children, name, passedProp }) {
  const updatedTimes = useRef(0)
  useEffect(() => updatedTimes.current++)

  return (
    <blockquote>
        <p><b>{name}</b> updated times {updatedTimes.current}</p>
        <p><b>Passed prop</b>{passedProp}</p>
        <br/>
        {children}
    </blockquote>
  )
}

const MemoizedUpdateCounter = memo(UpdateCounter)

const code = `
const MemoizedUpdateCounter = memo(UpdateCounter)

function DeepNesting() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <MemoizedUpdateCounter name="first">
            <UpdateCounter name="second">
                <UpdateCounter name="third">
                    <UpdateCounter name="forth"/>
                </UpdateCounter>
            </UpdateCounter>
        </MemoizedUpdateCounter>
      </>
  )
}
` 