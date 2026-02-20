import { lazy, Suspense } from "react";

const ReactComponent80 = lazy(() => import("./react-component-80.tsx"));

export default function ReactComponent80Lazy() {
  return (
    <Suspense fallback={<div>Loading 80...</div>}>
      <ReactComponent80 />
    </Suspense>
  );
}
