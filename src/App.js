import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import SiblingComponentWithMemo from "./pages/SiblingComponentWithMemo";
import SiblingComponentWithoutMemo from "./pages/SiblingComponentWithoutMemo";
import SyncCalculation from "./pages/SyncCalculation";
import SyncCalculationWithUseMemo from "./pages/SyncCalculationWithUseMemo";
import SyncCalculationWithFastMemo from "./pages/SyncCalculationWithFastMemo";
import ReactQuery from "./pages/ReactQuery";
import ReactQueryWithConditions from "./pages/ReactQueryWithConditions";
import ReactQueryWithSuspense from "./pages/ReactQueryWithSuspense";
import UserContextExample from "./pages/UserContextExample";
import UserContextExampleWithMemo from "./pages/UserContextExampleWithMemo";
import UserContextExampleWithMemoValue from "./pages/UserContextExampleWithMemoValue";
import DeepNesting from "./pages/DeepNesting";
import DeepNestingWithOneMemo from "./pages/DeepNestingWithOneMemo";
import DeepNestingWithAllMemo from "./pages/DeepNestingWithAllMemo";
import DeepNestingWithChildren from "./pages/DeepNestingWithChildren";
import MultiUpdateWithUseState from "./pages/MultiUpdateWithUseState";
import MultiUpdateWithUseReducer from "./pages/MultiUpdateWithUseReducer";
import FutureAutomaticBatching from "./pages/FutureAutomaticBatching";
import FutureStartTransition from "./pages/FutureStartTransition";
import InitUseState from "./pages/InitUseState";
import InitUseStateWithCallback from "./pages/InitUseStateWithCallback";
import ReallyHeavyCalculation from "./pages/ReallyHeavyCalculation";
import ReallyHeavyCalculationWithinWorker from "./pages/ReallyHeavyCalculationWithinWorker";
import SlowQuery from "./pages/SlowQuery";
import SlowQueryWithPreFetch from "./pages/SlowQueryWithPreFetch";
import SlowQueryWithPrediction from "./pages/SlowQueryWithPrediction";
import SlowQueryWithPredictionButtons from "./pages/SlowQueryWithPredictionButtons";
import Scroll from "./pages/Scroll";
import ScrollWithLazyLoad from "./pages/ScrollWithLazyLoad";
import ContextAsGlobalState from "./pages/ContextAsGlobalState";
import ContextAsGlobalStateWithSelector from "./pages/ContextAsGlobalStateWithSelector";

const routes = [
  // Основы мемоизации.
  { component: SyncCalculation, name: SyncCalculation.name },
  {
    component: SyncCalculationWithUseMemo,
    name: SyncCalculationWithUseMemo.name,
  },
  {
    component: SyncCalculationWithFastMemo,
    name: SyncCalculationWithFastMemo.name,
  },

  {
    component: SiblingComponentWithoutMemo,
    name: SiblingComponentWithoutMemo.name,
  },
  { component: SiblingComponentWithMemo, name: SiblingComponentWithMemo.name },

  { component: UserContextExample, name: UserContextExample.name },
  {
    component: UserContextExampleWithMemo,
    name: UserContextExampleWithMemo.name,
  },
  {
    component: UserContextExampleWithMemoValue,
    name: UserContextExampleWithMemoValue.name,
  },

  // Управление вложенностью.

  { component: DeepNesting, name: DeepNesting.name },
  { component: DeepNestingWithOneMemo, name: DeepNestingWithOneMemo.name },
  { component: DeepNestingWithAllMemo, name: DeepNestingWithAllMemo.name },
  { component: DeepNestingWithChildren, name: DeepNestingWithChildren.name },

  // Suspense.

  { component: ReactQuery, name: ReactQuery.name },
  { component: ReactQueryWithConditions, name: ReactQueryWithConditions.name },
  { component: ReactQueryWithSuspense, name: ReactQueryWithSuspense.name },

  // Не тупить.

  { component: MultiUpdateWithUseState, name: MultiUpdateWithUseState.name },
  {
    component: MultiUpdateWithUseReducer,
    name: MultiUpdateWithUseReducer.name,
  },

  { component: InitUseState, name: InitUseState.name },
  { component: InitUseStateWithCallback, name: InitUseStateWithCallback.name },

  { component: ContextAsGlobalState, name: ContextAsGlobalState.name },
  {
    component: ContextAsGlobalStateWithSelector,
    name: ContextAsGlobalStateWithSelector.name,
  },

  // Extra инструменты

  { component: Scroll, name: Scroll.name },
  { component: ScrollWithLazyLoad, name: ScrollWithLazyLoad.name },

  { component: ReallyHeavyCalculation, name: ReallyHeavyCalculation.name },
  {
    component: ReallyHeavyCalculationWithinWorker,
    name: ReallyHeavyCalculationWithinWorker.name,
  },

  { component: SlowQuery, name: SlowQuery.name },
  { component: SlowQueryWithPreFetch, name: SlowQueryWithPreFetch.name },
  { component: SlowQueryWithPrediction, name: SlowQueryWithPrediction.name },
  {
    component: SlowQueryWithPredictionButtons,
    name: SlowQueryWithPredictionButtons.name,
  },

  // Future.

  { component: FutureAutomaticBatching, name: FutureAutomaticBatching.name },
  { component: FutureStartTransition, name: FutureStartTransition.name },
];

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
          <Route
            key={route.path}
            path={`/example-${index + 1}`}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
