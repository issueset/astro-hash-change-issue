import { lazy, Suspense } from "react";

const ReactComponent37 = lazy(() => import("./react-component-37.tsx"));

export default function ReactComponent37Lazy() {
  return (
    <Suspense fallback={<div>Loading 37...</div>}>
      <ReactComponent37 />
    </Suspense>
  );
}
