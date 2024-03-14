"use client";
import { Link, useRevalidator } from "@remix-run/react";
import { PostType } from "lib/jsonplaceholder";
import { LoadingSkeleton } from "./skeleton";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="w-full bg-slate-100 rounded-md p-4 hover:shadow-lg hover:shadow-slate-200 hover:cursor-pointer">
        <h3 className="text-md text-semibold">{post.title}</h3>
        <p className="text-xs text-light">{post.body}</p>
      </div>
    </Link>
  );
};

export const LoadingPostSkeleton = () => {
  return (
    <div className="w-full flex flex-col bg-slate-100 rounded-md p-4">
      <LoadingSkeleton containerClassName="h-fit w-full" />
      <LoadingSkeleton containerClassName="h-fit w-3/4" height={10} />
      <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
      <LoadingSkeleton containerClassName="h-fit w-1/4" height={10} />
    </div>
  );
};

export const LoadingPostFailed = () => {
  const revalidator = useRevalidator();

  const resetRoute = () => {
    revalidator.revalidate();
  };
  return (
    <div className="w-full flex flex-col bg-red-50 text-sm text-red-400 rounded-md p-4 items-center justify-start">
      <strong>Failed to get post details!</strong>
      <button type="button" onClick={resetRoute}>
        Try again?
      </button>
    </div>
  );
};
