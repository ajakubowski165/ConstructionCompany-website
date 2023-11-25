const myTags = [
    'Budowa', 'Remont', 'Murarz',
    'Beton', 'Architektura', 'Elektryka',
    'Hydraulika', 'Narzędzia', 'Materiały',
    'Wykończenia', 'Majster', 'Roboty ziemne',
    'Garaż', 'Dom', 'Praca', 'Wnętrze',
    'Taras', 'Balkon'
];

var tagCloud;
function createTagCloud() {
    var radius = Math.min(window.innerWidth, window.innerHeight) * 0.45;
    var initialTopOffset = 1000; // Dodaj tę zmienną, aby ustawić odstęp od góry
    tagCloud = TagCloud('.content', myTags, {
        radius: radius,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: true,
        initialPosition: { top: initialTopOffset }
    });
}

// Inicjalne utworzenie chmury tagów
createTagCloud();

window.addEventListener('resize', function () {
    // Usunięcie istniejącej chmury tagów
    tagCloud.destroy();
    // Ponowne utworzenie chmury tagów po zmianie rozmiaru okna
    createTagCloud();
});
