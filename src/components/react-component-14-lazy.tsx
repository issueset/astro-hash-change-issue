import { lazy, Suspense } from "react";

const ReactComponent14 = lazy(() => import("./react-component-14.tsx"));

export default function ReactComponent14Lazy() {
  return (
    <Suspense fallback={<div>Loading 14...</div>}>
      <ReactComponent14 />
    </Suspense>
  );
}
