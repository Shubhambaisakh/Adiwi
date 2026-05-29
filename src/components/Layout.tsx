import React, { ReactNode, useMemo } from "react";
import useMagnetic from "../hooks/useMagnetic";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Call the hook - ensure the hook itself uses useEffect internally
  useMagnetic();

  return <main id="main-content">{children}</main>;
};

export default React.memo(Layout);