import { useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { longTask } from "../utils/longTask";
import fastMemoize from "fast-memoize";

export default function SyncCalculationWithFastMemoPage() {
  return (
    <>
      <h1>"1.2 Попробуем продвинутую мемоизацию"</h1>
      <main>
        <section>
          <SyncCalculationWithFastMemo />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[2, 10, 16]}>
            {code}
          </SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const SyncCalculationWithFastMemo = () => {
  const [isShowed, setIsShowed] = useState(false);

  const [daysNumber, setDaysNumber] = useState(10);

  return (
    <>
      <div>
        <p>Current number of days is {daysNumber}</p>
        <button onClick={() => setDaysNumber(10)}>stat for 10 days</button>
        <button onClick={() => setDaysNumber(15)}>stat for 15 days</button>
        <button onClick={() => setDaysNumber(20)}>stat for 20 days</button>
        <button onClick={() => setDaysNumber(25)}>stat for 25 days</button>
      </div>
      <br />
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? <Stat daysNumber={daysNumber} /> : <p>спрятано</p>}
    </>
  );
};

const memoizedLongTask = fastMemoize(longTask);

const Stat = ({ daysNumber }) => {
  const [isLoading, setIsLoading] = useState(false);

  const saveStatToAPI = () => {
    setIsLoading(true);
    setTimeout(() => void setIsLoading(false), 1000);
  };

  const result = memoizedLongTask(daysNumber * 100000); // expensive calculation

  return (
    <>
      <h4>Calculations</h4>
      <p>
        Stat for {daysNumber} days equals to {result}
      </p>
      <button onClick={saveStatToAPI}>
        Save to API {isLoading ? "Loading..." : null}
      </button>
      <Colorizer />
    </>
  );
};

const code = `
import fastMemoize from "fast-memoize"

const SyncCalculationWithFastMemo = () => {
  const [daysNumber, setDaysNumber] = useState(10);

  return <Stat daysNumber={daysNumber} />
}

const memoizedCalcStatFor = fastMemoize(calcStatFor);

const Stat = ({ number }) => {
  const [isLoading, setIsLoading] = useState(false)
  const saveStatToAPI = () => { /* sanding request */ }

  const result = memoizedCalcStatFor(daysNumber) // expensive calculation

  return (
    <>
      <h4>Calculations</h4>
      <p>Stat for {daysNumber} days equals to {result}</p>
      <button onClick={saveStatToAPI}>Save to API</button>
    </>
  )
}
`;
