import { Await, Outlet } from "@remix-run/react";
import { PostType, getPosts } from "lib/jsonplaceholder";
import { Suspense, lazy } from "react";
import { LoadingPostsSkeleton, Posts } from "src/components/posts";

export default function PostsPage() {
  const postsPromise: Promise<PostType[]> = getPosts();

  return (
    <div className="w-full max-h-screen p-2 flex flex-row gap-2">
      {/*   left side listing layout */}
      <div className="w-1/3 flex flex-col gap-2">
        <h1>Posts</h1>
        <Suspense fallback={<LoadingPostsSkeleton />}>
          <Await resolve={postsPromise}>
            {(items) => <Posts items={items} />}
          </Await>
        </Suspense>
      </div>
      {/*   right side post item layout */}
      <div className="w-2/3 flex flex-col gap-2">
        <Outlet />
      </div>
    </div>
  );
}
