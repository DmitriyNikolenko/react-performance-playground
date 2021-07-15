import { useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";

export default function RenderArrayPage() {
  return (
    <>
      <h1>"Bonus. Покажем массив имён"</h1>
      <main>
        <section>
          <RenderArray />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const array = [
  { id: 1, title: "Robin" },
  { id: 2, title: "Jack" },
  { id: 3, title: "John" },
  { id: 4, title: "Mark" }
];

const Name = ({ id, title }) => {
  const [x, setX] = useState(0);

  return (
    <p>
      <b>{id}</b> - <i>{title}</i> - <u>{x} updates</u>
      <button onClick={() => setX((x) => x + 1)}>increment</button>
    </p>
  );
};

const RenderArray = () => {
  const [isReverse, setIsReverse] = useState(false);
  const targetArray = isReverse ? [...array].reverse() : array;

  return (
    <>
      <button onClick={() => setIsReverse((isReverse) => !isReverse)}>
        Reversed {String(isReverse)}
      </button>
      <pre>{JSON.stringify(targetArray, null, 4)}</pre><br />
      {targetArray.map((item, index) => (
        <Name key={index} {...item} />
      ))}
    </>
  );
};

const code = `
const array = [
  { id: 1, title: "Robin" },
  { id: 2, title: "Jack" },
  { id: 3, title: "John" },
  { id: 4, title: "Mark" }
];

const Name = ({ id, title }) => {
  const [x, setX] = useState(0);

  return (
    <p>
      <b>{id}</b> - <i>{title}</i> - <u>{x} updates</u>
      <button onClick={() => setX((x) => x + 1)}>increment</button>
    </p>
  );
};

const RenderArray = () => {
  const [isReverse, setIsReverse] = useState(false);
  const targetArray = isReverse ? [...array].reverse() : array;

  return targetArray.map((item, index) => (
    <Name key={index} {...item} />
  ));
};
`;
