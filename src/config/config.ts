import 'dotenv/config'
import ConfigModel from './config.model'

class Configuration implements ConfigModel {
  constructor () {
    this.loadConfig()
  }

  dbName!: string
  dbUser!: string
  dbPass!: string
  port!: number

  private loadConfig () : void {
    const { DB_USER, DB_PASS, DB_NAME, PORT } = process.env

    this.dbUser = DB_USER as string
    this.dbPass = DB_PASS as string
    this.dbName = DB_NAME as string
    this.port = Number(PORT)
  }
}

export default Configuration
