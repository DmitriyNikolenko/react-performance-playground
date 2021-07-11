import { SyntaxHighlighter } from "../components/SyntaxHighlighter";

export default function FutureAutomaticBatching() {
  return (
    <>
      <h1>FutureAutomaticBatching</h1>
      <SyntaxHighlighter accentedLines={[9]}>{code}</SyntaxHighlighter>
    </>
  );
}

const code = `
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1); // Does not re-render yet
    setFlag(f => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
`;
