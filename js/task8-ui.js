// 轮播图函数 定义
$.fn.LBT_hanShu = function () {
    // 定义变量
    var fuXuanZQ_bl = $(this); //指向调用的 传进来
    var tuPianXZQ_bl = $('.inner'); // 图片选择器 
    var anNiu_shang_bl = $('.ui-slider-arrow .left', fuXuanZQ_bl); // 上一个 按钮(左按钮)
    var anNiu_xia_bl = $('.ui-slider-arrow .right', fuXuanZQ_bl);
    // console.log(anNiu_xia);
    var tuPianShuZhu_bl = $('.inner .innerwraper', fuXuanZQ_bl); // 获取图片数组 将所有图片放到一个数组里
    var dangQianXB_bl = 0; // 当前下标 函数主要改变的是这个变量
    var tuPSZ_changdu_bl = tuPianShuZhu_bl.size(); //图片多少 5个
    var tuKuanDu_bl = tuPianShuZhu_bl.eq(0).width(); //图片宽度 1200px
    var yuanDian_bl = $('.pagination .item', fuXuanZQ_bl); // 小圆点变量

    var tingzhi_lunbo = true; // 当 tingzhi_lunbo为 false时 停止轮播
    // console.log(tuKuanDu_bl);
    // 具体操作 在对应变量下 定义多个函数 / 方法

    fuXuanZQ_bl
        .on('mouseover', function(){ // 鼠标移进 .ui-slider-LunBT 里面
            tingzhi_lunbo = false;
            // console.log(tingzhi_lunbo);
        })
        .on('mouseout', function(){  // 鼠标移出 改变状态 变为 true
            tingzhi_lunbo = true; 
            // console.log(tingzhi_lunbo);
        })

    tuPianXZQ_bl
        .on('XiaTu_hs', function () { // 切换到下一个图片函数
            // 判断 当前下标 加到最后一个图片时 下标 变为-1 切换到第一个图片 
            if (dangQianXB_bl >= tuPSZ_changdu_bl - 1) {
                dangQianXB_bl = -1; // -1 加 1 为 0
            }
            dangQianXB_bl = dangQianXB_bl + 1; //点击一次 当前下标加一 
            tuPianXZQ_bl.triggerHandler('qieHuanTuPian_hs', dangQianXB_bl); //调用切换图片函数
        })
        .on('shangTu_hs', function () {
            if (dangQianXB_bl <= 0) {
                dangQianXB_bl = tuPSZ_changdu_bl;
            }
            dangQianXB_bl = dangQianXB_bl - 1;
            tuPianXZQ_bl.triggerHandler('qieHuanTuPian_hs', dangQianXB_bl);
        })
        .on('qieHuanTuPian_hs', function (evt, xiaBiao_bl) { //切换图片函数
            tuPianXZQ_bl.css('left', xiaBiao_bl * tuKuanDu_bl * -1); // 将 .inner 设为 left：-1200px
            yuanDian_bl.removeClass('active').eq(xiaBiao_bl).addClass('active'); //圆点 动态变化active
        })
        .on('zidong_qianhuan_hs', function () { // 这里是定义函数 需要另外调用
            setInterval(function () {
                // 当 tingzhi_lunbo为 false时 停止轮播
                tingzhi_lunbo && tuPianXZQ_bl.triggerHandler('XiaTu_hs'); // qieHuanTuPian_hs切换图片函数 需要参数 应该调用 XiaTu_hs下一个函数
            }, 2000)
        })

    // triggerHandler() 调用函数
    tuPianXZQ_bl.triggerHandler('zidong_qianhuan_hs'); // 调用自动轮播函数

    // 绑定事件 通过点击按钮 调用对应函数
    anNiu_xia_bl.on('click', function () {
        tuPianXZQ_bl.triggerHandler('XiaTu_hs'); //调用切换到下一个图片 方法/函数
    });
    anNiu_shang_bl.on('click', function () {
        tuPianXZQ_bl.triggerHandler('shangTu_hs');
    });
    // 点击小圆点 切换图片函数
    yuanDian_bl.on('click', function () {
        var yuandian_xiabiao = $(this).index(); // 获取当前点击 圆点下标 0 1 2 3 4
        // console.log(yuandian_xiabiao);
        tuPianXZQ_bl.triggerHandler('qieHuanTuPian_hs', yuandian_xiabiao); // 传递圆点下标 参数
    });
}

// 下拉菜单
$.fn.xialakuang_hanShu = function() {
    var ui = $(this);
    // 点击展开下拉框
    $('.ui-search-selected', ui).on('click', function() {
        $('.ui-search-selected-list', ui).show();
        return false;
    });

    // 点击选中下拉框文本 替换到 上面
    $('.ui-search-selected-list a', ui).on('click', function(){
        // $(this).text() 选中的文本
        $('.ui-search-selected .item').text($(this).text());
        $('.ui-search-selected-list', ui).hide();
        return false;
    });


    // 这部分代码 会影响 boostrap导航下拉菜单 在移动端的功能
    // 点击页面 body 部分收起下拉框
    // $('body').on('click', function(){
    //     $('.ui-search-selected-list', ui).hide();
    //     return false;
    // });
}

// 导航切换条 tab
$.fn.qie_huan_tiao_hanshu =function(qiehuan_tiao, qiehuan_bufen) {

    var ui = $(this);
    var qiehuan_tiao_bl = $(qiehuan_tiao, ui); //切换条 点击部分
    var qiehuan_bufen_bl = $(qiehuan_bufen, ui); // 被切换部分
    // console.log(qiehuan_tiao_bl);

    qiehuan_tiao_bl.on('click', function(){
        // console.log($(this).index());
        var dangqian_xiaobiao = $(this).index();  // ul li 会影响点击 获取 a 下标 不要放到ul li 里面
        // debugger
        // var index = $(this).index();
        // console.log(dangqian_xiaobiao);
        
        qiehuan_tiao_bl.removeClass('active').eq(dangqian_xiaobiao).addClass('active'); //移除 active累 再添加
        qiehuan_bufen_bl.hide().eq(dangqian_xiaobiao).show(); 
        return false;
    })

}

//主函数 从这里开始执行
$(function () {
    $('.ui-slider-LunBT').LBT_hanShu(); // 调用轮播图 函数
    $('.ui-search').xialakuang_hanShu(); // 下拉框函数
    $('.ui-tab').qie_huan_tiao_hanshu('.direction .item', '.ui-tab-qiehuan .item'); // 导航切换条 tab
});