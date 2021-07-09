import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState, useRef, useEffect, useCallback, useReducer } from 'react'

export default function MultiUpdateWithUseStatePage() {
 return (
    <>
      <h1>MultiUpdateWithUseState</h1>  
                    <main>

              <section>

      <MultiUpdateWithUseState />
        </section>
        <aside>
            
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
        </main>

    </>
  );
}

function MultiUpdateWithUseState() {
    const updatedTimes = useRef(0)
    useEffect(() => updatedTimes.current++)

    const [isLoading, setIsLoading] = useState(false) 
    const [isLoaded, setIsLoaded] = useState(false)
    const [user, setUser] = useState({})

    const loadUser = useCallback(async () => {
        setIsLoading(true)
        const user = await new Promise(res => setTimeout(res({ name: "Vasya", age: 10 }), 500))
        setUser(user)
        setIsLoading(false)
        setIsLoaded(true)
    }, [])

    return (
      <>
        <button onClick={() => loadUser()}>Updated {updatedTimes.current} times</button> 

        <pre>
            {`
            isLoading=${isLoading}
            isLoaded=${isLoaded}
            user=${JSON.stringify(user)}`
            }
        </pre>
      </>
  )
}


const code = `
function MultiUpdateWithUseState() {
    const [isLoading, setIsLoading] = useState(false) 
    const [isLoaded, setIsLoaded] = useState(false)
    const [user, setUser] = useState({})

    const loadUser = useCallback(async () => {
        setIsLoading(true)
        const user = await new Promise(res => setTimeout(res({ name: "Vasya", age: 10 }), 500))
        setUser(user)
        setIsLoading(false)
        setIsLoaded(true)
    }, [])

    return (
      <>
        <button onClick={() => loadUser()}>Updated {updatedTimes.current} times</button> 
      </>
  )
}
` 