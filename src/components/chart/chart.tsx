import {IChartApi} from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

import { configureChart } from './chart-config';

const initialData = [
	{ time: '2018-12-22', value: 32.51 },
	{ time: '2018-12-23', value: 31.11 },
	{ time: '2018-12-24', value: 27.02 },
	{ time: '2018-12-25', value: 27.32 },
	{ time: '2018-12-26', value: 25.17 },
	{ time: '2018-12-27', value: 28.89 },
	{ time: '2018-12-28', value: 25.46 },
	{ time: '2018-12-29', value: 23.92 },
	{ time: '2018-12-30', value: 22.68 },
	{ time: '2018-12-31', value: 22.67 },
];

export function Chart(): JSX.Element {
	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const chartConfig = configureChart(chartContainerRef.current);

		if (chartConfig !== null) {
			const { chart, handleResize } = chartConfig;

			createSeries(chart, initialData);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		}
	}, []);

	return (
		<div
			ref={chartContainerRef}
		/>
	);

	function createSeries(chart: IChartApi, data: { time: string, value: number }[]): void {
		const newSeries = chart.addLineSeries();
		newSeries.setData(data);
	}
}
