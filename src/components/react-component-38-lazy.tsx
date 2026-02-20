import { lazy, Suspense } from "react";

const ReactComponent38 = lazy(() => import("./react-component-38.tsx"));

export default function ReactComponent38Lazy() {
  return (
    <Suspense fallback={<div>Loading 38...</div>}>
      <ReactComponent38 />
    </Suspense>
  );
}
