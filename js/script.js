(function() {
    const cnv = document.querySelector("canvas");
    const ctx = cnv.getContext("2d");

    var sprites = [];
    var assetsToLoad = [];

    var background = new Sprite(0, 56, 400, 500, 0, 0);
    var nave = new Sprite(0, 0, 30, 50, 185, 450);

    sprites.push(background, nave);

    var img = new Image();
    img.addEventListener("load", loadHandler, false);
    img.src = "./assets/img.png";
    assetsToLoad.push(img);

    let loadedAssets = 0;

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
                console.log("PLAYING...");
                update();
                break;
        }

        render();
    }

    function update() {
        if (mvLeft && !mvRight) {
            nave.vx = -5;
        }

        if (mvRight && !mvLeft) {
            nave.vx = 5;
        }

        if (!mvLeft && !mvRight) {
            nave.vx = 0;
        }

        nave.x = Math.max(
            0,
            Math.min(cnv.width - nave.width, nave.x + nave.vx)
        );
    }

    function render() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        if (sprites.length != 0) {
            for (let i = 0; i < sprites.length; i++) {
                const spr = sprites[i];
                ctx.drawImage(
                    img,
                    spr.sourceX,
                    spr.sourceY,
                    spr.width,
                    spr.height,
                    Math.floor(spr.x),
                    Math.floor(spr.y),
                    spr.width,
                    spr.height
                );
            }
        }
    }

    function loadHandler() {
        loadedAssets++;
        if (loadedAssets === assetsToLoad.length) {
            img.removeEventListener("load", loadHandler, false);
            gameState = paused;
        }
    }

    loop();
})();
