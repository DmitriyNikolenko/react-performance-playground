import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import {
  useRef,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useMemo,
} from "react";

export default function ContextAsGlobalStatePage() {
  return (
    <>
      <h1>"9.1 К чёрту Redux!"</h1>
      <main>
        <section>
          <ContextAsGlobalState />
        </section>
        <aside>
          <SyntaxHighlighter
            accentedLines={[3, 19, 20, 21, 22, 23, 24, 25, 26, 27]}
          >
            {code}
          </SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const UserContext = createContext();

const initialState = { age: 18, caughtFish: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementAge":
      return { ...state, age: state.age + 1 };
    case "incrementCaughtFish":
      return { ...state, caughtFish: state.caughtFish + 1 };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserPropertyHandler = ({ propName, actionName }) => {
  const { state, dispatch } = useContext(UserContext);

  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <button onClick={() => dispatch({ type: actionName })}>
      {propName} = {state[propName]} (updated times {updatedTimes.current})
    </button>
  );
};

const ContextAsGlobalState = () => (
  <UserProvider>
    <UserPropertyHandler propName="age" actionName="incrementAge" />
    <br />
    <br />
    <UserPropertyHandler
      propName="caughtFish"
      actionName="incrementCaughtFish"
    />
  </UserProvider>
);

const code = `
const UserContext = createContext();
const initialState = { age: 18, caughtFish: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementAge": return { ...state, age: state.age + 1 };
    case "incrementCaughtFish": return { ...state, caughtFish: state.caughtFish + 1 };
    default: return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserPropertyHandler = ({ propName, actionName }) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <button onClick={() => dispatch({ type: actionName })}>
      {propName} = {state[propName]}
    </button>
  );
};

const ContextAsGlobalState = () => (
  <UserProvider>
    <UserPropertyHandler propName="age" actionName="incrementAge" />
    <UserPropertyHandler propName="caughtFish" actionName="incrementCaughtFish" />
  </UserProvider>;
)
`;
