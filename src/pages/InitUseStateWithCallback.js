import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState } from 'react'

export default function InitUseStateWithCallbackPage() {
 return (
    <>
      <h1>InitUseState</h1>  
      <SyntaxHighlighter accentedLines={[8]}>{code}</SyntaxHighlighter>
      <InitUseStateWithCallback ms={1000} />
    </>
  );
}

const heavyCalculation = (ms) => {
  const end = Date.now() + ms
  while (Date.now() < end) continue
  return end
}

const InitUseStateWithCallback = ({ ms }) => {
  let startTime = Date.now()
  const [value, setValue] = useState(() => heavyCalculation(ms))

  return (
    <>
      <p>Value {value}</p>
      <button onClick={() => setValue(Date.now())}>Remaining time {startTime - Date.now()} ms</button>
    </>
  )
}

const code = `
const InitUseStatePage = () => (
   <InitUseState ms={1000} />
)

const InitUseState = ({ ms }) => {
  let startTime = Date.now()
  const [value, setValue] = useState(() => heavyCalculation(ms))

  return (
    <>
      <p>Value {value}</p>
      <button onClick={() => setValue(Date.now())}>Remaining time {startTime - Date.now()} ms</button>
    </>
  )
}
` 