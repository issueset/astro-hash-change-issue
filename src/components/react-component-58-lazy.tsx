import { lazy, Suspense } from "react";

const ReactComponent58 = lazy(() => import("./react-component-58.tsx"));

export default function ReactComponent58Lazy() {
  return (
    <Suspense fallback={<div>Loading 58...</div>}>
      <ReactComponent58 />
    </Suspense>
  );
}
