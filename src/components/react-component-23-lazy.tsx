import { lazy, Suspense } from "react";

const ReactComponent23 = lazy(() => import("./react-component-23.tsx"));

export default function ReactComponent23Lazy() {
  return (
    <Suspense fallback={<div>Loading 23...</div>}>
      <ReactComponent23 />
    </Suspense>
  );
}
