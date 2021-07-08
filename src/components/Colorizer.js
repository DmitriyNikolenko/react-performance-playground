import { useState } from 'react';
import useInterval from '@use-it/interval';

const colors = ["AliceBlue",  "AntiqueWhite",  "Aqua",  "Aquamarine",  "Azure",  "Beige",  "Bisque",  "Black",  "BlanchedAlmond",  "Blue",  "BlueViolet",  "Brown"]

export const Colorizer = () => {
  const [colorNumber, setColorNumber] = useState(0);
  const currentColor = colors[colorNumber % 12]

  useInterval(() => {
    setColorNumber((colorNumber) => colorNumber + 1);
  }, 100);

  return (
    <div style={{ 
        backgroundColor: currentColor, 
        height: 24, 
        textAlign: "center", 
    }}
    >
        {currentColor}
    </div>
  )
}
