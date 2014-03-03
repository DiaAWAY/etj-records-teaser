/*
 * GET home page.
 */

function Album(band, title, description, url) {
    this.band = band;
    this.title = title;
    this.description = description;
    this.url = url;
}

// Dummy albums
var albums = [
    new Album('Container 90', 'Working Class League', 'description', 'container90_WorkingClassLeague.jpg'),
    new Album('Container 90', 'World Champion Shit', 'description', 'container90_WorldChampionShit.jpg'),
    new Album('Front 242', 'Tyranny (For You)', 'description', 'front242_TyrannyForYou.jpg'),
    new Album('Front 242', 'Quite Unusual', 'description',  'front242_QuiteUnusual.jpg'),
    new Album( 'Spark!', 'Hela Din Värld', 'description', 'spark_HelaDinVarld.jpg')
];

var promotionals = [
    new Album( 'White Trash Wankers', 'Album Title', 'description', 'WTW-Poster_small.jpg')
];

exports.index = function (req, res) {
    res.render('index', { title: '', albums: albums, promotionals: promotionals });
};

exports.about = function (req, res) {
    res.render('about', { title: 'Who are you guys?'});
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'How can I Contact you?'});
};
