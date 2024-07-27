import { Suspense, lazy } from "react";
import {
  Navigate,
  BrowserRouter as RootRouter,
  Route,
  Routes,
} from "react-router-dom";

import AppStyles from "./AppStyles";
import AuthRouter from "./AuthRouter";

import { Loading } from "@/entities";

import { PAGE_URL } from "@/shared";

const SignIn = lazy(() => import("@/pages/auth/signin/SignInPage"));
const Redirect = lazy(() => import("@/pages/auth/signin/RedirectPage"));
const Home = lazy(() => import("@/pages/home/HomePage"));
const NotFound = lazy(() => import("@/pages/notfound/NotFoundPage"));
const My = lazy(() => import("@/pages/mypage/MyPage"));

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
            <Route path={PAGE_URL.My} element={<My />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthRouter>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
