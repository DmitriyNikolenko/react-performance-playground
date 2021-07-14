import { useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { HeavyComponent } from "../components/HeavyComponent";
import LazyLoad from "react-lazyload";

export default function ScrollWithLazyLoadPage() {
  return (
    <>
      <h1>ScrollWithLazyLoad</h1>
      <main>
        <section>
          <ScrollWithLazyLoad />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[2, 6,8]}>
            {code}
          </SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const ScrollWithLazyLoad = () => {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowed((isShowed) => !isShowed)}>
        Show / hide
      </button>
      {isShowed ? (
        Array(10)
          .fill(null)
          .map((_, index) => (
            <LazyLoad key={index} height={300} once>
              <HeavySection key={index} index={index} />
            </LazyLoad>
          ))
      ) : (
        <p>спрятано</p>
      )}
    </>
  );
};

const HeavySection = ({ index }) => (
  <div style={{ height: 300 }}>
    <h2 style={{ textAlign: "center" }}>{index}</h2>
    <HeavyComponent delay={150} />
    <Colorizer />
  </div>
);

const code = `
import LazyLoad from 'react-lazyload';

const ScrollWithLazyLoad = () => {
  return list.map((_, index) => (
    <LazyLoad key={index} height={300} once>
      <HeavySection key={index} index={index} />
    </LazyLoad>
  )
}
`;
