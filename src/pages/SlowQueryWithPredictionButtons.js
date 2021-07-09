import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { QueryClient, QueryClientProvider } from "react-query"
import NostradamusButton from '../components/NostradamusButton'

const queryClient = new QueryClient()

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