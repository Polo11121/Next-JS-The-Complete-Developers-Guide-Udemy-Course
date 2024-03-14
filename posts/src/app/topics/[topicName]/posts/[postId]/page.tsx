import { CommentsList, Post } from "@/components";
import { CreateCommentForm } from "@/components/forms";
import { fetchCommentsByPostId } from "@/db/queries";
import { paths } from "@/lib/paths";
import Link from "next/link";

type TopicPostsPageProps = {
  params: {
    topicName: string;
    postId: string;
  };
};

const TopicPostsPage = ({ params }: TopicPostsPageProps) => {
  const { topicName, postId } = params;

  const fetchHandler = () => fetchCommentsByPostId(postId);

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(topicName)}
      >
        {"< "}Back to {topicName}
      </Link>
      <Post postId={postId} />
      <CreateCommentForm postId={postId} startOpen />
      <CommentsList onFetchData={fetchHandler} />
    </div>
  );
};

export default TopicPostsPage;
