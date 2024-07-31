import { Suspense, lazy } from "react";
import {
  BrowserRouter as RootRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppStyles from "./AppStyles";
import AuthRouter from "./AuthRouter";

import { Loading } from "@/entities";

import { PAGE_URL } from "@/shared";

const SignIn = lazy(() => import("@/pages/auth/signin/SignInPage"));
const Redirect = lazy(() => import("@/pages/auth/signin/RedirectPage"));
const Home = lazy(() => import("@/pages/home/HomePage"));
const NotFound = lazy(() => import("@/pages/notfound/NotFoundPage"));
const Detail = lazy(() => import("@/pages/detail/DetailPage"));

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AppStyles />
      <AuthRouter>
        <Routes>
          <Route>
            <Route index element={<Navigate to={PAGE_URL.Home} replace />} />
            <Route path={PAGE_URL.SignIn} element={<SignIn />} />
            <Route path={PAGE_URL.Redirect} element={<Redirect />} />
            <Route path={PAGE_URL.Home} element={<Home />} />
            <Route path={PAGE_URL.Detail} element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthRouter>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
