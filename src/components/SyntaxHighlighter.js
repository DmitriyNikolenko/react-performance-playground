import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const SyntaxHighlighter = ({ children, accentedLines = [] }) => (
  <Prism
    language="jsx"
    style={vscDarkPlus}
    showLineNumbers
    wrapLines={true}
    lineProps={(lineNumber) => {
      let style = { display: "block" };
      if (accentedLines.includes(lineNumber)) style.backgroundColor = "black";
      return { style };
    }}
  >
    {children}
  </Prism>
);
