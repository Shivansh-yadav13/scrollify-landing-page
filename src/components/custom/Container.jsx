import React from "react";

export default function Container({ children }) {
  return <div className="flex flex-col gap-32 px-2 mx-2">{children}</div>;
}
