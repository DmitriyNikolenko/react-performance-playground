import { useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { longTask } from "../utils/longTask";

export default function SyncCalculationPage() {
  return (
    <>
      <h1>"1. Посчитаем что-небудь"</h1>
      <main>
        <section>
          <SyncCalculation />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[12]}>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const SyncCalculation = () => {
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

const Stat = ({ daysNumber }) => {
  const [isLoading, setIsLoading] = useState(false);

  const saveStatToAPI = () => {
    setIsLoading(true);
    setTimeout(() => void setIsLoading(false), 1000);
  };

  const result = longTask(daysNumber * 100000); // expensive calculation

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
const SyncCalculation = () => {
  const [daysNumber, setDaysNumber] = useState(10);

  return <Stat daysNumber={daysNumber} />
}

const Stat = ({ number }) => {
  const [isLoading, setIsLoading] = useState(false)
  const saveStatToAPI = () => { /* sanding request */ }

  const result = calculateStatistics(daysNumber) // expensive calculation

  return (
    <>
      <h4>Calculations</h4>
      <p>Stat for {daysNumber} days equals to {result}</p>
      <button onClick={saveStatToAPI}>Save to API</button>
    </>
  )
}
`;
