import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const SyntaxHighlighter = ({ children }) => <Prism language="jsx" style={vscDarkPlus} showLineNumbers >{children}</Prism>