import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect } from 'react'

export default function DeepNestingPage() {
 return (
    <>
      <h1>DeepNesting</h1>  
              <main>
        <section>
          <DeepNesting />

        </section>
        <aside>
            
        <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
</main>
    </>
  );
}

function DeepNesting() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <UpdateCounter name="first">
            <UpdateCounter name="second">
                <UpdateCounter name="third">
                    <UpdateCounter name="forth"/>
                </UpdateCounter>
            </UpdateCounter>
        </UpdateCounter>
      </>
  )
}

function UpdateCounter({ children, name }) {
  const updatedTimes = useRef(0)
  useEffect(() => updatedTimes.current++)

  return (
    <blockquote>
        <p><b>{name}</b> updated times {updatedTimes.current}</p>
        <br/>
        {children}
    </blockquote>
  )
}

const code = `
function DeepNesting() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <UpdateCounter name="first">
            <UpdateCounter name="second">
                <UpdateCounter name="third">
                    <UpdateCounter name="forth"/>
                </UpdateCounter>
            </UpdateCounter>
        </UpdateCounter>
      </>
  )
}
` 