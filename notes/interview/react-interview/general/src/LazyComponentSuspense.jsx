import React, { lazy } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
