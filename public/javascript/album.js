var Album = (function () {
    function Album() {
    }
    Album.prototype.AlbumTest = function (text) {
        return "test: " + text;
    };
    return Album;
})();

function test() {
    var test = "albumtest";
    return test;
}

var alb = new Album();
