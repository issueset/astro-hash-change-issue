import { lazy, Suspense } from "react";

const ReactComponent94 = lazy(() => import("./react-component-94.tsx"));

export default function ReactComponent94Lazy() {
  return (
    <Suspense fallback={<div>Loading 94...</div>}>
      <ReactComponent94 />
    </Suspense>
  );
}
