$(function () {
	$('#container').highcharts({
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'line',
			marginTop: 100
		},
		title: {
			text: 'Current Receipts of Government as a<br/>Percentage of Gross Domestic<br/>Product, 1970 and 1979'
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function () {
				return this.series.name + ' ' + this.y;
			}
		},
		xAxis: {
			opposite: true,
			lineColor: '#999',
			categories: ['1970', '1979'],
			title: {
				text: ''
			},
			labels: {
				style: {
					fontWeight: 'bold'
				}
			}
		},
		yAxis: {
			gridLineWidth: 0,
			labels: {
				enabled: false,
			},
			title: {
				text: '',
			}
		},
		plotOptions: {
			line: {
				lineWidth: 2,
				shadow: false,
				color: '#666',
				marker: {
					radius: 2,
					symbol: 'circle'
				},
				dataLabels: {
					enabled: true,
					align: 'left',
					x: 10,
					y: 0,
					formatter: function () {
						if (this.x == 1979) {
							return this.series.name + ' ' + this.y;
						}
					}
				}
			},
			scatter: {
				shadow: false,
				color: '#666',
				marker: {
					radius: 2
				},
				dataLabels: {
					enabled: true,
					align: 'right',
					x: -10,
					y: 0,
					formatter: function () {
						return this.point.name + ' ' + this.y;
					}
				}
			}
		},
		series: [{
			name: 'Sweden',
			data: [46.9, 57.4]
    }, {
			name: 'Netherlands',
			data: [44, 55.8]
    }, {
			name: 'Norway',
			data: [43.5, 52.2]
     }, {
			name: 'Britain',
			data: [40.7, 39]
     }, {
			name: 'France',
			data: [39, 43.4]
     }, {
			name: 'Germany',
			data: [37.5, 42.9]
     }, {
			name: 'Belgium',
			data: [35.2, 43.2]
     }, {
			type: 'scatter',
			data: [{ 'x': 0, 'y': 46.9, 'name': 'Sweden' },
				{ 'x': 0, 'y': 44, 'name': 'Netherlands' },
				{ 'x': 0, 'y': 43.5, 'name': 'Norway' },
				{ 'x': 0, 'y': 40.7, 'name': 'Britain' },
				{ 'x': 0, 'y': 39, 'name': 'France' },
				{ 'x': 0, 'y': 37.5, 'name': 'Germany' },
				{ 'x': 0, 'y': 35.2, 'name': 'Belgium' }]
      }]
	});
});