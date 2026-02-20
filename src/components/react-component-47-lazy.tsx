import { lazy, Suspense } from "react";

const ReactComponent47 = lazy(() => import("./react-component-47.tsx"));

export default function ReactComponent47Lazy() {
  return (
    <Suspense fallback={<div>Loading 47...</div>}>
      <ReactComponent47 />
    </Suspense>
  );
}
