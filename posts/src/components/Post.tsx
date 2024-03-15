import { db } from "@/db";
import { Skeleton } from "@nextui-org/react";
import { notFound } from "next/navigation";

type PostShowProps = {
  postId: string;
};

export const Post = async ({ postId }: PostShowProps) => {
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
};

export const PostSkeleton = () => (
  <div className="m-4">
    <div className="my-2">
      <Skeleton className="h-8 w-48" />
    </div>
    <div className="p-4 border rounded space-y-2">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-6 w-32" />
    </div>
  </div>
);
