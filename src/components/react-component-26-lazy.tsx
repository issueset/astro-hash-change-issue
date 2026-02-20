import { lazy, Suspense } from "react";

const ReactComponent26 = lazy(() => import("./react-component-26.tsx"));

export default function ReactComponent26Lazy() {
  return (
    <Suspense fallback={<div>Loading 26...</div>}>
      <ReactComponent26 />
    </Suspense>
  );
}
