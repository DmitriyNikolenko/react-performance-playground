import { useState, useRef, useEffect } from 'react'
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import futurelink from 'futurelink';

const queryClient = new QueryClient()

const longQuery = async () => {
    await new Promise(res => setTimeout(res, 2000))
    return "I love Rock'N'Roll"
}

export default function SlowQueryWithPredictionPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>SlowQueryWithPredictionPage</h1>  
            <SyntaxHighlighter accentedLines={[9]}>{code}</SyntaxHighlighter>
            <SlowQueryWithPrediction />
        </QueryClientProvider>
    )
}

const SlowQueryWithPrediction = () => {
    const [isShowed, setIsShowed] = useState(false)

    const buttonRef = useRef()
    useEffect(() => futurelink({
        links: [buttonRef.current],
        future: (link) => {
            queryClient.prefetchQuery("longQuery", longQuery)
        },
    }), [buttonRef])

    return (
        <>
            <button 
                ref={buttonRef}
                onClick={() => setIsShowed(isShowed => !isShowed)}
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
import futurelink from 'futurelink';

const SlowQueryWithPrediction = () => {
    const [isShowed, setIsShowed] = useState(false)

    const buttonRef = useRef()
    useEffect(() => futurelink({
        links: [buttonRef.current],
        future: (link) => {
            queryClient.prefetchQuery("longQuery", longQuery)
        },
    }), [buttonRef])

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => setIsShowed(isShowed => !isShowed)}
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