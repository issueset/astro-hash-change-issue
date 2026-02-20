import { lazy, Suspense } from "react";

const ReactComponent13 = lazy(() => import("./react-component-13.tsx"));

export default function ReactComponent13Lazy() {
  return (
    <Suspense fallback={<div>Loading 13...</div>}>
      <ReactComponent13 />
    </Suspense>
  );
}
