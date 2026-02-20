import { lazy, Suspense } from "react";

const ReactComponent27 = lazy(() => import("./react-component-27.tsx"));

export default function ReactComponent27Lazy() {
  return (
    <Suspense fallback={<div>Loading 27...</div>}>
      <ReactComponent27 />
    </Suspense>
  );
}
