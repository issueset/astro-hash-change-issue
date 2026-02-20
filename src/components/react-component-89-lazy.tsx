import { lazy, Suspense } from "react";

const ReactComponent89 = lazy(() => import("./react-component-89.tsx"));

export default function ReactComponent89Lazy() {
  return (
    <Suspense fallback={<div>Loading 89...</div>}>
      <ReactComponent89 />
    </Suspense>
  );
}
