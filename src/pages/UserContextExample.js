import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
  memo,
} from "react";

export default function UserContextExample() {
  return (
    <>
      <h1>"8.1 Используем контекст"</h1>
      <main>
        <section>
          <FatContext />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserShower = ({ name }) => {
  const { user } = useContext(UserContext);
  return <p>User = {JSON.stringify(user)}</p>;
};

const UserSetter = ({ name }) => {
  const { setUser } = useContext(UserContext);
  const updatedTimes = useRef(0);
  useEffect(() => updatedTimes.current++);

  return (
    <div>
      <h4>{name}</h4>
      <p>updated times {updatedTimes.current}</p>
      <button onClick={() => setUser({ name })}>set name {name}</button>
    </div>
  );
};

const FatContext = ({ children }) => {
  const [x, setX] = useState(0);

  return (
    <UserProvider>
      <button onClick={() => setX((x) => x + 1)}>Clicked {x} times</button>

      <UserShower />

      <UserSetter name="Obama" />
      <UserSetter name="Kennedy" />
      <UserSetter name="John" />
    </UserProvider>
  );
};

const code = `
const UserContext = createContext()

const UserProvider = () => {
    const [user, setUser] = useState({})
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

const UserShower = ({ name }) => {
    const { user } = useContext(UserContext)

    return <p>User = {JSON.stringify(user)}</p>
}

const UserSetter = ({ name }) => {
    const { setUser } = useContext(UserContext)

    return <button onClick={() => setUser({ name })}>set name {name}</button>
}

const FatContext = () => {
  const [x, setX] = useState(0);

  return (
      <UserProvider>
          <button onClick={() => setX(x => x + 1)}>Clicked {x} times</button> 
          <UserShower />
          <UserSetter name="Obama" />
          <UserSetter name="Kennedy" />
          <UserSetter name="John" />
      </UserProvider>
  )
}
`;
