import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";
interface layoutInterface {
  children: ReactNode;
}
const layout = ({ children }: layoutInterface) => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </main>
  );
};

export default layout;
