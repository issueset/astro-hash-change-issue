import { lazy, Suspense } from "react";

const ReactComponent72 = lazy(() => import("./react-component-72.tsx"));

export default function ReactComponent72Lazy() {
  return (
    <Suspense fallback={<div>Loading 72...</div>}>
      <ReactComponent72 />
    </Suspense>
  );
}
