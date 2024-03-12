import { CreateTopicForm } from "@/components/forms";

const HomePage = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    <div className="col-span-3">
      <h1 className="text-xl m-2">Top Posts</h1>
    </div>
    <div>
      <CreateTopicForm />
    </div>
  </div>
);

export default HomePage;
