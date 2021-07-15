import { useState, useRef } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function SlowQueryPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <h1>"14.1 API работает не быстро"</h1>
      <main>
        <section>
          <SlowQuery />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </QueryClientProvider>
  );
}

const SlowQuery = () => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? <ComponentWithQuery /> : <p>спрятано</p>}
    </>
  );
};

const ComponentWithQuery = () => {
  const renderTime = useRef(Date.now());

  const longQuery = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    return "I love Rock'N'Roll";
  };
  const { data } = useQuery("longQuery", longQuery);

  return data ? (
    <p>
      Загружено: <b>{data}</b> за {Date.now() - renderTime.current} мс
    </p>
  ) : (
    <p>загружаемся...</p>
  );
};

const code = `
const SlowQuery = () => {
  const [isShowed, setIsShowed] = useState(false)

  return (
    <>
      <button>Show / hide</button>

      {isShowed ?  <ComponentWithQuery /> : <p>спрятано</p>}
    </>
  )
}

const ComponentWithQuery = () => {
  const { data } = useQuery("longQuery", longQuery)

  return data 
    ? <p>Загружено: {data}</p> 
    : <p>загружаемся...</p>
}
`;
