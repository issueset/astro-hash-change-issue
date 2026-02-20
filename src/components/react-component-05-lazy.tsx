import { lazy, Suspense } from "react";

const ReactComponent05 = lazy(() => import("./react-component-05.tsx"));

export default function ReactComponent05Lazy() {
  return (
    <Suspense fallback={<div>Loading 05...</div>}>
      <ReactComponent05 />
    </Suspense>
  );
}
