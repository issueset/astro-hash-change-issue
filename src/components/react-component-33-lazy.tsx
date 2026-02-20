import { lazy, Suspense } from "react";

const ReactComponent33 = lazy(() => import("./react-component-33.tsx"));

export default function ReactComponent33Lazy() {
  return (
    <Suspense fallback={<div>Loading 33...</div>}>
      <ReactComponent33 />
    </Suspense>
  );
}
