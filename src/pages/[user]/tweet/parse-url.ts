import { z } from "astro/zod";

export const parseUrl = z
  .object({
    user: z.string(),
    id: z
      .string()
      .refine((_id): boolean => {
        const id = Number(_id);
        return !Number.isNaN(id) && Number.isFinite(id);
      })
      .transform((id) => Number(id)),
  })
  .strict();
