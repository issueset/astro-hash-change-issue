import { lazy, Suspense } from "react";

const ReactComponent90 = lazy(() => import("./react-component-90.tsx"));

export default function ReactComponent90Lazy() {
  return (
    <Suspense fallback={<div>Loading 90...</div>}>
      <ReactComponent90 />
    </Suspense>
  );
}
