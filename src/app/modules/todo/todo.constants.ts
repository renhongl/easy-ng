

export interface Todo {
    id: string;
    text: string;
    finished: boolean;
}

export interface ChartData {
    finished: Array<number>;
    unFinished: Array<number>;
    dateTime: Array<string>;
}


export const todoUrl = 'http://localhost:5000/todo';

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
