import { LoaderFunctionArgs, defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import {
  PostCommentType,
  PostType,
  UserType,
  getPost,
  getPostComments,
  getUser,
} from "lib/jsonplaceholder";
import { Suspense } from "react";
import {
  AuthorDetails,
  LoadingAuthorFailed,
  LoadingAuthorSkeleton,
} from "src/components/author-details";
import { LoadingPostFailed, Post } from "src/components/post";
import {
  LoadingPostCommentsListFailed,
  LoadingPostCommentsListSkeleton,
  PostCommentsList,
} from "src/components/post-comments-list";
import { LoadingPostDetailsSkeleton } from "src/components/post-details";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.postId) {
    throw new Response("No post selected", {
      status: 404,
    });
  }

  const postPromise: Promise<PostType> = getPost(params.postId);
  const authorPromise: Promise<UserType> = postPromise.then((post) =>
    getUser(post.userId),
  );
  const commentsPromise: Promise<PostCommentType[]> = postPromise.then((post) =>
    getPostComments(post.id),
  );

  return defer({
    postId: params.postId,
    postPromise,
    authorPromise,
    commentsPromise,
  });
};

export default function PostItemPage() {
  const { postId, postPromise, authorPromise, commentsPromise } =
    useLoaderData<typeof loader>();

  return (
    <div className="w-full flex flex-col gap-2 pt-6 px-2" key={postId}>
      <div className="flex flex-col gap-2">
        <Suspense fallback={<LoadingPostDetailsSkeleton />}>
          <Await resolve={postPromise} errorElement={<LoadingPostFailed />}>
            {(post) => <Post post={post} />}
          </Await>
        </Suspense>

        <Suspense fallback={<LoadingAuthorSkeleton />}>
          <Await resolve={authorPromise} errorElement={<LoadingAuthorFailed />}>
            {(author) => <AuthorDetails author={author} />}
          </Await>
        </Suspense>
      </div>
      <hr className="w-full border-t border-slate-200 my-2" />
      <div className="flex flex-col h-[75vh]">
        <Suspense fallback={<LoadingPostCommentsListSkeleton />}>
          <Await
            resolve={commentsPromise}
            errorElement={<LoadingPostCommentsListFailed />}
          >
            {(comments) => <PostCommentsList comments={comments} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
