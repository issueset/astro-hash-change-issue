import { lazy, Suspense } from "react";

const ReactComponent46 = lazy(() => import("./react-component-46.tsx"));

export default function ReactComponent46Lazy() {
  return (
    <Suspense fallback={<div>Loading 46...</div>}>
      <ReactComponent46 />
    </Suspense>
  );
}
