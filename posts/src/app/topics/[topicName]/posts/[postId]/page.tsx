import { CommentsList, Post, PostSkeleton } from "@/components";
import { CreateCommentForm } from "@/components/forms";
import { paths } from "@/lib/paths";
import Link from "next/link";
import { Suspense } from "react";

type TopicPostsPageProps = {
  params: {
    topicName: string;
    postId: string;
  };
};

const TopicPostsPage = ({ params }: TopicPostsPageProps) => {
  const { topicName, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(topicName)}
      >
        {"< "}Back to {topicName}
      </Link>
      <Suspense fallback={<PostSkeleton />}>
        <Post postId={postId} />
      </Suspense>
      <CreateCommentForm postId={postId} startOpen />
      <CommentsList postId={postId} />
    </div>
  );
};

export default TopicPostsPage;
