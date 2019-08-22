

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
        url: '/modules',
        name: 'Modules',
        icon: 'bar_chart',
        group: 'secondary'
    }
];

