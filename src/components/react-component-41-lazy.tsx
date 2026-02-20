import { lazy, Suspense } from "react";

const ReactComponent41 = lazy(() => import("./react-component-41.tsx"));

export default function ReactComponent41Lazy() {
  return (
    <Suspense fallback={<div>Loading 41...</div>}>
      <ReactComponent41 />
    </Suspense>
  );
}
