import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { useRef, useEffect, useReducer, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";

export default function ContextAsGlobalStateWithSelectorPage() {
  return (
    <>
      <h1>"9.2 К чёрту Redux?..."</h1>
      <main>
        <section>
          <ContextAsGlobalStateWithSelector />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[2, 22, 23]}>
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
  const prop = useContextSelector(UserContext, ({ state }) => state[propName]);
  const dispatch = useContextSelector(UserContext, ({ dispatch }) => dispatch);

  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <button onClick={() => dispatch({ type: actionName })}>
      {propName} = {prop} (updated times {updatedTimes.current})
    </button>
  );
};

const ContextAsGlobalStateWithSelector = () => (
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
import { createContext, useContextSelector } from 'use-context-selector';

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
  const prop = useContextSelector(UserContext, ({ state }) => state[propName]);
  const dispatch = useContextSelector(UserContext, ({ dispatch }) => dispatch);

  return (
    <button onClick={() => dispatch({ type: actionName })}>
      {propName} = {state[propName]}
    </button>
  );
};

const ContextAsGlobalStateWithSelector = () => (
  <UserProvider>
    <UserPropertyHandler propName="age" actionName="incrementAge" />
    <UserPropertyHandler propName="caughtFish" actionName="incrementCaughtFish" />
  </UserProvider>;
)
`;
