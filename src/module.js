import path from 'path';

export default function ChartJsModule(moduleOptions) {
	const defaultOptions = {
		chartJsPlugins: [
			'Title',
			'Tooltip',
			'Legend',
			'BarElement',
			'CategoryScale',
			'LinearScale',
			'LineElement',
			'PointElement',
			'Filler',
		],
	};
	const options = Object.assign(defaultOptions, this.options.axios, moduleOptions);

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		fileName: 'chartjs.client.js',
		options,
	});
}
