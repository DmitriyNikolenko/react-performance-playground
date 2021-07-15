import { useEffect, useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { longTask } from "../utils/longTask";

export default function TwoTasksPage() {
  return (
    <>
      <h1>"12.1 Типа рисуем карту и статистику"</h1>
      <main>
        <section>
          <TwoTasks />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const TwoTasks = () => {
  const [isShowed, setIsShowed] = useState(false);

  const [regionId, setRegionId] = useState(30);

  return (
    <>
      <div>
        <p>Current region is {regionId}</p>
        <button onClick={() => setRegionId(20)}>region ID is 20</button>
        <button onClick={() => setRegionId(25)}>region ID is 25</button>
        <button onClick={() => setRegionId(30)}>region ID is 30</button>
      </div>
      <br />
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? (
        <>
          <RegionMap regionId={regionId} />
          <RegionStat regionId={regionId} />
        </>
      ) : (
        <p>спрятано</p>
      )}
    </>
  );
};

const RegionMap = ({ regionId }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
    setResult(longTask(regionId * 200000));
  }, [regionId]);

  return (
    <>
      <h4>Region map</h4>
      <p>{result ? `Map for region ${regionId} is ${result}` : "Loading..."}</p>
      <Colorizer />
    </>
  );
};

const RegionStat = ({ regionId }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
    setResult(longTask(regionId * 200000));
  }, [regionId]);

  return (
    <>
      <h4>Region stat</h4>
      <p>
        {result ? `Stat for region ${regionId} is ${result}` : "Loading..."}
      </p>
      <Colorizer />
    </>
  );
};

const code = `
const TwoTasks = () => {
  const [regionId, setRegionId] = useState(10);

  return (
    <>
      <RegionMap regionId={regionId} />
      <RegionStat regionId={regionId} />
    </>
  );

};

const RegionMap = ({ regionId }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    buildMapForRegion(regionId)
  }, [regionId])

  return (
    <>
      <h4>Region map</h4>
      <p>{result || "Loading..."}</p>
    </>
  );
}

const RegionStat = ({ regionId }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    buildStatForRegion(regionId)
  }, [regionId])

  return (
    <>
      <h4>Region stat</h4>
      <p>{result || "Loading..."}</p>
    </>
  );
}
`;
