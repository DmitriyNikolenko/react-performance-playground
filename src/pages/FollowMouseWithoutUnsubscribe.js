import { useEffect, useRef, useState } from "react";
import { SyntaxHighlighter } from "../components/SyntaxHighlighter";
import { Colorizer } from "../components/Colorizer";
import { longTask } from "../utils/longTask";

export default function FollowMouseWithoutUnsubscribePage() {
  return (
    <>
      <h1>"10.3 P.S. Забыл отписаться от события"</h1>
      <main>
        <section>
          <FollowMouseWithoutUnsubscribe />
        </section>
        <aside>
          <SyntaxHighlighter>{code}</SyntaxHighlighter>
        </aside>
      </main>
    </>
  );
}

const FollowMouseWithoutUnsubscribe = () => {
  const mapRef = useRef();
  const [[x, y, coordsInfo], setCoords] = useState([0, 0, 0]);

  const mouseMoveHandler = (event) => {
    const coordsInfo = longTask((x + y) * 80);
    setCoords([event.x, event.y, coordsInfo]);
  };

  useEffect(() => {
    mapRef.current.addEventListener("mousemove", mouseMoveHandler);
    // return () => mapRef.current?.removeEventListener?.("mousemove", mouseMoveHandler)
  }, [mapRef.current, x]);

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
const MapShower = () => {
  const mapRef = useRef()
  const [[x, y, coordsInfo], setCoords] = useState([0, 0, 0]);
  const mouseMoveHandler = event => {
    const coordsInfo = getCoordsInfo(x, y) // rather heavy calculation
    setCoords([event.x, event.y, coordsInfo])
  }

  useEffect(() => {
    mapRef.current.addEventListener("mousemove", mouseMoveHandler)
    // return () => mapRef.current?.removeEventListener?.("mousemove", mouseMoveHandler)
  }, [mapRef.current, x])
 
  return (
    <>
      <CoordsInfo />   
      <Map />
    </>
  );
};
`;
