import { lazy, Suspense } from "react";

const ReactComponent44 = lazy(() => import("./react-component-44.tsx"));

export default function ReactComponent44Lazy() {
  return (
    <Suspense fallback={<div>Loading 44...</div>}>
      <ReactComponent44 />
    </Suspense>
  );
}
