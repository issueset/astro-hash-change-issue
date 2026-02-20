import { lazy, Suspense } from "react";

const ReactComponent75 = lazy(() => import("./react-component-75.tsx"));

export default function ReactComponent75Lazy() {
  return (
    <Suspense fallback={<div>Loading 75...</div>}>
      <ReactComponent75 />
    </Suspense>
  );
}
