document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('mousedown', handleMouseStart, false);
document.addEventListener('mousemove', handleMouseMove, false);

let swipe_size = 1300;

let x1 = null;

function handleTouchStart(event){
    if(window.innerWidth<=640){
        swipe_size = 200;
    }
    x1 = event.touches[0].clientX;
}

function handleTouchMove(event){
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    if((x2-x1)>swipe_size){
        document.getElementById('main_menu').style.display = "block";
        document.getElementById('block_main').style.display = "none";
    } else if((x2-x1)<-swipe_size){
        document.getElementById('main_menu').style.display="none";
        document.getElementById('block_main').style.display = "block";
    }
}

function handleMouseStart(event){
    if(window.innerWidth<=640){
        swipe_size = 200;
    }
    x1 = event.pageX;
}

function handleMouseMove(event){
    if(!x1){
        return false;
    }
    x2 = event.pageX;
    if((x2-x1)>swipe_size){
        document.getElementById('main_menu').style.display = "block";
        document.getElementById('block_main').style.display = "none";
        x1 = null;
    } else if((x2-x1)<-swipe_size){
        document.getElementById('main_menu').style.display="none";
        document.getElementById('block_main').style.display = "block";
        x1 = null;
    }
}
