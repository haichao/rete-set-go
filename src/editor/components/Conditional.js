import Rete from "rete";
import * as Socket from "../sockets";

export class Conditional extends Rete.Component {
  constructor() {
    super("Conditional");
  }

  builder(node) {
    node.addInput(
      new Rete.Input("conditionalActionInput", "To", Socket.action)
    );
    node.addOutput(
      new Rete.Output("conditionalActionOutput", "From", Socket.action)
    );
    return node;
  }

  worker(node, inputs, outputs) {}
}
