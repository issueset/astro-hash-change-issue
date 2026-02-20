import { lazy, Suspense } from "react";

const ReactComponent42 = lazy(() => import("./react-component-42.tsx"));

export default function ReactComponent42Lazy() {
  return (
    <Suspense fallback={<div>Loading 42...</div>}>
      <ReactComponent42 />
    </Suspense>
  );
}
