import { lazy, Suspense } from "react";

const ReactComponent96 = lazy(() => import("./react-component-96.tsx"));

export default function ReactComponent96Lazy() {
  return (
    <Suspense fallback={<div>Loading 96...</div>}>
      <ReactComponent96 />
    </Suspense>
  );
}
