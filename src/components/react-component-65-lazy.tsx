import { lazy, Suspense } from "react";

const ReactComponent65 = lazy(() => import("./react-component-65.tsx"));

export default function ReactComponent65Lazy() {
  return (
    <Suspense fallback={<div>Loading 65...</div>}>
      <ReactComponent65 />
    </Suspense>
  );
}
