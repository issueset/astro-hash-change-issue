import { lazy, Suspense } from "react";

const ReactComponent01 = lazy(() => import("./react-component-01.tsx"));

export default function ReactComponent01Lazy() {
  return (
    <Suspense fallback={<div>Loading 01...</div>}>
      <ReactComponent01 />
    </Suspense>
  );
}
