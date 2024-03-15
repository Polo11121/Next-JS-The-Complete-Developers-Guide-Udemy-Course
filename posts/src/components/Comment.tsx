import { CreateCommentForm } from "@/components/forms";
import { CommentWIthAuthor, fetchCommentsByPostId } from "@/db/queries";
import Image from "next/image";

interface CommentShowProps {
  comment: CommentWIthAuthor;
  postId: string;
}

export const Comment = async ({ comment, postId }: CommentShowProps) => {
  if (!comment) {
    return null;
  }

  const comments = await fetchCommentsByPostId(postId);

  const childrenComments = comments.filter((c) => c.parentId === comment.id);

  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-gray-500">
            {comment.user.name}
          </p>
          <p className="text-gray-900">{comment.content}</p>
          <CreateCommentForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">
        {childrenComments.map((childComment) => (
          <Comment
            key={childComment.id}
            comment={childComment}
            postId={postId}
          />
        ))}
      </div>
    </div>
  );
};
