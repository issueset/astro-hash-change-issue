import { lazy, Suspense } from "react";

const ReactComponent18 = lazy(() => import("./react-component-18.tsx"));

export default function ReactComponent18Lazy() {
  return (
    <Suspense fallback={<div>Loading 18...</div>}>
      <ReactComponent18 />
    </Suspense>
  );
}
