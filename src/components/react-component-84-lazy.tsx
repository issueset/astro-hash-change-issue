import { lazy, Suspense } from "react";

const ReactComponent84 = lazy(() => import("./react-component-84.tsx"));

export default function ReactComponent84Lazy() {
  return (
    <Suspense fallback={<div>Loading 84...</div>}>
      <ReactComponent84 />
    </Suspense>
  );
}
