import React from "react";

import { useHeaderService } from "./service";

const Header = (): JSX.Element => {
  const { NAV_HELPER } = useHeaderService();
  return <div></div>;
};

export default Header;
