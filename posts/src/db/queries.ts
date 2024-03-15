import { cache } from "react";
import { db } from "@/db";
import { Comment, Post } from "@prisma/client";

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

export const fetchTopPosts = () =>
  db.post.findMany({
    orderBy: {
      comments: {
        _count: "desc",
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
    take: 5,
  });
export const fetchPostsByTerm = (term: string) =>
  db.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: term,
          },
        },
        {
          content: {
            contains: term,
          },
        },
      ],
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

export const fetchPostsByTopicName = (
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

export const fetchCommentsByPostId = cache(
  (postId: string): Promise<CommentWIthAuthor[]> =>
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
    })
);
