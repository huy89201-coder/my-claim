import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: JSX.Element;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
