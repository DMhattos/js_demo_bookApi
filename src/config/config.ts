import 'dotenv/config'
import ConfigModel from './config.model'

class Configuration implements ConfigModel {
  dbUser!: string
  dbPass!: string
  port!: number
  constructor () {
    this.loadConfig()
  }

  private loadConfig () : void {
    const {
      DB_USER,
      DB_PASS,
      PORT

    } = process.env
    this.dbUser = DB_USER as string
    this.dbPass = DB_PASS as string
    this.port = Number(PORT)
  }
}

export default Configuration
