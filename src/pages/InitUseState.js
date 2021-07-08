import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { useState } from 'react'

export default function InitUseStatePage() {
 return (
    <>
      <h1>InitUseState</h1>  
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
      <InitUseState ms={1000} />
    </>
  );
}

const heavyCalculation = (ms) => {
  const end = Date.now() + ms
  while (Date.now() < end) continue
  return end
}

const InitUseState = ({ ms }) => {
  let startTime = Date.now()
  const [value, setValue] = useState(heavyCalculation(ms))

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
  const [value, setValue] = useState(heavyCalculation(ms))

  return (
    <>
      <p>Value {value}</p>
      <button onClick={() => setValue(Date.now())}>Remaining time {startTime - Date.now()} ms</button>
    </>
  )
}
` 