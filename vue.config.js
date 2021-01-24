module.exports = {
	// ...
	configureWebpack: {
		module: {
			rules: [
				/* config.module.rule('svg') */
				{
					test: /\.(svg)(\?.*)?$/, // <= modify this to suit your needs
					use: [
						{
							loader: "url-loader",
							options: {
								limit: -1,
								fallback: {
									loader: "file-loader",
									options: {
										name: "static/img/[name].[ext]" // <= note how the hash is removed
									}
								}
							}
						}
					]
				}
			]
		}
		// ...
	},
	chainWebpack: config => {
		config.module
			.rule("svg")
			.test(() => false)
			.use("file-loader");
	}
};
