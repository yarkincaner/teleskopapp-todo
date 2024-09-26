import { z } from 'zod'

export const TodoValidator = z.object({
  title: z.string().min(1)
})

export type TodoRequest = z.infer<typeof TodoValidator>
