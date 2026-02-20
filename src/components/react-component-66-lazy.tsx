import { lazy, Suspense } from "react";

const ReactComponent66 = lazy(() => import("./react-component-66.tsx"));

export default function ReactComponent66Lazy() {
  return (
    <Suspense fallback={<div>Loading 66...</div>}>
      <ReactComponent66 />
    </Suspense>
  );
}
