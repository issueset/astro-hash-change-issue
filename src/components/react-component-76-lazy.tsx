import { lazy, Suspense } from "react";

const ReactComponent76 = lazy(() => import("./react-component-76.tsx"));

export default function ReactComponent76Lazy() {
  return (
    <Suspense fallback={<div>Loading 76...</div>}>
      <ReactComponent76 />
    </Suspense>
  );
}
