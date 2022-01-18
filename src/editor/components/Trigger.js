import Rete from "rete";
import * as Socket from "../sockets";

export class Trigger extends Rete.Component {
  constructor() {
    super("Trigger");
  }

  builder(node) {
    node.addOutput(new Rete.Output("trigger", "From", Socket.action));
    return node;
  }

  worker(node, inputs, outputs) {}
}
