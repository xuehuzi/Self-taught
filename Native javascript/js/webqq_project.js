window.onload = function () {
    var min_footer_li = document.getElementById('min_footer_ul').getElementsByTagName('li');
    var right = document.getElementById('right');
    var qq_talk_body_head_value = document.getElementById('qq_talk_body_head').firstElementChild;
    var min_header_txt = document.getElementById('min_header_txt');
    var min_header_txt_nav = min_header_txt.nextElementSibling;
    var min_header_txt_nav_span = min_header_txt_nav.getElementsByTagName('span');
    //
    var min_bg_div1_li = document.getElementsByClassName('min_bg_div1_li');
    //8.17
    var qq_talk_body = document.getElementById('qq_talk_body');
    var qq_talk_seach = document.getElementById('qq_talk_seach');
    var talk_link = document.getElementById('talk_link');
    var search_flg = 0;
    var talk_flg = 0;
    var setup_flg = 0;
    //8.17
    var qq_talk_body_head_close = document.getElementById('qq_talk_body_head_close');
    var qq_talk_body_head_selent = document.getElementById('qq_talk_body_head_selent');
    //
    var min_bg_div2_ul_li = document.getElementById('min_bg_div2').firstElementChild.getElementsByTagName('li');
    //
    var min_bg_div_list = document.getElementById('min_bg_div_list');
    var min_bg_div1_list = document.getElementById('min_bg_div1_list');
    var min_bg_div_list_leftflag = 0;
    var min_bg_div1_list_leftflg = 0;
    var div3_min_bg_div_1_div = document.getElementById('div3_min_bg_div_1').getElementsByTagName('div')[0];
    var div3_min_bg_div_1_ul = document.getElementById('div3_min_bg_div_1_ul');
    var div3_min_bg_div_1_ul_li = div3_min_bg_div_1_ul.getElementsByTagName('li');
    //
    var qq_talk_body_footer_bar_img = document.getElementById('qq_talk_body_footer_bar').getElementsByTagName('img')[0];
    var display_flg = 0;
    var qq_talk_body_footer_face = document.getElementById('qq_talk_body_footer_face');
    var qq_talk_body_footer_bar = document.getElementById('qq_talk_body_footer_bar');
    var qq_talk_body_min = document.getElementById('qq_talk_body_min');
    var qq_talk_body_footer_face_choose = document.getElementById('qq_talk_body_footer_face_choose');
    //
    var qq_talk_body_footer_face_img_iteam = document.getElementsByClassName('qq_talk_body_footer_face_img_iteam');
    var qq_talk_body_footer_face_img = document.getElementsByClassName('qq_talk_body_footer_face_img');
    var face_img_iteam_width = getStyle(qq_talk_body_footer_face_img_iteam[0], 'width').substring(0, getStyle(qq_talk_body_footer_face_img_iteam[0], 'width').length - 2);
    var face_img_marginLeft = getStyle(qq_talk_body_footer_face_img[0], 'marginLeft').substring(0, getStyle(qq_talk_body_footer_face_img[0], 'marginLeft').length - 2);
    var qq_talk_body_footer_face_choose_numb = document.getElementsByClassName('qq_talk_body_footer_face_choose_numb');
    var left_flg = 0;
    //
    var talk_content = document.getElementsByClassName('talk_content');
    //
    var div3_min_bg_div_4_1 = document.getElementsByClassName('div3_min_bg_div_4_1')[0];
    //
    var div3_min_bg_div_3 = document.getElementById('div3_min_bg_div_3');
    var qq_talk_setup = document.getElementById('qq_talk_setup');
    var qq_talk_setup_close = qq_talk_setup.firstElementChild.firstElementChild;
    //
    var qq_talk_body_head_news = document.getElementById('qq_talk_body_head_news');
    var title_type = '';
    //
    var top_touxiang_id = document.getElementsByClassName('top_touxiang_id')[0];
    var qq_talk_input = document.getElementById('qq_talk_input');
    //
    var xiangxiziliao = qq_talk_body_head_news.lastElementChild;
    var qq_talk_body_head_next = document.getElementById('qq_talk_body_head').firstElementChild.nextElementSibling;
    var talk_link_1 = document.getElementById('talk_link_1');
    var qq_talk_date_body = document.getElementById('qq_talk_date_body');
    var qq_talk_date_group = document.getElementById('qq_talk_date_group');
    //聊天窗口群、个人信息查看
    var fasong = qq_talk_body_footer_bar.lastElementChild;
    var emj_i = qq_talk_body_footer_face.getElementsByTagName('i');
    var send_arry = [];
    var emj_arry = [];

    //表情和文字输入

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        else {
            return getComputedStyle(obj, false)[attr];
        }
    }//获取html未加载样式时的容器样式；注意不同样式加载顺序生效顺序

    function getBroswer() {
        var sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
                (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
                    (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
                        (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
                            (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
                                (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

        if (sys.edge) return {broswer: "Edge", version: sys.edge};
        if (sys.ie) return {broswer: "IE", version: sys.ie};
        if (sys.firefox) return {broswer: "Firefox", version: sys.firefox};
        if (sys.chrome) return {broswer: "Chrome", version: sys.chrome};
        if (sys.opera) return {broswer: "Opera", version: sys.opera};
        if (sys.safari) return {broswer: "Safari", version: sys.safari};

        return {broswer: "", version: "0"};
    }//浏览器判断函数

    (function () {
        var Broswer_name = getBroswer();
        var bg_body = document.getElementById('bg_body');
        var no_body = document.getElementById('no_body');
        if (Broswer_name.broswer === 'Chrome') {
            //alert('正常');
            bg_body.style.display = 'block';
        }
        if (Broswer_name.broswer === 'Edge' || Broswer_name.broswer === 'Firefox') {
            //alert('滚动条异常');
            bg_body.style.display = 'block';
        }
        if (Broswer_name.broswer === 'IE') {
            //alert('抱歉不支持');
            no_body.style.display = 'block';
            document.body.style.background = '#575757';
        }
        if (Broswer_name.broswer !== 'Chrome' && Broswer_name.broswer !== 'Edge' && Broswer_name.broswer !== 'Firefox' && Broswer_name.broswer !== 'IE') {
            //alert('改浏览器未做测试，可能会显示异常，请使用谷歌浏览器');
            no_body.style.display = 'block';
            document.body.style.background = '#575757';
        }
    })();//判断浏览器是否可显示页面内容

    for (var i = 0; i < min_footer_li.length; i++) {
        var min_footer_txt = document.getElementsByClassName('min_footer_txt');
        var min_footer_icon = document.getElementsByClassName('min_footer_icon');
        var url_arry = ['tab_icon_conversation', 'tab_icon_contact', 'tab_icon_plugin', 'tab_icon_setup'];
        var min_header_search = document.getElementById('min_header_search');
        var min_bg = document.getElementById('min_bg');
        var min_bg_div_ul = document.getElementsByClassName('min_bg_div_ul').length;

        min_footer_li[i].index = i;
        min_footer_li[i].onclick = function () {
            for (var i = 0; i < min_footer_li.length; i++) {
                min_footer_li[i].className = '';
                min_footer_icon[i].src = './img/' + url_arry[i] + '.png';
            }
            this.className = 'min_footer_li';
            min_header_txt.innerHTML = min_footer_txt[this.index].innerHTML;
            min_footer_icon[this.index].src = './img/' + url_arry[this.index] + '_selected' + '.png';
            min_bg_div_list.style.left = this.index * -(parseInt(getStyle(min_bg_div_list, 'width')) / min_bg_div_ul) + 'px';
            min_bg_div_list_leftflag = this.index;
            if (this.index === 1) {
                min_header_search.style.display = 'block';
                min_bg.style.top = 85 + 'px';
                min_header_txt_nav.removeAttribute('style');
            }
            else {
                min_header_search.style.display = 'none';
                min_bg.style.top = 45 + 'px';
                min_header_txt_nav.style.display = 'none';
            }
            //console.log(min_footer_txt[this.index].innerHTML);
            //console.log(min_footer_icon[this.index].src);
        }
    }
    /*会话联系人等tab切换*/

    min_header_search.onclick = function () {
        if (getStyle(qq_talk_seach, 'display') === 'none') {
            if (talk_flg === 1 || setup_flg === 1) {
                qq_talk_seach.style.zIndex = Math.max(getStyle(qq_talk_setup, 'zIndex'), getStyle(qq_talk_body, 'zIndex')) + 1;
            }//自己关闭状态且聊天或设置窗口某一个是显示状态
            qq_talk_seach.style.display = 'block';
            search_flg = 1;
        }//自己是关闭状态
        else {
            if (talk_flg === 0 && setup_flg === 0) {
                qq_talk_seach.style.display = 'none';
                qq_talk_seach.style.zIndex = '10001';
                search_flg = 0;
            }//自己是显示状态且聊天和设置窗口都不是显示状态
            if (parseInt(getStyle(qq_talk_seach, 'zIndex')) > parseInt(getStyle(qq_talk_body, 'zIndex')) && parseInt(getStyle(qq_talk_seach, 'zIndex')) > parseInt(getStyle(qq_talk_setup, 'zIndex'))) {
                qq_talk_seach.style.display = 'none';
                qq_talk_seach.style.zIndex = '10001';
                search_flg = 0;
            }//自己是显示状态，并且显示优先级是最高的
            if (parseInt(getStyle(qq_talk_seach, 'zIndex')) <= parseInt(getStyle(qq_talk_body, 'zIndex')) || parseInt(getStyle(qq_talk_seach, 'zIndex')) <= parseInt(getStyle(qq_talk_setup, 'zIndex'))) {
                qq_talk_seach.style.zIndex = Math.max(getStyle(qq_talk_setup, 'zIndex'), getStyle(qq_talk_body, 'zIndex')) + 1;
            }//自己是显示状态但显示优先级不是最高的
        }
    };
    //搜索窗口开关切换

    talk_link.onclick = function () {
        qq_talk_seach.style.display = 'none';
        search_flg = 0;
    };
    //搜索窗口关闭

    qq_talk_body_head_close.onclick = function () {
        qq_talk_body.style.display = 'none';
        qq_talk_body.style.zIndex = '10001';
        if (search_flg === 1) {
            qq_talk_seach.style.display = 'block';
        }
        if (setup_flg === 1) {
            qq_talk_setup.style.display = 'block';
        }
        if (min_bg_div_list_leftflag === 1) {
            min_header_txt_nav.style.cssText = 'position: absolute;width: 100%;height: 38px;background-color: white;';
        }
        talk_flg = 0;
    };
    /*聊天窗口关闭*/

    for (var x = 0; x < min_header_txt_nav_span.length; x++) {
        min_header_txt_nav_span[x].index = x;
        min_header_txt_nav_span[x].onclick = function () {
            for (var i = 0; i < min_header_txt_nav_span.length; i++) {
                min_header_txt_nav_span[i].style.cssText = 'color: black;border-bottom-color: #CCCCCC;';
            }
            min_bg_div1_list.style.left = this.index * -(parseInt(getStyle(min_bg_div1_list, 'width')) / 3) + 'px';
            min_header_txt_nav_span[this.index].style.cssText = 'color: #0aa7ff;border-bottom-color: #0aa7ff;';
            min_bg_div1_list_leftflg = this.index;
        }
    }
    //联系人好友群讨论组tab切换

    for (var z = 0; z < min_bg_div1_li.length; z++) {
        var min_bg_ul1_li_div = document.getElementsByClassName('min_bg_ul1_li_div');
        var min_bg_ul1_li_ul_1 = document.getElementsByClassName('min_bg_ul1_li_ul_1');
        min_bg_div1_li[z].index = z;
        min_bg_div1_li[z].onclick = function () {
            if (min_bg_div1_li[this.index].lastElementChild.nodeName === 'UL') {
                if (getStyle(min_bg_ul1_li_ul_1[this.index], 'display') === 'none') {
                    min_bg_ul1_li_ul_1[this.index].style.display = 'block';
                    min_bg_ul1_li_div[this.index].firstElementChild.className = 'min_bg_ul1_s1_1';
                }
                else {
                    min_bg_ul1_li_ul_1[this.index].style.display = 'none';
                    min_bg_ul1_li_div[this.index].firstElementChild.className = 'min_bg_ul1_s1';
                }
            }
            else {
                if (min_bg_ul1_li_div[this.index].firstElementChild.className === 'min_bg_ul1_s1') {
                    min_bg_ul1_li_div[this.index].firstElementChild.className = 'min_bg_ul1_s1_1';
                }
                else {
                    min_bg_ul1_li_div[this.index].firstElementChild.className = 'min_bg_ul1_s1';
                }
                return false;
            }
            //console.log(getStyle(min_bg_ul1_li_ul_1[this.index], 'display'));
        }
    }
    //联系人tab，好友列表点开闭合

    for (var t = 0; t < emj_i.length; t++) {
        if (emj_i[t].title !== 'delKey') {
            emj_arry.push('[' + emj_i[t].title + ']');
            send_arry['[' + emj_i[t].title + ']'] = {
                text: emj_i[t].title,
                src: 'http://pub.idqqimg.com/lib/qqface/' + t + '.gif'
            }
        }
    }//获取表情列表，并存到对象内
    console.log(emj_arry);

    function emojtoimg(text) {
        return text.replace(/\[((K歌)|(NO)|(OK)+|[\u4e00-\u9fa5]{1,3})\]/g, function (e) {
            return '<img src="' + send_arry[e].src + '" />';
        })
    }//封装表情转换函数

    for (var v = 0; v < emj_i.length; v++) {
        emj_i[v].onclick = function () {
            if (this.tagName == 'I' && this.title !== 'delKey') {//HTML 返回 tagName 属性的值是大写的。
                qq_talk_input.value = qq_talk_input.value + '[' + this.title + ']';//展示内容
            }
            else {
                var new_arry1 = qq_talk_input.value.split(/(\[K歌\]|\[NO\]|\[OK\]|\[[\u4e00-\u9fa5]{1,3}\])/g);
                var test1_reg = /(\[K歌\]|\[NO\]|\[OK\]|\[[\u4e00-\u9fa5]{1,3}\])/;
                var new_arry2 = [];
                var new_arry3 = [];
                var new_arry4 = [];
                for (var i = 0; i <= new_arry1.length; i++) {//去除数组内undefined
                    if (new_arry1[i] !== '' && new_arry1[i] !== undefined) {
                        new_arry2.push(new_arry1[i]);
                    }
                }
                for (var i = 0; i < new_arry2.length; i++) {//判断数组内每项值，是否符合正则拆分规则
                    if (test1_reg.test(new_arry2[i]) === true && emj_arry.indexOf(new_arry2[i]) !== -1) {
                        new_arry3.push(new_arry2[i]);
                        new_arry4 = new_arry4.concat(new_arry3);
                        new_arry3 = [];
                    }
                    else {
                        new_arry3 = new_arry2[i].split('');
                        new_arry4 = new_arry4.concat(new_arry3);
                        new_arry3 = [];
                    }
                }
                new_arry4.pop();
                qq_talk_input.value = new_arry4.join('');
            }
        }
    }//输入框内容显示及删除

    for (var j = 0; j < talk_content.length; j++) {
        talk_content[j].index = j;
        talk_content[j].onclick = function (e) {
            e.stopPropagation();
            /*11.2*/
            title_type = this.title;
            qq_talk_body_head_news.style.display = 'none';
            qq_talk_body_head_selent.style.display = 'block';
            qq_talk_body_head_next.style.display = 'none';
            qq_talk_date_group.style.display = 'none';
            qq_talk_date_body.style.display = 'none';
            /*11.2*/
            if (search_flg === 1) {
                qq_talk_seach.style.display = 'none';
            }
            if (setup_flg === 1) {
                qq_talk_setup.style.display = 'none';
            }
            qq_talk_body.style.zIndex = Math.max(getStyle(qq_talk_setup, 'zIndex'), getStyle(qq_talk_seach, 'zIndex')) + 1;
            qq_talk_body.style.display = 'block';
            qq_talk_body_head_value.innerHTML = talk_content[this.index].firstElementChild.nextElementSibling.innerHTML;
            talk_flg = 1;
            if (!this.getAttribute('index')) {
                this.setAttribute('index', this.index);
                //添加对应的index
                var talk_name_list_div = document.createElement('div');
                var min_others_div = document.createElement('div');//
                var talk_name_list_img = document.createElement('img');
                var new_p = document.createElement('p');
                var new_p1 = document.createElement('p');
                var new_p_text = document.createTextNode(qq_talk_body_head_value.innerHTML);
                var new_p1_text = document.createTextNode(qq_talk_body_head_value.innerHTML);
                qq_talk_body_min.appendChild(talk_name_list_div);
                talk_name_list_div.appendChild(min_others_div);
                min_others_div.appendChild(talk_name_list_img);
                min_others_div.appendChild(new_p);
                min_others_div.appendChild(new_p1);
                new_p.appendChild(new_p_text);
                new_p1.appendChild(new_p1_text);
                talk_name_list_div.className = 'talk_name_list';
                min_others_div.className = 'qq_talk_body_min_others';
                talk_name_list_img.className = 'qq_talk_body_min_touxiang';
                talk_name_list_img.src = './img/plugin_icon_qzone.jpg';
                new_p.className = 'qq_talk_body_min_zhanghao';
                new_p1.className = 'qq_talk_body_min_mesg';
                talk_name_list_div.id = this.index;
            }
            //判断当前点击的会话列表（包括群和讨论组好友内的列表）是否点击过，没点击过则添加对应的index并创建对应的对话窗口
            var talk_name_list = document.getElementsByClassName('talk_name_list');
            for (var o = 0; o < talk_name_list.length; o++) {
                if (parseInt(talk_name_list[o].id) !== this.index) {//使用!=会提示类型问题，talk_name_list[o].id的typeof是string；this.index是number
                    talk_name_list[o].style.display = 'none';
                } else {
                    talk_name_list[o].style.display = 'block';
                }
                /*11.5*/

                fasong.onclick = function () {//发送按钮
                    if (qq_talk_input.value.length !== 0) {//input是否为空
                        var qq_talk_body_min_me = document.createElement('div');
                        var qq_talk_body_min_me_img = document.createElement('img');
                        var qq_talk_body_min_me_p1 = document.createElement('p');
                        var qq_talk_body_min_me_p2 = document.createElement('p');
                        talk_name_list_div.appendChild(qq_talk_body_min_me);
                        /*
                        * BUG待查页面刚打开，不确定是否加载问题导致报错
                        * webqq_project.js:311 Uncaught TypeError: Cannot read property 'appendChild' of undefined at HTMLHeadingElement.fasong.onclick
                        */
                        qq_talk_body_min_me.appendChild(qq_talk_body_min_me_img);
                        qq_talk_body_min_me.appendChild(qq_talk_body_min_me_p1);
                        qq_talk_body_min_me.appendChild(qq_talk_body_min_me_p2);
                        qq_talk_body_min_me.className = 'qq_talk_body_min_me';
                        qq_talk_body_min_me_img.className = 'qq_talk_body_min_touxiang';
                        qq_talk_body_min_me_p1.className = 'qq_talk_body_min_zhanghao';
                        qq_talk_body_min_me_p2.className = 'qq_talk_body_min_mesg';
                        qq_talk_body_min_me_img.src = './img/plugin_icon_qzone.jpg';
                        qq_talk_body_min_me_p1.innerHTML = top_touxiang_id.innerHTML;
                        /*1.31*/
                        qq_talk_body_min_me_p2.innerHTML += '<p>' + emojtoimg(qq_talk_input.value) + '</p>'; // 把表情转换为图片后输出
                        qq_talk_input.value = '';//发送按钮点击后清空输入框内容
                        /*1.31*/
                    }
                    else {
                        alert('没输入内容');
                    }
                }
            }
        }
    }//聊天窗口弹出

    qq_talk_body_head_selent.onclick = function () {
        var old_head_text = '';
        old_head_text = qq_talk_body_head_value.innerHTML;
        if (getStyle(qq_talk_body_head_news, 'display') === 'none') {
            /*11.2*/
            var head_selent_type1 = qq_talk_body_head_news.firstElementChild.lastElementChild;
            var head_selent_type2 = qq_talk_body_head_news.lastElementChild.lastElementChild;
            if (title_type === 'talk') {
                head_selent_type1.innerHTML = 'QQ空间';
                head_selent_type2.innerHTML = '详细资料';
                qq_talk_body_head_news.firstElementChild.firstElementChild.style.backgroundPositionX = '120px';
                qq_talk_body_head_news.lastElementChild.firstElementChild.style.backgroundPositionX = '-45px';
            }
            if (title_type === 'group') {
                head_selent_type1.innerHTML = '群成员';
                head_selent_type2.innerHTML = '群资料';
                qq_talk_body_head_news.firstElementChild.firstElementChild.style.backgroundPositionX = '0';
                qq_talk_body_head_news.lastElementChild.firstElementChild.style.backgroundPositionX = '-45px';
            }
            xiangxiziliao.onclick = function () {
                qq_talk_body_head_selent.style.display = 'none';
                qq_talk_body_head_next.style.display = 'block';
                qq_talk_body_head_news.style.display = 'none';
                talk_link_1.innerHTML = qq_talk_body_head_value.innerHTML;
                qq_talk_body_head_value.innerHTML = head_selent_type2.innerHTML;
                qq_talk_date_body.firstElementChild.lastElementChild.innerHTML = old_head_text;
                qq_talk_date_group.firstElementChild.lastElementChild.innerHTML = old_head_text;
                if (xiangxiziliao.lastElementChild.innerHTML === '详细资料') {
                    qq_talk_date_body.style.display = 'block';
                    qq_talk_date_body.style.zIndex = '10003';
                }
                if (xiangxiziliao.lastElementChild.innerHTML === '群资料') {
                    qq_talk_date_group.style.display = 'block';
                    qq_talk_date_group.style.zIndex = '10003';
                }
            };
            qq_talk_body_head_next.onclick = function () {
                qq_talk_date_body.style.display = 'none';
                qq_talk_date_body.style.zIndex = '';
                qq_talk_date_group.style.display = 'none';
                qq_talk_date_group.style.zIndex = '';
                qq_talk_body_head_next.style.display = 'none';
                qq_talk_body_head_selent.style.display = 'block';
                qq_talk_body_head_value.innerHTML = old_head_text;
            };
            /*11.2*/
            qq_talk_body_head_news.style.display = 'block';
        }
        else {
            qq_talk_body_head_news.style.display = 'none';
        }
    };
    //聊天窗口群、个人信息查看按钮

    for (var b = 0; b < min_bg_div2_ul_li.length; b++) {
        min_bg_div2_ul_li[b].index = b;
        min_bg_div2_ul_li[b].onclick = function () {
            if (min_bg_div2_ul_li[this.index].lastElementChild.innerHTML === 'QQ空间') {
                window.open('http://i.qq.com/')
            }
            if (min_bg_div2_ul_li[this.index].lastElementChild.innerHTML === 'QQ邮箱') {
                window.open('https://mail.qq.com')
            }
            if (min_bg_div2_ul_li[this.index].lastElementChild.innerHTML === '腾讯网') {
                window.open('http://www.qq.com/')
            }
        }
    }
    //发现界面

    div3_min_bg_div_1_div.onclick = function () {
        if (getStyle(div3_min_bg_div_1_ul, 'display') === 'none') {
            div3_min_bg_div_1_ul.style.display = 'block';
        }
        else {
            div3_min_bg_div_1_ul.style.display = 'none';
        }
    };
    //在线状态弹窗

    div3_min_bg_div_4_1.onclick = function () {
        var div3_min_bg_div_4_1_ul = div3_min_bg_div_4_1.nextElementSibling;
        var div3_min_bg_div_4_1_img = div3_min_bg_div_4_1.lastElementChild;
        if (getStyle(div3_min_bg_div_4_1_ul, 'display') === 'none') {
            div3_min_bg_div_4_1_ul.style.display = 'block';
            div3_min_bg_div_4_1_img.style.webkitTransform = 'rotate(90deg)';
        }
        else {
            div3_min_bg_div_4_1_ul.style.display = 'none';
            div3_min_bg_div_4_1_img.style.webkitTransform = 'rotate(0deg)';
        }
    };
    //设置面板在线状态界面闭合

    div3_min_bg_div_3.onclick = function () {
        if (getStyle(qq_talk_setup, 'display') === 'none') {
            if (talk_flg === 1 || search_flg === 1) {
                qq_talk_setup.style.zIndex = Math.max(getStyle(qq_talk_seach, 'zIndex'), getStyle(qq_talk_body, 'zIndex')) + 1;
            }
            qq_talk_setup.style.display = 'block';
            setup_flg = 1;
        }
        else {
            if (talk_flg === 0 && search_flg === 0) {
                qq_talk_setup.style.display = 'none';
                qq_talk_setup.style.zIndex = '10001';
                setup_flg = 0;
            }
            if (parseInt(getStyle(qq_talk_setup, 'zIndex')) > parseInt(getStyle(qq_talk_body, 'zIndex')) && parseInt(getStyle(qq_talk_setup, 'zIndex')) > parseInt(getStyle(qq_talk_seach, 'zIndex'))) {
                qq_talk_setup.style.display = 'none';
                qq_talk_setup.style.zIndex = '10001';
                setup_flg = 0;
            }
            if (parseInt(getStyle(qq_talk_setup, 'zIndex')) <= parseInt(getStyle(qq_talk_body, 'zIndex')) || parseInt(getStyle(qq_talk_seach, 'zIndex')) >= parseInt(getStyle(qq_talk_setup, 'zIndex'))) {
                qq_talk_setup.style.zIndex = Math.max(getStyle(qq_talk_seach, 'zIndex'), getStyle(qq_talk_body, 'zIndex')) + 1;
            }
        }
    };

    qq_talk_setup_close.onclick = function () {
        qq_talk_setup.style.display = 'none';
        qq_talk_setup.style.zIndex = '10001';
        setup_flg = 0;
    };
    //设置面板打开关闭

    for (var c = 0; c < div3_min_bg_div_1_ul_li.length; c++) {
        var div3_min_bg_div_1_s3 = document.getElementById('div3_min_bg_div_1_s3');
        div3_min_bg_div_1_ul_li[c].index = c;
        div3_min_bg_div_1_ul_li[c].onclick = function () {
            div3_min_bg_div_1_s3.style.backgroundPositionX = getStyle(div3_min_bg_div_1_ul_li[this.index].firstElementChild, 'backgroundPositionX');
            div3_min_bg_div_1_ul.style.display = 'none';
        }
    }//设置面板在线状态切换

    function img_click() {
        qq_talk_body_footer_bar_img.onclick = function () {
            if (right.scrollHeight > 500) {
                if (getStyle(qq_talk_body_footer_bar, 'bottom') === '0px') {
                    qq_talk_body_footer_bar.style.bottom = getStyle(qq_talk_body_footer_face, 'height');
                    qq_talk_body_min.style.bottom = parseInt(getStyle(qq_talk_body_footer_face, 'height').substring(0, getStyle(qq_talk_body_footer_face, 'height').length - 2)) + parseInt(getStyle(qq_talk_body_footer_bar, 'height').substring(0, getStyle(qq_talk_body_footer_bar, 'height').length - 2)) + 'px';
                    qq_talk_body_footer_face_choose.style.display = 'block';
                    qq_talk_body_footer_face.style.display = 'block';
                    display_flg = 1;
                }
                else {
                    qq_talk_body_footer_bar.style.bottom = 0 + 'px';
                    qq_talk_body_min.style.bottom = 50 + 'px';
                    qq_talk_body_footer_face_choose.style.display = 'none';
                    qq_talk_body_footer_face.style.display = 'none';
                    display_flg = 0;
                }
            }
        }
    }

    img_click();//表情界面显示及隐藏，

    for (var d = 0; d < qq_talk_body_footer_face_choose_numb.length; d++) {
        qq_talk_body_footer_face_choose_numb[d].index = d;
        qq_talk_body_footer_face_choose.firstElementChild.firstElementChild.style.backgroundColor = 'red';
        qq_talk_body_footer_face_choose_numb[d].onclick = function () {
            qq_talk_body_footer_face_img[0].style.left = -((qq_talk_body_footer_face_choose_numb[this.index].index - 1) * face_img_iteam_width - face_img_marginLeft) + 'px';
            //console.log('index=' + qq_talk_body_footer_face_choose_numb[this.index].index + '\n' + 'width=' + face_img_iteam_width + '\n' + 'marginLeft=' + face_img_marginLeft);
            left_flg = qq_talk_body_footer_face_choose_numb[this.index].index - 1;
            for (var i = 0; i < qq_talk_body_footer_face_choose_numb.length; i++) {
                qq_talk_body_footer_face_choose_numb[i].style.backgroundColor = '';
            }
            qq_talk_body_footer_face_choose_numb[this.index].style.backgroundColor = 'red';
        }
    }
    //表情图轮播

    window.onresize = function () {
        var min_bg_div = getStyle(document.getElementById('min_bg_div'), 'width').substring(0, getStyle(document.getElementById('min_bg_div'), 'width').length - 2);
        var min_bg_div1 = getStyle(document.getElementById('min_bg_div1'), 'width').substring(0, getStyle(document.getElementById('min_bg_div1'), 'width').length - 2);
        var min_bg_div2 = getStyle(document.getElementById('min_bg_div2'), 'width').substring(0, getStyle(document.getElementById('min_bg_div2'), 'width').length - 2);

        var min_bg_ul1_ul = getStyle(document.getElementById('min_bg_ul1_ul'), 'width').substring(0, getStyle(document.getElementById('min_bg_ul1_ul'), 'width').length - 2);
        var min_bg_ul1_qundiv = getStyle(document.getElementById('min_bg_ul1_qundiv'), 'width').substring(0, getStyle(document.getElementById('min_bg_ul1_qundiv'), 'width').length - 2);

        face_img_iteam_width = getStyle(qq_talk_body_footer_face_img_iteam[0], 'width').substring(0, getStyle(qq_talk_body_footer_face_img_iteam[0], 'width').length - 2);
        face_img_marginLeft = getStyle(qq_talk_body_footer_face_img[0], 'marginLeft').substring(0, getStyle(qq_talk_body_footer_face_img[0], 'marginLeft').length - 2);
        qq_talk_body_footer_face_img[0].style.left = -(left_flg * face_img_iteam_width - face_img_marginLeft) + 'px';//��Ļ��ȱ仯���ұ�ǩ�������ֲ����ʱ��֮ǰ��ǩͼ��leftֵ������ղ����ݵ�ǰ��Ļ�����������

        switch (min_bg_div1_list_leftflg) {
            case 0:
                min_bg_div1_list.style.left = 0;
                break;
            case 1:
                min_bg_div1_list.style.left = -min_bg_ul1_ul - 6 + 'px';
                break;
            case 2:
                min_bg_div1_list.style.left = -min_bg_ul1_ul - min_bg_ul1_qundiv - 6 + 'px';
                break;
            default :
        }//网页宽度变化时，好友群讨论组三个界面宽度及left值跟随界面宽度变化

        switch (min_bg_div_list_leftflag) {
            case 0:
                min_bg_div_list.style.left = 0;
                break;
            case 1:
                min_bg_div_list.style.left = -min_bg_div - 6 + 'px';
                break;
            case 2:
                min_bg_div_list.style.left = -min_bg_div - min_bg_div1 - 6 + 'px';
                break;
            case 3:
                min_bg_div_list.style.left = -min_bg_div - min_bg_div1 - min_bg_div2 - 6 + 'px';
                break;
            default:
        }//网页宽度变化时，会话联系人设置发现各个界面宽度及left值跟随界面宽度变化

        if (right.scrollHeight < 500) {
            qq_talk_body_footer_bar_img.onclick = null;
        }//屏幕高度小于500时禁用表情图标click事件
        else {
            img_click();
        }//屏幕高度大于500时恢复表情图标click事件

        if (document.body.scrollWidth > 1000 && right.scrollHeight > 500 && display_flg === 1) {
            qq_talk_body_footer_face.style.display = 'block';
            qq_talk_body_footer_face_choose.style.display = 'block';
        }
        //表情列表之前是显示状态时，但屏幕高度之前小于500，再恢复到大于500时，自动显示表情列表。

        /**/
        if (getStyle(qq_talk_body_footer_face, 'display') === 'block') {
            qq_talk_body_footer_bar.style.bottom = getStyle(qq_talk_body_footer_face, 'height');
            qq_talk_body_min.style.bottom = parseInt(getStyle(qq_talk_body_footer_face, 'height').substring(0, getStyle(qq_talk_body_footer_face, 'height').length - 2)) + parseInt(getStyle(qq_talk_body_footer_bar, 'height').substring(0, getStyle(qq_talk_body_footer_bar, 'height').length - 2)) + 'px';
        }
        else {
            qq_talk_body_footer_bar.style.bottom = 0 + 'px';
            qq_talk_body_min.style.bottom = 50 + 'px';
            qq_talk_body_footer_face_choose.style.display = 'none';
            qq_talk_body_footer_face.style.display = 'none';
        }
        /*非全屏时，qq_talk_body_footer_bar和qq_talk_body_min的bottom值跟随屏幕宽度自适应*/
    };
    //标签面板闭合及根据页面宽度显示变化


    /*---------------------------BUG及未实现功能---------------------------*/
    //网页打开后默认页面高度低于500时，表情按钮不可点击，现在可以点击==OK
    //先打开搜索界面再打开聊天窗口时，两个界面显示覆盖关系还没处理===OK
    //qq_talk_body_min下面统一对话div的classname，点击指定聊天对象弹出对话窗口时，其他隐藏，只显示当前的div==OK
    //设置界面==OK
    //个人信息界面==OK
    // 群信息界面==OK
    //个人信息界面和群信息界面显示层叠关系==OK
    //聊天、设置、搜索三个窗口覆盖关系==OK
    //聊天信息发送==OK
    //滚动条BUG
    //HTML5 Web Notification桌面通知功能学习增加
};

