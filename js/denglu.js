$(document).ready(function ($) {
    // console.log(1);  
    // $('#zhezhao-tanchuceng').show();  测试

    // 登录链接事件
    $('#denglu-lianjie').click(function () {

        // 获取登录窗体代码
        var denglu_html = $('#denglu-chuangti').html();
        // 调用展示函数
        xianshi_tanchuceng_hs(denglu_html, 400, 300);

        // 登录表单验证
        $('#denglu-tijiao-anniu').click(function() {

            // 获取 input 用户输入的内容 用户名和密码
            var yonghuming_bl = $("input[name='username']").val();
            var mima_bl = $("input[name='password']").val();

            // 如果用户名 和 密码 都为 123456 弹出 成功 否则 输入错误
            if(yonghuming_bl === '123456' && mima_bl === '123456') {
                alert('登录成功');
            }else{
                $('.ui-cuowu-xinxi').html('用户名和密码输入错误');
            }
        });
    });

    // 弹出关闭回调函数 清空错误信息
    function qingkong_xinxi() {
        $('.ui-cuowu-xinxi').html('');
    }

    // 显示弹出层 定义函数
    function xianshi_tanchuceng_hs(html_xingcan, kuan_xingcan, gao_xingcan) {

        // 显示弹出层遮罩
        $('#zhezhao-tanchuceng').show();
        // 显示弹出层窗体
        $('#chuangti-tanchuceng').show();
        // 设置弹出窗体样式 宽高
        $('#chuangti-tanchuceng').css({
            width: kuan_xingcan,
            height: gao_xingcan
        });
        // 填充弹出层窗体内容
        $('#tanchuceng-neirong').html(html_xingcan);
        // 弹出关闭按钮绑定事件
        $('#tanchuceng-guanbi').click(function () {
            // 隐藏弹出层
            yincang_hs();
            // 关闭的回调函数
            qingkong_xinxi();
        });
    }

    // 隐藏函数
    function yincang_hs() {
        // 隐藏弹出层遮罩
        $('#zhezhao-tanchuceng').hide();
        // 弹出层窗体隐藏
        $('#chuangti-tanchuceng').hide();
    }

});