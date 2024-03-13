import { CreatePostForm } from "@/components/forms";

type TopicsPageProps = {
  params: {
    topicName: string;
  };
};

const TopicsPage = ({ params }: TopicsPageProps) => (
  <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h1 className="text-2xl font-bold mb-2">Topic: {params.topicName}</h1>
    </div>
    <div>
      <CreatePostForm topicName={params.topicName} />
    </div>
  </div>
);

export default TopicsPage;
