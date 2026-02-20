import { lazy, Suspense } from "react";

const ReactComponent07 = lazy(() => import("./react-component-07.tsx"));

export default function ReactComponent07Lazy() {
  return (
    <Suspense fallback={<div>Loading 07...</div>}>
      <ReactComponent07 />
    </Suspense>
  );
}
