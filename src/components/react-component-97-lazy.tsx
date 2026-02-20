import { lazy, Suspense } from "react";

const ReactComponent97 = lazy(() => import("./react-component-97.tsx"));

export default function ReactComponent97Lazy() {
  return (
    <Suspense fallback={<div>Loading 97...</div>}>
      <ReactComponent97 />
    </Suspense>
  );
}
