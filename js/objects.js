(function() {
    const cnv = document.querySelector("canvas");
    const ctx = cnv.getContext("2d");

    const left = 37,
        right = 39,
        enter = 13,
        space = 32;

    var mvLeft = (mvRight = false);

    var loading = 0,
        playing = 1,
        paused = 2,
        over = 3;
    var gameState = loading;

    window.addEventListener(
        "keydown",
        e => {
            var key = e.keyCode;
            switch (key) {
                case left:
                    mvLeft = true;
                    break;
                case right:
                    mvRight = true;
                    break;
            }

            console.log(key);
        },
        false
    );

    window.addEventListener("keyup", e => {
        var key = e.keyCode;
        switch (key) {
            case left:
                mvLeft = false;
                break;
            case right:
                mvRight = false;
                break;
            case enter:
                if (gameState !== playing) {
                    gameState = playing;
                } else {
                    gameState = paused;
                }
        }

        console.log(key);
    });

    function loop() {
        requestAnimationFrame(loop, cnv);

        switch (gameState) {
            case loading:
                console.log("LOADING...");
                break;
            case playing:
                update();
                break;
        }

        render();
    }

    function update() {}

    function render() {
        alert("rende");
    }

    loop();
})();
