import 'dotenv/config'
import ConfigModel from './config.model'

class Configuration implements ConfigModel {
  port!: number
  constructor () {
    this.loadConfig()
  }

  private loadConfig () : void {
    const {
      PORT
    } = process.env
    this.port = Number(PORT)
  }
}

export default Configuration
