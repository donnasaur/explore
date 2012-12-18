// draw stuff to the canvas
    
    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d');
        
        // draw empty space background
        var spaceBG = new Image();
        spaceBG.onload = function() {
            for (var i=0; i<6; i++) {
                for (var j=0; j<6; j++) {
                    ctx.drawImage(spaceBG,j*200,i*200);    
                }
            }
            
            console.log('start drawing stuff');
        };
        spaceBG.src = 'images/cardboard_gray.png';

        //draw random stars
        var stars = new Image();
        stars.onload = function() {
            for (var i=0; i<5; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,0,0,42,70,randomX,randomY,42,70);
            }
            for (var i=0; i<15; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,0,0,42,70,randomX,randomY,21,35);
            }
            for (var i=0; i<10; i++) {
                var randomX = Math.floor(Math.random()*1025);
                var randomY = Math.floor(Math.random()*600);
                ctx.drawImage(stars,0,0,42,70,randomX,randomY,10.5,17.5);
            }
        };
        stars.src = 'images/sprites.png';

        //draw random planets

        // draw dashboard image
        var dashboard = new Image();
        dashboard.onload = function() {
            ctx.drawImage(dashboard,0,0,1024,295,0,305,1024,295);
        }
        dashboard.src = 'images/dashboard.png'; 
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
