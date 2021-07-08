import { useState } from 'react';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { Colorizer } from '../components/Colorizer'
import { useWorker } from "@koale/useworker";
import { longTask } from '../utils/longTask'

export default function ReallyHeavyCalculationWithinWorkerPage() {
  return (
    <>
      <h1>ReallyHeavyCalculation</h1>  
      <SyntaxHighlighter accentedLines={[2, 7]}>{code}</SyntaxHighlighter>
      <ReallyHeavyCalculationWithinWorker />
    </>
  );
}

const ReallyHeavyCalculationWithinWorker = () => {
  const [result, setResult] = useState()

  const [runWorker, { status }] = useWorker(longTask);
    
  const handleRun = async () => {
    const result = await runWorker()
    setResult(result)
  }

  return (
    <>
      <button onClick={handleRun}>Run long task. Status: {status}</button>
      <p>Calculation result: {result}</p>

      <Colorizer />
    </>
  )
}
 
const code = `
import { useWorker } from "@koale/useworker";

const ReallyHeavyCalculation = () => {
  const [result, setResult] = useState()

  const [runWorker, { status }] = useWorker(longTask);

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
` 