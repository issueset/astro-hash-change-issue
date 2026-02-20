import { lazy, Suspense } from "react";

const ReactComponent77 = lazy(() => import("./react-component-77.tsx"));

export default function ReactComponent77Lazy() {
  return (
    <Suspense fallback={<div>Loading 77...</div>}>
      <ReactComponent77 />
    </Suspense>
  );
}
