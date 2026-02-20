import { lazy, Suspense } from "react";

const ReactComponent10 = lazy(() => import("./react-component-10.tsx"));

export default function ReactComponent10Lazy() {
  return (
    <Suspense fallback={<div>Loading 10...</div>}>
      <ReactComponent10 />
    </Suspense>
  );
}
