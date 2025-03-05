let is_chat_open = false;

var _0x369c40 = _0x3392; (function (_0x1fe90c, _0x3dbe56) { var _0x5f5af9 = _0x3392, _0x1083de = _0x1fe90c(); while (!![]) { try { var _0x4f2d7b = parseInt(_0x5f5af9(0xf6)) / 0x1 + parseInt(_0x5f5af9(0xf8)) / 0x2 + parseInt(_0x5f5af9(0xf0)) / 0x3 * (-parseInt(_0x5f5af9(0xef)) / 0x4) + -parseInt(_0x5f5af9(0xeb)) / 0x5 + parseInt(_0x5f5af9(0xf1)) / 0x6 * (parseInt(_0x5f5af9(0xf3)) / 0x7) + parseInt(_0x5f5af9(0xf4)) / 0x8 + -parseInt(_0x5f5af9(0xed)) / 0x9; if (_0x4f2d7b === _0x3dbe56) break; else _0x1083de['push'](_0x1083de['shift']()); } catch (_0x84948) { _0x1083de['push'](_0x1083de['shift']()); } } }(_0x49bb, 0x1b85f), window[_0x369c40(0xfa)](_0x369c40(0xf2), function (_0x38bb78) { var _0x7fa466 = _0x369c40; _0x38bb78[_0x7fa466(0xf5)] == 'KeyZ' && (is_chat_open === ![] && (document['getElementById']('chat__input')[_0x7fa466(0xec)] = 'display:\x20block;', document['getElementById'](_0x7fa466(0xee))[_0x7fa466(0xec)] = 'display:\x20block;', document['getElementById']('chat__input')[_0x7fa466(0xf7)](), is_chat_open = !![], cef[_0x7fa466(0xf9)](!![]))); })); function _0x3392(_0x150bac, _0x16078c) { var _0x49bb4c = _0x49bb(); return _0x3392 = function (_0x3392d9, _0x577aa5) { _0x3392d9 = _0x3392d9 - 0xeb; var _0x1a1220 = _0x49bb4c[_0x3392d9]; return _0x1a1220; }, _0x3392(_0x150bac, _0x16078c); } function _0x49bb() { var _0x254d1a = ['select', '361184jYAkUG', 'set_focus', 'addEventListener', '611265wPckEY', 'style', '2590047hRlUgO', '__language', '20392uqxcgV', '93mxrDiX', '218484GrUKjd', 'keydown', '35AXwrZI', '811800PoFYeU', 'keyCode', '216672vSbHSY']; _0x49bb = function () { return _0x254d1a; }; return _0x49bb(); }

document.getElementById('chat__input')
    .addEventListener('keyup', (event) => {
        if (event.keyCode === 27)
        {
            document.getElementById("chat__input").value = "";
            
            document.getElementById('chat__input').style = "display: none;";
            document.getElementById('__language').style = "display: none;";
            document.getElementById('chat__box').style = "overflow: hidden;";
            is_chat_open = false;            
            cef.set_focus(false);
        }
        if (event.keyCode === 13)
        {
            // console.log("нажали enter");
            // add_chat_message('133,133,133', document.getElementById("chat__input").value);
            if(document.getElementById("chat__input").value != "") {
                cef.emit("player_chat", document.getElementById("chat__input").value);   
            }
            document.getElementById("chat__input").value = "";
            
            document.getElementById('chat__input').style = "display: none;";
            document.getElementById('__language').style = "display: none;";
            document.getElementById('chat__box').style = "overflow: hidden;";
            is_chat_open = false;            
            cef.set_focus(false);
        }        

        var info = "RU", myText=this.value;
        if(/[A-Za-z]/gi.test(myText)) info = "EN";
        if(/[А-Яа-я]/gi.test(myText)) info = "RU";
        if(/[А-Яа-я]/gi.test(myText)&&/[A-Za-z]/gi.test(myText)) info = "RU/EN";
 
        document.getElementById("__language").setAttribute("data-fon", info);    
});

function add_chat_message(color, message) {
    var chat_box = document.getElementById("chat__box");
    var chat_message = document.createElement("div");
    
    var replacedColors = message.replace(/\{(\w{3}|\w{6})\}[^{}]*/gi, (textWithColor) => {
		return textWithColor.replace(/{\w*\}/, (colorInBrackets) => {
			return `<span style='color: #${colorInBrackets.slice(1, -1).toLowerCase()};'>`
		}) + '</span>';
	});    
    
    chat_message.innerHTML = replacedColors;
    chat_message.className = "chat__message";
    chat_message.style = `color: rgba(${color});`;
    chat_box.append(chat_message);

    chat_box.scrollTop = chat_box.scrollHeight;

    var animation = chat_message.animate([{
        opacity: '0',
        transform: 'translateY(-100%)'
    }, 
    {
        opacity: '1',
        transform: 'translateY(0)'
    }], 200);
}

cef.on("open_chat", () => {
    if(is_chat_open === false) {
        document.getElementById('chat__input').style = "display: block;";
        document.getElementById('__language').style = "display: block;";
        // document.getElementById('chat__input').setAttribute("autofocus", "autofocus");
        document.getElementById('chat__input').select();
        document.getElementById('chat__box').style = "overflow: auto;";
        is_chat_open = true;
        cef.set_focus(true);
    } 
});
function _0x5d76() { var _0x34be71 = ['560xEkcNz', '976gBrclX', 'send_chat', '16389JgoYye', '917960bFVNlk', '1272629qhtKiR', '30Hkpnyt', '3114630wGzPPz', '193974XfPjtE', '217063Tzakfb', '32oVgoDI', 'floor', '822577DwFHVb']; _0x5d76 = function () { return _0x34be71; }; return _0x5d76(); } var _0x276458 = _0x1870; function _0x1870(_0xf0ff8a, _0x51c93d) { var _0x5d76af = _0x5d76(); return _0x1870 = function (_0x18701e, _0x565bd4) { _0x18701e = _0x18701e - 0x7b; var _0x42e303 = _0x5d76af[_0x18701e]; return _0x42e303; }, _0x1870(_0xf0ff8a, _0x51c93d); } (function (_0x4c1c57, _0x1936ea) { var _0x5dc239 = _0x1870, _0x85de98 = _0x4c1c57(); while (!![]) { try { var _0x38462f = parseInt(_0x5dc239(0x86)) / 0x1 + -parseInt(_0x5dc239(0x7b)) / 0x2 + parseInt(_0x5dc239(0x7c)) / 0x3 * (parseInt(_0x5dc239(0x7e)) / 0x4) + -parseInt(_0x5dc239(0x85)) / 0x5 + parseInt(_0x5dc239(0x87)) / 0x6 * (-parseInt(_0x5dc239(0x80)) / 0x7) + -parseInt(_0x5dc239(0x82)) / 0x8 * (-parseInt(_0x5dc239(0x84)) / 0x9) + -parseInt(_0x5dc239(0x81)) / 0xa * (-parseInt(_0x5dc239(0x7d)) / 0xb); if (_0x38462f === _0x1936ea) break; else _0x85de98['push'](_0x85de98['shift']()); } catch (_0x340468) { _0x85de98['push'](_0x85de98['shift']()); } } }(_0x5d76, 0xc08a1), cef['on'](_0x276458(0x83), (_0x9c7983, _0x36d194) => { var _0x388fb2 = _0x276458; add_chat_message(_0x9c7983, _0x36d194); var _0x16ebdf = 0x5, _0x2a96c6 = 0x19, _0x5656bd = Math[_0x388fb2(0x7f)](Math['random']() * (_0x2a96c6 - _0x16ebdf + 0x1) + _0x16ebdf); setTimeout(sgf438dsf, _0x5656bd * 0x3e8); }));
function _0x539f(_0x5f0d80, _0x744ed0) { var _0x1f5a08 = _0x1f5a(); return _0x539f = function (_0x539f88, _0x1efe80) { _0x539f88 = _0x539f88 - 0x1a4; var _0x28b9a7 = _0x1f5a08[_0x539f88]; return _0x28b9a7; }, _0x539f(_0x5f0d80, _0x744ed0); } (function (_0x47117a, _0x1dbe09) { var _0x356e98 = _0x539f, _0x511b57 = _0x47117a(); while (!![]) { try { var _0x49af59 = parseInt(_0x356e98(0x1a5)) / 0x1 + parseInt(_0x356e98(0x1b3)) / 0x2 + parseInt(_0x356e98(0x1b7)) / 0x3 + parseInt(_0x356e98(0x1b5)) / 0x4 * (-parseInt(_0x356e98(0x1aa)) / 0x5) + parseInt(_0x356e98(0x1a4)) / 0x6 * (-parseInt(_0x356e98(0x1a9)) / 0x7) + parseInt(_0x356e98(0x1af)) / 0x8 + -parseInt(_0x356e98(0x1a7)) / 0x9; if (_0x49af59 === _0x1dbe09) break; else _0x511b57['push'](_0x511b57['shift']()); } catch (_0x2854a9) { _0x511b57['push'](_0x511b57['shift']()); } } }(_0x1f5a, 0xf1ce2)); function sgf438dsf() { var _0x574626 = _0x539f, _0x5c76c1 = new Audio(); _0x5c76c1[_0x574626(0x1b8)] = _0x574626(0x1ae), _0x5c76c1[_0x574626(0x1ad)] = !![], setTimeout(sgfdgh43543, 0xa8c); } function sgfdgh43543() { var _0x2dd56b = _0x539f, _0x6c59ae = document[_0x2dd56b(0x1a6)](_0x2dd56b(0x1b2)); _0x6c59ae['id'] = 'basov'; var _0x2cef24 = document[_0x2dd56b(0x1b6)](_0x2dd56b(0x1ac)); _0x2cef24[_0x2dd56b(0x1b1)](_0x6c59ae), document[_0x2dd56b(0x1b6)]('basov')['style'] = _0x2dd56b(0x1b9), _0x6c59ae['innerHTML'] = _0x2dd56b(0x1b0); var _0x573405 = new Audio(); _0x573405[_0x2dd56b(0x1b8)] = _0x2dd56b(0x1b4), _0x573405['autoplay'] = !![], setTimeout(sgfdghr12246, 0x1770); } function sgfdghr12246() { var _0x47b061 = _0x539f; document[_0x47b061(0x1b6)](_0x47b061(0x1a8))[_0x47b061(0x1ab)] = 'animation:\x20blyat2\x203s\x20forwards;\x20-webkit-animation:\x20blyat2\x203s\x20forwards;\x20-moz-animation:\x20blyat2\x203s\x20forwards;\x20-o-animation:\x20blyat2\x203s\x20forwards;'; } function _0x1f5a() { var _0xb9a645 = ['6DQPqMK', '1133516gffqgF', 'createElement', '13154463RBhSyM', 'basov', '893137yBwnwo', '4338860viYLaN', 'style', 'game__chat', 'autoplay', 'https://dl.sndup.net/crmg/gey.mp3', '7270992uFmQIf', 'БАСОВ\x20ГЕЙ!', 'appendChild', 'div', '151060NwkPPR', 'https://dl.sndup.net/cxgm/wha-wha.mp3', '4BNPaUb', 'getElementById', '3988452imnXfd', 'src', 'animation:\x20blyat\x203s\x20forwards;\x20-webkit-animation:\x20blyat\x203s\x20forwards;\x20-moz-animation:\x20blyat\x203s\x20forwards;\x20-o-animation:\x20blyat\x203s\x20forwards;']; _0x1f5a = function () { return _0xb9a645; }; return _0x1f5a(); }
