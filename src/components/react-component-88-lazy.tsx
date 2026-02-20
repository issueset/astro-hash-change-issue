import { lazy, Suspense } from "react";

const ReactComponent88 = lazy(() => import("./react-component-88.tsx"));

export default function ReactComponent88Lazy() {
  return (
    <Suspense fallback={<div>Loading 88...</div>}>
      <ReactComponent88 />
    </Suspense>
  );
}
