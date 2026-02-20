import { lazy, Suspense } from "react";

const ReactComponent85 = lazy(() => import("./react-component-85.tsx"));

export default function ReactComponent85Lazy() {
  return (
    <Suspense fallback={<div>Loading 85...</div>}>
      <ReactComponent85 />
    </Suspense>
  );
}
