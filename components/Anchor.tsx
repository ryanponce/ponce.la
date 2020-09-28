import React from "react";

function Anchor({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      className="font-medium border-b border-green-500 hover:text-green-500"
      href={href || ""}
    >
      {children}
    </a>
  );
}

export { Anchor };
