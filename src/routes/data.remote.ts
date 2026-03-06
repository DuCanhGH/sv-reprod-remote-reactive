import { z } from "zod";
import { form, query } from "$app/server";

export const loadId = query(
  z.object({ idPrefix: z.string() }),
  async ({ idPrefix }) => {
    console.log("query received", idPrefix);
    return { success: true, received: idPrefix };
  },
);

export const sendId = form(
  z.object({ id: z.string(), text: z.string() }),
  async ({ id, text }) => {
    console.log("form received", id, text);
    return { success: true, received: { id, text } };
  },
);
