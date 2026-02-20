import { lazy, Suspense } from "react";

const ReactComponent03 = lazy(() => import("./react-component-03.tsx"));

export default function ReactComponent03Lazy() {
  return (
    <Suspense fallback={<div>Loading 03...</div>}>
      <ReactComponent03 />
    </Suspense>
  );
}
