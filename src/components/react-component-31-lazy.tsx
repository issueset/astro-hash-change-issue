import { lazy, Suspense } from "react";

const ReactComponent31 = lazy(() => import("./react-component-31.tsx"));

export default function ReactComponent31Lazy() {
  return (
    <Suspense fallback={<div>Loading 31...</div>}>
      <ReactComponent31 />
    </Suspense>
  );
}
