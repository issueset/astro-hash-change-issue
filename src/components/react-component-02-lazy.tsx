import { lazy, Suspense } from "react";

const ReactComponent02 = lazy(() => import("./react-component-02.tsx"));

export default function ReactComponent02Lazy() {
  return (
    <Suspense fallback={<div>Loading 02...</div>}>
      <ReactComponent02 />
    </Suspense>
  );
}
