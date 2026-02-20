import { lazy, Suspense } from "react";

const ReactComponent21 = lazy(() => import("./react-component-21.tsx"));

export default function ReactComponent21Lazy() {
  return (
    <Suspense fallback={<div>Loading 21...</div>}>
      <ReactComponent21 />
    </Suspense>
  );
}
