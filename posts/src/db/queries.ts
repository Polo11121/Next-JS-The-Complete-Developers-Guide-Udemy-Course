import { Comment, Post } from "@prisma/client";
import { db } from "@/db";

export type PostWithData = Post & {
  topic: {
    slug: string;
  };
  user: {
    name: string | null;
  };
  _count: {
    comments: number;
  };
};

export type CommentWIthAuthor = Comment & {
  user: {
    name: string | null;
    image: string | null;
  };
};

export const fetchPostsByTopicName = async (
  topicName: string
): Promise<PostWithData[]> =>
  db.post.findMany({
    where: {
      topic: {
        slug: topicName,
      },
    },
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  });

export const fetchCommentsByPostId = async (
  postId: string
): Promise<CommentWIthAuthor[]> =>
  db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
