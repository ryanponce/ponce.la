import React from "react";

function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl mx-auto mt-10">{children}</div>;
}

export { PageContainer };
