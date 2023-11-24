const myTags = [
    'Budowa', 'Remont', 'Murarz',
    'Beton', 'Architektura', 'Elektryka',
    'Hydraulika', 'Projektowanie', 'Materiały budowlane',
    'Wykończenia', 'Nieruchomości', 'Roboty ziemne',
    'Bezpieczeństwo', 'Energooszczędność', 'Technologie budowlane',
];


var tagCloud = TagCloud('.content', myTags,{
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    keep: true
  }); 

