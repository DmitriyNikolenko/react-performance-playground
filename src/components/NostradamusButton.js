import futurelink from "futurelink";
import React, { useState, useRef, useEffect } from "react";

export default function NostradamusButton() {
  const [isFuture, setIsFuture] = useState(false);
  const buttonRef = useRef();

  useEffect(
    () =>
      futurelink({
        links: [buttonRef.current],
        future: (link) => setIsFuture(true),
      }),
    [buttonRef]
  );

  return (
    <button
      ref={buttonRef}
      style={{
        backgroundColor: isFuture ? "green" : undefined,
        width: 100,
        height: 60,
      }}
    >
      Nostradamus <br />
      Button
    </button>
  );
}
