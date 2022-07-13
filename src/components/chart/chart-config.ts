import { createChart, IChartApi } from "lightweight-charts";

interface ChartConfig {
	chart: IChartApi;
	handleResize: () => void;
}

export function configureChart(element: HTMLDivElement | null): ChartConfig | null {
	if (element === null) {
		return null;
	}

	const chart = createChart(element, {
		width: element.clientWidth,
		height: 400,
	});

	chart.timeScale().fitContent();

	const handleResize = (): void => {
		chart.applyOptions({ width: element.clientWidth });
	};

	return { chart, handleResize };
}
