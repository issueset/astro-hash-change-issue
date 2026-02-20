import { lazy, Suspense } from "react";

const ReactComponent50 = lazy(() => import("./react-component-50.tsx"));

export default function ReactComponent50Lazy() {
  return (
    <Suspense fallback={<div>Loading 50...</div>}>
      <ReactComponent50 />
    </Suspense>
  );
}
