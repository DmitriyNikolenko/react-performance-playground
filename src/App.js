import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SiblingComponentWithMemo from './pages/SiblingComponentWithMemo'
import SiblingComponentWithoutMemo from './pages/SiblingComponentWithoutMemo'
import QueryWithSuspense from './pages/QueryWithSuspense'
import QueryWithoutSuspense from './pages/QueryWithoutSuspense'
import UserContextExample from './pages/UserContextExample'
import UserContextExampleWithMemo from './pages/UserContextExampleWithMemo'
import UserContextExampleWithMemoValue from './pages/UserContextExampleWithMemoValue'
import DeepNesting from './pages/DeepNesting'
import DeepNestingWithOneMemo from './pages/DeepNestingWithOneMemo'
import DeepNestingWithAllMemo from './pages/DeepNestingWithAllMemo'

function App() { 
  const routes = [
    { path: "/example11", component: SiblingComponentWithoutMemo, name: SiblingComponentWithoutMemo.name },
    { path: "/example12", component: SiblingComponentWithMemo, name: SiblingComponentWithMemo.name },
    { path: "/example21", component: QueryWithoutSuspense, name: QueryWithoutSuspense.name },
    { path: "/example22", component: QueryWithSuspense, name: QueryWithSuspense.name },
    { path: "/example31", component: UserContextExample, name: UserContextExample.name },
    { path: "/example32", component: UserContextExampleWithMemo, name: UserContextExampleWithMemo.name },
    { path: "/example33", component: UserContextExampleWithMemoValue, name: UserContextExampleWithMemoValue.name },
    { path: "/example41", component: DeepNesting, name: DeepNesting.name },
    { path: "/example42", component: DeepNestingWithOneMemo, name: DeepNestingWithOneMemo.name },
    { path: "/example43", component: DeepNestingWithAllMemo, name: DeepNestingWithAllMemo.name },
  ]

  return (
    <Router>
        <nav>
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
           {routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))}
        </Switch>
    </Router>
  );
}

export default App;
