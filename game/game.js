import { GalagaRenderer } from 'pacman-contribution-graph';

const renderer = new GalagaRenderer({
    username: 'NorbuDli',
    platform: 'github',
    gameTheme: 'github-dark',

    svgCallback: (svg) => {
        document.getElementById('output').innerHTML = svg;

        // Save the generated SVG
        window.generatedSVG = svg;
    },

    gameOverCallback: () => {
        console.log('Game over!');
    },

    pointsIncreasedCallback: (points) => {
        console.log('Score:', points);
    }
});

renderer.start();