import { lazy, Suspense } from "react";

const ReactComponent86 = lazy(() => import("./react-component-86.tsx"));

export default function ReactComponent86Lazy() {
  return (
    <Suspense fallback={<div>Loading 86...</div>}>
      <ReactComponent86 />
    </Suspense>
  );
}
