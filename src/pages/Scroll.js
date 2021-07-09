import { useState } from 'react';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter'
import { Colorizer } from '../components/Colorizer'
import { HeavyComponent } from '../components/HeavyComponent'

export default function ScrollPage() {
  return (
    <>
      <h1>ReallyHeavyCalculation</h1>  
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
      <Scroll />
    </>
  );
}

const Scroll = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button onClick={() => setIsShowed(isShowed => !isShowed)}>
                Show / hide
            </button>
            {isShowed 
                ? Array(10).fill(null).map((_, index) => <HeavySection key={index} index={index} />)
                : <p>спрятано</p>}
        </>
    )
}

const HeavySection = ({ index }) => (
    <div style={{ height: 300}}>
        <h2 style={{ textAlign: "center" }}>{index}</h2>
        <HeavyComponent delay={150} />
        <Colorizer />
    </div>
)
 
const code = `
const Scroll = () => {
    const [isShowed, setIsShowed] = useState(false)

    return (
        <>
            <button onClick={() => setIsShowed(isShowed => !isShowed)}>Show / hide</button>

            {isShowed 
                ? Array(10).fill(null).map((_, index) => 
                    <HeavySection key={index} index={index} />
                )
                : <p>спрятано</p>}
        </>
    )
}
` 