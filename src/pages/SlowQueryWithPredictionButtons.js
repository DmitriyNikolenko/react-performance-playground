import { useState, useRef, useEffect } from 'react'
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import futurelink from 'futurelink';
import NostradamusButton from '../components/NostradamusButton'

const queryClient = new QueryClient()

const longQuery = async () => {
    await new Promise(res => setTimeout(res, 2000))
    return "I love Rock'N'Roll"
}

export default function SlowQueryWithPredictionButtonsPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <h1>SlowQueryWithPredictionButtons</h1>  
            <SyntaxHighlighter accentedLines={[9]}>{code}</SyntaxHighlighter>
            <SlowQueryWithPredictionButtons />
        </QueryClientProvider>
    )
}

const SlowQueryWithPredictionButtons = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {Array(5).fill(null).map((_, id) => <NostradamusButton key={id} />)}
            </div>
        </>
    )
}


const code = `
<div style={{ display: "flex", justifyContent: "space-between" }}>
    <NostradamusButton />
    <NostradamusButton />
    <NostradamusButton />
    <NostradamusButton />
    <NostradamusButton />
</div>
`