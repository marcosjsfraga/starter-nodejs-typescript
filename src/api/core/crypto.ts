import { hash, compare } from 'bcryptjs'

interface Request {
  data: string
  strength?: number
}

async function encrypt({ data, strength = 8 }: Request): Promise<string> {
  const dataEncrypted = await hash(data, strength)

  return dataEncrypted
}

export { encrypt, compare }
