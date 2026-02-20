import { lazy, Suspense } from "react";

const ReactComponent24 = lazy(() => import("./react-component-24.tsx"));

export default function ReactComponent24Lazy() {
  return (
    <Suspense fallback={<div>Loading 24...</div>}>
      <ReactComponent24 />
    </Suspense>
  );
}
