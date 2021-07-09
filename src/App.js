import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation'
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
import ReallyHeavyCalculation from './pages/ReallyHeavyCalculation'
import ReallyHeavyCalculationWithinWorker from './pages/ReallyHeavyCalculationWithinWorker'
import SlowQuery from './pages/SlowQuery'
import SlowQueryWithPreFetch from './pages/SlowQueryWithPreFetch'
import SlowQueryWithPrediction from './pages/SlowQueryWithPrediction'
import SlowQueryWithPredictionButtons from './pages/SlowQueryWithPredictionButtons'
import Scroll from './pages/Scroll'
import ScrollWithLazyLoad from './pages/ScrollWithLazyLoad'

  const routes = [
    { component: SiblingComponentWithoutMemo, name: SiblingComponentWithoutMemo.name },
    { component: SiblingComponentWithMemo, name: SiblingComponentWithMemo.name },
    { component: ReactQuery, name: ReactQuery.name },
    { component: ReactQueryWithConditions, name: ReactQueryWithConditions.name },
    { component: ReactQueryWithSuspense, name: ReactQueryWithSuspense.name },
    { component: UserContextExample, name: UserContextExample.name },
    { component: UserContextExampleWithMemo, name: UserContextExampleWithMemo.name },
    { component: UserContextExampleWithMemoValue, name: UserContextExampleWithMemoValue.name },
    { component: DeepNesting, name: DeepNesting.name },
    { component: DeepNestingWithOneMemo, name: DeepNestingWithOneMemo.name },
    { component: DeepNestingWithAllMemo, name: DeepNestingWithAllMemo.name },
    { component: MultiUpdateWithUseState, name: MultiUpdateWithUseState.name },
    { component: MultiUpdateWithUseReducer, name: MultiUpdateWithUseReducer.name },
    { component: FutureAutomaticBatching, name: FutureAutomaticBatching.name },
    { component: FutureStartTransition, name: FutureStartTransition.name },
    { component: InitUseState, name: InitUseState.name },
    { component: InitUseStateWithCallback, name: InitUseStateWithCallback.name },
    { component: ReallyHeavyCalculation, name: ReallyHeavyCalculation.name },
    { component: ReallyHeavyCalculationWithinWorker, name: ReallyHeavyCalculationWithinWorker.name },
    { component: SlowQuery, name: SlowQuery.name },
    { component: SlowQueryWithPreFetch, name: SlowQueryWithPreFetch.name },
    { component: SlowQueryWithPrediction, name: SlowQueryWithPrediction.name },
    { component: SlowQueryWithPredictionButtons, name: SlowQueryWithPredictionButtons.name },
    { component: Scroll, name: Scroll.name },
    { component: ScrollWithLazyLoad, name: ScrollWithLazyLoad.name },
  ]

function App() { 
  return (
    <Router>
        <Navigation />
        <Switch>
            <Route path="/" exact>
              <nav>
                <ul>
                  {routes.map((route, index) => (
                    <li key={`/example-${index + 1}`}>
                      <Link to={`/example-${index + 1}`}>{route.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Route>
           {routes.map((route, index) => (
              <Route key={route.path} path={`/example-${index + 1}`} component={route.component} />
            ))}
        </Switch>
    </Router>
  );
}

export default App;
