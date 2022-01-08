import { lazy } from "react";

const Home = lazy(() => import("@components/home"));
const UserProfile = lazy(() => import("@components/userProfile"));

export const nav = [
  { path: "/", element: <Home />, index: true },
  { path: "profile", element: <UserProfile />, index: false },
];
