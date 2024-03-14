import { UserType } from "lib/jsonplaceholder";
import { LoadingSkeleton } from "./skeleton";

export const AuthorDetails = ({ author }: { author: UserType }) => {
  return (
    <div className="w-full flex flex-row gap-4 items-center justify-start">
      <span className="w-8 h-8 bg-teal-400 text-slate-30 flex flex-col items-center justify-center text-xs uppercase rounded-xl">
        {author.name.charAt(0)}
      </span>
      <span className="w-full flex flex-col">
        <p className="text-sm font-semibold">{author.name}</p>
        <i className="text-xs lowercase">{author.email}</i>
      </span>
    </div>
  );
};

export const LoadingAuthorSkeleton = () => {
  return (
    <div className="w-full flex flex-row gap-4 items-center justify-start">
      <span className="w-fit flex flex-col items-center justify-center rounded-xl">
        <LoadingSkeleton circle width={40} height={40} />
      </span>
      <span className="w-full flex flex-col">
        <LoadingSkeleton containerClassName="h-fit w-64" />
        <LoadingSkeleton containerClassName="h-fit w-32" />
      </span>
    </div>
  );
};

export const LoadingAuthorFailed = () => {
  return (
    <div className="w-full flex flex-col bg-red-50 text-sm text-red-400 rounded-md p-4 items-center justify-start">
      <strong>Failed to get post author details!</strong>
    </div>
  );
};
