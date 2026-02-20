import { lazy, Suspense } from "react";

const ReactComponent71 = lazy(() => import("./react-component-71.tsx"));

export default function ReactComponent71Lazy() {
  return (
    <Suspense fallback={<div>Loading 71...</div>}>
      <ReactComponent71 />
    </Suspense>
  );
}
