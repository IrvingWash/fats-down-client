import React from 'react';
import { createChart, IChartApi } from 'lightweight-charts';

import { User } from 'src/api/api-objects';

interface WeightChartProps {
	userData: User[];
}

export class WeightChart extends React.Component<WeightChartProps, {}> {
	private _chartContainerRef!: React.RefObject<HTMLDivElement>;
	private _chart!: IChartApi;

	public override componentDidMount(): void {
		this._chartContainerRef = React.createRef();

		this._renderChart();

		window.addEventListener('resize', this._resizeHandler);
	}

	public override componentDidUpdate(): void {
		this._makeSeries();
	}

	public override componentWillUnmount(): void {
		window.removeEventListener('resize', this._resizeHandler);

		this._chart.remove();
	}

	public override render(): JSX.Element {
		return (
			<div ref={ this._chartContainerRef } />
		);
	}

	private _renderChart(): void {
		this._chart = createChart(this._chartContainerRef.current!, {
			width: this._chartContainerRef.current!.clientWidth,
			height: 500,
		});

		this._chart.timeScale().fitContent();
	}

	private _resizeHandler(): void {
		if (this._chart === undefined) {
			return;
		}

		this._chart.applyOptions({ width: this._chartContainerRef.current!.clientWidth });
	}

	private _makeSeries(): void {
		this.props.userData.forEach((user) => {
			const newUserSeries = this._chart.addLineSeries({
				color: user.color,
				title: user.username,
			});

			newUserSeries.setData(user.weights.map((weight) => ({
					time: weight.date,
					value: weight.value,
				}))
			);
		});
	}
}
