import { Config } from "@stencil/core";

export const config: Config = {
	namespace: "components",
	globalStyle: "src/assets/css/global.css",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements",
		},
		{
			type: "docs-readme",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
			prerenderConfig: "./prerender.config.ts",
		},
	],
};
