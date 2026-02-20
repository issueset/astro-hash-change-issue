import { lazy, Suspense } from "react";

const ReactComponent16 = lazy(() => import("./react-component-16.tsx"));

export default function ReactComponent16Lazy() {
  return (
    <Suspense fallback={<div>Loading 16...</div>}>
      <ReactComponent16 />
    </Suspense>
  );
}
