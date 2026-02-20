import { lazy, Suspense } from "react";

const ReactComponent48 = lazy(() => import("./react-component-48.tsx"));

export default function ReactComponent48Lazy() {
  return (
    <Suspense fallback={<div>Loading 48...</div>}>
      <ReactComponent48 />
    </Suspense>
  );
}
