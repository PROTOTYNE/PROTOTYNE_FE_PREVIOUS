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

const SignUp = lazy(() => import("@/pages/auth/signup/SignUpPage"));
const PersonalInfo = lazy(() => import("@/pages/auth/signup/PersonalInfoPage"));
const TermsOfUse = lazy(() => import("@/pages/auth/signup/TermsOfUsePage"));

const MyInfo = lazy(() => import("@/pages/auth/myinfo/MyInfoPage"));

const Home = lazy(() => import("@/pages/home/HomePage"));
const NotFound = lazy(() => import("@/pages/notfound/NotFoundPage"));
const Alarm = lazy(() => import("@/pages/alarm/AlarmPage"));

const Review = lazy(() => import("@/pages/review/ReviewPage"));

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

            <Route path={PAGE_URL.SignUp} element={<SignUp />} />
            <Route path={PAGE_URL.TermsOfUse} element={<TermsOfUse />} />
            <Route path={PAGE_URL.PersonalInfo} element={<PersonalInfo />} />

            <Route path={PAGE_URL.MyInfo} element={<MyInfo />} />

            <Route path={PAGE_URL.Home} element={<Home />} />
            <Route path={PAGE_URL.Alarm} element={<Alarm />} />

            <Route path={PAGE_URL.Review} element={<Review />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthRouter>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
