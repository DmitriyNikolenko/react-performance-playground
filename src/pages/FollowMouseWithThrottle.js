import { useCallback, useEffect, useRef, useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { delayTask } from "../utils/delayTask";
import { throttle } from "lodash";

export default function FollowMouseWithThrottlePage() {
  return (
    <>
      <h1>"10.2 Будем следить за мышью аккуратнее"</h1>
      <main>
        <section>
          <FollowMouseWithThrottle />
        </section>
        <aside>
          <SyntaxHighlighter accentedLines={[2, 7, 8, 9, 10]}>
            {code}
          </SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const FollowMouseWithThrottle = () => {
  const mapRef = useRef();
  const [[x, y, coordsInfo], setCoords] = useState([0, 0, 0]);

  const throttledMouseMoveHandler = useCallback(
    throttle((event) => {
      const coordsInfo = setTimeout(() => delayTask(50), 0);
      setCoords([event.x, event.y, coordsInfo]);
    }, 300),
    []
  );

  useEffect(() => {
    mapRef.current.addEventListener("mousemove", throttledMouseMoveHandler);
    return () =>
      mapRef.current?.removeEventListener?.(
        "mousemove",
        throttledMouseMoveHandler
      );
  }, [mapRef.current]);

  return (
    <>
      <p>
        <b>x</b> = {x}
        <b>y</b> = {y}
        <b>info</b> = {coordsInfo}
      </p>

      <div
        ref={mapRef}
        style={{ width: "100%", height: 320, backgroundColor: "lightcoral" }}
      >
        типа это карта
      </div>
      <Colorizer />
    </>
  );
};

const code = `
import { throttle } from "lodash"

const MapShower = () => {
  const mapRef = useRef()
  const [[x, y, coordsInfo], setCoords] = useState([0, 0, 0]);
  const throttledMouseMoveHandler = event => {
    const coordsInfo = getCoordsInfo(x, y) // rather heavy calculation
    setCoords([event.x, event.y, coordsInfo])
  }

  useEffect(() => {
    mapRef.current.addEventListener("mousemove", throttledMouseMoveHandler)
    return () => mapRef.current?.removeEventListener?.("mousemove", throttledMouseMoveHandler)
  }, [mapRef.current])
 
  return (
    <>
      <CoordsInfo />   
      <Map />
    </>
  );
};
`;
