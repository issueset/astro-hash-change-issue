import { lazy, Suspense } from "react";

const ReactComponent87 = lazy(() => import("./react-component-87.tsx"));

export default function ReactComponent87Lazy() {
  return (
    <Suspense fallback={<div>Loading 87...</div>}>
      <ReactComponent87 />
    </Suspense>
  );
}
