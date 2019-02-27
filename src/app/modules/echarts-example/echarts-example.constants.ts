export interface ChartData {
    finished: Array<number>;
    unFinished: Array<number>;
    dateTime: Array<string>;
}

export const chartUrl = 'http://localhost:5000/chart';

export const defaultOption = {
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'line'
    }]
};
