var x = 0;
var play = true;
var i = 0;
var paused = true;
function spawn(i) {
    var num = Math.floor((Math.random() * 2) + 1);
    var check = false;
    if (num == 1) { check = true; } else { check = false; }
    var left = check ? 5 : 1350;

    var id = "fish_"+i+"_body_";
    var body = document.createElement("div");
    body.style.position = "absolute";
    body.style.top = Math.floor((Math.random() * 700) + 1) + "px";
    body.style.left = left + "px";
    body.style.width = "50px";
    body.style.height = "25px";
    body.style.borderRadius = "25px";
    body.style.background = "rgb(255, 118, 20)";
    body.style.color = "black";
    body.innerHTML = " | | | *";
    body.id = id;
    document.getElementById('main').appendChild(body);
    body.onclick = destroy(body);


    id = "fish_"+i+"_tail";
    var tail = document.createElement("div");
    tail.style.position = "absolute";
    tail.style.top = -8+"px";
    tail.style.left = -18+"px";
    tail.style.width = "25px";
    tail.style.height = "40px";
    tail.style.borderBottomRightRadius = "25px";
    tail.style.borderTopRightRadius = "25px";
    tail.style.background = "rgb(255, 118, 20)";
    tail.style.color = "black";
    tail.id = id;
    document.getElementById(body.id).appendChild(tail);
    tail.onclick = destroy(tail);

    setInterval(function() {
        if(!paused){
            $(document).ready(function () {
                if (body.style.left == "1350px") {
                    $(body).animate({ left: '5px' }, 3000, 'linear');
                } else if (body.style.left == "5px") {
                    $(body).animate({ left: '1350px' }, 3000, 'linear');
                }
            });
        }
    },50)
    
}

function destroy(div) {
    $(document).ready(function () {
        $(div).click(function () {
            $(div).hide();
        });
    });
}

function timeout() {
    setTimeout(function () {
        spawn(i);
    }, 1000);
}

$(document).keydown(function (e) {
    if (e.keyCode == 80) {
        paused = !paused;
        if (paused) {
            $("body").append("<p>paused!</p>");
        } else if (!paused) {
            
            $("body").append("<p>play!</p>");
            timeout();
        }
    }

});
