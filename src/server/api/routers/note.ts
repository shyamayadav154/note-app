import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const noteRouter = createTRPCRouter({
    getAll: protectedProcedure.input(z.object({
        topicId: z.string(),
    })).query(({ ctx, input }) => {
        return ctx.prisma.note.findMany({
            where: {
                topicId: input.topicId,
            },
        });
    }),
    create: protectedProcedure.input(z.object({
        title: z.string(),
        content: z.string(),
        topicId: z.string(),
    })).mutation(({ input, ctx }) => {
        return ctx.prisma.note.create({
            data:{
                content: input.content,
                topicId: input.topicId,
                title: input.title,
            }
        })
    }),
    delete: protectedProcedure.input(z.object({
        id : z.string(),
    })).mutation(({ctx,input})=>{
        return ctx.prisma.note.delete({
            where:{
                id: input.id,
            }
        })
    })
});
