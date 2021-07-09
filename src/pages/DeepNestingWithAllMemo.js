import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect, memo } from 'react'

export default function DeepNestingWithAllMemoPage() {
 return (
    <>
      <h1>DeepNestingWithAllMemo</h1>  
                    <main>

              <section>

      <DeepNestingWithAllMemo />
        </section>
        <aside>
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
            
        </aside>
        </main>

    </>
  );
}

function DeepNestingWithAllMemo() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <MemoizedUpdateCounter name="first">
            <MemoizedUpdateCounter name="second">
                <MemoizedUpdateCounter name="third">
                    <MemoizedUpdateCounter name="forth"/>
                </MemoizedUpdateCounter>
            </MemoizedUpdateCounter>
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
            <MemoizedUpdateCounter name="second">
                <MemoizedUpdateCounter name="third">
                    <MemoizedUpdateCounter name="forth"/>
                </MemoizedUpdateCounter>
            </MemoizedUpdateCounter>
        </MemoizedUpdateCounter>
      </>
  )
}
` 