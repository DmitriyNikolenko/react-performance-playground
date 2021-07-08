import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useReducer, useRef, useEffect, useCallback } from 'react'

export default function MultiUpdateWithUseReducerPage() {
 return (
    <>
      <h1>MultiUpdateWithUseReducer</h1>  
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
      <MultiUpdateWithUseReducer />
    </>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, isLoading: true, isLoaded: true }
    case "save":
      return { ...state, isLoading: false, user: action.user }
    default: return state
  }
}
const initialState = { isLoading: false, isLoaded: false, user: {} }

function MultiUpdateWithUseReducer() {
    const updatedTimes = useRef(0)
    useEffect(() => updatedTimes.current++)

    const [state, dispatch] = useReducer(reducer, initialState)

    const loadUser = useCallback(async () => {
      dispatch({ type: "load" })
      const user = await new Promise(res => setTimeout(res({ name: "Vasya", age: 10 }), 500))
      dispatch({ type: "save", user })
    }, [])

    return (
      <>
        <button onClick={() => loadUser()}>Updated {updatedTimes.current} times</button> 

        <pre>
            {`
            isLoading=${state.isLoading}
            isLoaded=${state.isLoaded}
            user=${JSON.stringify(state.user)}`
            }
        </pre>
      </>
  )
}


const code = `
const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { ...state, isLoading: true, isLoaded: true }
    case "save":
      return { ...state, isLoading: false, user: action.user }
    default: return state
  }
}
const initialState = { isLoading: false, isLoaded: false, user: {} }

function MultiUpdateWithUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const loadUser = useCallback(async () => {
      dispatch({ type: "load" })
      const user = await new Promise(res => setTimeout(res({ name: "Vasya", age: 10 }), 500))
      dispatch({ type: "save", user })
    }, [])

    return (
      <>
        <button onClick={() => loadUser()}>Updated {updatedTimes.current} times</button> 
      </>
  )
}
` 