import { lazy, Suspense } from "react";

const ReactComponent04 = lazy(() => import("./react-component-04.tsx"));

export default function ReactComponent04Lazy() {
  return (
    <Suspense fallback={<div>Loading 04...</div>}>
      <ReactComponent04 />
    </Suspense>
  );
}
