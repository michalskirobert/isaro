import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { nav } from "./routes";

const App = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={() => <p>Loading...</p>}>
      <Routes>
        <Route path="/">
          {nav.map(({ element, path, index }) => (
            <Route key={path} {...{ element, path, index }} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export { App as default };
