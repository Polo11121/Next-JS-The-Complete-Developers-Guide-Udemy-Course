import { db } from "@/db";
import { paths } from "@/lib/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export const TopicsList = async () => {
  const topics = await db.topic.findMany();

  return (
    <ul className="flex flex-row gap-2 flex-wrap">
      {topics.map((topic) => (
        <li key={topic.id}>
          <Link href={paths.topicShow(topic.slug)}>
            <Chip color="warning" variant="shadow">
              {topic.slug}
            </Chip>
          </Link>
        </li>
      ))}
    </ul>
  );
};
