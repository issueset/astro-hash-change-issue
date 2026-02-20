import { lazy, Suspense } from "react";

const ReactComponent92 = lazy(() => import("./react-component-92.tsx"));

export default function ReactComponent92Lazy() {
  return (
    <Suspense fallback={<div>Loading 92...</div>}>
      <ReactComponent92 />
    </Suspense>
  );
}
