import { Suspense, useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'

export default function QueryWithSuspense() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <h1>QueryWithSuspense</h1>  
            <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
            <Loader />
        </QueryClientProvider>
    )
}

const Loader = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button onClick={() => setIsShowed(isShowed => !isShowed)}>Show / hide</button>

             {isShowed ? (
                <Suspense fallback={<p>Loading...</p>}>
                    <ComponentWithQuery />
                </Suspense>
             ) : (
                 <p>спрятано</p>
             )}
        </>
    )
}

const ComponentWithQuery = () => {
    const longQuery = async () => {
        await new Promise(res => setTimeout(res, 3000))
        return ["hello", "world"]
    }
    const { data } = useQuery("longQuery", longQuery, { suspense: true })

    return data.map(message => <p>{message}</p>) ?? <p>загружаемся (этого вы тоже не увидите)</p>
}

const code = `
    const Loader = () => {
        const [isShowed, setIsShowed] = useState(false)

        return (
            <>
                <button onClick={() => setIsShowed(isShowed => !isShowed)}>Show / hide</button>

                {isShowed ? (
                    <Suspense fallback={<p>Loading...</p>}>
                        <ComponentWithQuery />
                    </Suspense>
                ) : (
                    <p>спрятано</p>
                )}
            </>
        )
    }

    const ComponentWithQuery = () => {
        const { data } = useQuery("longQuery", longQuery, { suspense: true })

        return data.map(message => <p>{message}</p>) ?? <p>загружаемся (этого вы тоже не увидите)</p>
    }
`