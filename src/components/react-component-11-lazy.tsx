import { lazy, Suspense } from "react";

const ReactComponent11 = lazy(() => import("./react-component-11.tsx"));

export default function ReactComponent11Lazy() {
  return (
    <Suspense fallback={<div>Loading 11...</div>}>
      <ReactComponent11 />
    </Suspense>
  );
}
