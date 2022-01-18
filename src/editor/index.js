import Rete from "rete";
import VueRenderPlugin from "rete-vue-render-plugin";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AreaPlugin from "rete-area-plugin";
import DockPlugin from "rete-dock-plugin";
import { Base } from "./components/Base";
import { Trigger } from "./components/Trigger";
import { Conditional } from "./components/Conditional";

export default async function (container) {
  const editor = new Rete.NodeEditor("demo@0.1.0", container);
  editor.use(ConnectionPlugin);
  editor.use(VueRenderPlugin);
  editor.use(ContextMenuPlugin);
  editor.use(AreaPlugin, {
    background: false,
    snap: false,
    scaleExtent: { min: 0.25, max: 1 },
    translateExtent: { width: 5000, height: 4000 }
  });

  // register before dock plugin to prevent showing in dock
  editor.register(new Trigger());

  editor.use(DockPlugin, {
    container: document.querySelector(".dock"),
    plugins: [VueRenderPlugin] // render plugins
  });

  editor.register(new Base());
  editor.register(new Conditional());

  // add starting node
  await editor.fromJSON({
    id: "demo@0.1.0",
    nodes: {
      "1": {
        id: 1,
        position: [100, 50],
        name: "Trigger"
      }
    }
  });

  editor.on(
    "connectioncreate connectionremove nodecreate noderemove",
    (data) => {
      console.log("editor something", data);
      console.log("editor", editor.toJSON());
    }
  );

  editor.view.resize();
}
