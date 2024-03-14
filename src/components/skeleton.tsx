import { JSX } from "react";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";

export const LoadingSkeleton = (
  props: JSX.IntrinsicAttributes & SkeletonProps,
) => {
  return <Skeleton {...props} />;
};
