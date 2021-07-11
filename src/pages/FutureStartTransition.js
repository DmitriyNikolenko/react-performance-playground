import { SyntaxHighlighter } from "../components/SyntaxHighlighter";

export default function FutureStartTransition() {
  return (
    <>
      <h1>FutureStartTransition</h1>
      <SyntaxHighlighter accentedLines={[10, 11, 12]}>{code}</SyntaxHighlighter>
    </>
  );
}

const code = `
import { startTransition } from 'react';

function Slider({defaultValue, onChange}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e, nextValue) => {
    setValue(nextValue); // When the slider changes, update the value of the slider, 
    
    startTransition(() => {
      onChange(nextValue) // then the value of the results.
    });
  }
  
  return (
    <Slider value={value} onChange={handleChange} />
  );
}
`;
