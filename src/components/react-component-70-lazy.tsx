import { lazy, Suspense } from "react";

const ReactComponent70 = lazy(() => import("./react-component-70.tsx"));

export default function ReactComponent70Lazy() {
  return (
    <Suspense fallback={<div>Loading 70...</div>}>
      <ReactComponent70 />
    </Suspense>
  );
}
