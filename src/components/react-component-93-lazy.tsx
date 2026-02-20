import { lazy, Suspense } from "react";

const ReactComponent93 = lazy(() => import("./react-component-93.tsx"));

export default function ReactComponent93Lazy() {
  return (
    <Suspense fallback={<div>Loading 93...</div>}>
      <ReactComponent93 />
    </Suspense>
  );
}
