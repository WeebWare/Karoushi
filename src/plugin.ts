import Command from "./command";

export default class Plugin {
  public readonly name: string;
  public commands: Command[];

  public constructor (name: string) {
    return;
  }

  public callCommand (commandName: string, args: any): void {
    this.commands[commandName](args);
  }
}
