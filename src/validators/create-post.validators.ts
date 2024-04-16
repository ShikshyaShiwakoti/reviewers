import { z } from 'zod'


export const createTodoSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Todo name is required',
        }),
        active: z.boolean({
            required_error: 'active ni chaienxa'
        }),
        id: z.number().optional(),
    }) .strict(),
    
})