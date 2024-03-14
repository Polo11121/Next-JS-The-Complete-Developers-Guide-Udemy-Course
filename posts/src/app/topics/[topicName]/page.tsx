import { PostsList } from "@/components";
import { CreatePostForm } from "@/components/forms";
import { fetchPostsByTopicName } from "@/db/queries";

type TopicsPageProps = {
  params: {
    topicName: string;
  };
};

const TopicsPage = ({ params }: TopicsPageProps) => {
  const fetchDataHandler = () => fetchPostsByTopicName(params.topicName);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">Topic: {params.topicName}</h1>
      </div>
      <div className="flex flex-col gap-y-2">
        <CreatePostForm topicName={params.topicName} />
        <PostsList onFetchData={fetchDataHandler} />
      </div>
    </div>
  );
};

export default TopicsPage;
