import { useState, useMemo } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";

export default function SyncCalculationWithUseMemoWithUseMemoPage() {
  return (
    <>
      <h1>SyncCalculationWithUseMemo</h1>
      <main>
        <section>
          <SyncCalculationWithUseMemo />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

function factorialOf(n) {
  console.log("factorialOf", n);
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const SyncCalculationWithUseMemo = () => {
  const [isShowed, setIsShowed] = useState(false);

  const [number, setNumber] = useState(3000);

  return (
    <>
      <div>
        <p>Current number is {number}</p>
        <button onClick={() => setNumber(3000)}>set 3000</button>
        <button onClick={() => setNumber(4000)}>set 4000</button>
        <button onClick={() => setNumber(5000)}>set 5000</button>
        <button onClick={() => setNumber(6000)}>set 6000</button>
      </div>

      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? <Calc number={number} /> : <p>спрятано</p>}
    </>
  );
};

const Calc = ({ number }) => {
  const [isLoading, setIsLoading] = useState(false);

  const saveCalcToAPI = () => {
    setIsLoading(true);
    setTimeout(() => void setIsLoading(false), 1000);
  };

  const result = useMemo(() => factorialOf(number), [number]);

  return (
    <>
      <h4>Calculations</h4>
      <p>
        Factorial of {number} equals to {result}
      </p>
      <button onClick={saveCalcToAPI}>
        Save to API {isLoading ? "Loading..." : null}
      </button>
      <Colorizer />
    </>
  );
};

const code = `
const SyncCalculationWithUseMemo = () => {
  const [number, setNumber] = useState(3000)

  return (
    <>
      <div>
        <p>Current number is {number}</p>
        <button onClick={() => setNumber(3000)}>set 3000</button>
        <button onClick={() => setNumber(4000)}>set 4000</button>
        <button onClick={() => setNumber(5000)}>set 5000</button>
        <button onClick={() => setNumber(6000)}>set 6000</button>
      </div>
      <Calc number={number} />
    </>
  )
}

const Calc = ({ number }) => {
  const [isLoading, setIsLoading] = useState(false)
  const saveCalcToAPI = () => {
    setIsLoading(true)
    setTimeout(() => void setIsLoading(false), 1000)
  }

  const result = useMemo(() => factorialOf(number), [number]) // expensive calculation

  return (
    <>
      <h4>Calculations</h4>
      <p>Factorial of {number} equals to {result}</p>
      <button onClick={saveCalcToAPI}>Save to API</button>
    </>
  )
}
`;
