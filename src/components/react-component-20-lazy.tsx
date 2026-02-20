import { lazy, Suspense } from "react";

const ReactComponent20 = lazy(() => import("./react-component-20.tsx"));

export default function ReactComponent20Lazy() {
  return (
    <Suspense fallback={<div>Loading 20...</div>}>
      <ReactComponent20 />
    </Suspense>
  );
}
