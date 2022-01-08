import { ReactNode } from "react";

export type NavigationType = NavigationItem[];

export type NavigationItem = {
  path: string;
  component: ReactNode;
  index: boolean;
};
