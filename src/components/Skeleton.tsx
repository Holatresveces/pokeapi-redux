import { Fragment } from "react";
import type { ReactNode } from "react";

type SkeletonProps = {
  children: ReactNode;
  on: boolean;
  skeleton: () => JSX.Element;
};

const Skeleton = ({ children, on, skeleton }: SkeletonProps) => {
  return on ? (
    <Fragment>{skeleton ? skeleton() : null}</Fragment>
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default Skeleton;
