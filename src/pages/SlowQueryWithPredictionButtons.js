import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { QueryClient, QueryClientProvider } from "react-query";
import NostradamusButton from "../components/NostradamusButton";

const queryClient = new QueryClient();

export default function SlowQueryWithPredictionButtonsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>SlowQueryWithPredictionButtons</h1>
      <main>
        <SlowQueryWithPredictionButtons />
      </main>
    </QueryClientProvider>
  );
}

const SlowQueryWithPredictionButtons = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Array(3)
          .fill(null)
          .map((_, id) => (
            <NostradamusButton key={id} />
          ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Array(3)
          .fill(null)
          .map((_, id) => (
            <NostradamusButton key={id} />
          ))}
      </div>
    </>
  );
};
