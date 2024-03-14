import { Comment } from "@/components";
import { CommentWIthAuthor } from "@/db/queries";

type CommentListProps = {
  onFetchData: () => Promise<CommentWIthAuthor[]>;
};

export const CommentsList = async ({ onFetchData }: CommentListProps) => {
  const comments = await onFetchData();
  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {topLevelComments.map((comment) => (
        <Comment key={comment.id} comment={comment} comments={comments} />
      ))}
    </div>
  );
};
