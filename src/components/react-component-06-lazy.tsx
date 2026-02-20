import { lazy, Suspense } from "react";

const ReactComponent06 = lazy(() => import("./react-component-06.tsx"));

export default function ReactComponent06Lazy() {
  return (
    <Suspense fallback={<div>Loading 06...</div>}>
      <ReactComponent06 />
    </Suspense>
  );
}
