import { lazy, Suspense } from "react";

const ReactComponent64 = lazy(() => import("./react-component-64.tsx"));

export default function ReactComponent64Lazy() {
  return (
    <Suspense fallback={<div>Loading 64...</div>}>
      <ReactComponent64 />
    </Suspense>
  );
}
