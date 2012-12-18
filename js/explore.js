// draw stuff to the canvas
    
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        
        // draw empty space background
        var spaceBG = new Image();
        spaceBG.src = 'images/sprites.png';
        spaceBG.draw = function() {
            for (var i=0; i<6; i++) {
                for (var j=0; j<6; j++) {
                    ctx.drawImage(spaceBG,113,302,200,200,j*200,i*200,200,200);    
                }
            }
        };
        spaceBG.draw();

        //draw random stars
        var stars = new Image();
        stars.src = 'images/sprites.png';
        stars.draw = function() {
            for (var i=0; i<5; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,48,334,42,70,randomX,randomY,42,70);
            }
            for (var i=0; i<15; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,48,334,42,70,randomX,randomY,21,35);
            }
            for (var i=0; i<10; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,48,334,42,70,randomX,randomY,10.5,17.5);
            }
        };
        stars.draw();
       
        //draw random planets
        var planetBlue = new Image();
        planetBlue.src = 'images/sprites.png';
        planetBlue.draw = function() {
            ctx.drawImage(planetBlue,48,517,440,440,100,100,88,88);
        };
        planetBlue.draw();

        var planetRed = new Image();
        planetRed.src = 'images/sprites.png';
        planetRed.draw = function() {
            ctx.drawImage(planetRed,545,517,440,440,700,200,264,264);
        };
        planetRed.draw();

        var planetGreen = new Image();
        planetGreen.src = 'images/sprites.png';
        planetGreen.draw = function() {
            ctx.drawImage(planetGreen,48,1008,440,440,200,315,200,200);
            console.log('draw a green planet');
        };
        planetGreen.draw();

        // draw dashboard image
        var dashboard = new Image();
        dashboard.src = 'images/sprites.png';
        dashboard.draw = function() {
            ctx.drawImage(dashboard,0,0,1024,295,0,305,1024,295);
        };
        dashboard.draw();
        
    }
    

$(document).ready(function() {
   
    $(document).keydown(function(key) {
  
        // Find current CSS background-position

        var bgPos = $('.space').css('background-position');

        var arrayBgPos = bgPos.split(' ');
        
        // Create xpos and ypos variables

        var xpos = arrayBgPos[0];
   
        var ypos = arrayBgPos[1];
        
        // Create logic to move background position on keydown event
        
        var keyDown = parseInt(key.which,10);

        if (keyDown === 65 || keyDown === 37) {
            console.log('Move left!');
            // move space bg
            $('.space').css('background-position', function(x,y) {
                splitXPos = xpos.split('p');
                newXPos = parseInt(splitXPos[0],10) + 10;
                this.x = newXPos + 'px';
                this.y = ypos;
                return this.x + ' ' + this.y;
            });
        } else if (keyDown === 87 || keyDown === 38) {
            console.log('Move up!');
            // move space bg
            $('.space').css('background-position', function(x,y) {
                splitYPos = ypos.split('p');
                newYPos = parseInt(splitYPos[0],10) + 10;
                this.x = xpos;
                this.y = newYPos + 'px';
                return this.x + ' ' + this.y;
            });
        } else if (keyDown === 68 || keyDown === 39) {
            console.log('Move right!');
            // move space bg
            $('.space').css('background-position', function(x,y) {
                splitXPos = xpos.split('p');
                newXPos = parseInt(splitXPos[0],10) - 10;
                this.x = newXPos + 'px';
                this.y = ypos;
                return this.x + ' ' + this.y;
            });
        } else if (keyDown === 83 || keyDown === 40) {
            console.log('Move down!');
            // move space bg
            $('.space').css('background-position', function(x,y) {
                splitYPos = ypos.split('p');
                newYPos = parseInt(splitYPos[0],10) - 10;
                this.x = xpos;
                this.y = newYPos + 'px';
                return this.x + ' ' + this.y;
            });    
        } else {
            return;
        }
    });
});
