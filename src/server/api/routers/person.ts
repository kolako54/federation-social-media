import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const personRouter = createTRPCRouter({
  getByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ input }) => {
      return {
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
      };
    }),
});
