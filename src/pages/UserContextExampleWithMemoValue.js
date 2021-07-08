import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import React, { useState, useContext, createContext, useRef, useEffect, useMemo } from 'react'

export default function UserContextExampleWithMemoValue() {
  return (
    <>
      <h1>UserContextExampleWithMemoValue</h1>  
      <SyntaxHighlighter accentedLines={[6]}>{code}</SyntaxHighlighter>
      <FatContext />
    </>
  );
}

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const value = useMemo(() => ({ user, setUser }), [user])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const UserShower = React.memo(({ name }) => {
    const { user } = useContext(UserContext)
    return (
       <p>User = {JSON.stringify(user)}</p>
    )
})

const UserSetter = React.memo(({ name }) => {
    const { setUser } = useContext(UserContext)
    const updatedTimes = useRef(0)
    useEffect(() => updatedTimes.current++)

    return (
        <div>
            <h4>{name}</h4>
            <p>updated times {updatedTimes.current}</p>
            <button onClick={() => setUser({ name })}>set name {name}</button>
        </div>
    )
})

const FatContext = ({ children }) => {
    const [x, setX] = useState(0)   

    return (
        <UserProvider>
            <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

            <UserShower />

            <UserSetter name="Obama" />
            <UserSetter name="Kennedy" />
            <UserSetter name="John" />
        </UserProvider>
    )
}

const code = `
const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const value = useMemo(() => ({ user, setUser }), [user])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// const UserShower = React.memo(({ name }) => {
//     const { user } = useContext(UserContext)
//     return (
//        <p>User = {JSON.stringify(user)}</p>
//     )
// })

const UserSetter = React.memo(({ name }) => {
    const { setUser } = useContext(UserContext)
    return (
        <div>
            <h4>{name}</h4>
            <button onClick={() => setUser({ name })}>set name {name}</button>
        </div>
    )
})

const FatContext = ({ children }) => {
    return (
        <UserProvider>
            <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

            <UserShower />

            <UserSetter name="Obama" />
            <UserSetter name="Kennedy" />
            <UserSetter name="John" />
        </UserProvider>
    )
}
`