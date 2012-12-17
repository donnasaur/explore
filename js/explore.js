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
