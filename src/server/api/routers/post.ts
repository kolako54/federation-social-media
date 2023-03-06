import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getByAccountId: publicProcedure
    .input(z.object({ accountId: z.string() }))
    .query(({ input }) => {
      return {
        id: "example-id",
        createdAt: new Date(),
        content:
          "Culpa est quis quis aliqua laborum labore commodo magna quis cupidatat consectetur ut deserunt. Id ea nostrud magna veniam consequat in esse anim sint ad deserunt. Ullamco non in laborum cupidatat excepteur.",
        attachments: [
          {
            id: "1",
            description: "Field of grass",
            url: "/1.jpg",
            width: 1062,
            height: 708,
          },
          {
            id: "2",
            description: "Neon Pipes",
            url: "/2.jpg",
            width: 3008,
            height: 2000,
          },
          {
            id: "3",
            description: "Space shuttle",
            url: "/3.jpg",
            width: 6084,
            height: 6084,
          },
        ],
        repliesCount: 102,
        reblogsCount: 24,
        favoritesCount: 313,
        account: {
          id: "example-id",
          avatar: "/avatar.png",
          header: "/header.png",
          name: "Elio Programs",
          username: "elio1234",
          address: "elio@localhost:3000",
          summary:
            "Enim sunt occaecat anim quis ex proident cupidatat incididunt eiusmod.",
          followersCount: 211,
          followingCount: 300,
        },
      };
    }),
});
