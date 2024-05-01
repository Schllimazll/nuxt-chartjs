import Vue from 'vue';
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'vue-chartjs/legacy';

import {Chart, <%= options.chartJsPlugins %>} from 'chart.js';

Chart.register( <%= options.chartJsPlugins %> );

const components = {
	BarChart: Bar,
	BubbleChart: Bubble,
	DoughnutChart: Doughnut,
	LineChart: Line,
	PieChart: Pie,
	PolarAreaChart: PolarArea,
	RadarChart: Radar,
	ScatterChart: Scatter,
};

Object.entries(components).forEach(([key, value]) => {
	Vue.component(key, {
		extends: value,
	});
});
