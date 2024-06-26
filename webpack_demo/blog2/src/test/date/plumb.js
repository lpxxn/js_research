import { ready, newInstance } from "@jsplumb/browser-ui"


ready(() => {
    console.log("ready");
    debugger
    const instance = newInstance({container: document.getElementById("my-plumb-drag")});
    // instance.addEndpoints(document.getElementById("drag-ele-1"), { endpoint:'Dot' });
    let ele1 = document.getElementById("drag-ele-1");
    let ele2 = document.getElementById("drag-ele-2");
    debugger
    instance.addEndpoints(ele1, { endpoint:'Dot' });
    instance.addEndpoints(ele2, { endpoint:'Dot' });
    instance.connect({ source:ele1, target:ele2 });
    console.log("instance", instance);
});