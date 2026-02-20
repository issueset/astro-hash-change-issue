import { lazy, Suspense } from "react";

const ReactComponent91 = lazy(() => import("./react-component-91.tsx"));

export default function ReactComponent91Lazy() {
  return (
    <Suspense fallback={<div>Loading 91...</div>}>
      <ReactComponent91 />
    </Suspense>
  );
}
