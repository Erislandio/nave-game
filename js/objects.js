(function() {
    // * canvas
    var cnv = document.querySelector("canvas");
    // * contexto de renderização 2d
    var ctx = cnv.getContext("2d");

    // * recursos do game

    // entradas
    var left = 37,
        right = 39,
        enter = 13,
        space = 32;

    // direções
    var mvLeft = (mvRight = false);

    // estados do jogo

    var loading = 0,
        playing = 1,
        paused = 2,
        over = 3;

    var gameState = loading;

    // listeners

    window.addEventListener(
        "keydown",
        function(e) {
            var key = e.keyCode;
            this.alert(key);
        },
        false
    );

    // ? funções
})();
