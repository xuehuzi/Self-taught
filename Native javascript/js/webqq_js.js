window.onload = function () {
    var login_btn = document.getElementById('login');
    var close = document.getElementById('close');//关闭按钮

    // 封装添加事件监听程序
    function addEvent(ele, type, hander) {
        if (ele.addEventListener) {
            ele.addEventListener(type, hander, false)
        }
        else if (ele.attachEvent) {
            ele.attachEvent('on' + type, hander)
        }
    }

    function removeaddEvent(ele, type, hander) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, hander, false)
        }
        else if (ele.detachEvent) {
            ele.detachEvent('on' + type, hander)
        }
    }

    // 显示登录层函数
    function showLogin() {
        login_box.style.display = 'block';
    }

    // 隐藏登录层函数
    function hideLogin() {
        login_box.style.display = 'none';
    }

    addEvent(login_btn, 'click', showLogin);
    addEvent(close, 'click', hideLogin);

//------------------------------------------------------------以上登陆按钮------------------------------------------------
    var login_box = document.getElementById('login_box');//整个登陆框
    var login_logo = document.getElementById('login_logo');

    var zhanghao_input = document.getElementById('zhanghao_input');//账号输入input
    var mima_input = document.getElementById('mima_input');//密码输入input
    var zhuangtai_li = document.getElementById('zhuangtai_li');
    var zhuangtai_li_li = zhuangtai_li.getElementsByTagName('li');

    var zhuangtai_logo = document.getElementsByClassName('zhuangtai_logo');//状态列表图标
    var zhuangtai_txt = document.getElementsByClassName('zhuangtai_txt');//状态列表文本
    var id_zhuangtai_txt = document.getElementById('zhuangtai_txt');
    var id_zhuangtai = document.getElementById('zhuangtai');
    var xuanze_zhuangtai = document.getElementById('xuanze_zhuangtai');//状态列表

    var window_width = document.documentElement.clientWidth || document.body.clientWidth;
    var window_height = document.documentElement.clientHeight || document.body.clientHeight;
    //页面可视区宽高
    var denglu_btn = document.getElementById('denglu_btn');
    var zhuce_btn = document.getElementById('zhuce_btn');

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            //alert(obj.currentStyle[attr]);
            return obj.currentStyle[attr];
        }
        else {
            return getComputedStyle(obj, false)[attr];
        }
    }//获取html未加载样式时的容器样式；注意不同样式加载顺序生效顺序

    zhanghao_input.onfocus = function () {
        if (zhanghao_input.value == '请输入至少5位纯数字QQ号') {
            zhanghao_input.value = '';
        }
    };

    zhanghao_input.onblur = function () {
        if (zhanghao_input.value == '') {
            zhanghao_input.value = '请输入至少5位纯数字QQ号';
        }
    };
    //账号输入input默认文本显示规则

    for (var i = 0; i < zhuangtai_li_li.length; i++) {
        zhuangtai_li_li[i].index = i;
        zhuangtai_li_li[i].onmousemove = function () {
            this.style.backgroundColor = '#567';
        };
        zhuangtai_li_li[i].onmouseout = function () {
            this.style.background = ''
        };
        zhuangtai_li_li[i].onclick = function () {
            zhuangtai_li.style.display = '';
            id_zhuangtai_txt.innerHTML = zhuangtai_txt[this.index].innerHTML;
            id_zhuangtai.style.backgroundPositionX = getStyle(zhuangtai_logo[this.index], 'backgroundPositionX');
            //0 -18 -36 -107 -53
            //console.log(zhuangtai_txt[this.index].backgroundPositionX);
            //console.log(getStyle(zhuangtai_logo[this.index], 'backgroundPositionX'));
        };
    }
    //设置状态切换的图标和文本

    xuanze_zhuangtai.onclick = function (event) {
        event.stopPropagation();//阻止事件冒泡
        if (zhuangtai_li.style.display == 'block') {
            zhuangtai_li.style.display = ''
        }
        else {
            zhuangtai_li.style.display = 'block';
        }
    };

    document.onclick = function (event) {
        event.stopPropagation();//阻止事件冒泡
        zhuangtai_li.style.display = 'none';
    };
    //状态列表显示规则

    function mouse_down_xy(event) {
        event = event || window.event;
        var mouse_down_x = event.clientX - login_box.offsetLeft;
        var mouse_down_y = event.clientY - login_box.offsetTop;
        //鼠标按下时的坐标
        document.onmousemove = function (event) {
            event = event || window.event;
            mouse_move_xy(event, mouse_down_x, mouse_down_y);
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        //document下鼠标松开时禁止执行鼠标移动和鼠标松开的默认事件
    }

    function mouse_move_xy(event, mouse_move_x, mouse_move_y) {
        var x = event.clientX - mouse_move_x;
        var y = event.clientY - mouse_move_y;
        //鼠标移动时的坐标
        if (x < 0) {
            x = 0;
        } else if (x > window_width - login_box.offsetWidth) {
            x = window_width - login_box.offsetWidth;
        }
        if (y < 0) {
            y = 10;
        } else if (y > window_height - login_box.offsetHeight) {
            y = window_height - login_box.offsetHeight;
        }
        //窗口可移动的范围等于网页可视宽高减去需要移动窗口的内容高度
        login_box.style.left = x + 'px';
        login_box.style.top = y + 'px';
    }

    login_logo.onmousedown = function (event) {
        mouse_down_xy(event);
    };
    //登陆框移动
    function cheek_input() {
        if (zhanghao_input.value == '' || zhanghao_input.value == '请输入至少5位纯数字QQ号') {
            alert('请输入QQ号');
        }
        else {
            if (!isNaN(zhanghao_input.value) && zhanghao_input.value > 0 && parseInt(zhanghao_input.value) == zhanghao_input.value && zhanghao_input.value.split('')[0] != 0 && 5 <= zhanghao_input.value.length && zhanghao_input.value.length <= 9) {
                if (mima_input.value == '') {
                    alert('请输入密码');
                }
                else {
                    window.open('./webqq_project.html', '_self', 'width=800,height=600,menubar=yes,toolbar=yes, status=yes,scrollbars=yes')
                }
            }
            else {
                alert('输入错误');
            }
        }
    }

    zhuce_btn.onclick = function () {
        window.open('http://www.imooc.com', '_blank', 'width=800,height=600,menubar=yes,toolbar=yes, status=yes,scrollbars=yes')
    };

    denglu_btn.onclick = function () {
        cheek_input();
    }


};




