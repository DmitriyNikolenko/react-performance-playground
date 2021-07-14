import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { useState } from "react";

export default function InitUseStatePage() {
  return (
    <>
      <h1>InitUseState</h1>
      <main>
        <section>
          <Page />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const heavyCalculation = (ms) => {
  const end = Date.now() + ms;
  while (Date.now() < end) continue;
  return ms;
};

const Page = () => {
  const [isShowed, setIsShowed] = useState(false);

    return (
    <>
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? <InitUseState ms={1000} /> : <p>спрятано</p>}
    </>
  );
}

const InitUseState = ({ ms }) => {
  const [x, setX] = useState(0);
  let startTime = Date.now();

  const [value, setValue] = useState(heavyCalculation(ms));
 
  return (
    <>
          <p>update time {Date.now() - startTime} ms</p>
          <button onClick={() => setX((x) => x + 1)}>
            Do something (updated {x} times)
          </button>
        </>
  );
};

const code = `
const Page = () => (
   <InitUseState data={data} />
)

const InitUseState = ({ data }) => {
  const [value, setValue] = useState(heavyCalculation(data))

  const [x, setX] = useState(0)

  return <button onClick={() => setX(x => x + 1)}>Do something</button>
`;
