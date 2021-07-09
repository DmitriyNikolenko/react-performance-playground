import { useState, useRef } from 'react'
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

const queryClient = new QueryClient()

const longQuery = async () => {
    await new Promise(res => setTimeout(res, 2000))
    return "I love Rock'N'Roll"
}

export default function SlowQueryWithPreFetchPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>SlowQueryWithPreFetchPage</h1>  
            <SyntaxHighlighter accentedLines={[9]}>{code}</SyntaxHighlighter>
            <SlowQueryWithPreFetch />
        </QueryClientProvider>
    )
}

const SlowQueryWithPreFetch = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button 
                onClick={() => setIsShowed(isShowed => !isShowed)}
                onMouseEnter={() => queryClient.prefetchQuery("longQuery", longQuery)}
            >
                Show / hide
            </button>
            {isShowed ?  <ComponentWithQuery /> : <p>спрятано</p>}
        </>
    )
}

const ComponentWithQuery = () => {
    const renderTime = useRef(Date.now())

    const { data } = useQuery("longQuery", longQuery)

    return data 
        ? <p>Загружено: {data} за {Date.now() - renderTime.current} мс</p> 
        : <p>загружаемся...</p>
}

const code = `
const SlowQueryWithPreFetch = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button 
                onClick={() => setIsShowed(isShowed => !isShowed)}
                onMouseEnter={() => queryClient.prefetchQuery("longQuery", longQuery)}
            >
                Show / hide
            </button>
            {isShowed ?  <ComponentWithQuery /> : <p>спрятано</p>}
        </>
    )
}

const ComponentWithQuery = () => {
    const renderTime = useRef(Date.now())

    const { data } = useQuery("longQuery", longQuery)

    return data 
        ? <p>Загружено: {data} за {Date.now() - renderTime.current} мс</p> 
        : <p>загружаемся...</p>
}
`