import { Client, ClientOptions } from "discord.js";
import { KaroushiClientOptions } from "./interfaces";
import Command from "./command";
import Plugin from "./plugin";

export default class KaroushiClient extends Client {

  protected commandPrefixes: string[];

  private _ownerId: string;
  private registeredPlugins: Plugin[];

  /**
   * @param {KaroushiClientOptions} [config] - Configuration for the framework
   */
  public constructor(options: ClientOptions, config: KaroushiClientOptions) {
    super(options);
    this._ownerId = config.ownerId;
    this.commandPrefixes = config.commandPrefixes;
  }

  /**
   * @return {string}
   */
  get ownerId(): string {
    return this._ownerId;
  }

  /**
   * Registers multiple plugins
   */
  registerPlugins(plugins: Plugin[]) {
    for (const plugin of plugins) {
      this.registerPlugin(plugin);
    }
  }

  /**
   * Registers a single plugin
   */
  registerPlugin(plugin: Plugin) {
    this.registeredPlugins[plugin.name] = plugin;
  }

}
