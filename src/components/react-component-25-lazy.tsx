import { lazy, Suspense } from "react";

const ReactComponent25 = lazy(() => import("./react-component-25.tsx"));

export default function ReactComponent25Lazy() {
  return (
    <Suspense fallback={<div>Loading 25...</div>}>
      <ReactComponent25 />
    </Suspense>
  );
}
