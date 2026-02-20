import { lazy, Suspense } from "react";

const ReactComponent82 = lazy(() => import("./react-component-82.tsx"));

export default function ReactComponent82Lazy() {
  return (
    <Suspense fallback={<div>Loading 82...</div>}>
      <ReactComponent82 />
    </Suspense>
  );
}
