import { lazy, Suspense } from "react";

const ReactComponent73 = lazy(() => import("./react-component-73.tsx"));

export default function ReactComponent73Lazy() {
  return (
    <Suspense fallback={<div>Loading 73...</div>}>
      <ReactComponent73 />
    </Suspense>
  );
}
