import { lazy, Suspense } from "react";

const ReactComponent36 = lazy(() => import("./react-component-36.tsx"));

export default function ReactComponent36Lazy() {
  return (
    <Suspense fallback={<div>Loading 36...</div>}>
      <ReactComponent36 />
    </Suspense>
  );
}
