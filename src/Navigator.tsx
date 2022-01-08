import Home from "@components/home";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { nav } from "./routes";

export const Navigator = () => (
  <BrowserRouter>
    <Suspense fallback={() => <p>Loading...</p>}>
      <Routes>
        <Route path="/">
          {nav.map(({ element, path, index }) => (
            <Route key={path} {...{ element, path, index }} />
          ))}
        </Route>
      </Routes>{" "}
    </Suspense>
  </BrowserRouter>
);
{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
  </Routes>
  </BrowserRouter>, */
}

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="users" element={<Users />}>
      <Route path="me" element={<OwnUserProfile />} />
      <Route path=":id" element={<UserProfile />} />
    </Route>
  </Routes>
</BrowserRouter>; */
}
