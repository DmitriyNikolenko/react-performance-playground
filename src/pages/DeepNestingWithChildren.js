import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { useState, useRef, useEffect } from "react";
import TestRenderer from "react-test-renderer";

export default function DeepNestingWithChildrenMemoPage() {
  const tree = TestRenderer.create(
    <DeepNesting>
      <UpdateCounter name="first">
        <UpdateCounter name="second">
          <UpdateCounter name="third">
            <UpdateCounter name="forth" />
          </UpdateCounter>
        </UpdateCounter>
      </UpdateCounter>
    </DeepNesting>
  ).toTree();
  console.log("tree", tree);

  return (
    <>
      <h1>DeepNestingWithChildren</h1>
      <main>
        <section>
          <DeepNesting>
            <UpdateCounter name="first">
              <UpdateCounter name="second">
                <UpdateCounter name="third">
                  <UpdateCounter name="forth" />
                </UpdateCounter>
              </UpdateCounter>
            </UpdateCounter>
          </DeepNesting>
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[3,11,29]}>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

function DeepNesting({ children }) {
  const [x, setX] = useState(0);

  return (
    <>
      <button onClick={() => setX((x) => x + 1)}>Clicked {x} times</button>
      {children}
    </>
  );
}

function UpdateCounter({ children, name, passedProp }) {
  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <blockquote>
      <p>
        <b>{name}</b> updated times {updatedTimes.current}
      </p>
      {children}
    </blockquote>
  );
}

const code = `
function Page = () => (
  <DeepNesting>
    <UpdateCounter name="first">
      <UpdateCounter name="second">
        <UpdateCounter name="third">
          <UpdateCounter name="forth" />
        </UpdateCounter>
      </UpdateCounter>
    </UpdateCounter>
  </DeepNesting>
)

function UpdateCounter({ children, name }) {
  return (
    <blockquote>
      <b>{name}</b>
      {children}
    </blockquote>
  );
}

function DeepNesting({ children }) {
    const [x, setX] = useState(0)

    return (
      <>
        <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 
        {children}
      </>
  )
}
`;
