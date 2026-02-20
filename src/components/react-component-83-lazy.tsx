import { lazy, Suspense } from "react";

const ReactComponent83 = lazy(() => import("./react-component-83.tsx"));

export default function ReactComponent83Lazy() {
  return (
    <Suspense fallback={<div>Loading 83...</div>}>
      <ReactComponent83 />
    </Suspense>
  );
}
