import { lazy, Suspense } from "react";

const ReactComponent99 = lazy(() => import("./react-component-99.tsx"));

export default function ReactComponent99Lazy() {
  return (
    <Suspense fallback={<div>Loading 99...</div>}>
      <ReactComponent99 />
    </Suspense>
  );
}
