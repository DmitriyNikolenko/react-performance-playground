import { useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { longTask } from "../utils/longTask";

export default function ReallyHeavyCalculationPage() {
  return (
    <>
      <h1>ReallyHeavyCalculation</h1>
      <main>
        <section>
          <ReallyHeavyCalculation />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const ReallyHeavyCalculation = () => {
  const [result, setResult] = useState();

  const handleRun = async () => {
    const result = await longTask();
    setResult(result);
  };

  return (
    <>
      <button onClick={handleRun}>Run long task</button>
      <p>Calculation result: {result}</p>

      <Colorizer />
    </>
  );
};

const code = `
const ReallyHeavyCalculation = () => {
  const [result, setResult] = useState()

  const handleRun = async () => {
    const result = await longTask()
    setResult(result)
  }

  return (
    <>
      <button onClick={handleRun}>Run long task</button>
      <p>Calculation result: {result}</p>

      <Colorizer />
    </>
  )
}
`;
