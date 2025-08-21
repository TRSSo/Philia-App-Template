import path from "node:path"
import { App } from "philia/plugin"

export class Project extends App.Project {
  constructor(config: App.IConfig) {
    super(config, path.join(import.meta.dirname, "app"))
  }
}
