import manifest from "../dojo-starter/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
    manifest,
    rpcUrl: 'https://api.cartridge.gg/x/7stars2/katana',
    toriiUrl: "https://api.cartridge.gg/x/7stars2/torii",
    masterAddress: '0x5c61800296f9045154983b5fe4edb73ae35fda2af2d9e71638c89ae9d8ebc86',
    masterPrivateKey: '0x1ed5be6078e05632b91edc1deb7b56b460b75d44463e62ab619a560f9dfb2f8'
});
