import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export const SyntaxHighlighter = ({
  children,
  accentedLines = [],
  defaultHidden = false,
}) => {
  const [isHidden, setIsHidden] = useState(defaultHidden);

  return (
    <>
      {isHidden ? null : (
        <Prism
          language="jsx"
          style={vscDarkPlus}
          showLineNumbers
          wrapLines={true}
          lineProps={(lineNumber) => {
            let style = { display: "block" };
            if (accentedLines.includes(lineNumber))
              style.backgroundColor = "black";
            return { style };
          }}
        >
          {children}
        </Prism>
      )}
      <button onClick={() => setIsHidden((isHidden) => !isHidden)}>
        show / hide
      </button>
    </>
  );
};
