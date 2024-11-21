import vine, { errors } from '@vinejs/vine'

export async function tryParse(schema, data) {
try {
  const validator = vine.compile(schema)
  const output = await validator.validate(data) as Record<string, unknown>
  return output
} catch (error) {
  if (error instanceof errors.E_VALIDATION_ERROR) {
    console.log(error.messages)
  }
}
}
