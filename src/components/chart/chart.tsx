import React, { useEffect, useRef } from 'react';
import { IChartApi } from 'lightweight-charts';

import { User } from '../../objects-and-constants/objects';
import { configureChart } from './chart-config';

interface ChartProps {
	data: User[];
}

export function Chart(props: ChartProps): JSX.Element {
	const chartContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const chartConfig = configureChart(chartContainerRef.current);

		if (chartConfig !== null) {
			const { chart, handleResize } = chartConfig;

			createSeries(chart, props.data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		}
	}, [props.data]);

	return (
		<div
			ref={chartContainerRef}
		/>
	);

	function createSeries(chart: IChartApi, data: User[]): void {
		for (const user of data) {
			const { name, color, weights } = user;

			const newSeries = chart.addLineSeries({ title: name, color });
			newSeries.setData(weights);
		}
	}
}
