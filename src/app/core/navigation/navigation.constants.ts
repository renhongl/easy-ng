

export interface Link {
    url: string;
    name: string;
    icon: string;
    group: string;
}

export const linkList: Array<Link> = [
    {
        url: '/',
        name: 'Home',
        icon: 'home',
        group: 'favorite'
    },
    {
        url: '/todo',
        name: 'Complex Component Example',
        icon: 'list',
        group: 'favorite'
    },
    {
        url: '/404',
        name: '404 Example',
        icon: 'warning',
        group: 'favorite'
    },
    {
        url: '/leaflet',
        name: 'Leaflet Map Example',
        icon: 'map',
        group: 'secondary'
    },
    {
        url: '/echarts',
        name: 'Echarts Example',
        icon: 'bar_chart',
        group: 'secondary'
    }
];

