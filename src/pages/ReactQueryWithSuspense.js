import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";

export default function ReactQueryWithSuspense() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <h1>"5.3 Suspense!"</h1>
      <main>
        <section>
          <Loader />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[6, 8, 17]}>
            {code}
          </SyntaxHighlighter>
        </aside>
      </main>
    </QueryClientProvider>
  );
}

const Loader = () => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>

      {isShowed ? (
        <Suspense fallback={<p>Loading...</p>}>
          <ComponentWithQuery />
        </Suspense>
      ) : (
        <p>спрятано</p>
      )}
    </>
  );
};

const ComponentWithQuery = () => {
  ((ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  })(1000);

  const longQuery = async () => {
    await new Promise((res) => setTimeout(res, 3000));
    return ["hello", "world"];
  };
  const { data } = useQuery("longQuery", longQuery, { suspense: true });

  return (
    data.map((message) => <p>{message}</p>) ?? (
      <p>загружаемся (этого вы тоже не увидите)</p>
    )
  );
};

const code = `
const Loader = () => {
  const [isShowed, setIsShowed] = useState(false)

  return isShowed ? (
    <Suspense fallback={<p>Loading...</p>}>
        <ComponentWithQuery />
    </Suspense>
  ) : (
    <p>спрятано</p>
  )
}

const ComponentWithQuery = () => {
  // Here heavy calculations.
    
  const { data } = useQuery("longQuery", longQuery, { suspense: true })

  return data.map(message => <p>{message}</p>) || 
    <p>загружаемся (этого вы тоже не увидите)</p>
}
`;
