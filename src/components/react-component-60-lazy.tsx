import { lazy, Suspense } from "react";

const ReactComponent60 = lazy(() => import("./react-component-60.tsx"));

export default function ReactComponent60Lazy() {
  return (
    <Suspense fallback={<div>Loading 60...</div>}>
      <ReactComponent60 />
    </Suspense>
  );
}
