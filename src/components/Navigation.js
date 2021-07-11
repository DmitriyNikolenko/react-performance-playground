import React from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const history = useHistory();
  const currentExample =
    parseInt(location.pathname.match(/\/example\-(.+)$/)?.[1]) || 0;
  const previousExample = currentExample - 1;
  const nextExample = currentExample + 1;

  return (
    <nav>
      <button
        onClick={() =>
          previousExample < 1
            ? history.push(`/`)
            : history.push(`/example-${previousExample}`)
        }
      >
        Previous
      </button>
      <button onClick={() => history.push(`/example-${nextExample}`)}>
        Next
      </button>
    </nav>
  );
}
