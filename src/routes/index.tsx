import { lazy } from "react";

import * as C from "@utils/constants";

const Home = lazy(() => import("@components/home"));
const UserProfile = lazy(() => import("@components/userProfile"));

export const nav = [
  { path: C.DASHBOARD.ROUTE, element: <Home />, index: true },
  { path: C.PROFILE.ROUTE, element: <UserProfile />, index: false },
];
