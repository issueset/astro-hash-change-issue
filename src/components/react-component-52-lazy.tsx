import { lazy, Suspense } from "react";

const ReactComponent52 = lazy(() => import("./react-component-52.tsx"));

export default function ReactComponent52Lazy() {
  return (
    <Suspense fallback={<div>Loading 52...</div>}>
      <ReactComponent52 />
    </Suspense>
  );
}
