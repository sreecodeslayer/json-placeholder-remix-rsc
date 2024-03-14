import { PostType, getPosts } from "lib/jsonplaceholder";
import { LoadingPostSkeleton, Post } from "src/components/post";

export const Posts = ({ items }: { items: PostType[] }) => {
  return (
    <div className="w-full h-full pr-2 flex flex-col gap-4 overflow-y-auto">
      {items.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export const LoadingPostsSkeleton = () => {
  return (
    <div className="w-full h-full pr-2 flex flex-col gap-4 overflow-y-auto">
      {[...Array(5)].map((_, index) => (
        <LoadingPostSkeleton key={index} />
      ))}
    </div>
  );
};
