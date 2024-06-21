import manifest from "../dojo-starter/manifests/dev/manifest.json";
import { createDojoConfig } from "@dojoengine/core";

export const dojoConfig = createDojoConfig({
    manifest,
    toriiUrl: "http://127.0.0.1:8080",
});
