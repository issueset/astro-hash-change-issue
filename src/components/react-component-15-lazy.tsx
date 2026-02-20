import { lazy, Suspense } from "react";

const ReactComponent15 = lazy(() => import("./react-component-15.tsx"));

export default function ReactComponent15Lazy() {
  return (
    <Suspense fallback={<div>Loading 15...</div>}>
      <ReactComponent15 />
    </Suspense>
  );
}
