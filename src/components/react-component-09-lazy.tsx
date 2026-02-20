import { lazy, Suspense } from "react";

const ReactComponent09 = lazy(() => import("./react-component-09.tsx"));

export default function ReactComponent09Lazy() {
  return (
    <Suspense fallback={<div>Loading 09...</div>}>
      <ReactComponent09 />
    </Suspense>
  );
}
