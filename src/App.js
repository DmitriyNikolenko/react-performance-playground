import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SiblingComponentWithMemo from './pages/SiblingComponentWithMemo'
import SiblingComponentWithoutMemo from './pages/SiblingComponentWithoutMemo'
import ReactQuery from './pages/ReactQuery'
import ReactQueryWithConditions from './pages/ReactQueryWithConditions'
import ReactQueryWithSuspense from './pages/ReactQueryWithSuspense'
import UserContextExample from './pages/UserContextExample'
import UserContextExampleWithMemo from './pages/UserContextExampleWithMemo'
import UserContextExampleWithMemoValue from './pages/UserContextExampleWithMemoValue'
import DeepNesting from './pages/DeepNesting'
import DeepNestingWithOneMemo from './pages/DeepNestingWithOneMemo'
import DeepNestingWithAllMemo from './pages/DeepNestingWithAllMemo'
import MultiUpdateWithUseState from './pages/MultiUpdateWithUseState'
import MultiUpdateWithUseReducer from './pages/MultiUpdateWithUseReducer'
import FutureAutomaticBatching from './pages/FutureAutomaticBatching'
import FutureStartTransition from './pages/FutureStartTransition'
import InitUseState from './pages/InitUseState'
import InitUseStateWithCallback from './pages/InitUseStateWithCallback'

function App() { 
  const routes = [
    { path: "/example11", component: SiblingComponentWithoutMemo, name: SiblingComponentWithoutMemo.name },
    { path: "/example12", component: SiblingComponentWithMemo, name: SiblingComponentWithMemo.name },
    { path: "/example21", component: ReactQuery, name: ReactQuery.name },
    { path: "/example22", component: ReactQueryWithConditions, name: ReactQueryWithConditions.name },
    { path: "/example23", component: ReactQueryWithSuspense, name: ReactQueryWithSuspense.name },
    { path: "/example31", component: UserContextExample, name: UserContextExample.name },
    { path: "/example32", component: UserContextExampleWithMemo, name: UserContextExampleWithMemo.name },
    { path: "/example33", component: UserContextExampleWithMemoValue, name: UserContextExampleWithMemoValue.name },
    { path: "/example41", component: DeepNesting, name: DeepNesting.name },
    { path: "/example42", component: DeepNestingWithOneMemo, name: DeepNestingWithOneMemo.name },
    { path: "/example43", component: DeepNestingWithAllMemo, name: DeepNestingWithAllMemo.name },
    { path: "/example51", component: MultiUpdateWithUseState, name: MultiUpdateWithUseState.name },
    { path: "/example52", component: MultiUpdateWithUseReducer, name: MultiUpdateWithUseReducer.name },
    { path: "/example61", component: MultiUpdateWithUseReducer, name: MultiUpdateWithUseReducer.name },
    { path: "/example62", component: FutureAutomaticBatching, name: FutureAutomaticBatching.name },
    { path: "/example62", component: FutureStartTransition, name: FutureStartTransition.name },
    { path: "/example71", component: InitUseState, name: InitUseState.name },
    { path: "/example72", component: InitUseStateWithCallback, name: InitUseStateWithCallback.name },
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
