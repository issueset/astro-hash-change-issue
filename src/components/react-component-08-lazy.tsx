import { lazy, Suspense } from "react";

const ReactComponent08 = lazy(() => import("./react-component-08.tsx"));

export default function ReactComponent08Lazy() {
  return (
    <Suspense fallback={<div>Loading 08...</div>}>
      <ReactComponent08 />
    </Suspense>
  );
}
