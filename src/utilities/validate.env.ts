import { cleanEnv, str, port } from 'envalid'

export default function validateEnv () {
  cleanEnv(process.env, {
    DB_USER: str(),
    DB_PASS: str(),
    DB_NAME: str(),
    PORT: port()
  })
}
