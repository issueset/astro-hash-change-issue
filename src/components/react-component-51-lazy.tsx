import { lazy, Suspense } from "react";

const ReactComponent51 = lazy(() => import("./react-component-51.tsx"));

export default function ReactComponent51Lazy() {
  return (
    <Suspense fallback={<div>Loading 51...</div>}>
      <ReactComponent51 />
    </Suspense>
  );
}
