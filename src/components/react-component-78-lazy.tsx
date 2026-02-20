import { lazy, Suspense } from "react";

const ReactComponent78 = lazy(() => import("./react-component-78.tsx"));

export default function ReactComponent78Lazy() {
  return (
    <Suspense fallback={<div>Loading 78...</div>}>
      <ReactComponent78 />
    </Suspense>
  );
}
