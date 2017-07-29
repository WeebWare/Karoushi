import { Client, ClientOptions } from "discord.js";
import Command from "./command";
import { IKaroushiClientOptions } from "./interfaces";
import Plugin from "./plugin";

export default class KaroushiClient extends Client {

  protected commandPrefixes: string[];

  private readonly ownerId: string;
  private registeredPlugins: Plugin[];

  /**
   * @param {KaroushiClientOptions} [config] - Configuration for the framework
   */
  public constructor (options: ClientOptions, config: IKaroushiClientOptions) {
    super(options);
    this.ownerId = config.ownerId;
    this.commandPrefixes = config.commandPrefixes;
  }

  /**
   * Registers multiple plugins (abstraction over registerPlugin)
   * @param {Plugin[]} [plugins] - The plugins that we're going to register
   */
  public registerPlugins (plugins: Plugin[]): void {
    for (const plugin of plugins) {
      this.registerPlugin(plugin);
    }
  }

  /**
   * Registers a single plugin
   * @param {Plugin} [plugin] - An instance of plugin to register
   */
  private registerPlugin (plugin: Plugin): void {
    this.registeredPlugins[plugin.name] = plugin;
  }

}
