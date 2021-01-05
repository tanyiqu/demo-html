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
    // 菜单切换
    switchDivTab([
        new DivTab('#userLogin', '.user'),
        new DivTab('#adminLogin', '.admin')
    ]);

    // 管理员登录
    $('#adminLoginForm').submit(() => {
        simpleLogin({
            username: $('#adminUsername').val(),
            password: $('#adminPassword').val(),
            type: 3
        }, (data) => {
            // 存储账号密码到 localStorage中
            console.log(data);
            localStorage.setItem('course-web-curr-admin-username', data.data['adminAccount']);
            localStorage.setItem('course-web-curr-admin-password', data.data['adminPwd']);
            // 跳转到管理页面
            window.location.href = `admin.html?sign=${md5(data.data['adminAccount'] + data.data['adminPwd'])}`;
        });
        return false;
    });

    // 教师登录
    $('#userLoginForm').submit(() => {
        let username = $('#teacherUsername').val();
        let password = $('#teacherPassword').val();
        simpleLogin({
            username: username,
            password: password,
            type: 2
        }, (data) => {
            // 存储账号密码到 localStorage中
            localStorage.setItem('course-web-curr-teacher-username', data.data['tno']);
            localStorage.setItem('course-web-curr-teacher-password', data.data['pwd']);
            localStorage.setItem('course-web-curr-teacher-name', data.data['name']);
            localStorage.setItem('course-web-curr-teacher-avatar', data.data['avatar']);
            console.log(localStorage['course-web-curr-teacher-username']);
            console.log(localStorage['course-web-curr-teacher-password']);
            // 跳转到教师页面
            window.location.href = 'teacher.html?sign=' + md5(localStorage['course-web-curr-teacher-username'] + localStorage['course-web-curr-teacher-password']);
        });
        return false;
    });

}
