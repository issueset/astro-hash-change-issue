import { lazy, Suspense } from "react";

const ReactComponent74 = lazy(() => import("./react-component-74.tsx"));

export default function ReactComponent74Lazy() {
  return (
    <Suspense fallback={<div>Loading 74...</div>}>
      <ReactComponent74 />
    </Suspense>
  );
}
