/*zhe bu fen shi lun bo tu */
var innerGroup = $(".innerwraper");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination span");
// var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var imgWidth = $(".task8-banner").eq(0).width();
var _index = 0;
var timer = null;
spanGroup.on("click",function() {
    _index = spanGroup.index($(this));
    selectPic(_index);
})

function autoGo() {
    timer = setInterval(go,3000);
}

autoGo();

function go() {
    _index++;
    selectPic(_index);
}

function selectPic(num) {
    clearInterval(timer);
    $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
    if (num % 4 == 0) {
        $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
    }
    $(".inner").stop().animate({
        left: -num * imgWidth,
    }, 1000, function() {
        timer = setInterval(go,3000);
        if(_index == innerGroup.length -1){
            _index %= 4;
            $(".inner").css("left","0px");
        }
    })
}