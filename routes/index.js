/*
 * GET home page.
 */

function Album(band, title, url) {
    this.band = band;
    this.title = title;
    this.url = url;
}

// Dummy users
var albums = [
    new Album('Container 90', 'Working Class League', 'container90_WorkingClassLeague.jpg'),
    new Album('Container 90', 'World Champion Shit', 'container90_WorldChampionShit.jpg'),
    new Album('Front 242', 'Tyranny (For You)', 'front242_TyrannyForYou.jpg'),
    new Album('Front 242', 'Quite Unusual',  'front242_QuiteUnusual.jpg'),
    new Album( 'Spark!', 'Hela Din Värld', 'spark_HelaDinVarld.jpg')
];

exports.index = function (req, res) {
    res.render('index', { title: 'Eine Tasse Jäger Records TESTPAGE NOT ACTUAL PRODUCTS', albums: albums });
};

exports.about = function (req, res) {
    res.render('about', { title: 'Who are you guys?'});
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'How can I Contact you?'});
};
