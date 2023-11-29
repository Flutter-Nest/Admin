import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen bg-white p-8">
      <div className=" h-full flex flex-col overflow-auto">{children}</div>
    </div>
  );
}

export default DefaultLayout;
