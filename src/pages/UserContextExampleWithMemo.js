import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from "react";

export default function UserContextExampleWithMemo() {
  return (
    <>
      <h1>"8.2 Пробуем защититься от обновлений контекста"</h1>
      <main>
        <section>
          <FatContext />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[13, 19]}>{code}</SyntaxHighlighter>
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

const UserShower = React.memo(({ name }) => {
  const { user } = useContext(UserContext);
  return <p>User = {JSON.stringify(user)}</p>;
});

const UserSetter = React.memo(({ name }) => {
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
});

const FatContext = () => {
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

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

const UserShower = React.memo(({ name }) => {
    const { user } = useContext(UserContext)
    
    return <p>User = {JSON.stringify(user)}</p>
})

const UserSetter = React.memo(({ name }) => {
    const { setUser } = useContext(UserContext)

    return <button onClick={() => setUser({ name })}>set name {name}</button>
})

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
