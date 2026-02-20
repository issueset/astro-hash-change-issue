import { lazy, Suspense } from "react";

const ReactComponent32 = lazy(() => import("./react-component-32.tsx"));

export default function ReactComponent32Lazy() {
  return (
    <Suspense fallback={<div>Loading 32...</div>}>
      <ReactComponent32 />
    </Suspense>
  );
}
