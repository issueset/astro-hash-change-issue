import { lazy, Suspense } from "react";

const ReactComponent17 = lazy(() => import("./react-component-17.tsx"));

export default function ReactComponent17Lazy() {
  return (
    <Suspense fallback={<div>Loading 17...</div>}>
      <ReactComponent17 />
    </Suspense>
  );
}
