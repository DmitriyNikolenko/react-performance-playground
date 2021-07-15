import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { useState, useRef, useEffect, memo } from "react";

export default function SiblingMemoComponentWithCallbackPage() {
  return (
    <>
      <h1>"3.1 Расширим функционал соседа"</h1>
      <main>
        <section>
          <SiblingMemoComponentWithCallback />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[5]}>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

function SiblingMemoComponentWithCallback() {
  const [x, setX] = useState(0);

  const increment = () => setX((x) => x + 1);

  return (
    <>
      <button onClick={increment}>Clicked {x} times</button>

      <UpdateCounter onClick={increment} />
    </>
  );
}

const UpdateCounter = memo(function UpdateCounter({ onClick }) {
  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <button onClick={onClick}>updated times {updatedTimes.current}</button>
  );
});

const code = `
export default function Counter() {
  const [x, setX] = useState(0)

  const increment = () => setX((x) => x + 1)
 
  return (
    <>
      <button onClick={increment}>Clicked {x} times</button>

      <UpdateCounter onClick={increment} />
    </>
  );
}

const UpdateCounter = React.memo(() =>  { /* count component updates */ })
`;
