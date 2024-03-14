import { PostType } from "lib/jsonplaceholder";
import { LoadingSkeleton } from "./skeleton";

export const PostDetails = ({ post }: { post: PostType }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-md">{post.title}</h2>
      <p className="text-sm">{post.body}</p>
    </div>
  );
};

export const LoadingPostDetailsSkeleton = () => {
  return (
    <div className="w-full flex flex-col">
      <LoadingSkeleton containerClassName="h-fit w-3/4" />
      <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
      <LoadingSkeleton containerClassName="h-fit w-1/3" height={10} />
    </div>
  );
};
