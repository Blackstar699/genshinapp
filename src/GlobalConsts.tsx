export const images = 'https://images.latabledesattentistes.fr/genshin/';

export const globalURL = 'https://strapi-genshin.latabledesattentistes.fr/api';

export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer d27073c7e005409a4871fd2bad509a63ff1b6b043522266a2aed12e482e038ba10a9a688c15716e3f14c58520bbebef1bec0310d80a2d1e1854a13885a676b83a601098cac8b9a09dc8c5ab1955387fd88277a7780696c9197bff20e272198a1726b303d023ee43caaa279ea6f0406e13a61d1483caf8891d9480abf416b4d2a'
};

export const GetColor = (rarity: number) => {
    let colors: string;
    switch(rarity){
        case 1:
            colors = '#79838F';
            break;
        case 2:
            colors = '#53886A';
            break;
        case 3:
            colors = '#4A90A8';
            break;
        case 4:
            colors = '#AC7FC0';
            break;
        case 5:
            colors = '#D39B4F';
            break;
        default:
            colors = '#ccc';
    }
    return colors;
};

export const GetColorCharacters = (element: string) => {
    let colors: string;
    switch(element){
        case 'Electro':
            colors = '#af71ca';
            break;
        case 'Geo':
            colors = '#bfa34e';
            break;
        case 'Pyro':
            colors = '#bc7057';
            break;
        case 'Anemo':
            colors = '#48bcb4';
            break;
        case 'Dendro':
            colors = '#D39B4F';
            break;
        case 'Cryo':
            colors = '#1c4d80';
            break;
        case 'Hydro':
            colors = '#297bbe';
            break;
        default:
            colors = '#ccc';
    }
    return colors;
}

export const GetGradientColor = (rarity: number) => {
    let colors: Array<string>;
    switch(rarity){
        case 1:
            colors = ['#4F5963','#79838F'];
            break;
        case 2:
            colors = ['#4A5C5F','#53886A'];
            break;
        case 3:
            colors = ['#515676','#4A90A8'];
            break;
        case 4:
            colors = ['#625889','#AC7FC0'];
            break;
        case 5:
            colors = ['#705551','#D39B4F'];
            break;
        default:
            colors = ['#282828','#282828'];
    }
    return colors;
};

export const GetGradientColorCharacters = (element: string) => {
    let colors: Array<string>;
    switch(element){
        case 'Electro':
            colors = ['#52276e', '#aF71ca'];
            break;
        case 'Geo':
            colors = ['#544218', '#bfa34e'];
            break;
        case 'Pyro':
            colors = ['#572224', '#bc7057'];
            break;
        case 'Anemo':
            colors = ['#15524a', '#48bcb4'];
            break;
        case 'Dendro':
            colors = ['#ffffff', '#ffffff'];
            break;
        case 'Cryo':
            colors = ['#347a93', '#72d0eb'];
            break;
        case 'Hydro':
            colors = ['#0e3685', '#297bbe'];
            break;
        default:
            colors = ['#0e3685', '#297bbe'];
    }
    return colors;
};
