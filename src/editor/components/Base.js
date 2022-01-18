import Rete from "rete";
import * as Socket from "../sockets";

export class Base extends Rete.Component {
  constructor() {
    super("Base");
  }

  builder(node) {
    node.addInput(new Rete.Input("baseActionInput", "To", Socket.action));
    node.addOutput(new Rete.Output("baseActionOutput", "From1", Socket.action));
    node.addOutput(
      new Rete.Output("baseActionOutput2", "From2", Socket.action)
    );
    node.addOutput(
      new Rete.Output("baseActionOutput3", "From3", Socket.action)
    );
    return node;
  }

  worker(node, inputs, outputs) {}
}
