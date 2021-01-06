/**
 * 用户登录页面
 */

// 入口函数
$(function () {
    loadEvents();
});


/**
 * 加载事件
 */
function loadEvents() {

    // 用户登录
    $('#userLogin').click(() => {
        $('#userLogin').addClass('active');
        $('#adminLogin').removeClass('active');
        $('#userLoginForm').show();
        $('#adminLoginForm').hide();
    });

    // 管理员登录
    $('#adminLogin').click(() => {
        $('#adminLogin').addClass('active');
        $('#userLogin').removeClass('active');
        $('#adminLoginForm').show();
        $('#userLoginForm').hide();
    });

}