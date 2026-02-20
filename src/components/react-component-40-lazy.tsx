import { lazy, Suspense } from "react";

const ReactComponent40 = lazy(() => import("./react-component-40.tsx"));

export default function ReactComponent40Lazy() {
  return (
    <Suspense fallback={<div>Loading 40...</div>}>
      <ReactComponent40 />
    </Suspense>
  );
}
