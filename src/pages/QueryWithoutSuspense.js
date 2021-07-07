import { useState } from 'react'
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

export default function QueryWithoutSuspense() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <h1>QueryWithoutSuspense</h1>  
            <SyntaxHighlighter>{code}</SyntaxHighlighter>
            <Loader />
        </QueryClientProvider>
    )
}

const Loader = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button onClick={() => setIsShowed(isShowed => !isShowed)}>Show / hide</button>
            {isShowed ?  <ComponentWithQuery /> : <p>спрятано</p>}
        </>
    )
}

const ComponentWithQuery = () => {
    const longQuery = async () => {
        await new Promise(res => setTimeout(res, 3000))
        return ["hello", "world"]
    }
    const { data } = useQuery("longQuery", longQuery)

    return data.map(message => <p>{message}</p>) ?? <p>загружаемся... (этого вы не увидите)</p>
}

const code = `
    const Loader = () => {
        const [isShowed, setIsShowed] = useState(false)

        return (
            <>
                <button onClick={() => setIsShowed(isShowed => !isShowed)}>Show / hide</button>
                {isShowed ?  <ComponentWithQuery /> : <p>спрятано</p>}
            </>
        )
    }

    const ComponentWithQuery = () => {
        const { data } = useQuery("longQuery", longQuery)

        return data.map(message => <p>{message}</p>) ?? <p>загружаемся (этого вы тоже увидите)</p>
    }
`