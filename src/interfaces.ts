import Command from "./command";

interface KaroushiClientOptions {
  ownerId: string;
  initialCommands: Command[];
  commandPrefixes: string[];
}

export {
  KaroushiClientOptions
};
