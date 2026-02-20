import { lazy, Suspense } from "react";

const ReactComponent45 = lazy(() => import("./react-component-45.tsx"));

export default function ReactComponent45Lazy() {
  return (
    <Suspense fallback={<div>Loading 45...</div>}>
      <ReactComponent45 />
    </Suspense>
  );
}
