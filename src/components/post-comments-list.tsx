import {
  PostCommentType,
  PostType,
  getPostComments,
} from "lib/jsonplaceholder";
import { LoadingSkeleton } from "./skeleton";

export const PostCommentsList = ({
  comments,
}: {
  comments: PostCommentType[];
}) => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-y-auto">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="w-full flex flex-col gap-2 p-4 bg-slate-50 rounded-md hover:shadow-lg hover:shadow-slate-200"
        >
          <p className="text-sm font-semibold">{comment.name}</p>
          <i className="text-xs lowercase">{comment.email}</i>
          <p className="text-xs font-light">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export const LoadingPostCommentsListSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 overflow-y-auto">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="w-full flex flex-col p-4 bg-slate-50 rounded-md"
        >
          <LoadingSkeleton containerClassName="h-fit w-3/4" />
          <LoadingSkeleton containerClassName="h-fit w-28" />
          <LoadingSkeleton containerClassName="h-fit w-2/3" height={10} />
          <LoadingSkeleton containerClassName="h-fit w-1/3" height={10} />
        </div>
      ))}
    </div>
  );
};

export const LoadingPostCommentsListFailed = () => {
  return (
    <div className="w-full flex flex-col bg-red-50 text-sm text-red-400 rounded-md p-4 items-center justify-start">
      <strong>Failed to get post comments!</strong>
    </div>
  );
};
