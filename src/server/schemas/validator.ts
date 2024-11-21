import v, { SimpleMessagesProvider } from '@vinejs/vine'
import type { Infer, InferInput } from '@vinejs/vine/types'

v.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',

  // Error message for the username field
  'username.required': 'Please choose a username for your account',
})
v.convertEmptyStringsToNull = true

export const userRegistrationSchema = v.object({
  username: v.string(),
  email: v.string().email(),
  isAdmin: v.boolean(),
  locale: v.string().nullable(),
  age: v.number().nullable(),
  password: v
    .string()
    .minLength(8)
    .maxLength(32)
    .confirmed(),
  terms: v.accepted(),
  newsletter: v.accepted(),
})

export type UserRegistration = Infer<typeof userRegistrationSchema>
export type UserRegistrationInput = InferInput<typeof userRegistrationSchema>
/**
 * {
 *   username: string
 *   email: string
 *   isAdmin: boolean | string | number
 *   password: string
 * }
 */
const data = {
  username: 'virk',
  email: 'virk@example.com',
  password: 'secret',
  password_confirmation: 'secret',
  country: '',
  isAdmin: true
}

const output = await v.validate({
  schema: userRegistrationSchema,
  data
})

console.log("🚀 ~ file: validator.ts:25 ~ output:", output)

export const validator = v.compile(userRegistrationSchema)
const outputCompiled = await validator.validate(data)
// const output = await validator.validate(data, {
//   messagesProvider,
//   errorReporter,
//   meta: {}
// })

console.log("🚀 ~ file: validator.ts:29 ~ outputCompiled:", outputCompiled)



