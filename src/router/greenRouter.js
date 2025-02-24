import { Suspense, lazy } from "react";

const Loading = <div>Loading....</div>;

const GreenPage = lazy(() => import("../pages/GreenPage"))

const greenRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <GreenPage />
        </Suspense>
      ),
    },
  ];
};
export default greenRouter;
