import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import SiblingComponentWithMemo from "./pages/SiblingComponentWithMemo";
import SiblingComponentWithoutMemo from "./pages/SiblingComponentWithoutMemo";
import SiblingMemoComponentWithCallback from "./pages/SiblingMemoComponentWithCallback";
import SiblingMemoComponentWithMemoizedCallback from "./pages/SiblingMemoComponentWithMemoizedCallback";
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
import TwoTasks from "./pages/TwoTasks";
import TwoTasksWithIdleCallback from "./pages/TwoTasksWithIdleCallback";
import FollowMouse from "./pages/FollowMouse";
import FollowMouseWithThrottle from "./pages/FollowMouseWithThrottle";
import FollowMouseWithoutUnsubscribe from "./pages/FollowMouseWithoutUnsubscribe";
import RenderArray from "./pages/RenderArray";
import RenderArrayWithKeys from "./pages/RenderArrayWithKeys";

const routes = [
  // Оптимизация мемоизацией.

  { component: SyncCalculation, name: "1. Посчитаем что-небудь" },
  {
    component: SyncCalculationWithUseMemo,
    name: "1.1 Посчитаем что-небудь только тогда когда нужно",
  },
  {
    component: SyncCalculationWithFastMemo,
    name: "1.2 Попробуем продвинутую мемоизацию",
  },

  {
    component: SiblingComponentWithoutMemo,
    name: "2.1 Просто соседние компоненты",
  },
  {
    component: SiblingComponentWithMemo,
    name: "2.2 Защитим соседа от перерисовок",
  },
  {
    component: SiblingMemoComponentWithCallback,
    name: "3.1 Расширим функционал соседа",
  },
  {
    component: SiblingMemoComponentWithMemoizedCallback,
    name: "3.2 Отнесёмся к соседу с уважением",
  },

  // Оптимизация вложенностью.

  { component: DeepNesting, name: "4.1 Вложенные компоненты" },
  {
    component: DeepNestingWithOneMemo,
    name: "4.2 Вложенные компоненты с одним memo",
  },
  {
    component: DeepNestingWithAllMemo,
    name: "4.3 Вложенные компоненты со всеми memo",
  },
  {
    component: DeepNestingWithChildren,
    name: "4.4 Передача компонентов через props",
  },

  // Suspense.

  { component: ReactQuery, name: "5.1 Запрос на API" },
  {
    component: ReactQueryWithConditions,
    name: "5.2 Запрос на API с проверкой",
  },
  { component: ReactQueryWithSuspense, name: "5.3 Suspense!" },

  // Не тупить.

  { component: RenderArray, name: "Bonus. Покажем массив имён" },
  {
    component: RenderArrayWithKeys,
    name: "Bonus. НЕ ИСПОЛЬЗУЙТЕ INDEX МАССИВА КАК КЛЮЧ !!!",
  },

  { component: InitUseState, name: "6.1 Инициализируем useState" },
  {
    component: InitUseStateWithCallback,
    name: "6.2 Инициализируем useState правильно",
  },

  { component: MultiUpdateWithUseState, name: "7.1 Множество setState'ов" },
  {
    component: MultiUpdateWithUseReducer,
    name: "7.2 Меньше обновлений",
  },

  { component: UserContextExample, name: "8.1 Используем контекст" },
  {
    component: UserContextExampleWithMemo,
    name: "8.2 Пробуем защититься от обновлений контекста",
  },
  {
    component: UserContextExampleWithMemoValue,
    name: "8.3 Передаём мемоизированный контекст",
  },

  { component: ContextAsGlobalState, name: "9.1 К чёрту Redux!" },
  {
    component: ContextAsGlobalStateWithSelector,
    name: "9.2 К чёрту Redux?...",
  },

  // Extra инструменты

  { component: FollowMouse, name: "10.1 Будем следить за мышью" },
  {
    component: FollowMouseWithThrottle,
    name: "10.2 Будем следить за мышью аккуратнее",
  },
  {
    component: FollowMouseWithoutUnsubscribe,
    name: "10.3 P.S. Забыл отписаться от события",
  },

  { component: Scroll, name: "11.1 Поскроллим страницу" },
  { component: ScrollWithLazyLoad, name: "11.2 Будем подгружать лениво" },

  { component: TwoTasks, name: "12.1 Типа рисуем карту и статистику" },
  {
    component: TwoTasksWithIdleCallback,
    name: "12.2 Попробуем приоритезировать рассчёты",
  },

  { component: ReallyHeavyCalculation, name: "13.1 Очень тяжёлые вычисления" },
  {
    component: ReallyHeavyCalculationWithinWorker,
    name: "13.2 Вынесем тяжёлые вычисления подальше",
  },

  { component: SlowQuery, name: "14.1 API работает не быстро" },
  { component: SlowQueryWithPreFetch, name: "14.2 А что если так?" },
  { component: SlowQueryWithPrediction, name: "14.3 А если ещё вот так?" },
  {
    component: SlowQueryWithPredictionButtons,
    name: "14.4 Магия!",
  },

  // Future.

  {
    component: FutureAutomaticBatching,
    name: "15.1 Будущее. Автоматический батчинг",
  },
  { component: FutureStartTransition, name: "15.2 Будущее. Переходы" },
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
                <li key={route.name}>
                  <Link to={`/example-${index + 1}`}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Route>
        {routes.map((route, index) => (
          <Route
            key={route.name}
            path={`/example-${index + 1}`}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
