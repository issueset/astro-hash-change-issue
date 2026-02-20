import { lazy, Suspense } from "react";

const ReactComponent12 = lazy(() => import("./react-component-12.tsx"));

export default function ReactComponent12Lazy() {
  return (
    <Suspense fallback={<div>Loading 12...</div>}>
      <ReactComponent12 />
    </Suspense>
  );
}
