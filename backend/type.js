const zod = require("zod")

const signupZod = zod.object({
    email: zod.email(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
})

const signinZod = zod.object({
    email: zod.email(),
    password: zod.string().min(6)
})

const updateZod = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

module.exports = {
    signupZod,
    signinZod,
    updateZod
}