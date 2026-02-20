import { lazy, Suspense } from "react";

const ReactComponent95 = lazy(() => import("./react-component-95.tsx"));

export default function ReactComponent95Lazy() {
  return (
    <Suspense fallback={<div>Loading 95...</div>}>
      <ReactComponent95 />
    </Suspense>
  );
}
