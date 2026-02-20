import { lazy, Suspense } from "react";

const ReactComponent28 = lazy(() => import("./react-component-28.tsx"));

export default function ReactComponent28Lazy() {
  return (
    <Suspense fallback={<div>Loading 28...</div>}>
      <ReactComponent28 />
    </Suspense>
  );
}
