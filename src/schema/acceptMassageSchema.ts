import {z} from "zod"

export const acceptMassageSchema= z.object({
    acceptMessage: z.boolean()
});