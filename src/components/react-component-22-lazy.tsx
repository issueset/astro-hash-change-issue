import { lazy, Suspense } from "react";

const ReactComponent22 = lazy(() => import("./react-component-22.tsx"));

export default function ReactComponent22Lazy() {
  return (
    <Suspense fallback={<div>Loading 22...</div>}>
      <ReactComponent22 />
    </Suspense>
  );
}
