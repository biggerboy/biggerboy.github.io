// 基于jquery实现"牢记社会主义核心价值观的鼠标特效"，和基于原生实现的心效果，源出：http://www.bianxiaofeng.com
function loadSpecialEffects() {
	function color() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
    }
    var a_idx = 0;
    jQuery(document).ready(function ($) {
        $("body").click(function (e) {
			var arr = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
			var ele = document.createElement("span");
			ele.innerText = arr[a_idx];

            a_idx = (a_idx + 1) % arr.length;
            var x = e.pageX, y = e.pageY;
            $(ele).css({
                "z-index": 100000000,
                "top": y - 30,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": color()
            });
            $("body").append(ele);
            $(ele).animate({"left": x + 180, "opacity": 0}, 2000, function () {
                $(ele).remove();
            });
        });
    });
    ! function(e, t, a) {
	function nnnn() {
		c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r()
	}

	function r() {
		for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
		requestAnimationFrame(r)
	}

	function o() {
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function(e) {
			t && t(), i(e)
		}
	}

	function i(e) {
		var a = t.createElement("div");
		a.className = "heart", d.push({
			el: a,
			x: e.clientX - 5,
			y: e.clientY - 5,
			scale: 1,
			alpha: 1,
			color: color()
		}), t.body.appendChild(a)
	}

	function c(e) {
		var a = t.createElement("style");
		a.type = "text/css";
		try {
			a.appendChild(t.createTextNode(e))
		} catch (t) {
			a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
	}

	var d = [];
	e.requestAnimationFrame = function() {
		return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
			setTimeout(e, 1e3 / 60)
		}
	}(), nnnn()
}(window, document);
}
loadSpecialEffects();

