import Command from "./command";

interface IKaroushiClientOptions {
  ownerId: string;
  initialCommands: Command[];
  commandPrefixes: string[];
}

export {
  IKaroushiClientOptions
};
