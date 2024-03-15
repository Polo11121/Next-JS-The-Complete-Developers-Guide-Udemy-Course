import { Comment } from "@/components";
import { fetchCommentsByPostId } from "@/db/queries";

type CommentListProps = {
  postId: string;
};

export const CommentsList = async ({ postId }: CommentListProps) => {
  const comments = await fetchCommentsByPostId(postId);
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {topLevelComments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} />
      ))}
    </div>
  );
};
