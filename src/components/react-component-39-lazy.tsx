import { lazy, Suspense } from "react";

const ReactComponent39 = lazy(() => import("./react-component-39.tsx"));

export default function ReactComponent39Lazy() {
  return (
    <Suspense fallback={<div>Loading 39...</div>}>
      <ReactComponent39 />
    </Suspense>
  );
}
