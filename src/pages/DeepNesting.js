import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { useState, useRef, useEffect } from "react";
import TestRenderer from "react-test-renderer";

export default function DeepNestingPage() {
  const tree = TestRenderer.create(<DeepNesting />).toTree();
  console.log("tree", tree);

  return (
    <>
      <h1>DeepNesting</h1>
      <main>
        <section>
          <DeepNesting />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

function DeepNesting() {
  const [x, setX] = useState(0);

  return (
    <>
      <button onClick={() => setX((x) => x + 1)}>Clicked {x} times</button>

      <UpdateCounter name="first">
        <UpdateCounter name="second">
          <UpdateCounter name="third">
            <UpdateCounter name="forth" />
          </UpdateCounter>
        </UpdateCounter>
      </UpdateCounter>
    </>
  );
}

function UpdateCounter({ children, name }) {
  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <blockquote>
      <p><b>{name}</b> updated times {updatedTimes.current}</p>
      <br />
      {children}
    </blockquote>
  );
}

const code = `
function Page = () => (
  <DeepNesting />
)

function UpdateCounter({ children, name }) {
  return (
    <blockquote>
      <b>{name}</b>
      {children}
    </blockquote>
  );
}

function DeepNesting() {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 

        <UpdateCounter name="first">
            <UpdateCounter name="second">
                <UpdateCounter name="third">
                    <UpdateCounter name="forth"/>
                </UpdateCounter>
            </UpdateCounter>
        </UpdateCounter>
      </>
  )
}
`;
