import { lazy, Suspense } from "react";

const ReactComponent30 = lazy(() => import("./react-component-30.tsx"));

export default function ReactComponent30Lazy() {
  return (
    <Suspense fallback={<div>Loading 30...</div>}>
      <ReactComponent30 />
    </Suspense>
  );
}
