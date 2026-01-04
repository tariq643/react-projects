import React, { lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading....</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
