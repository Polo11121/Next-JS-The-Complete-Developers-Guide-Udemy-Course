import { db } from "@/db";

type PostShowProps = {
  postId: string;
};

export const Post = async ({ postId }: PostShowProps) => {
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  reti;

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
};
