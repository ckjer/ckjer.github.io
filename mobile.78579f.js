!function(Q){function l(B){if(F[B])return F[B].exports;var n=F[B]={exports:{},id:B,loaded:!1};return Q[B].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}var F={};return l.m=Q,l.c=F,l.p="/",l(0)}({0:function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _addClass = __webpack_require__(70);\n\nvar _addClass2 = _interopRequireDefault(_addClass);\n\nvar _removeClass = __webpack_require__(71);\n\nvar _removeClass2 = _interopRequireDefault(_removeClass);\n\nvar _after = __webpack_require__(84);\n\nvar _after2 = _interopRequireDefault(_after);\n\nvar _browser = __webpack_require__(38);\n\nvar _browser2 = _interopRequireDefault(_browser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction isPathMatch(path, href) {\n\tvar reg = /\\/|index.html/g;\n\treturn path.replace(reg, '') === href.replace(reg, '');\n}\n// 浏览器判断\n\n\nfunction tabActive() {\n\tvar $tabs = document.querySelectorAll('.js-header-menu li a');\n\tvar path = window.location.pathname;\n\t$tabs.forEach(function ($tab) {\n\t\tif (isPathMatch(path, $tab.getAttribute('href'))) {\n\t\t\t(0, _addClass2.default)($tab, 'active');\n\t\t}\n\t});\n}\n\nfunction getElementLeft(element) {\n\tvar actualLeft = element.offsetLeft;\n\tvar current = element.offsetParent;\n\twhile (current !== null) {\n\t\tactualLeft += current.offsetLeft;\n\t\tcurrent = current.offsetParent;\n\t}\n\treturn actualLeft;\n}\nfunction getElementTop(element) {\n\tvar actualTop = element.offsetTop;\n\tvar current = element.offsetParent;\n\twhile (current !== null) {\n\t\tactualTop += current.offsetTop;\n\t\tcurrent = current.offsetParent;\n\t}\n\treturn actualTop;\n}\n\nfunction scrollStop($dom, top, limit, zIndex, diff) {\n\tvar nowLeft = getElementLeft($dom);\n\tvar nowTop = getElementTop($dom) - top;\n\t// let nowTop = $dom.offsetTop - document.body.scrollTop\n\t// console.log(nowTop)\n\tif (nowTop - limit <= diff) {\n\t\tvar $newDom = $dom.$newDom;\n\t\tif (!$newDom) {\n\t\t\t$newDom = $dom.cloneNode(true);\n\t\t\t(0, _after2.default)($dom, $newDom);\n\t\t\t$dom.$newDom = $newDom;\n\t\t\t$newDom.style.position = 'fixed';\n\t\t\t$newDom.style.top = (limit || nowTop) + 'px';\n\t\t\t$newDom.style.left = nowLeft + 'px';\n\t\t\t$newDom.style.zIndex = zIndex || 2;\n\t\t\t$newDom.style.width = '100%';\n\t\t\t$newDom.style.color = '#fff';\n\t\t}\n\t\t$newDom.style.visibility = 'visible';\n\t\t$dom.style.visibility = 'hidden';\n\t\treturn true;\n\t\t//$dom.style.top = (top + 'px')\n\t} else {\n\t\t//console.log(top - limit)\n\t\t$dom.style.visibility = 'visible';\n\t\tvar _$newDom = $dom.$newDom;\n\t\tif (_$newDom) {\n\t\t\t_$newDom.style.visibility = 'hidden';\n\t\t}\n\t\treturn false;\n\t}\n}\n\nfunction handleScroll() {\n\tvar $overlay = document.querySelector('.js-overlay');\n\tvar $menu = document.querySelector('.js-header-menu');\n\t//let $mobileCtn = document.querySelector('.js-mobile-btnctn')\n\tscrollStop($overlay, document.body.scrollTop, -63, 1, 0);\n\tscrollStop($menu, document.body.scrollTop, 1, 2, 0);\n\t//scrollStop($mobileCtn, document.body.scrollTop, -5)\n}\n\nfunction bindScroll() {\n\tdocument.querySelector('#container').addEventListener('scroll', function (e) {\n\t\thandleScroll();\n\t});\n\n\t/*window.onscroll = (e) => {\r\n \thandleScroll()\r\n }*/\n\twindow.addEventListener('scroll', function (e) {\n\t\thandleScroll();\n\t});\n\thandleScroll();\n}\n\nfunction init() {\n\tif (_browser2.default.versions.mobile && window.screen.width < 800) {\n\t\ttabActive();\n\t\tbindScroll();\n\t}\n}\n\ninit();\n\nmodule.exports = {};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Utc3JjL2pzL21vYmlsZS5qcz85ZTBhIl0sIm5hbWVzIjpbImlzUGF0aE1hdGNoIiwicGF0aCIsImhyZWYiLCJyZWciLCJyZXBsYWNlIiwidGFiQWN0aXZlIiwiJHRhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZm9yRWFjaCIsIiR0YWIiLCJnZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50TGVmdCIsImVsZW1lbnQiLCJhY3R1YWxMZWZ0Iiwib2Zmc2V0TGVmdCIsImN1cnJlbnQiLCJvZmZzZXRQYXJlbnQiLCJnZXRFbGVtZW50VG9wIiwiYWN0dWFsVG9wIiwib2Zmc2V0VG9wIiwic2Nyb2xsU3RvcCIsIiRkb20iLCJ0b3AiLCJsaW1pdCIsInpJbmRleCIsImRpZmYiLCJub3dMZWZ0Iiwibm93VG9wIiwiJG5ld0RvbSIsImNsb25lTm9kZSIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0Iiwid2lkdGgiLCJjb2xvciIsInZpc2liaWxpdHkiLCJoYW5kbGVTY3JvbGwiLCIkb3ZlcmxheSIsInF1ZXJ5U2VsZWN0b3IiLCIkbWVudSIsImJvZHkiLCJzY3JvbGxUb3AiLCJiaW5kU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbml0IiwidmVyc2lvbnMiLCJtb2JpbGUiLCJzY3JlZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUM7QUFDaEMsS0FBSUMsTUFBTSxnQkFBVjtBQUNBLFFBQVFGLEtBQUtHLE9BQUwsQ0FBYUQsR0FBYixFQUFrQixFQUFsQixDQUFELEtBQTZCRCxLQUFLRSxPQUFMLENBQWFELEdBQWIsRUFBa0IsRUFBbEIsQ0FBcEM7QUFDQTtBQU5EOzs7QUFRQSxTQUFTRSxT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WUFBV21CLEtBQVgsRUFBa0JwQyxTQUFTcUMsSUFBVCxDQUFjQyxTQUFoQyxFQUEyQyxDQUEzQyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRDtBQUNBO0FBQ0E7O0FBRUQsU0FBU0MsVUFBVCxHQUFzQjtBQUNyQnZDLFVBQVNtQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDSyxnQkFBckMsQ0FBc0QsUUFBdEQsRUFBZ0UsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RFUjtBQUNBLEVBRkQ7O0FBSUE7OztBQUdBL0IsUUFBT3NDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN4Q1I7QUFDQSxFQUZEO0FBR0FBO0FBQ0E7O0FBRUQsU0FBU1MsSUFBVCxHQUFnQjtBQUNmLEtBQUksa0JBQVFDLFFBQVIsQ0FBaUJDLE1BQWpCLElBQTJCMUMsT0FBTzJDLE1BQVAsQ0FBY2YsS0FBZCxHQUFzQixHQUFyRCxFQUEwRDtBQUN6RGhDO0FBQ0F5QztBQUNBO0FBQ0Q7O0FBRURHOztBQUVBSSxPQUFPQyxPQUFQLEdBQWlCLEVBQWpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkQ2xhc3MgZnJvbSAnZG9tMTAxL2FkZC1jbGFzcydcclxuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJ2RvbTEwMS9yZW1vdmUtY2xhc3MnXHJcbmltcG9ydCBhZnRlciBmcm9tICdkb20xMDEvYWZ0ZXInXHJcbi8vIOa1j+iniOWZqOWIpOaWrVxyXG5pbXBvcnQgQnJvd3NlciBmcm9tICcuL2Jyb3dzZXInXHJcblxyXG5mdW5jdGlvbiBpc1BhdGhNYXRjaChwYXRoLCBocmVmKSB7XHJcblx0bGV0IHJlZyA9IC9cXC98aW5kZXguaHRtbC9nXHJcblx0cmV0dXJuIChwYXRoLnJlcGxhY2UocmVnLCAnJykpID09PSAoaHJlZi5yZXBsYWNlKHJlZywgJycpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0YWJBY3RpdmUoKSB7XHJcblx0bGV0ICR0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWhlYWRlci1tZW51IGxpIGEnKVxyXG5cdGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcblx0JHRhYnMuZm9yRWFjaCgoJHRhYikgPT4ge1xyXG5cdFx0aWYgKGlzUGF0aE1hdGNoKHBhdGgsICR0YWIuZ2V0QXR0cmlidXRlKCdocmVmJykpKSB7XHJcblx0XHRcdGFkZENsYXNzKCR0YWIsICdhY3RpdmUnKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRMZWZ0KGVsZW1lbnQpIHvjgIDjgIDjgIDjgIBcclxuXHR2YXIgYWN0dWFsTGVmdCA9IGVsZW1lbnQub2Zmc2V0TGVmdDvjgIDjgIDjgIDjgIBcclxuXHR2YXIgY3VycmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O+OAgOOAgOOAgOOAgFxyXG5cdHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB744CA44CA44CA44CA44CA44CAXHJcblx0XHRhY3R1YWxMZWZ0ICs9IGN1cnJlbnQub2Zmc2V0TGVmdDvjgIDjgIDjgIDjgIBcclxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Lm9mZnNldFBhcmVudDvjgIDjgIBcclxuXHR944CA44CAXHJcblx0cmV0dXJuIGFjdHVhbExlZnQ7XHJcbn3jgIDjgIBcclxuZnVuY3Rpb24gZ2V0RWxlbWVudFRvcChlbGVtZW50KSB744CA44CA44CA44CAXHJcblx0dmFyIGFjdHVhbFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wO+OAgOOAgOOAgOOAgFxyXG5cdHZhciBjdXJyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ744CA44CA44CA44CAXHJcblx0d2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHvjgIDjgIDjgIDjgIDjgIDjgIBcclxuXHRcdGFjdHVhbFRvcCArPSBjdXJyZW50Lm9mZnNldFRvcDvjgIDjgIDjgIDjgIDjgIDjgIBcclxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Lm9mZnNldFBhcmVudDvjgIDjgIDjgIDjgIBcclxuXHR944CA44CA44CA44CAXHJcblx0cmV0dXJuIGFjdHVhbFRvcDvjgIDjgIBcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsU3RvcCgkZG9tLCB0b3AsIGxpbWl0LCB6SW5kZXgsIGRpZmYpIHtcclxuXHRsZXQgbm93TGVmdCA9IGdldEVsZW1lbnRMZWZ0KCRkb20pXHJcblx0bGV0IG5vd1RvcCA9IGdldEVsZW1lbnRUb3AoJGRvbSkgLSB0b3BcclxuXHRcdC8vIGxldCBub3dUb3AgPSAkZG9tLm9mZnNldFRvcCAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXHJcblx0XHQvLyBjb25zb2xlLmxvZyhub3dUb3ApXHJcblx0aWYgKG5vd1RvcCAtIGxpbWl0IDw9IGRpZmYpIHtcclxuXHRcdGxldCAkbmV3RG9tID0gJGRvbS4kbmV3RG9tXHJcblx0XHRpZiAoISRuZXdEb20pIHtcclxuXHRcdFx0JG5ld0RvbSA9ICRkb20uY2xvbmVOb2RlKHRydWUpXHJcblx0XHRcdGFmdGVyKCRkb20sICRuZXdEb20pXHJcblx0XHRcdCRkb20uJG5ld0RvbSA9ICRuZXdEb21cclxuXHRcdFx0JG5ld0RvbS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuXHRcdFx0JG5ld0RvbS5zdHlsZS50b3AgPSAobGltaXQgfHwgbm93VG9wKSArICdweCdcclxuXHRcdFx0JG5ld0RvbS5zdHlsZS5sZWZ0ID0gbm93TGVmdCArICdweCdcclxuXHRcdFx0JG5ld0RvbS5zdHlsZS56SW5kZXggPSB6SW5kZXggfHwgMlxyXG5cdFx0XHQkbmV3RG9tLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcblx0XHRcdCRuZXdEb20uc3R5bGUuY29sb3IgPSAnI2ZmZidcclxuXHRcdH1cclxuXHRcdCRuZXdEb20uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cdFx0JGRvbS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHRcdHJldHVybiB0cnVlXHJcblx0XHRcdC8vJGRvbS5zdHlsZS50b3AgPSAodG9wICsgJ3B4JylcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0b3AgLSBsaW1pdClcclxuXHRcdCRkb20uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG5cdFx0bGV0ICRuZXdEb20gPSAkZG9tLiRuZXdEb21cclxuXHRcdGlmICgkbmV3RG9tKSB7XHJcblx0XHRcdCRuZXdEb20uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuXHRsZXQgJG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtb3ZlcmxheScpXHJcblx0bGV0ICRtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlci1tZW51JylcclxuXHQvL2xldCAkbW9iaWxlQ3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1vYmlsZS1idG5jdG4nKVxyXG5cdHNjcm9sbFN0b3AoJG92ZXJsYXksIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCAtNjMsIDEsIDApXHJcblx0c2Nyb2xsU3RvcCgkbWVudSwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIDEsIDIsIDApXHJcblx0Ly9zY3JvbGxTdG9wKCRtb2JpbGVDdG4sIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCAtNSlcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZFNjcm9sbCgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGhhbmRsZVNjcm9sbCgpXHJcblx0fSlcclxuXHJcblx0Lyp3aW5kb3cub25zY3JvbGwgPSAoZSkgPT4ge1xyXG5cdFx0aGFuZGxlU2Nyb2xsKClcclxuXHR9Ki9cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcclxuXHRcdGhhbmRsZVNjcm9sbCgpXHJcblx0fSlcclxuXHRoYW5kbGVTY3JvbGwoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cdGlmIChCcm93c2VyLnZlcnNpb25zLm1vYmlsZSAmJiB3aW5kb3cuc2NyZWVuLndpZHRoIDwgODAwKSB7XHJcblx0XHR0YWJBY3RpdmUoKVxyXG5cdFx0YmluZFNjcm9sbCgpXHJcblx0fVxyXG59XHJcblxyXG5pbml0KCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS1zcmMvanMvbW9iaWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==")},38:function(module,exports){eval("'use strict';\n\nvar browser = {\n    versions: function () {\n        var u = window.navigator.userAgent;\n        return {\n            trident: u.indexOf('Trident') > -1, //IE内核\n            presto: u.indexOf('Presto') > -1, //opera内核\n            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核\n            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核\n            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端\n            ios: !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端\n            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器\n            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器\n            iPad: u.indexOf('iPad') > -1, //是否为iPad\n            webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部\n            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器\n        };\n    }()\n};\n\nmodule.exports = browser;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Utc3JjL2pzL2Jyb3dzZXIuanM/MDk1NiJdLCJuYW1lcyI6WyJicm93c2VyIiwidmVyc2lvbnMiLCJ1Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidHJpZGVudCIsImluZGV4T2YiLCJwcmVzdG8iLCJ3ZWJLaXQiLCJnZWNrbyIsIm1vYmlsZSIsIm1hdGNoIiwiaW9zIiwiYW5kcm9pZCIsImlQaG9uZSIsImlQYWQiLCJ3ZWJBcHAiLCJ3ZWl4aW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVU7QUFDVkMsY0FBVSxZQUFXO0FBQ2pCLFlBQUlDLElBQUlDLE9BQU9DLFNBQVAsQ0FBaUJDLFNBQXpCO0FBQ0EsZUFBTztBQUNIQyxxQkFBU0osRUFBRUssT0FBRixDQUFVLFNBQVYsSUFBdUIsQ0FBQyxDQUQ5QixFQUNpQztBQUNwQ0Msb0JBQVFOLEVBQUVLLE9BQUYsQ0FBVSxRQUFWLElBQXNCLENBQUMsQ0FGNUIsRUFFK0I7QUFDbENFLG9CQUFRUCxFQUFFSyxPQUFGLENBQVUsYUFBVixJQUEyQixDQUFDLENBSGpDLEVBR29DO0FBQ3ZDRyxtQkFBT1IsRUFBRUssT0FBRixDQUFVLE9BQVYsSUFBcUIsQ0FBQyxDQUF0QixJQUEyQkwsRUFBRUssT0FBRixDQUFVLE9BQVYsS0FBc0IsQ0FBQyxDQUp0RCxFQUl5RDtBQUM1REksb0JBQVEsQ0FBQyxDQUFDVCxFQUFFVSxLQUFGLENBQVEsdUJBQVIsQ0FMUCxFQUt5QztBQUM1Q0MsaUJBQUssQ0FBQyxDQUFDWCxFQUFFVSxLQUFGLENBQVEsK0JBQVIsQ0FOSixFQU04QztBQUNqREUscUJBQVNaLEVBQUVLLE9BQUYsQ0FBVSxTQUFWLElBQXVCLENBQUMsQ0FBeEIsSUFBNkJMLEVBQUVLLE9BQUYsQ0FBVSxPQUFWLElBQXFCLENBQUMsQ0FQekQsRUFPNEQ7QUFDL0RRLG9CQUFRYixFQUFFSyxPQUFGLENBQVUsUUFBVixJQUFzQixDQUFDLENBQXZCLElBQTRCTCxFQUFFSyxPQUFGLENBQVUsS0FBVixJQUFtQixDQUFDLENBUnJELEVBUXdEO0FBQzNEUyxrQkFBTWQsRUFBRUssT0FBRixDQUFVLE1BQVYsSUFBb0IsQ0FBQyxDQVR4QixFQVMyQjtBQUM5QlUsb0JBQVFmLEVBQUVLLE9BQUYsQ0FBVSxRQUFWLEtBQXVCLENBQUMsQ0FWN0IsRUFVZ0M7QUFDbkNXLG9CQUFRaEIsRUFBRUssT0FBRixDQUFVLGdCQUFWLEtBQStCLENBQUMsQ0FYckMsQ0FXdUM7QUFYdkMsU0FBUDtBQWFILEtBZlM7QUFEQSxDQUFkOztBQW1CQVksT0FBT0MsT0FBUCxHQUFpQnBCLE9BQWpCIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJyb3dzZXIgPSB7XHJcbiAgICB2ZXJzaW9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHUgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0cmlkZW50OiB1LmluZGV4T2YoJ1RyaWRlbnQnKSA+IC0xLCAvL0lF5YaF5qC4XHJcbiAgICAgICAgICAgIHByZXN0bzogdS5pbmRleE9mKCdQcmVzdG8nKSA+IC0xLCAvL29wZXJh5YaF5qC4XHJcbiAgICAgICAgICAgIHdlYktpdDogdS5pbmRleE9mKCdBcHBsZVdlYktpdCcpID4gLTEsIC8v6Iu55p6c44CB6LC35q2M5YaF5qC4XHJcbiAgICAgICAgICAgIGdlY2tvOiB1LmluZGV4T2YoJ0dlY2tvJykgPiAtMSAmJiB1LmluZGV4T2YoJ0tIVE1MJykgPT0gLTEsIC8v54Gr54uQ5YaF5qC4XHJcbiAgICAgICAgICAgIG1vYmlsZTogISF1Lm1hdGNoKC9BcHBsZVdlYktpdC4qTW9iaWxlLiovKSwgLy/mmK/lkKbkuLrnp7vliqjnu4jnq69cclxuICAgICAgICAgICAgaW9zOiAhIXUubWF0Y2goL1xcKGlbXjtdKzsoIFU7KT8gQ1BVLitNYWMgT1MgWC8pLCAvL2lvc+e7iOerr1xyXG4gICAgICAgICAgICBhbmRyb2lkOiB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IHUuaW5kZXhPZignTGludXgnKSA+IC0xLCAvL2FuZHJvaWTnu4jnq6/miJbogIV1Y+a1j+iniOWZqFxyXG4gICAgICAgICAgICBpUGhvbmU6IHUuaW5kZXhPZignaVBob25lJykgPiAtMSB8fCB1LmluZGV4T2YoJ01hYycpID4gLTEsIC8v5piv5ZCm5Li6aVBob25l5oiW6ICF5a6J5Y2TUVHmtY/op4jlmahcclxuICAgICAgICAgICAgaVBhZDogdS5pbmRleE9mKCdpUGFkJykgPiAtMSwgLy/mmK/lkKbkuLppUGFkXHJcbiAgICAgICAgICAgIHdlYkFwcDogdS5pbmRleE9mKCdTYWZhcmknKSA9PSAtMSwgLy/mmK/lkKbkuLp3ZWLlupTnlKjnqIvluo/vvIzmsqHmnInlpLTpg6jkuI7lupXpg6hcclxuICAgICAgICAgICAgd2VpeGluOiB1LmluZGV4T2YoJ01pY3JvTWVzc2VuZ2VyJykgPT0gLTEgLy/mmK/lkKbkuLrlvq7kv6HmtY/op4jlmahcclxuICAgICAgICB9O1xyXG4gICAgfSgpXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYnJvd3NlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS1zcmMvanMvYnJvd3Nlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=")},70:function(module,exports){eval("/**\n * addClass : addClass(el, className)\n * Adds a class name to an element. Compare with `$.fn.addClass`.\n *\n *     var addClass = require('dom101/add-class');\n *\n *     addClass(el, 'active');\n */\n\nfunction addClass (el, className) {\n  if (el.classList) {\n    el.classList.add(className);\n  } else {\n    el.className += ' ' + className;\n  }\n}\n\nmodule.exports = addClass;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2RvbTEwMS9hZGQtY2xhc3MuanM/NDQzYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiNzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFkZENsYXNzIDogYWRkQ2xhc3MoZWwsIGNsYXNzTmFtZSlcbiAqIEFkZHMgYSBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnQuIENvbXBhcmUgd2l0aCBgJC5mbi5hZGRDbGFzc2AuXG4gKlxuICogICAgIHZhciBhZGRDbGFzcyA9IHJlcXVpcmUoJ2RvbTEwMS9hZGQtY2xhc3MnKTtcbiAqXG4gKiAgICAgYWRkQ2xhc3MoZWwsICdhY3RpdmUnKTtcbiAqL1xuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRDbGFzcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20xMDEvYWRkLWNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiJdLCJzb3VyY2VSb290IjoiIn0=")},71:function(module,exports){eval("/**\n * removeClass : removeClass(el, className)\n * Removes a classname.\n *\n *     var removeClass = require('dom101/remove-class');\n *\n *     el.className = 'selected active';\n *     removeClass(el, 'active');\n *\n *     el.className\n *     => \"selected\"\n */\n\nfunction removeClass (el, className) {\n  if (el.classList) {\n    el.classList.remove(className);\n  } else {\n    var expr =\n      new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi');\n\n    el.className = el.className.replace(expr, ' ');\n  }\n}\n\nmodule.exports = removeClass;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2RvbTEwMS9yZW1vdmUtY2xhc3MuanM/YzlkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6IjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiByZW1vdmVDbGFzcyA6IHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpXG4gKiBSZW1vdmVzIGEgY2xhc3NuYW1lLlxuICpcbiAqICAgICB2YXIgcmVtb3ZlQ2xhc3MgPSByZXF1aXJlKCdkb20xMDEvcmVtb3ZlLWNsYXNzJyk7XG4gKlxuICogICAgIGVsLmNsYXNzTmFtZSA9ICdzZWxlY3RlZCBhY3RpdmUnO1xuICogICAgIHJlbW92ZUNsYXNzKGVsLCAnYWN0aXZlJyk7XG4gKlxuICogICAgIGVsLmNsYXNzTmFtZVxuICogICAgID0+IFwic2VsZWN0ZWRcIlxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGV4cHIgPVxuICAgICAgbmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKTtcblxuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKGV4cHIsICcgJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVDbGFzcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20xMDEvcmVtb3ZlLWNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiJdLCJzb3VyY2VSb290IjoiIn0=")},84:function(module,exports){eval("/**\n * after : after(el, newEl)\n * Inserts a new element `newEl` just after `el`.\n *\n *     var after = require('dom101/after');\n *     var newNode = document.createElement('div');\n *     var button = document.querySelector('#submit');\n *\n *     after(button, newNode);\n */\n\nfunction after (el, newEl) {\n  if (typeof newEl === 'string') {\n    return el.insertAdjacentHTML('afterend', newEl);\n  } else {\n    var next = el.nextSibling;\n    if (next) {\n      return el.parentNode.insertBefore(newEl, next);\n    } else {\n      return el.parentNode.appendChild(newEl);\n    }\n  }\n}\n\nmodule.exports = after;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2RvbTEwMS9hZnRlci5qcz9lMDM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGFmdGVyIDogYWZ0ZXIoZWwsIG5ld0VsKVxuICogSW5zZXJ0cyBhIG5ldyBlbGVtZW50IGBuZXdFbGAganVzdCBhZnRlciBgZWxgLlxuICpcbiAqICAgICB2YXIgYWZ0ZXIgPSByZXF1aXJlKCdkb20xMDEvYWZ0ZXInKTtcbiAqICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICogICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gKlxuICogICAgIGFmdGVyKGJ1dHRvbiwgbmV3Tm9kZSk7XG4gKi9cblxuZnVuY3Rpb24gYWZ0ZXIgKGVsLCBuZXdFbCkge1xuICBpZiAodHlwZW9mIG5ld0VsID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbmV3RWwpO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXh0ID0gZWwubmV4dFNpYmxpbmc7XG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHJldHVybiBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbCwgbmV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZnRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20xMDEvYWZ0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=")}});