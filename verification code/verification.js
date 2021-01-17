// 绘制验证码，并用 code 记录
let code = randomText(4);
draw(code);


// 点击刷新验证码
function dj() {
    code = randomText(4);
    draw(code);
}


// 点击提交
function submit() {
    let val = document.getElementById("text").value;
    val = val.toLowerCase();

    if (val == '') {
        alert('请输入验证码！');
    } else if (val == code) {
        alert('提交成功！');
    } else {
        alert('验证码错误！');
    }
}


function draw(codeStr) {
    let text = codeStr.split('');

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    let canvas_width = document.getElementById('canvas').clientWidth;
    let canvas_height = document.getElementById('canvas').clientHeight;

    canvas.width = canvas_width;
    canvas.height = canvas_height;


    // 绘制验证码文本
    text.forEach((char, i) => {
        //产生0~30之间的随机弧度
        let deg = Math.random() * 30 * Math.PI / 180;

        let x = 10 + i * 20; //文字在canvas上的x坐标
        let y = 20 + Math.random() * 8; //文字在canvas上的y坐标

        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(char, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);

    });

    // 验证码上显示线条
    for (let i = 0; i < 6; i++) {
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }

    // 验证码上显示小点
    for (let i = 0; i <= 30; i++) {
        context.strokeStyle = randomColor();
        context.beginPath();
        let x = Math.random() * canvas_width;
        let y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}



// 随机验证码
function randomText(length) {
    let src = "1234567890qwertyuiopasdfghjklzxcvbnm";
    let size = src.length;
    let text = [];
    for (let i = 0; i < length; i++) {
        let pos = Math.floor(Math.random() * size);
        text.push(src.charAt(pos));
    }
    return text.join('');
}

// 得到随机的颜色值
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}