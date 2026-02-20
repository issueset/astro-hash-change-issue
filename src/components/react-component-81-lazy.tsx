import { lazy, Suspense } from "react";

const ReactComponent81 = lazy(() => import("./react-component-81.tsx"));

export default function ReactComponent81Lazy() {
  return (
    <Suspense fallback={<div>Loading 81...</div>}>
      <ReactComponent81 />
    </Suspense>
  );
}
