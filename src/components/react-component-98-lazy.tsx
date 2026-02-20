import { lazy, Suspense } from "react";

const ReactComponent98 = lazy(() => import("./react-component-98.tsx"));

export default function ReactComponent98Lazy() {
  return (
    <Suspense fallback={<div>Loading 98...</div>}>
      <ReactComponent98 />
    </Suspense>
  );
}
