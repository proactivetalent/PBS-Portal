/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */


/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
!function (t) {
    "use strict";
    t.fn.fitVids = function (e) {
        var i = {customSelector: null, ignore: null};
        if (!document.getElementById("fit-vids-style")) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                d = document.createElement("div");
            d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
        }
        return e && t.extend(i, e), this.each(function () {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var r = ".fitvidsignore";
            i.ignore && (r = r + ", " + i.ignore);
            var a = t(this).find(e.join(","));
            a = a.not("object object"), a = a.not(r), a.each(function (e) {
                var i = t(this);
                if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10), o = a / d;
                    if (!i.attr("id")) {
                        var h = "fitvid" + e;
                        i.attr("id", h)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto);


/*
 * jQuery Superfish Menu Plugin - v1.7.10
 * Copyright (c) 2018 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
!function (a, b) {
    "use strict";
    var c = function () {
        var c = {bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows"}, d = function () {
            var b = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return b && a("html").css("cursor", "pointer").on("click", a.noop), b
        }(), e = function () {
            var a = document.documentElement.style;
            return "behavior" in a && "fill" in a && /iemobile/i.test(navigator.userAgent)
        }(), f = function () {
            return !!b.PointerEvent
        }(), g = function (a, b, d) {
            var e, f = c.menuClass;
            b.cssArrows && (f += " " + c.menuArrowClass), e = d ? "addClass" : "removeClass", a[e](f)
        }, h = function (b, d) {
            return b.find("li." + d.pathClass).slice(0, d.pathLevels).addClass(d.hoverClass + " " + c.bcClass).filter(function () {
                return a(this).children(d.popUpSelector).hide().show().length
            }).removeClass(d.pathClass)
        }, i = function (a, b) {
            var d = b ? "addClass" : "removeClass";
            a.children("a")[d](c.anchorClass)
        }, j = function (a) {
            var b = a.css("ms-touch-action"), c = a.css("touch-action");
            c = c || b, c = "pan-y" === c ? "auto" : "pan-y", a.css({"ms-touch-action": c, "touch-action": c})
        }, k = function (a) {
            return a.closest("." + c.menuClass)
        }, l = function (a) {
            return k(a).data("sfOptions")
        }, m = function () {
            var b = a(this), c = l(b);
            clearTimeout(c.sfTimer), b.siblings().superfish("hide").end().superfish("show")
        }, n = function (b) {
            b.retainPath = a.inArray(this[0], b.$path) > -1, this.superfish("hide"), this.parents("." + b.hoverClass).length || (b.onIdle.call(k(this)), b.$path.length && a.proxy(m, b.$path)())
        }, o = function () {
            var b = a(this), c = l(b);
            d ? a.proxy(n, b, c)() : (clearTimeout(c.sfTimer), c.sfTimer = setTimeout(a.proxy(n, b, c), c.delay))
        }, p = function (b) {
            var c = a(this), d = l(c), e = c.siblings(b.data.popUpSelector);
            return d.onHandleTouch.call(e) === !1 ? this : void (e.length > 0 && e.is(":hidden") && (c.one("click.superfish", !1), "MSPointerDown" === b.type || "pointerdown" === b.type ? c.trigger("focus") : a.proxy(m, c.parent("li"))()))
        }, q = function (b, c) {
            var g = "li:has(" + c.popUpSelector + ")";
            a.fn.hoverIntent && !c.disableHI ? b.hoverIntent(m, o, g) : b.on("mouseenter.superfish", g, m).on("mouseleave.superfish", g, o);
            var h = "MSPointerDown.superfish";
            f && (h = "pointerdown.superfish"), d || (h += " touchend.superfish"), e && (h += " mousedown.superfish"), b.on("focusin.superfish", "li", m).on("focusout.superfish", "li", o).on(h, "a", c, p)
        };
        return {
            hide: function (b) {
                if (this.length) {
                    var c = this, d = l(c);
                    if (!d) return this;
                    var e = d.retainPath === !0 ? d.$path : "",
                        f = c.find("li." + d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector), g = d.speedOut;
                    if (b && (f.show(), g = 0), d.retainPath = !1, d.onBeforeHide.call(f) === !1) return this;
                    f.stop(!0, !0).animate(d.animationOut, g, function () {
                        var b = a(this);
                        d.onHide.call(b)
                    })
                }
                return this
            }, show: function () {
                var a = l(this);
                if (!a) return this;
                var b = this.addClass(a.hoverClass), c = b.children(a.popUpSelector);
                return a.onBeforeShow.call(c) === !1 ? this : (c.stop(!0, !0).animate(a.animation, a.speed, function () {
                    a.onShow.call(c)
                }), this)
            }, destroy: function () {
                return this.each(function () {
                    var b, d = a(this), e = d.data("sfOptions");
                    return !!e && (b = d.find(e.popUpSelector).parent("li"), clearTimeout(e.sfTimer), g(d, e), i(b), j(d), d.off(".superfish").off(".hoverIntent"), b.children(e.popUpSelector).attr("style", function (a, b) {
                        if ("undefined" != typeof b) return b.replace(/display[^;]+;?/g, "")
                    }), e.$path.removeClass(e.hoverClass + " " + c.bcClass).addClass(e.pathClass), d.find("." + e.hoverClass).removeClass(e.hoverClass), e.onDestroy.call(d), void d.removeData("sfOptions"))
                })
            }, init: function (b) {
                return this.each(function () {
                    var d = a(this);
                    if (d.data("sfOptions")) return !1;
                    var e = a.extend({}, a.fn.superfish.defaults, b), f = d.find(e.popUpSelector).parent("li");
                    e.$path = h(d, e), d.data("sfOptions", e), g(d, e, !0), i(f, !0), j(d), q(d, e), f.not("." + c.bcClass).superfish("hide", !0), e.onInit.call(this)
                })
            }
        }
    }();
    a.fn.superfish = function (b, d) {
        return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? a.error("Method " + b + " does not exist on jQuery.fn.superfish") : c.init.apply(this, arguments)
    }, a.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {opacity: "show"},
        animationOut: {opacity: "hide"},
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: a.noop,
        onBeforeShow: a.noop,
        onShow: a.noop,
        onBeforeHide: a.noop,
        onHide: a.noop,
        onIdle: a.noop,
        onDestroy: a.noop,
        onHandleTouch: a.noop
    }
}(jQuery, window);

/*!
 * hoverIntent v1.10.1 // 2019.10.05 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2019 Brian Cherne
 */
!function (factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == typeof module && module.exports ? module.exports = factory(require("jquery")) : jQuery && !jQuery.fn.hoverIntent && factory(jQuery)
}(function ($) {
    "use strict";

    function track(ev) {
        cX = ev.pageX, cY = ev.pageY
    }

    var cX, cY, _cfg = {interval: 100, sensitivity: 6, timeout: 0}, INSTANCE_COUNT = 0, compare = function (ev, $el, s, cfg) {
        if (Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) < cfg.sensitivity) return $el.off(s.event, track), delete s.timeoutId, s.isActive = !0, ev.pageX = cX, ev.pageY = cY, delete s.pX, delete s.pY, cfg.over.apply($el[0], [ev]);
        s.pX = cX, s.pY = cY, s.timeoutId = setTimeout(function () {
            compare(ev, $el, s, cfg)
        }, cfg.interval)
    };
    $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
        var instanceId = INSTANCE_COUNT++, cfg = $.extend({}, _cfg);
        $.isPlainObject(handlerIn) ? (cfg = $.extend(cfg, handlerIn), $.isFunction(cfg.out) || (cfg.out = cfg.over)) : cfg = $.isFunction(handlerOut) ? $.extend(cfg, {
            over: handlerIn,
            out: handlerOut,
            selector: selector
        }) : $.extend(cfg, {over: handlerIn, out: handlerIn, selector: handlerOut});

        function handleHover(e) {
            var ev = $.extend({}, e), $el = $(this), hoverIntentData = $el.data("hoverIntent");
            hoverIntentData || $el.data("hoverIntent", hoverIntentData = {});
            var state = hoverIntentData[instanceId];
            state || (hoverIntentData[instanceId] = state = {id: instanceId}), state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId));
            var mousemove = state.event = "mousemove.hoverIntent.hoverIntent" + instanceId;
            if ("mouseenter" === e.type) {
                if (state.isActive) return;
                state.pX = ev.pageX, state.pY = ev.pageY, $el.off(mousemove, track).on(mousemove, track), state.timeoutId = setTimeout(function () {
                    compare(ev, $el, state, cfg)
                }, cfg.interval)
            } else {
                if (!state.isActive) return;
                $el.off(mousemove, track), state.timeoutId = setTimeout(function () {
                    !function (ev, $el, s, out) {
                        var data = $el.data("hoverIntent");
                        data && delete data[s.id], out.apply($el[0], [ev])
                    }(ev, $el, state, cfg.out)
                }, cfg.timeout)
            }
        }

        return this.on({"mouseenter.hoverIntent": handleHover, "mouseleave.hoverIntent": handleHover}, cfg.selector)
    }
});


/**
 *
 * Twitter Feed Fetcher
 *
 */


function sm_format_twitter(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var name = twitters[i].user.name;
        var username_avatar = twitters[i].user.profile_image_url_https;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<li><i class="icon-twitter"></i><a href="https://twitter.com/' + username + '" class="twitter-avatar" target="_blank"><img src="' + username_avatar + '" alt="' + name + '" title="' + name + '"></a><span>' + status + '</span><small><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></li>');
    }
    return statusHTML.join('');
}

function sm_format_twitter2(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<div class="slide"><span>' + status + '</span><small><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></small></div>');
    }
    return statusHTML.join('');
}

function sm_format_twitter3(twitters) {
    var statusHTML = [];
    for (var i = 0; i < twitters.length; i++) {
        var username = twitters[i].user.screen_name;
        var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (url) {
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        }).replace(/\B@([_a-z0-9]+)/ig, function (reply) {
            return reply.charAt(0) + '<a href="https://twitter.com/' + reply.substring(1) + '" target="_blank">' + reply.substring(1) + '</a>';
        });
        statusHTML.push('<div class="slide"><div class="testi-content"><p>' + status + '</p><div class="testi-meta"><span><a href="https://twitter.com/' + username + '/statuses/' + twitters[i].id_str + '" target="_blank">' + relative_time(twitters[i].created_at) + '</a></span></div></div></div>');
    }
    return statusHTML.join('');
}

function relative_time(time_value) {
    var values = time_value.split(" ");
    time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
    var parsed_date = Date.parse(time_value);
    var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
    var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
    delta = delta + (relative_to.getTimezoneOffset() * 60);

    if (delta < 60) {
        return 'less than a minute ago';
    } else if (delta < 120) {
        return 'about a minute ago';
    } else if (delta < (60 * 60)) {
        return (parseInt(delta / 60)).toString() + ' minutes ago';
    } else if (delta < (120 * 60)) {
        return 'about an hour ago';
    } else if (delta < (24 * 60 * 60)) {
        return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
    } else if (delta < (48 * 60 * 60)) {
        return '1 day ago';
    } else {
        return (parseInt(delta / 86400)).toString() + ' days ago';
    }
}


/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
!function (a, b, c) {
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (a[b] = c, "function" == typeof define && define.amd && define(b, [], function () {
        return c
    }))
}(this, "jRespond", function (a, b, c) {
    "use strict";
    return function (a) {
        var b = [], d = [], e = a, f = "", g = "", i = 0, j = 100, k = 500, l = k, m = function () {
            var a = 0;
            return a = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
        }, n = function (a) {
            if (a.length === c) o(a); else for (var b = 0; b < a.length; b++) o(a[b])
        }, o = function (a) {
            var e = a.breakpoint, h = a.enter || c;
            b.push(a), d.push(!1), r(e) && (h !== c && h.call(null, {entering: f, exiting: g}), d[b.length - 1] = !0)
        }, p = function () {
            for (var a = [], e = [], h = 0; h < b.length; h++) {
                var i = b[h].breakpoint, j = b[h].enter || c, k = b[h].exit || c;
                "*" === i ? (j !== c && a.push(j), k !== c && e.push(k)) : r(i) ? (j === c || d[h] || a.push(j), d[h] = !0) : (k !== c && d[h] && e.push(k), d[h] = !1)
            }
            for (var l = {entering: f, exiting: g}, m = 0; m < e.length; m++) e[m].call(null, l);
            for (var n = 0; n < a.length; n++) a[n].call(null, l)
        }, q = function (a) {
            for (var b = !1, c = 0; c < e.length; c++) if (a >= e[c].enter && a <= e[c].exit) {
                b = !0;
                break
            }
            b && f !== e[c].label ? (g = f, f = e[c].label, p()) : b || "" === f || (f = "", p())
        }, r = function (a) {
            if ("object" == typeof a) {
                if (a.join().indexOf(f) >= 0) return !0
            } else {
                if ("*" === a) return !0;
                if ("string" == typeof a && f === a) return !0
            }
        }, s = function () {
            var a = m();
            a !== i ? (l = j, q(a)) : l = k, i = a, setTimeout(s, l)
        };
        return s(), {
            addFunc: function (a) {
                n(a)
            }, getBreakpoint: function () {
                return f
            }
        }
    }
}(this, this.document));


!function (t) {
    var o = 0;
    t.fn.scrolled = function (a, n) {
        "function" == typeof a && (n = a, a = 300);
        var c = "scrollTimer" + o++;
        this.scroll(function () {
            var o = t(this), e = o.data(c);
            e && clearTimeout(e), e = setTimeout(function () {
                o.removeData(c), n.call(o[0])
            }, a), o.data(c, e)
        })
    }
}(jQuery);


/*!
 * Original copyright:
 *
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */
!function (a) {
    a.fn.jflickrfeed = function (b, c) {
        b = a.extend(!0, {
            flickrbase: "https://api.flickr.com/services/feeds/",
            feedapi: "photos_public.gne",
            limit: 20,
            qstrings: {lang: "en-us", format: "json", jsoncallback: "?"},
            cleanDescription: !0,
            useTemplate: !0,
            itemTemplate: "",
            itemCallback: function () {
            }
        }, b);
        var d, e = b.flickrbase + b.feedapi + "?", f = !0;
        for (d in b.qstrings) f || (e += "&"), e += d + "=" + b.qstrings[d], f = !1;
        return a(this).each(function () {
            var d = a(this), f = this;
            a.getJSON(e, function (e) {
                a.each(e.items, function (a, c) {
                    var e, g, h, i;
                    if (a < b.limit) {
                        if (b.cleanDescription && (e = /<p>(.*?)<\/p>/g, g = c.description, e.test(g) && (c.description = g.match(e)[2], void 0 !== c.description && (c.description = c.description.replace("<p>", "").replace("</p>", "")))), c.image_s = c.media.m.replace("_m", "_s"), c.image_t = c.media.m.replace("_m", "_t"), c.image_m = c.media.m.replace("_m", "_m"), c.image = c.media.m.replace("_m", ""), c.image_b = c.media.m.replace("_m", "_b"), c.image_q = c.media.m.replace("_m", "_q"), delete c.media, b.useTemplate) {
                            i = b.itemTemplate;
                            for (h in c) e = new RegExp("{{" + h + "}}", "g"), i = i.replace(e, c[h]);
                            d.append(i)
                        }
                        b.itemCallback.call(f, c)
                    }
                }), a.isFunction(c) && c.call(f, e)
            })
        })
    }
}(jQuery);


/*!
 * Instafeed 1.4.1
 */
(function () {
    var e;
    e = function () {
        function e(e, t) {
            var n, r;
            this.options = {target: "instafeed", get: "popular", resolution: "thumbnail", sortBy: "none", links: !0, mock: !1, useHttp: !1};
            if (typeof e == "object") for (n in e) r = e[n], this.options[n] = r;
            this.context = t != null ? t : this, this.unique = this._genKey()
        }

        return e.prototype.hasNext = function () {
            return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
        }, e.prototype.next = function () {
            return this.hasNext() ? this.run(this.context.nextUrl) : !1
        }, e.prototype.run = function (t) {
            var n, r, i;
            if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
            if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
            return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
        }, e.prototype.parse = function (e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
            if (typeof e != "object") {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
                throw new Error("Invalid JSON response")
            }
            if (e.meta.code !== 200) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (e.data.length === 0) {
                if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
                throw new Error("No images were returned from Instagram")
            }
            this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
            if (this.options.sortBy !== "none") {
                this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
                switch (M[1]) {
                    case"random":
                        e.data.sort(function () {
                            return .5 - Math.random()
                        });
                        break;
                    case"recent":
                        e.data = this._sortBy(e.data, "created_time", O);
                        break;
                    case"liked":
                        e.data = this._sortBy(e.data, "likes.count", O);
                        break;
                    case"commented":
                        e.data = this._sortBy(e.data, "comments.count", O);
                        break;
                    default:
                        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            }
            if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
                if (this.options.template != null && typeof this.options.template == "string") {
                    f = "", d = "", w = "", D = document.createElement("div");
                    for (c = 0, N = m.length; c < N; c++) {
                        h = m[c], p = h.images[this.options.resolution];
                        if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                        E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
                            model: h,
                            id: h.id,
                            link: h.link,
                            type: h.type,
                            image: v,
                            width: E,
                            height: y,
                            orientation: b,
                            caption: this._getObjectProperty(h, "caption.text"),
                            likes: h.likes.count,
                            comments: h.comments.count,
                            location: this._getObjectProperty(h, "location.name")
                        }), f += d
                    }
                    D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
                    while (r < n) i.push(D.childNodes[r]), r += 1;
                    for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
                } else for (T = 0, k = m.length; T < k; T++) {
                    h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
                    if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                    v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
                }
                _ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
                if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
                _.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
                try {
                    delete window[S]
                } catch (P) {
                    s = P
                }
            }
            return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
        }, e.prototype._buildUrl = function () {
            var e, t, n;
            e = "https://api.instagram.com/v1";
            switch (this.options.get) {
                case"popular":
                    t = "media/popular";
                    break;
                case"tagged":
                    if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                    t = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case"location":
                    if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                    t = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case"user":
                    if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                    t = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
        }, e.prototype._genKey = function () {
            var e;
            return e = function () {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, "" + e() + e() + e() + e()
        }, e.prototype._makeTemplate = function (e, t) {
            var n, r, i, s, o;
            r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
            while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
                return "" + o
            });
            return n
        }, e.prototype._getObjectProperty = function (e, t) {
            var n, r;
            t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
            while (r.length) {
                n = r.shift();
                if (!(e != null && n in e)) return null;
                e = e[n]
            }
            return e
        }, e.prototype._sortBy = function (e, t, n) {
            var r;
            return r = function (e, r) {
                var i, s;
                return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
            }, e.sort(r.bind(this)), e
        }, e.prototype._filter = function (e, t) {
            var n, r, i, s, o;
            n = [], r = function (e) {
                if (t(e)) return n.push(e)
            };
            for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
            return n
        }, e
    }(), function (e, t) {
        return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, function () {
        return e
    })
}).call(this);


/**
 * @preserve
 * Jribbble v2.0.4 | Thu Jun 4 01:49:29 2015 -0400
 * Copyright (c) 2015, Tyler Gaw me@tylergaw.com
 * Released under the ISC-LICENSE
 */
!function (e, t, r, s) {
    "use strict";
    e.jribbble = {};
    var n = null, o = "https://api.dribbble.com/v1", i = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"], u = {
        token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
        singular: function (e) {
            return e.substr(0, e.length - 1)
        },
        idRequired: function (e) {
            return "Jribbble: You have to provide a " + this.singular(e) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, e)
        },
        subResource: function (e) {
            return "Jribbble: You have to provide a " + this.singular(e) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, e)
        },
        shotId: function (e) {
            return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, e)
        },
        commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
    }, c = function (e, t) {
        if (e && "object" != typeof e) return e;
        throw new Error(u.idRequired(t))
    }, l = function (e) {
        var t = {};
        return e.forEach(function (e) {
            t[e] = d.call(this, e)
        }.bind(this)), t
    }, h = function (t) {
        var r = e.param(t);
        return r ? "?" + r : ""
    }, a = function (e) {
        if (0 !== e.length) {
            var t = e[0], r = typeof t, s = {};
            if ("number" === r || "string" === r) {
                var n = i.indexOf(t);
                n > -1 ? s.list = t : s.resource = t
            } else "object" === r && (s = t);
            return s
        }
    }, b = function () {
        var t = e.extend({}, e.Deferred()), r = function () {
            return this.methods = [], this.response = null, this.flushed = !1, this.add = function (e) {
                this.flushed ? e(this.scope) : this.methods.push(e)
            }, this.flush = function (e) {
                if (!this.flushed) {
                    for (this.scope = e, this.flushed = !0; this.methods[0];) this.methods.shift()(e);
                    return e
                }
            }, this
        };
        return t.queue = new r, t.url = o, t.get = function () {
            return n ? (e.ajax({
                type: "GET", url: this.url, beforeSend: function (e) {
                    e.setRequestHeader("Authorization", "Bearer " + n)
                }, success: function (e) {
                    this.resolve(e)
                }.bind(this), error: function (e) {
                    this.reject(e)
                }.bind(this)
            }), this) : (console.error(u.token), !1)
        }, t
    }, f = function (t) {
        return function (r) {
            return e.extend(this, b()), this.queue.add(function (e) {
                e.url += "/" + t + "/" + r
            }), setTimeout(function () {
                this.queue.flush(this).get()
            }.bind(this)), this
        }
    }, d = function (e) {
        return function (t) {
            return this.queue.add(function (r) {
                r.url += "/" + e + "/" + h(t || {})
            }), this
        }
    };
    e.jribbble.shots = function (t, r) {
        var s = a([].slice.call(arguments)) || {}, n = r || {}, o = function (t) {
            return function (r, s) {
                var n = a([].slice.call(arguments)) || {}, o = s || {};
                return this.queue.add(function (r) {
                    if (!r.shotId) throw new Error(u.shotId(t));
                    r.url += "/" + t + "/", n.resource && (r.url += n.resource, delete n.resource), r.url += h(e.extend(n, o))
                }), this
            }
        }, i = function () {
            return e.extend(this, b()), this.url += "/shots/", this.queue.add(function (t) {
                s.resource && (t.shotId = s.resource, t.url += s.resource, delete s.resource), t.url += h(e.extend(s, n))
            }), setTimeout(function () {
                this.queue.flush(this).get()
            }.bind(this)), this
        };
        return i.prototype.attachments = o("attachments"), i.prototype.buckets = o("buckets"), i.prototype.likes = o("likes"), i.prototype.projects = o("projects"), i.prototype.rebounds = o("rebounds"), i.prototype.comments = function (t, r) {
            var s = a([].slice.call(arguments)) || {}, n = r || {};
            return this.queue.add(function (t) {
                if (!t.shotId) throw new Error(u.shotId("comments"));
                t.url += "/comments/", s.resource && (t.commentId = s.resource, t.url += s.resource + "/", delete s.resource), t.url += h(e.extend(s, n))
            }), this.likes = function (e) {
                var t = e || {};
                return this.queue.add(function (e) {
                    if (!e.commentId) throw new Error(u.commentLikes);
                    e.url += "likes/" + h(t)
                }), this
            }, this
        }, new i
    }, e.jribbble.teams = function (e) {
        var t = "teams", r = c(e, t), s = f.call(this, t);
        return s.prototype = l.call(this, ["members", "shots"]), new s(r)
    }, e.jribbble.users = function (e) {
        var t = "users", r = c(e, t), s = f.call(this, t);
        return s.prototype = l.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), s.prototype.isFollowing = function (e) {
            return this.queue.add(function (t) {
                t.url += "/following/" + e
            }), this
        }, new s(r)
    }, e.jribbble.buckets = function (e) {
        var t = "buckets", r = c(e, t), s = f.call(this, t);
        return s.prototype = l.call(this, ["shots"]), new s(r)
    }, e.jribbble.projects = function (e) {
        var t = "projects", r = c(e, t), s = f.call(this, t);
        return s.prototype = l.call(this, ["shots"]), new s(r)
    }, e.jribbble.setToken = function (e) {
        return n = e, this
    }
}(jQuery, window, document);


/*jquery.mb.YTPlayer 15-12-2019
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2019. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
var ytp = ytp || {};

function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

let getYTPVideoID = function (e) {
    let r, t;
    return e.indexOf("youtu.be") > 0 || e.indexOf("youtube.com/embed") > 0 ? r = (t = (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : e.indexOf("http") > -1 ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : t = (r = e.length > 15 ? null : e) ? null : e, {
        videoID: r,
        playlistID: t
    }
};

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        let e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}

!function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.2.11",
        build: "7447",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1e3,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            stopMovieOnBlur: !0,
            realFullscreen: !0,
            optimizeDisplay: !0,
            abundance: .3,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            onReady: function (e) {
            },
            onError: function (e, r) {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        controlBar: null,
        locationProtocol: "https:",
        defaultFilters: {
            grayscale: {value: 0, unit: "%"},
            hue_rotate: {value: 0, unit: "deg"},
            invert: {value: 0, unit: "%"},
            opacity: {value: 0, unit: "%"},
            saturate: {value: 0, unit: "%"},
            sepia: {value: 0, unit: "%"},
            brightness: {value: 0, unit: "%"},
            contrast: {value: 0, unit: "%"},
            blur: {value: 0, unit: "px"}
        },
        buildPlayer: function (options) {
            if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function () {
                jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
            }, 100); else {
                jQuery("#YTAPI").remove();
                let e = jQuery("<script>").attr({src: "https://www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version, id: "YTAPI"});
                jQuery("head").prepend(e)
            }

            function isIframe() {
                let e = !1;
                try {
                    self.location.href != top.location.href && (e = !0)
                } catch (r) {
                    e = !0
                }
                return e
            }

            return console.time("YTPlayerInit"), console.time("YTPlayerStartPlay"), this.each(function () {
                let YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                let property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function () {
                    $YTPlayer.YTPPlay()
                }), console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realFullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
                let origContainmentBackground = YTPlayer.opt.containment.css("background-image");
                origContainmentBackground = "none" == origContainmentBackground ? null : origContainmentBackground, YTPlayer.orig_containment_background = origContainmentBackground, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                let start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isBackground && ytp.backgroundIsInited) return;
                if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay"), YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                    let e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                    e && YTPlayer.opt.containment.css({background: e, backgroundSize: "cover", backgroundRepeat: "no-repeat"})
                }
                YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                }).addClass("mbYTP_wrapper"), YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function (e) {
                    $YTPlayer.YTPPlay(), e.stopPropagation()
                }), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function () {
                    $YTPlayer.YTPTogglePlay()
                }).css({cursor: "pointer"}));
                let playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                if (playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: 1
                }), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                    position: "relative",
                    maxWidth: YTPlayer.opt.containment.css("width")
                }), YTPlayer.opt.containment.css({
                    position: "relative",
                    paddingBottom: "56.25%",
                    overflow: "hidden",
                    height: 0
                }), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function () {
                    "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                }), YTPlayer.isBackground ? (jQuery("body").css({boxSizing: "border-box"}), YTPlayer.wrapper.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 0
                })) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({position: "relative"}), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                }).on("mouseleave", function () {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                }), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.coverImage && (YTPlayer.wrapper.css({
                    backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 1
                }), YTPlayer.wrapper.css({opacity: 1})), $YTPlayer;
                jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function () {
                    YTPlayer.player.playVideo()
                }), jQuery(document).one("YTAPIReady", function () {
                    $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
                }), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
                    let e = this, r = jQuery(e);
                    e.isBackground && ytp.backgroundIsInited || e.isInit || (e.isBackground && (ytp.backgroundIsInited = !0), e.opt.autoPlay = void 0 === e.opt.autoPlay ? !!e.isBackground : e.opt.autoPlay, e.opt.vol = e.opt.vol ? e.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(e), jQuery(e).on("YTPChanged", function (t) {
                        if (e.isInit) return;
                        e.isInit = !0;
                        let a = {
                            modestbranding: 1,
                            autoplay: 0,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            enablejsapi: 1,
                            version: 3,
                            playerapiid: e.playerID,
                            origin: "*",
                            allowfullscreen: !0,
                            wmode: "transparent",
                            iv_load_policy: e.opt.showAnnotations,
                            cc_load_policy: e.opt.cc_load_policy,
                            playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                            html5: document.createElement("video").canPlayType ? 1 : 0
                        };
                        new YT.Player(e.playerID, {
                            playerVars: a, events: {
                                onReady: function (t) {
                                    e.player = t.target, e.player.loadVideoById({
                                        videoId: e.videoID.toString(),
                                        suggestedQuality: e.opt.quality
                                    }), r.trigger("YTPlayerIsReady_" + e.id)
                                }, onStateChange: function (r) {
                                    if ("function" != typeof r.target.getPlayerState) return;
                                    let t, a = r.target.getPlayerState();
                                    if (e.preventTrigger || e.isStarting) return void (e.preventTrigger = !1);
                                    switch (e.state = a, r.data == YT.PlayerState.PLAYING && r.target.setPlaybackQuality(e.opt.quality), a) {
                                        case-1:
                                            t = "YTPUnstarted";
                                            break;
                                        case 0:
                                            t = "YTPRealEnd";
                                            break;
                                        case 1:
                                            t = "YTPPlay", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.isPlayer && e.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
                                            break;
                                        case 2:
                                            t = "YTPPause", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.isPlayer && e.inlinePlayButton.show();
                                            break;
                                        case 3:
                                            e.player.setPlaybackQuality(e.opt.quality), t = "YTPBuffering", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5:
                                            t = "YTPCued"
                                    }
                                    let o = jQuery.Event(t);
                                    o.time = e.currentTime, jQuery(e).trigger(o)
                                }, onPlaybackQualityChange: function (r) {
                                    let t = r.target.getPlaybackQuality(), a = jQuery.Event("YTPQualityChange");
                                    a.quality = t, jQuery(e).trigger(a)
                                }, onError: function (t) {
                                    switch ("function" == typeof e.opt.onError && e.opt.onError(r, t), t.data) {
                                        case 2:
                                            console.error("video ID:: " + e.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                            break;
                                        case 5:
                                            console.error("video ID:: " + e.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                            break;
                                        case 100:
                                            console.error("video ID:: " + e.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                            break;
                                        case 101:
                                        case 150:
                                            console.error("video ID:: " + e.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
                                    }
                                    e.isList && jQuery(e).YTPPlayNext()
                                }
                            }
                        }), r.on("YTPlayerIsReady_" + e.id, function () {
                            if (e.isReady) return this;
                            e.playerEl = e.player.getIframe(), jQuery(e.playerEl).unselectable(), r.optimizeDisplay(), jQuery(window).off("resize.YTP_" + e.id).on("resize.YTP_" + e.id, function () {
                                r.optimizeDisplay()
                            }), e.opt.remember_last_time && jQuery(window).on("unload.YTP_" + e.id, function () {
                                let r = e.player.getCurrentTime();
                                jQuery.mbCookie.set("YTPlayer_start_from" + e.videoID, r, 0)
                            }), r.YTPCheckForState()
                        })
                    }))
                }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer), console.timeEnd("YTPlayerInit")
            })
        },
        isOnScreen: function (e, r) {
            r = r || 10;
            let t = e.wrapper, a = jQuery(window).scrollTop(), o = a + jQuery(window).height(), n = t.height() * r / 100, i = t.offset().top + n;
            return t.offset().top + (t.height() - n) <= o && i >= a
        },
        getDataFromAPI: function (e) {
            e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), e.videoData ? (setTimeout(function () {
                e.dataReceived = !0;
                let r = jQuery.Event("YTPChanged");
                r.time = e.currentTime, r.videoId = e.videoID, r.opt = e.opt, jQuery(e).trigger(r);
                let t = jQuery.Event("YTPData");
                t.prop = {};
                for (let r in e.videoData) t.prop[r] = e.videoData[r];
                jQuery(e).trigger(t)
            }, e.opt.fadeOnStartTime), e.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (r) {
                e.dataReceived = !0;
                let t = jQuery.Event("YTPChanged");
                t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t), r.items[0] ? (!function (r) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = r.channelTitle, e.videoData.title = r.title, e.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", e.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, e.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, e.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                }(r.items[0].snippet), e.hasData = !0) : (e.videoData = {}, e.hasData = !1);
                let a = jQuery.Event("YTPData");
                a.prop = {};
                for (let r in e.videoData) a.prop[r] = e.videoData[r];
                jQuery(e).trigger(a)
            }) : (setTimeout(function () {
                let r = jQuery.Event("YTPChanged");
                r.time = e.currentTime, r.videoId = e.videoID, jQuery(e).trigger(r)
            }, 10), e.videoData = null), e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function () {
            jQuery.mbStorage.remove()
        },
        getVideoData: function () {
            return this.get(0).videoData
        },
        getVideoID: function () {
            return this.get(0).videoID || !1
        },
        getPlaylistID: function () {
            return this.get(0).playlistID || !1
        },
        setVideoQuality: function (e) {
            let r = this.get(0);
            return jQuery(r).YTPPause(), r.opt.quality = e, r.player.setPlaybackQuality(e), jQuery(r).YTPPlay(), this
        },
        getVideoQuality: function () {
            return this.get(0).player.getPlaybackQuality()
        },
        playlist: function (e, r, t) {
            let a = this.get(0);
            return a.isList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 1, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).YTPlayer()), "function" == typeof t && jQuery(a).on("YTPChanged", function () {
                t(a)
            }), jQuery(a).on("YTPEnd", function () {
                jQuery(a).YTPPlayNext()
            }), this
        },
        playNext: function () {
            let e = this.get(0);
            return e.videoCounter++, e.videoCounter > e.videoLength && (e.videoCounter = 1), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playPrev: function () {
            let e = this.get(0);
            return e.videoCounter--, e.videoCounter <= 0 && (e.videoCounter = e.videoLength), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playIndex: function (e) {
            let r = this.get(0);
            r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
            let t = r.videos[r.videoCounter - 1];
            return jQuery(r).YTPChangeVideo(t), this
        },
        changeVideo: function (e) {
            let r = this, t = r.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.opt.autoPlay = !0, t.opt.addFilters = !1, t.opt.coverImage = !1, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999), t.wrapper.css({background: "none"}), jQuery(t.playerEl).CSSAnimate({opacity: 0}, t.opt.fadeOnStartTime, function () {
                jQuery.mbYTPlayer.getDataFromAPI(t), r.YTPGetPlayer().loadVideoById({
                    videoId: t.videoID,
                    suggestedQuality: t.opt.quality
                }), r.YTPPause(), r.optimizeDisplay(), r.YTPCheckForState()
            });
            let a = jQuery.Event("YTPChangeVideo");
            return a.time = t.currentTime, jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this
        },
        getPlayer: function () {
            let e = this.get(0);
            return e.isReady && e.player || null
        },
        playerDestroy: function () {
            let e = this.get(0);
            return e.isReady ? (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this) : this
        },
        fullscreen: function (real) {
            let YTPlayer = this.get(0);
            void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
            let controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                let e = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(e).on(e, function () {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({cursor: "auto"}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1; else {
                function hideMouse() {
                    YTPlayer.overlay.css({cursor: "none"})
                }

                jQuery(document).on("mousemove.YTPlayer", function (e) {
                    YTPlayer.overlay.css({cursor: "auto"}), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                    videoWrapper.CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
            }

            function RunPrefixMethod(e, r) {
                let t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0;
                for (; n < o.length && !e[t];) {
                    if (t = r, "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[n] + t])) return o = [o[n]], "function" == a ? e[t]() : e[t];
                    n++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            return this
        },
        toggleLoops: function () {
            let e = this.get(0), r = e.opt;
            return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this
        },
        play: function () {
            let e = this.get(0), r = jQuery(e);
            return e.isReady ? (setTimeout(function () {
                r.YTPSetAbundance(e.opt.abundance)
            }, 300), e.player.playVideo(), jQuery(e.playerEl).css({opacity: 1}), e.wrapper.css({backgroundImage: "none"}), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, this) : this
        },
        togglePlay: function (e) {
            let r = this.get(0);
            return r.isReady ? (1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state), this) : this
        },
        stop: function () {
            let e = this.get(0);
            return e.isReady ? (jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this) : this
        },
        pause: function () {
            let e = this.get(0);
            return e.isReady ? (e.opt.abundance < .2 && this.YTPSetAbundance(.2), e.player.pauseVideo(), e.state = 2, this) : this
        },
        seekTo: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.player.seekTo(e, !0), this) : this
        },
        getPlaybackRate: function () {
            let e = this.get(0);
            return e.isReady ? e.player.getPlaybackRate() : this
        },
        setPlaybackRate: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.player.setPlaybackRate(e), this) : this
        },
        setVolume: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.opt.vol = e, this.YTPUnmute(), r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e), this) : this
        },
        getVolume: function () {
            let e = this.get(0);
            return e.isReady ? e.player.getVolume() : this
        },
        toggleVolume: function () {
            let e = this.get(0);
            return e.isReady ? (e.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute()) : this.YTPMute(), this) : this
        },
        mute: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            if (e.isMute) return this;
            e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
            let r = jQuery.Event("YTPMuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        unmute: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            if (!e.isMute) return this;
            e.player.unMute(), e.isMute = !1, jQuery(e).YTPSetVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
            let r = jQuery.Event("YTPUnmuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        applyFilter: function (e, r) {
            let t = this.get(0);
            if (!t.isReady) return this;
            t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters()
        },
        applyFilters: function (e) {
            let r = this, t = r.get(0);
            if (!t.isReady) return jQuery(t).on("YTPReady", function () {
                r.YTPApplyFilters(e)
            }), this;
            for (let t in e) r.YTPApplyFilter(t, e[t]);
            r.trigger("YTPFiltersApplied")
        },
        toggleFilter: function (e, r) {
            let t = this.get(0);
            return t.isReady ? (t.filters[e].value ? t.filters[e].value = 0 : t.filters[e].value = r, t.filtersEnabled && jQuery(t).YTPEnableFilters(), this) : this
        },
        toggleFilters: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled), this) : this
        },
        disableFilters: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            let r = jQuery(e.playerEl);
            return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            let r = jQuery(e.playerEl), t = "";
            for (let r in e.filters) e.filters[r].value && (t += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
            return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
        },
        removeFilter: function (e, r) {
            let t = this, a = t.get(0);
            if (!a.isReady) return this;
            if ("function" == typeof e && (r = e, e = null), e) t.YTPApplyFilter(e, 0), "function" == typeof r && r(e); else {
                for (let e in a.filters) t.YTPApplyFilter(e, 0);
                "function" == typeof r && r(key), a.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
            }
            let o = jQuery.Event("YTPFiltersApplied");
            return t.trigger(o), this
        },
        getFilters: function () {
            let e = this.get(0);
            return e.isReady ? e.filters : this
        },
        addMask: function (e) {
            let r = this.get(0);
            e || (e = r.actualMask);
            let t = jQuery("<img/>").attr("src", e).on("load", function () {
                r.overlay.CSSAnimate({opacity: 0}, r.opt.fadeOnStartTime, function () {
                    r.hasMask = !0, t.remove(), r.overlay.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), r.overlay.CSSAnimate({opacity: 1}, r.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function () {
            let e = this.get(0);
            return e.overlay.CSSAnimate({opacity: 0}, e.opt.fadeOnStartTime, function () {
                e.hasMask = !1, e.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e.overlay.CSSAnimate({opacity: 1}, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function (e) {
            let r = jQuery(e);
            if (r.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) r.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask; else if ("object" == typeof e.opt.mask) {
                console.debug(e.opt.mask);
                for (let r in e.opt.mask) e.opt.mask[r] && (img = jQuery("<img/>").attr("src", e.opt.mask[r]));
                e.opt.mask[0] && r.YTPAddMask(e.opt.mask[0]), r.on("YTPTime.mask", function (t) {
                    for (let a in e.opt.mask) t.time == a && (e.opt.mask[a] ? (r.YTPAddMask(e.opt.mask[a]), e.actualMask = e.opt.mask[a]) : r.YTPRemoveMask())
                })
            }
        },
        toggleMask: function () {
            let e = this.get(0), r = jQuery(e);
            return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this
        },
        manageProgress: function () {
            let e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTPProgress"), a = r.find(".mb_YTPLoaded"),
                o = r.find(".mb_YTPseekbar"), n = t.outerWidth(), i = Math.floor(e.player.getCurrentTime()), l = Math.floor(e.player.getDuration()),
                s = i * n / l, u = 100 * e.player.getVideoLoadedFraction();
            return a.css({left: 0, width: u + "%"}), o.css({left: 0, width: s}), {totalTime: l, currentTime: i}
        },
        buildControls: function (YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(), !YTPlayer.opt.showControls) return void (YTPlayer.controlBar = !1);
            if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, jQuery("#controlBar_" + YTPlayer.id).length) return;
            YTPlayer.controlBar = jQuery("<div/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 1e4 : 1e3
            }).hide().on("click", function (e) {
                e.stopPropagation()
            });
            let buttonBar = jQuery("<div/>").addClass("buttonBar"),
                playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
                }),
                MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
                }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
            YTPlayer.volumeBar = volumeBar;
            let idx = jQuery("<span/>").addClass("mb_YTPTime"), vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
            vURL.indexOf("http") < 0 && (vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
            let movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen)
                }), progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function (e) {
                    e.stopPropagation(), timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
                    let r = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
                }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function (e) {
                    0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                }
            })
        },
        checkForState: function () {
            let YTPlayer = this.get(0), $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            let interval = 100;
            if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function () {
                let $YTPlayer = jQuery(YTPlayer);
                if (!YTPlayer.isReady) return;
                let prog = jQuery(YTPlayer).YTPManageProgress(), stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    let e = jQuery.Event("YTPTime");
                    e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
                    let e = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                    e || 1 != YTPlayer.state ? e && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - YTPlayer.opt.fadeOnStartTime / 1e3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function () {
                        YTPlayer.isEnded = !1
                    }, 1e3), YTPlayer.isList) {
                        if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            let e = jQuery.Event("YTPEnd");
                            return e.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(e)
                        }
                    } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                        if (YTPlayer.player.loopTime = void 0, YTPlayer.state = 2, YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                            let e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                            e && YTPlayer.opt.containment.css({background: e, backgroundSize: "cover", backgroundRepeat: "no-repeat"})
                        }
                        return jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({opacity: 0}, YTPlayer.opt.fadeOnStartTime, function () {
                            YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                            let e = jQuery.Event("YTPEnd");
                            if (e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0), YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                                let e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                e && YTPlayer.opt.containment.css({background: e, backgroundSize: "cover", backgroundRepeat: "no-repeat"})
                            }
                        })
                    }
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
                }
            }, interval)
        },
        checkForStart: function (YTPlayer) {
            let $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer)) return void $YTPlayer.YTPPlayerDestroy();
            if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay) if (YTPlayer.opt.addRaster) {
                let e = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                YTPlayer.overlay.addClass(YTPlayer.isRetina ? e + " retina" : e)
            } else YTPlayer.overlay.removeClass(function (e, r) {
                let t = r.split(" "), a = [];
                return jQuery.each(t, function (e, r) {
                    /raster.*/.test(r) && a.push(r)
                }), a.push("retina"), a.join(" ")
            });
            YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
            let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function () {
                YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
                let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
                    let YTPready = jQuery.Event("YTPReady");
                    if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? $YTPlayer.YTPMute() : (YTPlayer.opt.autoPlay && (console.debug("To make the video 'auto-play' you must mute the audio according with the latest vendor policy"), YTPlayer.player.mute()), YTPlayer.player.unMute()), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
                        let e = jQuery.Event("YTPStart");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.isStarting = !1, "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function () {
                            $YTPlayer.YTPPlay()
                        }), $YTPlayer.YTPPlay(), console.timeEnd("YTPlayerStartPlay")
                    } else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function () {
                        YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({opacity: 0}), setTimeout(function () {
                            if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
                                let e = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                e && YTPlayer.wrapper.css({background: e, backgroundSize: "cover", backgroundRepeat: "no-repeat"})
                            }
                        }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
                    }, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function () {
                        YTPlayer.loading.fadeOut()
                    }, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
                }
                "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), startAt >= 0 && YTPlayer.player.seekTo(startAt, !0))
            }, 100), $YTPlayer
        },
        getTime: function () {
            let e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function (e) {
            let r = this.get(0);
            return jQuery.mbYTPlayer.formatTime(r.totalTime)
        },
        formatTime: function (e) {
            let r = Math.floor(e / 60), t = Math.floor(e - 60 * r);
            return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
        },
        setAnchor: function (e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function () {
            return this.get(0).opt.anchor
        },
        setAbundance: function (e, r) {
            let t = this.get(0);
            return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
        },
        getAbundance: function () {
            return this.get(0).opt.abundance
        },
        setOption: function (e, r) {
            return this.get(0).opt[e] = r, this
        }
    }, jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
        let YTPlayer = this.get(0), vid = {}, el = YTPlayer.wrapper, iframe = jQuery(YTPlayer.playerEl);
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        let YTPAlign = YTPlayer.opt.anchor.split(","), ab = abundanceX || YTPlayer.opt.abundance;
        if (YTPlayer.opt.optimizeDisplay) {
            let abundance = el.height() * ab, win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height + abundance) / 2), vid.marginLeft = -abundance / 2;
            let lowest = vid.height < win.height;
            lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2));
            for (let e in YTPAlign) if (YTPAlign.hasOwnProperty(e)) {
                let r = YTPAlign[e].replace(/ /g, "");
                switch (r) {
                    case"top":
                        vid.marginTop = -abundance;
                        break;
                    case"bottom":
                        vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
                        break;
                    case"left":
                        vid.marginLeft = -abundance;
                        break;
                    case"right":
                        vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2)
                }
            }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        iframe.css({width: vid.width, height: vid.height, marginTop: vid.marginTop, marginLeft: vid.marginLeft, maxWidth: "initial"})
    }, jQuery.shuffle = function (e) {
        let r = e.slice(), t = r.length, a = t;
        for (; a--;) {
            let e = parseInt(Math.random() * t), o = r[a];
            r[a] = r[e], r[e] = o
        }
        return r
    }, jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({"-moz-user-select": "none", "-webkit-user-select": "none", "user-select": "none"}).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate, jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption
}(jQuery, ytp);
var nAgt = navigator.userAgent;

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints, r = "ontouchstart" in document.createElement("div");
    return !(!e && !r)
}

jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
    var e = {version: "Unknown version", name: "Unknown OS"};
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
}, nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

function uncamel(e) {
    return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, r) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}

function setFilter(e, r, t) {
    var a = uncamel(r), o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r]
}

-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
        if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
        if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
    }
    return 0
}, jQuery.support.CSStransition = function () {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {min: 0, max: 100, unit: "px"},
        brightness: {min: 0, max: 400, unit: "%"},
        contrast: {min: 0, max: 400, unit: "%"},
        grayscale: {min: 0, max: 100, unit: "%"},
        hueRotate: {min: 0, max: 360, unit: "deg"},
        invert: {min: 0, max: 100, unit: "%"},
        saturate: {min: 0, max: 400, unit: "%"},
        sepia: {min: 0, max: 100, unit: "%"}
    },
    normalizeCss: function (e) {
        var r = jQuery.extend(!0, {}, e);
        for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r) {
            if ("transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]), "x" === t) {
                var a = jQuery.CSS.sfx + "transform";
                r[a] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]
            }
            "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t])
        }
        return r
    },
    getProp: function (e) {
        var r, t = [];
        for (r in e) 0 > t.indexOf(r) && t.push(uncamel(r));
        return t.join(",")
    },
    animate: function (e, r, t, a, o) {
        return this.each(function () {
            function n() {
                i.called = !0, i.CSSAIsRunning = !1, l.off(jQuery.CSS.transitionEnd + "." + i.id), clearTimeout(i.timeout), l.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof o && o.apply(i), "function" == typeof i.CSSqueue && (i.CSSqueue(), i.CSSqueue = null)
            }

            var i = this, l = jQuery(this);
            i.id = i.id || "CSSA_" + (new Date).getTime();
            var s = s || {type: "noEvent"};
            if (i.CSSAIsRunning && i.eventType == s.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) i.CSSqueue = function () {
                l.CSSAnimate(e, r, t, a, o)
            }; else if (i.CSSqueue = null, i.eventType = s.type, 0 !== l.length && e) {
                if (e = jQuery.normalizeCss(e), i.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (a = t, t = 0), "string" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r) for (var u in jQuery.fx.speeds) {
                    if (r == u) {
                        r = jQuery.fx.speeds[u];
                        break
                    }
                    r = jQuery.fx.speeds._default
                }
                if (r || (r = jQuery.fx.speeds._default), "string" == typeof o && (a = o, o = null), jQuery.support.CSStransition) {
                    var y = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    y[a] && (a = y[a]), l.off(jQuery.CSS.transitionEnd + "." + i.id), y = jQuery.CSS.getProp(e);
                    var d = {};
                    jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = y, d[jQuery.CSS.sfx + "transition-duration"] = r + "ms", d[jQuery.CSS.sfx + "transition-delay"] = t + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = a, setTimeout(function () {
                        l.one(jQuery.CSS.transitionEnd + "." + i.id, n), l.css(d)
                    }, 1), i.timeout = setTimeout(function () {
                        i.called || !o ? (i.called = !1, i.CSSAIsRunning = !1) : (l.css(jQuery.CSS.sfx + "transition", ""), o.apply(i), i.CSSAIsRunning = !1, "function" == typeof i.CSSqueue && (i.CSSqueue(), i.CSSqueue = null))
                    }, r + t + 10)
                } else {
                    for (y in e) "transform" === y && delete e[y], "filter" === y && delete e[y], "transform-origin" === y && delete e[y], "auto" === e[y] && delete e[y], "x" === y && (s = e[y], e[u = "left"] = s, delete e[y]), "y" === y && (s = e[y], e[u = "top"] = s, delete e[y]), "-ms-transform" !== y && "-ms-filter" !== y || delete e[y];
                    l.delay(t).animate(e, r, o)
                }
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
    return this.each(function () {
        var r = jQuery(this), t = jQuery.normalizeCss(e);
        r.css(t)
    })
};
var nAgt = navigator.userAgent;

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints, r = "ontouchstart" in document.createElement("div");
    return !(!e && !r)
}

jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
    var e = {version: "Unknown version", name: "Unknown OS"};
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
}, nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (var t = e.split("."), a = r.split("."), o = 0, n = Math.max(t.length, a.length); o < n; o++) {
        if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
        if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
    }
    return 0
}, function (e) {
    e.simpleSlider = {
        defaults: {initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1},
        events: {
            start: e.browser.mobile ? "touchstart" : "mousedown",
            end: e.browser.mobile ? "touchend" : "mouseup",
            move: e.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function (r) {
            return this.each(function () {
                var t = this, a = e(t);
                a.addClass("simpleSlider"), t.opt = {}, e.extend(t.opt, e.simpleSlider.defaults, r), e.extend(t.opt, a.data());
                var o = "h" == t.opt.orientation ? "horizontal" : "vertical";
                o = e("<div/>").addClass("level").addClass(o), a.prepend(o), t.level = o, a.css({cursor: "default"}), "auto" == t.opt.scale && (t.opt.scale = e(t).outerWidth()), a.updateSliderVal(), t.opt.readonly || (a.on(e.simpleSlider.events.start, function (r) {
                    e.browser.mobile && (r = r.changedTouches[0]), t.canSlide = !0, a.updateSliderVal(r), "h" == t.opt.orientation ? a.css({cursor: "col-resize"}) : a.css({cursor: "row-resize"}), e.browser.mobile || (r.preventDefault(), r.stopPropagation())
                }), e(document).on(e.simpleSlider.events.move, function (r) {
                    e.browser.mobile && (r = r.changedTouches[0]), t.canSlide && (e(document).css({cursor: "default"}), a.updateSliderVal(r), e.browser.mobile || (r.preventDefault(), r.stopPropagation()))
                }).on(e.simpleSlider.events.end, function () {
                    e(document).css({cursor: "auto"}), t.canSlide = !1, a.css({cursor: "auto"})
                }))
            })
        },
        updateSliderVal: function (r) {
            var t = this.get(0);
            if (t.opt) {
                t.opt.initialval = "number" == typeof t.opt.initialval ? t.opt.initialval : t.opt.initialval(t);
                var a = e(t).outerWidth(), o = e(t).outerHeight();
                t.x = "object" == typeof r ? r.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof r ? r * a / t.opt.scale : t.opt.initialval * a / t.opt.scale, t.y = "object" == typeof r ? r.clientY + document.body.scrollTop - this.offset().top : "number" == typeof r ? (t.opt.scale - t.opt.initialval - r) * o / t.opt.scale : t.opt.initialval * o / t.opt.scale, t.y = this.outerHeight() - t.y, t.scaleX = t.x * t.opt.scale / a, t.scaleY = t.y * t.opt.scale / o, t.outOfRangeX = t.scaleX > t.opt.scale ? t.scaleX - t.opt.scale : 0 > t.scaleX ? t.scaleX : 0, t.outOfRangeY = t.scaleY > t.opt.scale ? t.scaleY - t.opt.scale : 0 > t.scaleY ? t.scaleY : 0, t.outOfRange = "h" == t.opt.orientation ? t.outOfRangeX : t.outOfRangeY, t.value = void 0 !== r ? "h" == t.opt.orientation ? t.x >= this.outerWidth() ? t.opt.scale : 0 >= t.x ? 0 : t.scaleX : t.y >= this.outerHeight() ? t.opt.scale : 0 >= t.y ? 0 : t.scaleY : "h" == t.opt.orientation ? t.scaleX : t.scaleY, "h" == t.opt.orientation ? t.level.width(Math.floor(100 * t.x / a) + "%") : t.level.height(Math.floor(100 * t.y / o)), "function" == typeof t.opt.callback && t.opt.callback(t)
            }
        }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery), function (e) {
    e.mbCookie = {
        set: function (e, r, t, a) {
            "object" == typeof r && (r = JSON.stringify(r)), a = a ? "; domain=" + a : "";
            var o = new Date, n = "";
            0 < t && (o.setTime(o.getTime() + 864e5 * t), n = "; expires=" + o.toGMTString()), document.cookie = e + "=" + r + n + "; path=/" + a
        }, get: function (e) {
            e += "=";
            for (var r = document.cookie.split(";"), t = 0; t < r.length; t++) {
                for (var a = r[t]; " " == a.charAt(0);) a = a.substring(1, a.length);
                if (0 == a.indexOf(e)) try {
                    return JSON.parse(a.substring(e.length, a.length))
                } catch (r) {
                    return a.substring(e.length, a.length)
                }
            }
            return null
        }, remove: function (r) {
            e.mbCookie.set(r, "", -1)
        }
    }, e.mbStorage = {
        set: function (e, r) {
            "object" == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r)
        }, get: function (e) {
            if (!localStorage[e]) return null;
            try {
                return JSON.parse(localStorage[e])
            } catch (r) {
                return localStorage[e]
            }
        }, remove: function (e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery);


/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies, o = window.Cookies = e();
        o.noConflict = function () {
            return window.Cookies = t, o
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }

    return function t(o) {
        function r() {
        }

        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = e({path: "/"}, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {
                }
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }

        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("="), u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u), t) try {
                            u = JSON.parse(u)
                        } catch (e) {
                        }
                        if (r[a] = u, e === a) break
                    } catch (e) {
                    }
                }
                return e ? r[e] : r
            }
        }

        return r.set = i, r.get = function (e) {
            return c(e, !1)
        }, r.getJSON = function (e) {
            return c(e, !0)
        }, r.remove = function (n, t) {
            i(n, "", e(t, {expires: -1}))
        }, r.defaults = {}, r.withConverter = t, r
    }(function () {
    })
});


/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
    var b = function (a, b) {
        var c, d = document.createElement("canvas");
        a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
        var e = d.getContext("2d");
        d.width = d.height = b.size;
        var f = 1;
        window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
        var g = (b.size - b.lineWidth) / 2;
        b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
            return +new Date
        };
        var h = function (a, b, c) {
            c = Math.min(Math.max(-1, c || 0), 1);
            var d = 0 >= c ? !0 : !1;
            e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
        }, i = function () {
            var a, c;
            e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
            for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
            e.restore()
        }, j = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                window.setTimeout(a, 1e3 / 60)
            }
        }(), k = function () {
            b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
        };
        this.getCanvas = function () {
            return d
        }, this.getCtx = function () {
            return e
        }, this.clear = function () {
            e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
        }, this.draw = function (a) {
            b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
            var d;
            d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
        }.bind(this), this.animate = function (a, c) {
            var d = Date.now();
            b.onStart(a, c);
            var e = function () {
                var f = Math.min(Date.now() - d, b.animate.duration), g = b.easing(this, f, a, c - a, b.animate.duration);
                this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
            }.bind(this);
            j(e)
        }.bind(this)
    }, c = function (a, c) {
        var d = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {duration: 1e3, enabled: !0},
            easing: function (a, b, c, d, e) {
                return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
            },
            onStart: function (a, b) {
            },
            onStep: function (a, b, c) {
            },
            onStop: function (a, b) {
            }
        };
        if ("undefined" != typeof b) d.renderer = b; else {
            if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
            d.renderer = SVGRenderer
        }
        var e = {}, f = 0, g = function () {
            this.el = a, this.options = e;
            for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
            "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
                duration: e.animate,
                enabled: !0
            }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                duration: 1e3,
                enabled: e.animate
            }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
        }.bind(this);
        this.update = function (a) {
            return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
        }.bind(this), this.disableAnimation = function () {
            return e.animate.enabled = !1, this
        }, this.enableAnimation = function () {
            return e.animate.enabled = !0, this
        }, g()
    };
    a.fn.easyPieChart = function (b) {
        return this.each(function () {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
});


/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (e) {
    e.fn.appear = function (t, n) {
        var r = e.extend({data: undefined, one: true, accX: 0, accY: 0}, n);
        return this.each(function () {
            var n = e(this);
            n.appeared = false;
            if (!t) {
                n.trigger("appear", r.data);
                return
            }
            var i = e(window);
            var s = function () {
                if (!n.is(":visible")) {
                    n.appeared = false;
                    return
                }
                var e = i.scrollLeft();
                var t = i.scrollTop();
                var s = n.offset();
                var o = s.left;
                var u = s.top;
                var a = r.accX;
                var f = r.accY;
                var l = n.height();
                var c = i.height();
                var h = n.width();
                var p = i.width();
                if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
                    if (!n.appeared) n.trigger("appear", r.data)
                } else {
                    n.appeared = false
                }
            };
            var o = function () {
                n.appeared = true;
                if (r.one) {
                    i.unbind("scroll", s);
                    var o = e.inArray(s, e.fn.appear.checks);
                    if (o >= 0) e.fn.appear.checks.splice(o, 1)
                }
                t.apply(this, arguments)
            };
            if (r.one) n.one("appear", r.data, o); else n.bind("appear", r.data, o);
            i.scroll(s);
            e.fn.appear.checks.push(s);
            s()
        })
    };
    e.extend(e.fn.appear, {
        checks: [], timeout: null, checkAll: function () {
            var t = e.fn.appear.checks.length;
            if (t > 0) while (t--) e.fn.appear.checks[t]()
        }, run: function () {
            if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    });
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) {
        var r = e.fn[n];
        if (r) {
            e.fn[n] = function () {
                var t = r.apply(this, arguments);
                e.fn.appear.run();
                return t
            }
        }
    })
})(jQuery);


/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var n = !1;
    t(window).on("load", function () {
        n = !0
    });
    var i = "animsition", a = {
        init: function (o) {
            o = t.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                loadingInner: "",
                timeout: !1,
                timeoutCountdown: 5e3,
                onLoadEvent: !0,
                browser: ["animation-duration", "-webkit-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body",
                transition: function (t) {
                    window.location.href = t
                }
            }, o), a.settings = {
                timer: !1,
                data: {
                    inClass: "animsition-in-class",
                    inDuration: "animsition-in-duration",
                    outClass: "animsition-out-class",
                    outDuration: "animsition-out-duration",
                    overlay: "animsition-overlay"
                },
                events: {inStart: "animsition.inStart", inEnd: "animsition.inEnd", outStart: "animsition.outStart", outEnd: "animsition.outEnd"}
            };
            var e = a.supportCheck.call(this, o);
            if (!e && o.browser.length > 0 && (!e || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (t) {
                return t
            }), this.length || console.log("Animsition: Element does not exist on page."), e || console.log("Animsition: Does not support this browser."), a.destroy.call(this);
            var s = a.optionCheck.call(this, o);
            return s && t("." + o.overlayClass).length <= 0 && a.addOverlay.call(this, o), o.loading && t("." + o.loadingClass).length <= 0 && a.addLoading.call(this, o), this.each(function () {
                var e = this, s = t(this), r = t(window), l = t(document), d = s.data(i);
                d || (o = t.extend({}, o), s.data(i, {options: o}), o.timeout && a.addTimer.call(e), o.onLoadEvent && (n ? (a.settings.timer && clearTimeout(a.settings.timer), a["in"].call(e)) : r.on("load." + i, function () {
                    a.settings.timer && clearTimeout(a.settings.timer), a["in"].call(e)
                })), r.on("pageshow." + i, function (t) {
                    t.originalEvent.persisted && a["in"].call(e)
                }), r.on("unload." + i, function () {
                }), l.on("click." + i, o.linkElement, function (n) {
                    n.preventDefault();
                    var i = t(this), o = i.attr("href");
                    2 === n.which || n.metaKey || n.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && n.ctrlKey ? window.open(o, "_blank") : a.out.call(e, i, o)
                }))
            })
        }, addOverlay: function (n) {
            t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>')
        }, addLoading: function (n) {
            t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>")
        }, removeLoading: function () {
            var n = t(this), a = n.data(i).options, o = t(a.loadingParentElement).children("." + a.loadingClass);
            o.fadeOut().remove()
        }, addTimer: function () {
            var n = this, o = t(this), e = o.data(i).options;
            a.settings.timer = setTimeout(function () {
                a["in"].call(n), t(window).off("load." + i)
            }, e.timeoutCountdown)
        }, supportCheck: function (n) {
            var i = t(this), a = n.browser, o = a.length, e = !1;
            0 === o && (e = !0);
            for (var s = 0; o > s; s++) if ("string" == typeof i.css(a[s])) {
                e = !0;
                break
            }
            return e
        }, optionCheck: function (n) {
            var i, o = t(this);
            return i = n.overlay || o.data(a.settings.data.overlay) ? !0 : !1
        }, animationCheck: function (n, a, o) {
            var e = t(this), s = e.data(i).options, r = typeof n, l = !a && "number" === r, d = a && "string" === r && n.length > 0;
            return l || d ? n = n : a && o ? n = s.inClass : !a && o ? n = s.inDuration : a && !o ? n = s.outClass : a || o || (n = s.outDuration), n
        }, "in": function () {
            var n = this, o = t(this), e = o.data(i).options, s = o.data(a.settings.data.inDuration), r = o.data(a.settings.data.inClass),
                l = a.animationCheck.call(n, s, !1, !0), d = a.animationCheck.call(n, r, !0, !0), u = a.optionCheck.call(n, e),
                c = o.data(i).outClass;
            e.loading && a.removeLoading.call(n), c && o.removeClass(c), u ? a.inOverlay.call(n, d, l) : a.inDefault.call(n, d, l)
        }, inDefault: function (n, i) {
            var o = t(this);
            o.css({"animation-duration": i + "ms"}).addClass(n).trigger(a.settings.events.inStart).animateCallback(function () {
                o.removeClass(n).css({opacity: 1}).trigger(a.settings.events.inEnd)
            })
        }, inOverlay: function (n, o) {
            var e = t(this), s = e.data(i).options;
            e.css({opacity: 1}).trigger(a.settings.events.inStart), t(s.overlayParentElement).children("." + s.overlayClass).css({"animation-duration": o + "ms"}).addClass(n).animateCallback(function () {
                e.trigger(a.settings.events.inEnd)
            })
        }, out: function (n, o) {
            var e = this, s = t(this), r = s.data(i).options, l = n.data(a.settings.data.outClass), d = s.data(a.settings.data.outClass),
                u = n.data(a.settings.data.outDuration), c = s.data(a.settings.data.outDuration), m = l ? l : d, g = u ? u : c,
                f = a.animationCheck.call(e, m, !0, !1), v = a.animationCheck.call(e, g, !1, !1), h = a.optionCheck.call(e, r);
            s.data(i).outClass = f, h ? a.outOverlay.call(e, f, v, o) : a.outDefault.call(e, f, v, o)
        }, outDefault: function (n, o, e) {
            var s = t(this), r = s.data(i).options;
            s.css({"animation-duration": o + 1 + "ms"}).addClass(n).trigger(a.settings.events.outStart).animateCallback(function () {
                s.trigger(a.settings.events.outEnd), r.transition(e)
            })
        }, outOverlay: function (n, o, e) {
            var s = this, r = t(this), l = r.data(i).options, d = r.data(a.settings.data.inClass), u = a.animationCheck.call(s, d, !0, !0);
            t(l.overlayParentElement).children("." + l.overlayClass).css({"animation-duration": o + 1 + "ms"}).removeClass(u).addClass(n).trigger(a.settings.events.outStart).animateCallback(function () {
                r.trigger(a.settings.events.outEnd), l.transition(e)
            })
        }, destroy: function () {
            return this.each(function () {
                var n = t(this);
                t(window).off("." + i), n.css({opacity: 1}).removeData(i)
            })
        }
    };
    t.fn.animateCallback = function (n) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var a = t(this);
            a.on(i, function () {
                return a.off(i), n.call(this)
            })
        })
    }, t.fn.animsition = function (n) {
        return a[n] ? a[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery." + i) : a.init.apply(this, arguments)
    }
});


/*! skrollr 0.6.30 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function (a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing) for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {targetTop: ha.getScrollTop()}, Sa = (c.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function () {
            var a = e.clientWidth, b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }

    var e, f, g = {
            get: function () {
                return ha
            }, init: function (a) {
                return ha || new d(a)
            }, VERSION: "0.6.29"
        }, h = Object.prototype.hasOwnProperty, i = a.Math, j = a.getComputedStyle, k = "touchstart", l = "touchmove", m = "touchcancel", n = "touchend",
        o = "skrollable", p = o + "-before", q = o + "-between", r = o + "-after", s = "skrollr", t = "no-" + s, u = s + "-desktop",
        v = s + "-mobile", w = "linear", x = 1e3, y = .004, z = "skrollr-body", A = 200, B = "start", C = "end", D = "center", E = "bottom",
        F = "___skrollable_id", G = /^(?:input|textarea|button|select)$/i, H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, K = /^(@?[a-z\-]+)\[(\w+)\]$/, L = /-([a-z0-9_])/g, M = function (a, b) {
            return b.toUpperCase()
        }, N = /[\-+]?[\d]*\.?[\d]+/g, O = /\{\?\}/g, P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, Q = /[a-z\-]+-gradient/g, R = "", S = "",
        T = function () {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b) if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void (R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[R]) : S = "-" + R.toLowerCase() + "-"
            }
        }, U = function () {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"], c = Ha();
            return (Sa || !b) && (b = function (b) {
                var d = Ha() - c, e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function () {
                    c = Ha(), b()
                }, e)
            }), b
        }, V = function () {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function (b) {
                return a.clearTimeout(b)
            }), b
        }, W = {
            begin: function () {
                return 0
            }, end: function () {
                return 1
            }, linear: function (a) {
                return a
            }, quadratic: function (a) {
                return a * a
            }, cubic: function (a) {
                return a * a * a
            }, swing: function (a) {
                return -i.cos(a * i.PI) / 2 + .5
            }, sqrt: function (a) {
                return i.sqrt(a)
            }, outCubic: function (a) {
                return i.pow(a - 1, 3) + 1
            }, bounce: function (a) {
                var b;
                if (.5083 >= a) b = 3; else if (.8489 >= a) b = 9; else if (.96208 >= a) b = 27; else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function (a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d], h = g, i = [], j = pa, k = ta, l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name) if ("data-smooth-scrolling" !== p.name) if ("data-edge-strategy" !== p.name) if ("data-emit-events" !== p.name) {
                        var q = p.name.match(I);
                        if (null !== q) {
                            var r = {props: p.value, element: g, eventType: p.name.replace(L, M)};
                            i.push(r);
                            var s = q[1];
                            s && (r.constant = s.substr(1));
                            var t = q[2];
                            /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                            var u = q[3], v = q[4] || u;
                            u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                        }
                    } else l = !0; else k = p.value; else j = "off" !== p.value; else if (h = b.querySelector(p.value), null === h) throw'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function (a, b, c) {
        var d = e.clientHeight, f = a.getBoundingClientRect(), g = f.top, h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function (a, b) {
        b = b || {};
        var d = Ha(), e = ha.getScrollTop(), f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function () {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function () {
        return !!oa
    }, d.prototype.isMobile = function () {
        return Sa
    }, d.prototype.setScrollTop = function (b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function () {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function () {
        return Ja
    }, d.prototype.on = function (a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function (a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function () {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function () {
        var d, g, h, j, o, p, q, r, s, t, u, v;
        wa(e, [k, l, m, n].join(" "), function (a) {
            var e = a.changedTouches[0];
            for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
            switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                case k:
                    d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                    break;
                case l:
                    G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                    break;
                default:
                case m:
                case n:
                    var f = g - o, w = h - p, x = w * w + f * f;
                    if (49 > x) {
                        if (!G.test(d.tagName)) {
                            d.focus();
                            var y = b.createEvent("MouseEvents");
                            y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                        }
                        return
                    }
                    d = c;
                    var z = r / v;
                    z = i.max(i.min(z, 3), -3);
                    var A = i.abs(z / na), B = z * A + .5 * na * A * A, C = ha.getScrollTop() - B, D = 0;
                    C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                        easing: "outCubic",
                        duration: A
                    })
            }
        }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
    }, Y = function () {
        var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight, o = Ba();
        for (j = 0, k = ia.length; k > j; j++) for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
        for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
            for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
            a.keyFrames.sort(Ia)
        }
    }, Z = function (a, b) {
        for (var c = 0, d = ia.length; d > c; c++) {
            var e, f, i = ia[c], j = i.element, k = i.smoothScrolling ? a : b, l = i.keyFrames, m = l.length, n = l[0], s = l[l.length - 1],
                t = k < n.frame, u = k > s.frame, v = t ? n : s, w = i.emitEvents, x = i.lastFrameIndex;
            if (t || u) {
                if (t && -1 === i.edge || u && 1 === i.edge) continue;
                switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                    case"reset":
                        fa(j);
                        continue;
                    case"ease":
                        k = v.frame;
                        break;
                    default:
                    case"set":
                        var y = v.props;
                        for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                        continue
                }
            } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
            for (var z = 0; m - 1 > z; z++) if (k >= l[z].frame && k <= l[z + 1].frame) {
                var A = l[z], B = l[z + 1];
                for (e in A.props) if (h.call(A.props, e)) {
                    var C = (k - A.frame) / (B.frame - A.frame);
                    C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                }
                w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                break
            }
        }
    }, $ = function () {
        Qa && (Qa = !1, Aa());
        var a, b, d = ha.getScrollTop(), e = Ha();
        if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0); else if (!sa) {
            var f = ra.targetTop - d;
            f && (ra = {
                startTop: Ma,
                topDiff: d - Ma,
                targetTop: d,
                startTime: Na,
                endTime: Na + qa
            }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
        }
        if (sa || Ma !== d) {
            La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
            var h = {curTop: d, lastTop: Ma, maxTop: Ja, direction: La}, i = ka.beforerender && ka.beforerender.call(ha, h);
            i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
        }
        Na = e
    }, _ = function (a) {
        for (var b = 0, c = a.keyFrames.length; c > b; b++) {
            for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                value: e,
                easing: W[d]
            };
            h.props = i
        }
    }, aa = function (a) {
        var b = [];
        return P.lastIndex = 0, a = a.replace(P, function (a) {
            return a.replace(N, function (a) {
                return a / 255 * 100 + "%"
            })
        }), S && (Q.lastIndex = 0, a = a.replace(Q, function (a) {
            return S + a
        })), a = a.replace(N, function (a) {
            return b.push(+a), "{?}"
        }), b.unshift(a), b
    }, ba = function (a) {
        var b, c, d = {};
        for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
        for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
    }, ca = function (a, b) {
        var c;
        for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
        for (c in a.props) b[c] = a.props[c]
    }, da = function (a, b, c) {
        var d, e = a.length;
        if (e !== b.length) throw"Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
        var f = [a[0]];
        for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
        return f
    }, ea = function (a) {
        var b = 1;
        return O.lastIndex = 0, a[0].replace(O, function () {
            return a[b++]
        })
    }, fa = function (a, b) {
        a = [].concat(a);
        for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
    }, ga = function () {
        ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
        var a = j(ja), b = a.getPropertyValue("transform"), c = a.getPropertyValue(S + "transform"), d = b && "none" !== b || c && "none" !== c;
        d || (ua = "")
    };
    g.setStyle = function (a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c); else if ("float" === b) d.styleFloat = d.cssFloat = c; else try {
            R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
        } catch (e) {
        }
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function (b, c, d) {
        var e = function (b) {
            return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function () {
                b.returnValue = !1, b.defaultPrevented = !0
            }), d.call(this, b)
        };
        c = c.split(" ");
        for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
            element: b,
            name: f,
            listener: d
        })
    }, xa = g.removeEvent = function (a, b, c) {
        b = b.split(" ");
        for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
    }, ya = function () {
        for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
        Ua = []
    }, za = function (a, b, c) {
        ka.keyframe && ka.keyframe.call(ha, a, b, c)
    }, Aa = function () {
        var a = ha.getScrollTop();
        Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
    }, Ba = function () {
        var a, b, c = e.clientHeight, d = {};
        for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
        return d
    }, Ca = function () {
        var a, b = 0;
        return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
    }, Da = function (b) {
        var c = "className";
        return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
    }, Ea = function (b, d, e) {
        var f = "className";
        if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void (b[f] = d);
        for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
        g = Fa(g);
        for (var j = 0, k = d.length; k > j; j++) -1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
        b[f] = Fa(g)
    }, Fa = function (a) {
        return a.replace(H, "")
    }, Ga = function (a) {
        return " " + a + " "
    }, Ha = Date.now || function () {
        return +new Date
    }, Ia = function (a, b) {
        return a.frame - b.frame
    }, Ja = 0, Ka = 1, La = "down", Ma = -1, Na = Ha(), Oa = 0, Pa = 0, Qa = !1, Ra = 0, Sa = !1, Ta = 0, Ua = [];
    "function" == typeof define && define.amd ? define([], function () {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);


/** Abstract base class for collection plugins.
 Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
 Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function () {
    var j = false;
    window.JQClass = function () {
    };
    JQClass.classes = {};
    JQClass.extend = function extender(f) {
        var g = this.prototype;
        j = true;
        var h = new this();
        j = false;
        for (var i in f) {
            h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function (d, e) {
                return function () {
                    var b = this._super;
                    this._super = function (a) {
                        return g[d].apply(this, a)
                    };
                    var c = e.apply(this, arguments);
                    this._super = b;
                    return c
                }
            })(i, f[i]) : f[i]
        }

        function JQClass() {
            if (!j && this._init) {
                this._init.apply(this, arguments)
            }
        }

        JQClass.prototype = h;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender;
        return JQClass
    }
})();
(function ($) {
    JQClass.classes.JQPlugin = JQClass.extend({
        name: 'plugin', defaultOptions: {}, regionalOptions: {}, _getters: [], _getMarker: function () {
            return 'is-' + this.name
        }, _init: function () {
            $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
            var c = camelCase(this.name);
            $[c] = this;
            $.fn[c] = function (a) {
                var b = Array.prototype.slice.call(arguments, 1);
                if ($[c]._isNotChained(a, b)) {
                    return $[c][a].apply($[c], [this[0]].concat(b))
                }
                return this.each(function () {
                    if (typeof a === 'string') {
                        if (a[0] === '_' || !$[c][a]) {
                            throw'Unknown method: ' + a;
                        }
                        $[c][a].apply($[c], [this].concat(b))
                    } else {
                        $[c]._attach(this, a)
                    }
                })
            }
        }, setDefaults: function (a) {
            $.extend(this.defaultOptions, a || {})
        }, _isNotChained: function (a, b) {
            if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
                return true
            }
            return $.inArray(a, this._getters) > -1
        }, _attach: function (a, b) {
            a = $(a);
            if (a.hasClass(this._getMarker())) {
                return
            }
            a.addClass(this._getMarker());
            b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
            var c = $.extend({name: this.name, elem: a, options: b}, this._instSettings(a, b));
            a.data(this.name, c);
            this._postAttach(a, c);
            this.option(a, b)
        }, _instSettings: function (a, b) {
            return {}
        }, _postAttach: function (a, b) {
        }, _getMetadata: function (d) {
            try {
                var f = d.data(this.name.toLowerCase()) || '';
                f = f.replace(/'/g, '"');
                f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, i) {
                    var c = f.substring(0, i).match(/"/g);
                    return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
                });
                f = $.parseJSON('{' + f + '}');
                for (var g in f) {
                    var h = f[g];
                    if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
                        f[g] = eval(h)
                    }
                }
                return f
            } catch (e) {
                return {}
            }
        }, _getInst: function (a) {
            return $(a).data(this.name) || {}
        }, option: function (a, b, c) {
            a = $(a);
            var d = a.data(this.name);
            if (!b || (typeof b === 'string' && c == null)) {
                var e = (d || {}).options;
                return (e && b ? e[b] : e)
            }
            if (!a.hasClass(this._getMarker())) {
                return
            }
            var e = b || {};
            if (typeof b === 'string') {
                e = {};
                e[b] = c
            }
            this._optionsChanged(a, d, e);
            $.extend(d.options, e)
        }, _optionsChanged: function (a, b, c) {
        }, destroy: function (a) {
            a = $(a);
            if (!a.hasClass(this._getMarker())) {
                return
            }
            this._preDestroy(a, this._getInst(a));
            a.removeData(this.name).removeClass(this._getMarker())
        }, _preDestroy: function (a, b) {
        }
    });

    function camelCase(c) {
        return c.replace(/-([a-z])/g, function (a, b) {
            return b.toUpperCase()
        })
    }

    $.JQPlugin = {
        createPlugin: function (a, b) {
            if (typeof a === 'object') {
                b = a;
                a = 'JQPlugin'
            }
            a = camelCase(a);
            var c = camelCase(b.name);
            JQClass.classes[c] = JQClass.classes[a].extend(b);
            new JQClass.classes[c]()
        }
    }
})(jQuery);


/*! http://keith-wood.name/countdown.html
	Countdown for jQuery v2.1.0.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
	Available under the MIT (http://keith-wood.name/licence.html) license.
	Please attribute the author if you use it.
*/
!function (a) {
    "use strict";
    var b = "countdown", c = 0, d = 1, e = 2, f = 3, g = 4, h = 5, i = 6;
    a.JQPlugin.createPlugin({
        name: b,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: "dHMS",
            layout: "",
            compact: !1,
            padZeroes: !1,
            significant: 0,
            description: "",
            expiryUrl: "",
            expiryText: "",
            alwaysExpire: !1,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            "": {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }
        },
        _rtlClass: b + "-rtl",
        _sectionClass: b + "-section",
        _amountClass: b + "-amount",
        _periodClass: b + "-period",
        _rowClass: b + "-row",
        _holdingClass: b + "-holding",
        _showClass: b + "-show",
        _descrClass: b + "-descr",
        _timerElems: [],
        _init: function () {
            function b(a) {
                var h = a < 1e12 ? e ? window.performance.now() + window.performance.timing.navigationStart : d() : a || d();
                h - g >= 1e3 && (c._updateElems(), g = h), f(b)
            }

            var c = this;
            this._super(), this._serverSyncs = [];
            var d = "function" == typeof Date.now ? Date.now : function () {
                    return (new Date).getTime()
                }, e = window.performance && "function" == typeof window.performance.now,
                f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                g = 0;
            !f || a.noRequestAnimationFrame ? (a.noRequestAnimationFrame = null, a.countdown._timer = setInterval(function () {
                c._updateElems()
            }, 1e3)) : (g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d(), f(b))
        },
        UTCDate: function (a, b, c, d, e, f, g, h) {
            "object" == typeof b && b instanceof Date && (h = b.getMilliseconds(), g = b.getSeconds(), f = b.getMinutes(), e = b.getHours(), d = b.getDate(), c = b.getMonth(), b = b.getFullYear());
            var i = new Date;
            return i.setUTCFullYear(b), i.setUTCDate(1), i.setUTCMonth(c || 0), i.setUTCDate(d || 1), i.setUTCHours(e || 0), i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)), i.setUTCSeconds(g || 0), i.setUTCMilliseconds(h || 0), i
        },
        periodsToSeconds: function (a) {
            return 31557600 * a[0] + 2629800 * a[1] + 604800 * a[2] + 86400 * a[3] + 3600 * a[4] + 60 * a[5] + a[6]
        },
        resync: function () {
            var b = this;
            a("." + this._getMarker()).each(function () {
                var c = a.data(this, b.name);
                if (c.options.serverSync) {
                    for (var d = null, e = 0; e < b._serverSyncs.length; e++) if (b._serverSyncs[e][0] === c.options.serverSync) {
                        d = b._serverSyncs[e];
                        break
                    }
                    if (b._eqNull(d[2])) {
                        var f = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(this, []) : null;
                        d[2] = (f ? (new Date).getTime() - f.getTime() : 0) - d[1]
                    }
                    c._since && c._since.setMilliseconds(c._since.getMilliseconds() + d[2]), c._until.setMilliseconds(c._until.getMilliseconds() + d[2])
                }
            });
            for (var c = 0; c < b._serverSyncs.length; c++) b._eqNull(b._serverSyncs[c][2]) || (b._serverSyncs[c][1] += b._serverSyncs[c][2], delete b._serverSyncs[c][2])
        },
        _instSettings: function (a, b) {
            return {_periods: [0, 0, 0, 0, 0, 0, 0]}
        },
        _addElem: function (a) {
            this._hasElem(a) || this._timerElems.push(a)
        },
        _hasElem: function (b) {
            return a.inArray(b, this._timerElems) > -1
        },
        _removeElem: function (b) {
            this._timerElems = a.map(this._timerElems, function (a) {
                return a === b ? null : a
            })
        },
        _updateElems: function () {
            for (var a = this._timerElems.length - 1; a >= 0; a--) this._updateCountdown(this._timerElems[a])
        },
        _optionsChanged: function (b, c, d) {
            d.layout && (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(c.options, d);
            var e = c.options.timezone !== d.timezone;
            a.extend(c.options, d), this._adjustSettings(b, c, !this._eqNull(d.until) || !this._eqNull(d.since) || e);
            var f = new Date;
            (c._since && c._since < f || c._until && c._until > f) && this._addElem(b[0]), this._updateCountdown(b, c)
        },
        _updateCountdown: function (b, c) {
            if (b = b.jquery ? b : a(b), c = c || this._getInst(b)) {
                if (b.html(this._generateHTML(c)).toggleClass(this._rtlClass, c.options.isRTL), "pause" !== c._hold && a.isFunction(c.options.onTick)) {
                    var d = "lap" !== c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date);
                    1 !== c.options.tickInterval && this.periodsToSeconds(d) % c.options.tickInterval !== 0 || c.options.onTick.apply(b[0], [d])
                }
                var e = "pause" !== c._hold && (c._since ? c._now.getTime() < c._since.getTime() : c._now.getTime() >= c._until.getTime());
                if (e && !c._expiring) {
                    if (c._expiring = !0, this._hasElem(b[0]) || c.options.alwaysExpire) {
                        if (this._removeElem(b[0]), a.isFunction(c.options.onExpiry) && c.options.onExpiry.apply(b[0], []), c.options.expiryText) {
                            var f = c.options.layout;
                            c.options.layout = c.options.expiryText, this._updateCountdown(b[0], c), c.options.layout = f
                        }
                        c.options.expiryUrl && (window.location = c.options.expiryUrl)
                    }
                    c._expiring = !1
                } else "pause" === c._hold && this._removeElem(b[0])
            }
        },
        _resetExtraLabels: function (a, b) {
            var c = null;
            for (c in b) c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
            for (c in a) c.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof b[c] && (a[c] = null)
        },
        _eqNull: function (a) {
            return "undefined" == typeof a || null === a
        },
        _adjustSettings: function (b, c, d) {
            for (var e = null, f = 0; f < this._serverSyncs.length; f++) if (this._serverSyncs[f][0] === c.options.serverSync) {
                e = this._serverSyncs[f][1];
                break
            }
            var g = null, h = null;
            if (this._eqNull(e)) {
                var i = a.isFunction(c.options.serverSync) ? c.options.serverSync.apply(b[0], []) : null;
                g = new Date, h = i ? g.getTime() - i.getTime() : 0, this._serverSyncs.push([c.options.serverSync, h])
            } else g = new Date, h = c.options.serverSync ? e : 0;
            var j = c.options.timezone;
            j = this._eqNull(j) ? -g.getTimezoneOffset() : j, (d || !d && this._eqNull(c._until) && this._eqNull(c._since)) && (c._since = c.options.since, this._eqNull(c._since) || (c._since = this.UTCDate(j, this._determineTime(c._since, null)), c._since && h && c._since.setMilliseconds(c._since.getMilliseconds() + h)), c._until = this.UTCDate(j, this._determineTime(c.options.until, g)), h && c._until.setMilliseconds(c._until.getMilliseconds() + h)), c._show = this._determineShow(c)
        },
        _preDestroy: function (a, b) {
            this._removeElem(a[0]), a.empty()
        },
        pause: function (a) {
            this._hold(a, "pause")
        },
        lap: function (a) {
            this._hold(a, "lap")
        },
        resume: function (a) {
            this._hold(a, null)
        },
        toggle: function (b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "pause"](b)
        },
        toggleLap: function (b) {
            var c = a.data(b, this.name) || {};
            this[c._hold ? "resume" : "lap"](b)
        },
        _hold: function (b, c) {
            var d = a.data(b, this.name);
            if (d) {
                if ("pause" === d._hold && !c) {
                    d._periods = d._savePeriods;
                    var e = d._since ? "-" : "+";
                    d[d._since ? "_since" : "_until"] = this._determineTime(e + d._periods[0] + "y" + e + d._periods[1] + "o" + e + d._periods[2] + "w" + e + d._periods[3] + "d" + e + d._periods[4] + "h" + e + d._periods[5] + "m" + e + d._periods[6] + "s"), this._addElem(b)
                }
                d._hold = c, d._savePeriods = "pause" === c ? d._periods : null, a.data(b, this.name, d), this._updateCountdown(b, d)
            }
        },
        getTimes: function (b) {
            var c = a.data(b, this.name);
            return c ? "pause" === c._hold ? c._savePeriods : c._hold ? this._calculatePeriods(c, c._show, c.options.significant, new Date) : c._periods : null
        },
        _determineTime: function (a, b) {
            var c = this, d = function (a) {
                var b = new Date;
                return b.setTime(b.getTime() + 1e3 * a), b
            }, e = function (a) {
                a = a.toLowerCase();
                for (var b = new Date, d = b.getFullYear(), e = b.getMonth(), f = b.getDate(), g = b.getHours(), h = b.getMinutes(), i = b.getSeconds(), j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, k = j.exec(a); k;) {
                    switch (k[2] || "s") {
                        case"s":
                            i += parseInt(k[1], 10);
                            break;
                        case"m":
                            h += parseInt(k[1], 10);
                            break;
                        case"h":
                            g += parseInt(k[1], 10);
                            break;
                        case"d":
                            f += parseInt(k[1], 10);
                            break;
                        case"w":
                            f += 7 * parseInt(k[1], 10);
                            break;
                        case"o":
                            e += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e));
                            break;
                        case"y":
                            d += parseInt(k[1], 10), f = Math.min(f, c._getDaysInMonth(d, e))
                    }
                    k = j.exec(a)
                }
                return new Date(d, e, f, g, h, i, 0)
            }, f = this._eqNull(a) ? b : "string" == typeof a ? e(a) : "number" == typeof a ? d(a) : a;
            return f && f.setMilliseconds(0), f
        },
        _getDaysInMonth: function (a, b) {
            return 32 - new Date(a, b, 32).getDate()
        },
        _normalLabels: function (a) {
            return a
        },
        _generateHTML: function (b) {
            var j = this;
            b._periods = b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date);
            var k = !1, l = 0, m = b.options.significant, n = a.extend({}, b._show), o = null;
            for (o = c; o <= i; o++) k = k || "?" === b._show[o] && b._periods[o] > 0, n[o] = "?" !== b._show[o] || k ? b._show[o] : null, l += n[o] ? 1 : 0, m -= b._periods[o] > 0 ? 1 : 0;
            var p = [!1, !1, !1, !1, !1, !1, !1];
            for (o = i; o >= c; o--) b._show[o] && (b._periods[o] ? p[o] = !0 : (p[o] = m > 0, m--));
            var q = b.options.compact ? b.options.compactLabels : b.options.labels, r = b.options.whichLabels || this._normalLabels,
                s = function (a) {
                    var c = b.options["compactLabels" + r(b._periods[a])];
                    return n[a] ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " " : ""
                }, t = b.options.padZeroes ? 2 : 1, u = function (a) {
                    var c = b.options["labels" + r(b._periods[a])];
                    return !b.options.significant && n[a] || b.options.significant && p[a] ? '<span class="' + j._sectionClass + '"><span class="' + j._amountClass + '">' + j._minDigits(b, b._periods[a], t) + '</span><span class="' + j._periodClass + '">' + (c ? c[a] : q[a]) + "</span></span>" : ""
                };
            return b.options.layout ? this._buildLayout(b, n, b.options.layout, b.options.compact, b.options.significant, p) : (b.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (b._hold ? " " + this._holdingClass : "") + '">' + s(c) + s(d) + s(e) + s(f) + (n[g] ? this._minDigits(b, b._periods[g], 2) : "") + (n[h] ? (n[g] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[h], 2) : "") + (n[i] ? (n[g] || n[h] ? b.options.timeSeparator : "") + this._minDigits(b, b._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (b.options.significant || l) + (b._hold ? " " + this._holdingClass : "") + '">' + u(c) + u(d) + u(e) + u(f) + u(g) + u(h) + u(i)) + "</span>" + (b.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + b.options.description + "</span>" : "")
        },
        _buildLayout: function (b, j, k, l, m, n) {
            for (var o = b.options[l ? "compactLabels" : "labels"], p = b.options.whichLabels || this._normalLabels, q = function (a) {
                return (b.options[(l ? "compactLabels" : "labels") + p(b._periods[a])] || o)[a]
            }, r = function (a, c) {
                return b.options.digits[Math.floor(a / c) % 10]
            }, s = {
                desc: b.options.description,
                sep: b.options.timeSeparator,
                yl: q(c),
                yn: this._minDigits(b, b._periods[c], 1),
                ynn: this._minDigits(b, b._periods[c], 2),
                ynnn: this._minDigits(b, b._periods[c], 3),
                y1: r(b._periods[c], 1),
                y10: r(b._periods[c], 10),
                y100: r(b._periods[c], 100),
                y1000: r(b._periods[c], 1e3),
                ol: q(d),
                on: this._minDigits(b, b._periods[d], 1),
                onn: this._minDigits(b, b._periods[d], 2),
                onnn: this._minDigits(b, b._periods[d], 3),
                o1: r(b._periods[d], 1),
                o10: r(b._periods[d], 10),
                o100: r(b._periods[d], 100),
                o1000: r(b._periods[d], 1e3),
                wl: q(e),
                wn: this._minDigits(b, b._periods[e], 1),
                wnn: this._minDigits(b, b._periods[e], 2),
                wnnn: this._minDigits(b, b._periods[e], 3),
                w1: r(b._periods[e], 1),
                w10: r(b._periods[e], 10),
                w100: r(b._periods[e], 100),
                w1000: r(b._periods[e], 1e3),
                dl: q(f),
                dn: this._minDigits(b, b._periods[f], 1),
                dnn: this._minDigits(b, b._periods[f], 2),
                dnnn: this._minDigits(b, b._periods[f], 3),
                d1: r(b._periods[f], 1),
                d10: r(b._periods[f], 10),
                d100: r(b._periods[f], 100),
                d1000: r(b._periods[f], 1e3),
                hl: q(g),
                hn: this._minDigits(b, b._periods[g], 1),
                hnn: this._minDigits(b, b._periods[g], 2),
                hnnn: this._minDigits(b, b._periods[g], 3),
                h1: r(b._periods[g], 1),
                h10: r(b._periods[g], 10),
                h100: r(b._periods[g], 100),
                h1000: r(b._periods[g], 1e3),
                ml: q(h),
                mn: this._minDigits(b, b._periods[h], 1),
                mnn: this._minDigits(b, b._periods[h], 2),
                mnnn: this._minDigits(b, b._periods[h], 3),
                m1: r(b._periods[h], 1),
                m10: r(b._periods[h], 10),
                m100: r(b._periods[h], 100),
                m1000: r(b._periods[h], 1e3),
                sl: q(i),
                sn: this._minDigits(b, b._periods[i], 1),
                snn: this._minDigits(b, b._periods[i], 2),
                snnn: this._minDigits(b, b._periods[i], 3),
                s1: r(b._periods[i], 1),
                s10: r(b._periods[i], 10),
                s100: r(b._periods[i], 100),
                s1000: r(b._periods[i], 1e3)
            }, t = k, u = c; u <= i; u++) {
                var v = "yowdhms".charAt(u), w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
                t = t.replace(w, !m && j[u] || m && n[u] ? "$1" : "")
            }
            return a.each(s, function (a, b) {
                var c = new RegExp("\\{" + a + "\\}", "g");
                t = t.replace(c, b)
            }), t
        },
        _minDigits: function (a, b, c) {
            return b = "" + b, b.length >= c ? this._translateDigits(a, b) : (b = "0000000000" + b, this._translateDigits(a, b.substr(b.length - c)))
        },
        _translateDigits: function (a, b) {
            return ("" + b).replace(/[0-9]/g, function (b) {
                return a.options.digits[b]
            })
        },
        _determineShow: function (a) {
            var b = a.options.format, j = [];
            return j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null, j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null, j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null, j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null, j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null, j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null, j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null, j
        },
        _calculatePeriods: function (a, b, j, k) {
            a._now = k, a._now.setMilliseconds(0);
            var l = new Date(a._now.getTime());
            a._since ? k.getTime() < a._since.getTime() ? a._now = k = l : k = a._since : (l.setTime(a._until.getTime()), k.getTime() > a._until.getTime() && (a._now = k = l));
            var m = [0, 0, 0, 0, 0, 0, 0];
            if (b[c] || b[d]) {
                var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()), o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
                    p = l.getDate() === k.getDate() || l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o), q = function (a) {
                        return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds()
                    },
                    r = Math.max(0, 12 * (l.getFullYear() - k.getFullYear()) + l.getMonth() - k.getMonth() + (l.getDate() < k.getDate() && !p || p && q(l) < q(k) ? -1 : 0));
                m[c] = b[c] ? Math.floor(r / 12) : 0, m[d] = b[d] ? r - 12 * m[c] : 0, k = new Date(k.getTime());
                var s = k.getDate() === n, t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
                k.getDate() > t && k.setDate(t), k.setFullYear(k.getFullYear() + m[c]), k.setMonth(k.getMonth() + m[d]), s && k.setDate(t)
            }
            var u = Math.floor((l.getTime() - k.getTime()) / 1e3), v = null, w = function (a, c) {
                m[a] = b[a] ? Math.floor(u / c) : 0, u -= m[a] * c
            };
            if (w(e, 604800), w(f, 86400), w(g, 3600), w(h, 60), w(i, 1), u > 0 && !a._since) {
                var x = [1, 12, 4.3482, 7, 24, 60, 60], y = i, z = 1;
                for (v = i; v >= c; v--) b[v] && (m[y] >= z && (m[y] = 0, u = 1), u > 0 && (m[v]++, u = 0, y = v, z = 1)), z *= x[v]
            }
            if (j) for (v = c; v <= i; v++) j && m[v] ? j-- : j || (m[v] = 0);
            return m
        }
    })
}(jQuery);


/* https://github.com/mhuggins/jquery-countTo
   CountTo */
(function (e) {
    function t(e, t) {
        return e.toFixed(t.decimals)
    }

    e.fn.countTo = function (t) {
        t = t || {};
        return e(this).each(function () {
            function l() {
                a += i;
                u++;
                c(a);
                if (typeof n.onUpdate == "function") {
                    n.onUpdate.call(s, a)
                }
                if (u >= r) {
                    o.removeData("countTo");
                    clearInterval(f.interval);
                    a = n.to;
                    if (typeof n.onComplete == "function") {
                        n.onComplete.call(s, a)
                    }
                }
            }

            function c(e) {
                var t = n.formatter.call(s, e, n);
                o.text(t)
            }

            var n = e.extend({}, e.fn.countTo.defaults, {
                from: e(this).data("from"),
                to: e(this).data("to"),
                speed: e(this).data("speed"),
                refreshInterval: e(this).data("refresh-interval"),
                decimals: e(this).data("decimals")
            }, t);
            var r = Math.ceil(n.speed / n.refreshInterval), i = (n.to - n.from) / r;
            var s = this, o = e(this), u = 0, a = n.from, f = o.data("countTo") || {};
            o.data("countTo", f);
            if (f.interval) {
                clearInterval(f.interval)
            }
            f.interval = setInterval(l, n.refreshInterval);
            c(a)
        })
    };
    e.fn.countTo.defaults = {from: 0, to: 0, speed: 1e3, refreshInterval: 100, decimals: 0, formatter: t, onUpdate: null, onComplete: null}
})(jQuery);


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl,
                e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length,
                e = !this.settings.autoWidth, f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
            for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a = this.settings.stagePadding, b = this._coordinates,
                c = {width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || ""};
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
            if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f,
                h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], e.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(a("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, e.prototype.initializeItems = function () {
        var b = this.$element.find(".owl-item");
        if (b.length) return this._items = b.get().map(function (b) {
            return a(b)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var e = -1, f = 30, g = this.width(), h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
        }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) {
            if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d);) ;
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function (a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {item: {count: this._items.length, index: this.current()}}, i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a
        }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({type: e.Type.Event, name: c}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0,
                        g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length,
                        i = a.proxy(function (a, b) {
                            this.load(b)
                        }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {element: f, url: g}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
                this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (c) {
        this._core = c, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var d = this;
        a(b).on("load", function () {
            d._core.settings.autoHeight && d.update()
        }), a(b).resize(function () {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items, d = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(b, c), f = [], g = 0;
        a.each(e, function (b, c) {
            f.push(a(c).height())
        }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else if (d[3].indexOf("vimeo") > -1) c = "vimeo"; else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {type: c, id: d, width: e, height: f}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "",
            k = this._core.settings, l = function (c) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
                    class: "owl-video-tn " + j,
                    srcType: c
                }) : a("<div/>", {class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")"}), b.after(d), b.after(e)
            };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, e.prototype._next = function (d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }, e.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, e.prototype.play = function (c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f) break;
                b = 0, ++c
            }
            b += this._core.mergers(this._core.relative(a))
        }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }

    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, j = {
        csstransforms: function () {
            return !!e("transform")
        }, csstransforms3d: function () {
            return !!e("perspective")
        }, csstransitions: function () {
            return !!e("transition")
        }, cssanimations: function () {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*! Morphext - v2.4.7 - 2016-11-04 */
!function (a) {
    "use strict";

    function b(b, c) {
        this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init()
    }

    var c = "Morphext", d = {animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop};
    b.prototype = {
        _init: function () {
            var b = this;
            this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function (c, d) {
                b.phrases.push(a.trim(d))
            }), this.index = -1, this.animate(), this.start()
        }, animate: function () {
            this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this)
        }, start: function () {
            var a = this;
            this._interval = setInterval(function () {
                a.animate()
            }, this.settings.speed)
        }, stop: function () {
            this._interval = clearInterval(this._interval)
        }
    }, a.fn[c] = function (d) {
        return this.each(function () {
            a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d))
        })
    }
}(jQuery);


/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }

        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () {
    } : function (t) {
        s.error(t)
    };
    return o(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n], r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l], c = s[f], m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r,
                x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }

    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length, d = !1;
    return s
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i], n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var o = Array.prototype.slice;
    i.makeArray = function (t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e], n = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[n];
            clearTimeout(t);
            var e = arguments, s = this;
            this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function (e, o) {
        i.docReady(function () {
            var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery;
            h.forEach(function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r],
        h = {transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay"},
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
        var s = t - i, r = e - o, a = {};
        a.transform = this.getTranslate(s, r), this.transition({to: a, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var f = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(c)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }

    var u = t.console, h = t.jQuery, d = function () {
    }, l = 0, f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t)
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n], r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize()
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c._getMeasurement = function (t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function () {
        this.resizeContainer()
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }

        var n = this, s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);
            n.type = t, this.$element.trigger(n, i)
        } else this.$element.trigger(t, i)
    }, c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function () {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {ms: 1, s: 1e3};
    return s.Item = n, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function (t, e) {
        var i = t + e, o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }

        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o, a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, o._manageStamp = function (t) {
        var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right, r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"), o = i.prototype, n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n], r = i.sortData[s], a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var u = t.jQuery, h = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }

        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {matches: i, needReveal: o, needHide: n}
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o), a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o], s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var h = e.jQuery, a = e.console, d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {1: !0, 9: !0, 11: !0};
    return o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var o = n && n[2];
            o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
        }
    }, o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }

        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});


/**
 * Swiper 5.2.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 16, 2019
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";
    var e = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, t = "undefined" == typeof window ? {
        document: e, navigator: {userAgent: ""}, location: {}, history: {}, CustomEvent: function () {
            return this
        }, addEventListener: function () {
        }, removeEventListener: function () {
        }, getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        }, Image: function () {
        }, Date: function () {
        }, screen: {}, setTimeout: function () {
        }, clearTimeout: function () {
        }
    } : window, i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function s(s, a) {
        var r = [], n = 0;
        if (s && !a && s instanceof i) return s;
        if (s) if ("string" == typeof s) {
            var o, l, d = s.trim();
            if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                var h = "div";
                for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
            } else for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
        } else if (s.nodeType || s === t || s === e) r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0], r = t[1], n = t[2], o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r)) n.apply(t, i); else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (h = 0; h < p.length; h += 1) {
                    var v = p[h];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(v, l, o)
                } else for (h = 0; h < p.length; h += 1) {
                    var f = p[h];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(f, d, o)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1) for (var o = a[n], l = 0; l < this.length; l += 1) {
                var d = this[l], h = void 0;
                try {
                    h = new t.CustomEvent(o, {detail: r, bubbles: !0, cancelable: !0})
                } catch (t) {
                    (h = e.createEvent("Event")).initEvent(o, !0, !0), h.detail = r
                }
                d.dom7EventData = i.filter((function (e, t) {
                    return t > 0
                })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function a(r) {
                if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }

            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var i = this[0], s = i.getBoundingClientRect(), a = e.body, r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0, o = i === t ? t.scrollY : i.scrollTop, l = i === t ? t.scrollX : i.scrollLeft;
                return {top: s.top + o - r, left: s.left + l - n}
            }
            return null
        }, css: function (e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                    var o = e.createElement("div");
                    for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]); else this[n].appendChild(t)
            }
            return this
        }, prepend: function (t) {
            var s, a;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof t) {
                var r = e.createElement("div");
                for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
            } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        }, children: function (e) {
            for (var t = [], r = 0; r < this.length; r += 1) for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        }, filter: function (e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function (e) {
        s.fn[e] = s.fn[e] || r[e]
    }));
    var n = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach((function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            }))
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, i) {
            var s, a, r;
            void 0 === i && (i = "x");
            var n = t.getComputedStyle(e, null);
            return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map((function (e) {
                return e.replace(",", ".")
            })).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
        }, parseUrlQuery: function (e) {
            var i, s, a, r, n = {}, o = e || t.location.href;
            if ("string" == typeof o && o.length) for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                return "" !== e
            }))).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
            return n
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) {
                    var d = r[o], h = Object.getOwnPropertyDescriptor(a, d);
                    void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d])
                }
            }
            return i
        }
    }, o = {
        touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: function () {
            var e = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, i)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in t
    }, l = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
            t.on(e, t.params.on[e])
        }))
    }, d = {components: {configurable: !0}};
    l.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        })), s
    }, l.prototype.once = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function a() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i)
        }

        return a.f7proxy = t, s.on(e, a, i)
    }, l.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
            }))
        })), i) : i
    }, l.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach((function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function (e) {
                    t.push(e)
                })), t.forEach((function (e) {
                    e.apply(a, s)
                }))
            }
        })), r
    }, l.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i];
            s.params && n.extend(e, s.params)
        }))
    }, l.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var s = t.modules[i], a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function (e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function (e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(a)
        }))
    }, d.components.set = function (e) {
        this.use && this.use(e)
    }, l.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, l.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, d);
    var h = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), n.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this.params, i = this.$wrapperEl, s = this.size, a = this.rtlTranslate, r = this.wrongRTL, o = this.virtual && e.virtual.enabled,
                l = o ? this.virtual.slides.length : this.slides.length, d = i.children("." + this.params.slideClass),
                h = o ? this.virtual.slides.length : d.length, p = [], c = [], u = [];

            function v(t) {
                return !e.cssMode || t !== d.length - 1
            }

            var f = e.slidesOffsetBefore;
            "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
            var m = e.slidesOffsetAfter;
            "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
            var g = this.snapGrid.length, b = this.snapGrid.length, w = e.spaceBetween, y = -f, x = 0, T = 0;
            if (void 0 !== s) {
                var E, S;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
                    S = 0;
                    var $ = d.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var L = void 0, I = void 0, D = void 0;
                        if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                            var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)), A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                                G = 0 === O ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup);
                            L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                                "-webkit-box-ordinal-group": L,
                                "-moz-box-ordinal-group": L,
                                "-ms-flex-order": L,
                                "-webkit-order": L,
                                order: L
                            })
                        } else "column" === e.slidesPerColumnFill ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P;
                        $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px")
                    }
                    if ("none" !== $.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var B = t.getComputedStyle($[0], null), H = $[0].style.transform, N = $[0].style.webkitTransform;
                            if (H && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0); else if (this.isHorizontal()) {
                                var X = parseFloat(B.getPropertyValue("width")), V = parseFloat(B.getPropertyValue("padding-left")),
                                    Y = parseFloat(B.getPropertyValue("padding-right")), F = parseFloat(B.getPropertyValue("margin-left")),
                                    W = parseFloat(B.getPropertyValue("margin-right")), R = B.getPropertyValue("box-sizing");
                                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W
                            } else {
                                var q = parseFloat(B.getPropertyValue("height")), j = parseFloat(B.getPropertyValue("padding-top")),
                                    K = parseFloat(B.getPropertyValue("padding-bottom")), U = parseFloat(B.getPropertyValue("margin-top")),
                                    _ = parseFloat(B.getPropertyValue("margin-bottom")), Z = B.getPropertyValue("box-sizing");
                                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _
                            }
                            H && ($[0].style.transform = H), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S))
                        } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = S + "px" : d[k].style.height = S + "px");
                        d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - s / 2 - w), 0 === k && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({width: this.virtualSize + e.spaceBetween + "px"}), e.setWrapperSize && (this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({width: this.virtualSize + e.spaceBetween + "px"}) : i.css({height: this.virtualSize + e.spaceBetween + "px"}), e.centeredSlides)) {
                    C = [];
                    for (var Q = 0; Q < p.length; Q += 1) {
                        var J = p[Q];
                        e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J)
                    }
                    p = C
                }
                if (!e.centeredSlides) {
                    C = [];
                    for (var ee = 0; ee < p.length; ee += 1) {
                        var te = p[ee];
                        e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te)
                    }
                    p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s)
                }
                if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? d.filter(v).css({marginLeft: w + "px"}) : d.filter(v).css({marginRight: w + "px"}) : d.filter(v).css({marginBottom: w + "px"})), e.centeredSlides && e.centeredSlidesBounds) {
                    var ie = 0;
                    u.forEach((function (t) {
                        ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }));
                    var se = (ie -= e.spaceBetween) - s;
                    p = p.map((function (e) {
                        return e < 0 ? -f : e > se ? se + m : e
                    }))
                }
                if (e.centerInsufficientSlides) {
                    var ae = 0;
                    if (u.forEach((function (t) {
                        ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    })), (ae -= e.spaceBetween) < s) {
                        var re = (s - ae) / 2;
                        p.forEach((function (e, t) {
                            p[t] = e - re
                        })), c.forEach((function (e, t) {
                            c[t] = e + re
                        }))
                    }
                }
                n.extend(this, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), h !== l && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s
            }
            s && this.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, a = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var r = -e;
                a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n], l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset), h = d + this.slidesSizesGrid[n];
                        (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass))
                    }
                    o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
            }
        }, updateProgress: function (e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning, o = this.isEnd, l = r, d = o;
            0 === s ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !l && this.emit("reachBeginning toEdge"), o && !d && this.emit("reachEnd toEdge"), (l && !r || d && !o) && this.emit("fromEdge"), this.emit("progress", a)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params,
                o = this.activeIndex, l = this.realIndex, d = this.snapIndex, h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== o) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                n.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: o,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== d && (this.snapIndex = t, this.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this.params, i = s(e.target).closest("." + t.slideClass)[0], a = !1;
            if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var p = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = n.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress, o = 0, l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this, o = n.params, l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var c = {
        setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex, a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var u = {
        slideTo: function (e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, n = e;
            n < 0 && (n = 0);
            var o = r.params, l = r.snapGrid, d = r.slidesGrid, h = r.previousIndex, p = r.activeIndex, c = r.rtlTranslate, u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.floor(n / o.slidesPerGroup);
            v >= l.length && (v = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var f, m = -l[v];
            if (r.updateProgress(m), o.normalizeSlideIndex) for (var g = 0; g < d.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * d[g]) && (n = g);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (f = n > p ? "next" : n < p ? "prev" : "reset", c && -m === r.translate || !c && m === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(m), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1;
            if (o.cssMode) {
                var b = r.isHorizontal();
                return 0 === t ? u[b ? "scrollLeft" : "scrollTop"] = -m : u.scrollTo ? u.scrollTo(((a = {})[b ? "left" : "top"] = -m, a.behavior = "smooth", a)) : u[b ? "scrollLeft" : "scrollTop"] = -m, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.transitionEnd(i, f)) : (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        }, slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var d, h = l(o ? this.translate : -this.translate), p = r.map((function (e) {
                return l(e)
            })), c = (n.map((function (e) {
                return l(e)
            })), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach((function (e) {
                !c && h >= e && (c = e)
            })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        }, slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex, r = Math.floor(a / this.params.slidesPerGroup), n = this.rtlTranslate ? this.translate : -this.translate;
            if (n >= this.snapGrid[r]) {
                var o = this.snapGrid[r];
                n - o > (this.snapGrid[r + 1] - o) * s && (a += this.params.slidesPerGroup)
            } else {
                var l = this.snapGrid[r - 1];
                n - l <= (this.snapGrid[r] - l) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.snapGrid.length - 1), this.slideTo(a, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, a = t.$wrapperEl, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                o = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
                    t.slideTo(o)
                }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), n.nextTick((function () {
                    t.slideTo(o)
                }))) : t.slideTo(o)
            } else t.slideTo(o)
        }
    };
    var v = {
        loopCreate: function () {
            var t = this, i = t.params, a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [], h = [];
            r.each((function (e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            }));
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        }, loopFix: function () {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid,
                o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function (e) {
            if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var m, g, b, w, y, x, T, E, S, C, M, P, z, k, $, L = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && o.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1)
        }, addSlide: function (e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
                for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
                    var h = this.slides.eq(d);
                    h.remove(), l.unshift(h)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    n = a > e ? a + t.length : a
                } else i.append(t);
                for (var c = 0; c < l.length; c += 1) i.append(l[c]);
                s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1
    }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0, M = g.indexOf("Edge/") >= 0, P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0, z = "Win32" === m, k = g.toLowerCase().indexOf("electron") >= 0, $ = "MacIntel" === m, !T && $ && o.touch && (1024 === w && 1366 === y || 834 === w && 1194 === y || 834 === w && 1112 === y || 768 === w && 1024 === y) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = "android", b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0), (T || S || E) && (b.os = "ios", b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, "."), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, "."), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf("Version/") >= 0 && "10" === b.osVersion.split(".")[0] && (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = "macos"), b.windows && (b.os = "windows")), b.pixelRatio = t.devicePixelRatio || 1, b);

    function D(i) {
        var a = this.touchEventsData, r = this.params, o = this.touches;
        if (!this.animating || !r.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var d = s(l.target);
            if (("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) && (a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && l.button > 0 || a.isTouched && a.isMoved))) if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0; else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var h = o.currentX, p = o.currentY, c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                    if (n.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var v = !0;
                        d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur();
                        var f = v && this.allowTouchMove && r.touchStartPreventDefault;
                        (r.touchStartForcePreventDefault || f) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function O(t) {
        var i = this.touchEventsData, a = this.params, r = this.touches, o = this.rtlTranslate, l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    h = "touchmove" === l.type ? d.pageX : l.pageX, p = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p);
                if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
                    startX: h,
                    startY: p,
                    currentX: h,
                    currentY: p
                }), i.touchStartTime = n.now()));
                if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) {
                    if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    r.currentX = h, r.currentY = p;
                    var c = r.currentX - r.startX, u = r.currentY - r.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                        var v;
                        if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle);
                        if (i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                            this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                            var f = this.isHorizontal() ? c : u;
                            r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                            var m = !0, g = a.resistanceRatio;
                            if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                            }
                            a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                position: r[this.isHorizontal() ? "startX" : "startY"],
                                time: i.touchStartTime
                            }), i.velocities.push({
                                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                time: n.now()
                            })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                        }
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function A(e) {
        var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, o = t.$wrapperEl, l = t.slidesGrid, d = t.snapGrid,
            h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = n.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = n.now(), n.nextTick((function () {
            t.destroyed || (t.allowClick = !0)
        })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var v = i.velocities.pop(), f = i.velocities.pop(), m = v.position - f.position, g = v.time - f.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var b = 1e3 * s.freeModeMomentumRatio, w = t.velocity * b, y = t.translate + w;
                r && (y = -y);
                var x, T, E = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0); else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0); else if (s.freeModeSticky) {
                    for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) {
                        C = M;
                        break
                    }
                    y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || "next" === t.swipeDirection ? d[C] : d[C - 1])
                }
                if (T && t.once("transitionEnd", (function () {
                    t.loopFix()
                })), 0 !== t.velocity) {
                    if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
                        var P = Math.abs((r ? -y : y) - t.translate), z = t.slidesSizesGrid[t.activeIndex];
                        b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed
                    }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function () {
                        t && !t.destroyed && t.transitionEnd()
                    })))
                }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function () {
                    t && !t.destroyed && t.transitionEnd()
                })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += s.slidesPerGroup) void 0 !== l[L + s.slidesPerGroup] ? p >= l[L] && p < l[L + s.slidesPerGroup] && (k = L, $ = l[L + s.slidesPerGroup] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]);
            var I = (p - l[k]) / $;
            if (u > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k))
            }
        }
    }

    function G() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function B(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function H() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }

    var N = !1;

    function X() {
    }

    var V = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, Y = {
        update: h, translate: p, transition: c, slide: u, loop: v, grabCursor: f, manipulation: L, events: {
            attachEvents: function () {
                var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl;
                this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = B.bind(this);
                var r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1); else {
                    if (o.touch) {
                        var n = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {passive: !0, capture: !1};
                        s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: r
                        } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener("touchstart", X), N = !0)
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, r), e.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && a.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : this.on("observerUpdate", G, !0)
            }, detachEvents: function () {
                var t = this.params, i = this.touchEvents, s = this.el, a = this.wrapperEl, r = !!t.nested;
                if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1); else {
                    if (o.touch) {
                        var n = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {passive: !0, capture: !1};
                        s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n)
                    }
                    (t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, r), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G)
            }
        }, breakpoints: {
            setBreakpoint: function () {
                var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params, a = this.$el, r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var o = this.getBreakpoint(r);
                    if (o && this.currentBreakpoint !== o) {
                        var l = o in r ? r[o] : void 0;
                        l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerColumn"].forEach((function (e) {
                            var t = l[e];
                            void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        }));
                        var d = l || this.originalParams, h = s.slidesPerColumn > 1, p = d.slidesPerColumn > 1;
                        h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var c = d.direction && d.direction !== s.direction, u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
                        c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", d)
                    }
                }
            }, getBreakpoint: function (e) {
                if (e) {
                    var i = !1, s = [];
                    Object.keys(e).forEach((function (e) {
                        s.push(e)
                    })), s.sort((function (e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    }));
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        r <= t.innerWidth && (i = r)
                    }
                    return i || "max"
                }
            }
        }, checkOverflow: {
            checkOverflow: function () {
                var e = this.params, t = this.isLocked,
                    i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
            }
        }, classes: {
            addClasses: function () {
                var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = [];
                a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), I.android && a.push("android"), I.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach((function (i) {
                    e.push(t.containerModifierClass + i)
                })), s.addClass(e.join(" "))
            }, removeClasses: function () {
                var e = this.$el, t = this.classNames;
                e.removeClass(t.join(" "))
            }
        }, images: {
            loadImage: function (e, i, s, a, r, n) {
                var o;

                function l() {
                    n && n()
                }

                e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
            }, preloadImages: function () {
                var e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, F = {}, W = function (e) {
        function t() {
            for (var i, a, r, l = [], d = arguments.length; d--;) l[d] = arguments[d];
            1 === l.length && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach((function (e) {
                Object.keys(Y[e]).forEach((function (i) {
                    t.prototype[i] || (t.prototype[i] = Y[e][i])
                }))
            }));
            var h = this;
            void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach((function (e) {
                var t = h.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s || null === s) return;
                    if (!(i in r && "enabled" in s)) return;
                    !0 === r[i] && (r[i] = {enabled: !0}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {enabled: !1})
                }
            }));
            var p = n.extend({}, V);
            h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s;
            var c = s(h.params.el);
            if (a = c[0]) {
                if (c.length > 1) {
                    var u = [];
                    return c.each((function (e, i) {
                        var s = n.extend({}, r, {el: i});
                        u.push(new t(s))
                    })), u
                }
                var v, f, m;
                return a.swiper = h, c.data("swiper", h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector("." + h.params.wrapperClass))).children = function (e) {
                    return c.children(e)
                } : v = c.children("." + h.params.wrapperClass), n.extend(h, {
                    $el: c,
                    el: a,
                    $wrapperEl: v,
                    wrapperEl: v[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                        return "horizontal" === h.params.direction
                    },
                    isVertical: function () {
                        return "vertical" === h.params.direction
                    },
                    rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                    rtlTranslate: "horizontal" === h.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                    wrongRTL: "-webkit-box" === v.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: h.params.allowSlideNext,
                    allowSlidePrev: h.params.allowSlidePrev,
                    touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), h.touchEventsTouch = {
                        start: f[0],
                        move: f[1],
                        end: f[2],
                        cancel: f[3]
                    }, h.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                    }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: n.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: h.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), h.useModules(), h.params.init && h.init(), h
            }
        }

        e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
        var i = {extendedDefaults: {configurable: !0}, defaults: {configurable: !0}, Class: {configurable: !0}, $: {configurable: !0}};
        return t.prototype.slidesPerViewDynamic = function () {
            var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
            } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
            return r
        }, t.prototype.update = function () {
            var e = this;
            if (e && !e.destroyed) {
                var t = e.snapGrid, i = e.params;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            function s() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate, i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
        }, t.prototype.changeDirection = function (e, t) {
            void 0 === t && (t = !0);
            var i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function (t, i) {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            })), this.emit("changeDirection"), t && this.update(), this)
        }, t.prototype.init = function () {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
        }, t.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, o = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                i.off(e)
            })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), n.deleteProps(i)), i.destroyed = !0, null)
        }, t.extendDefaults = function (e) {
            n.extend(F, e)
        }, i.extendedDefaults.get = function () {
            return F
        }, i.defaults.get = function () {
            return V
        }, i.Class.get = function () {
            return e
        }, i.$.get = function () {
            return s
        }, Object.defineProperties(t, i), t
    }(l), R = {name: "device", proto: {device: I}, static: {device: I}}, q = {name: "support", proto: {support: o}, static: {support: o}}, j = {
        isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: function () {
            var e = t.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }, K = {name: "browser", proto: {browser: j}, static: {browser: j}}, U = {
        name: "resize", create: function () {
            var e = this;
            n.extend(e, {
                resize: {
                    resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                    }, orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        }, on: {
            init: function () {
                t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            }, destroy: function () {
                t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }, _ = {
        func: t.MutationObserver || t.WebkitMutationObserver, attach: function (e, i) {
            void 0 === i && (i = {});
            var s = this, a = new (0, _.func)((function (e) {
                if (1 !== e.length) {
                    var i = function () {
                        s.emit("observerUpdate", e[0])
                    };
                    t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                } else s.emit("observerUpdate", e[0])
            }));
            a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }), s.observer.observers.push(a)
        }, init: function () {
            if (o.observer && this.params.observer) {
                if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
            }
        }, destroy: function () {
            this.observer.observers.forEach((function (e) {
                e.disconnect()
            })), this.observer.observers = []
        }
    }, Z = {
        name: "observer", params: {observer: !1, observeParents: !1, observeSlideChildren: !1}, create: function () {
            n.extend(this, {observer: {init: _.init.bind(this), attach: _.attach.bind(this), destroy: _.destroy.bind(this), observers: []}})
        }, on: {
            init: function () {
                this.observer.init()
            }, destroy: function () {
                this.observer.destroy()
            }
        }
    }, Q = {
        update: function (e) {
            var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, o = t.params.virtual, l = o.addSlidesBefore,
                d = o.addSlidesAfter, h = t.virtual, p = h.from, c = h.to, u = h.slides, v = h.slidesGrid, f = h.renderSlide, m = h.offset;
            t.updateActiveIndex();
            var g, b, w, y = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d);
            var x = Math.max((y || 0) - w, 0), T = Math.min((y || 0) + b, u.length - 1), E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

            function S() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }

            if (n.extend(t.virtual, {
                from: x,
                to: T,
                offset: E,
                slidesGrid: t.slidesGrid
            }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: E, from: x, to: T, slides: function () {
                    for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                    return e
                }()
            }), void S();
            var C = [], M = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var P = p; P <= c; P += 1) (P < x || P > T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();
            for (var z = 0; z < u.length; z += 1) z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));
            M.forEach((function (e) {
                t.$wrapperEl.append(f(u[e], e))
            })), C.sort((function (e, t) {
                return t - e
            })).forEach((function (e) {
                t.$wrapperEl.prepend(f(u[e], e))
            })), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), S()
        }, renderSlide: function (e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
        }, appendSlide: function (e) {
            if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
            this.virtual.update(!0)
        }, prependSlide: function (e) {
            var t = this.activeIndex, i = t + 1, s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length, s = e.length
            } else this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache, n = {};
                Object.keys(r).forEach((function (e) {
                    var t = r[e], i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                })), this.virtual.cache = n
            }
            this.virtual.update(!0), this.slideTo(i, 0)
        }, removeSlide: function (e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                this.virtual.update(!0), this.slideTo(t, 0)
            }
        }, removeAllSlides: function () {
            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
        }
    }, J = {
        name: "virtual",
        params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0}},
        create: function () {
            n.extend(this, {
                virtual: {
                    update: Q.update.bind(this),
                    appendSlide: Q.appendSlide.bind(this),
                    prependSlide: Q.prependSlide.bind(this),
                    removeSlide: Q.removeSlide.bind(this),
                    removeAllSlides: Q.removeAllSlides.bind(this),
                    renderSlide: Q.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function () {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {watchSlidesProgress: !0};
                    n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                }
            }, setTranslate: function () {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }, ee = {
        handle: function (i) {
            var s = this.rtlTranslate, a = i;
            a.originalEvent && (a = a.originalEvent);
            var r = a.keyCode || a.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
                    var n = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                    var o = t.innerWidth, l = t.innerHeight, d = this.$el.offset();
                    s && (d.left -= this.$el[0].scrollLeft);
                    for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
                        var c = h[p];
                        c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                    }
                    if (!n) return
                }
                this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (34 !== r && 39 !== r || s) && (33 !== r && 37 !== r || !s) || this.slideNext(), (33 !== r && 37 !== r || s) && (34 !== r && 39 !== r || !s) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r)
            }
        }, enable: function () {
            this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        }, disable: function () {
            this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
    }, te = {
        name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
            n.extend(this, {keyboard: {enabled: !1, enable: ee.enable.bind(this), disable: ee.disable.bind(this), handle: ee.handle.bind(this)}})
        }, on: {
            init: function () {
                this.params.keyboard.enabled && this.keyboard.enable()
            }, destroy: function () {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var ie = {
        lastScrollTime: n.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
            return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel"
        }, normalize: function (e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        }, handleMouseEnter: function () {
            this.mouseEntered = !0
        }, handleMouseLeave: function () {
            this.mouseEntered = !1
        }, handle: function (e) {
            var t = e, i = this, s = i.params.mousewheel;
            if (i.params.cssMode && t.preventDefault(), !i.mouseEntered && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var a = 0, r = i.rtlTranslate ? -1 : 1, o = ie.normalize(t);
            if (s.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                a = o.pixelX * r
            } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                a = o.pixelY
            } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
            if (0 === a) return !0;
            if (s.invert && (a = -a), i.params.freeMode) {
                var l = {time: n.now(), delta: Math.abs(a), direction: Math.sign(a)}, d = i.mousewheel.lastEventBeforeSnap,
                    h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                if (!h) {
                    i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                    var p = i.getTranslate() + a * s.sensitivity, c = i.isBeginning, u = i.isEnd;
                    if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                        var v = i.mousewheel.recentWheelEvents;
                        v.length >= 15 && v.shift();
                        var f = v.length ? v[v.length - 1] : void 0, m = v[0];
                        if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0); else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                            var g = a > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = n.nextTick((function () {
                                i.slideToClosest(i.params.speed, !0, void 0, g)
                            }), 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((function () {
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
                }
            } else {
                var b = {time: n.now(), delta: Math.abs(a), direction: Math.sign(a), raw: e}, w = i.mousewheel.recentWheelEvents;
                w.length >= 2 && w.shift();
                var y = w.length ? w[w.length - 1] : void 0;
                if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, animateSlider: function (e) {
            return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
        }, releaseScroll: function (e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
            return !1
        }, enable: function () {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        }, disable: function () {
            var e = ie.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    }, se = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), n.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
        }
    }, ae = {
        update: function () {
            var e = this.rtl, t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, r = this.pagination.$el,
                    n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var o, l, d, h = this.pagination.bullets;
                    if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each((function (e, a) {
                        var r = s(a), n = r.index();
                        n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                    })); else {
                        var p = h.eq(i), c = p.index();
                        if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");
                            if (this.params.loop) if (c >= h.length - t.dynamicMainBullets) {
                                for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");
                                h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                            } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"); else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                    }
                    if (t.dynamicBullets) {
                        var g = Math.min(h.length, t.dynamicMainBullets + 4),
                            b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                            w = e ? "right" : "left";
                        h.css(this.isHorizontal() ? w : "top", b + "px")
                    }
                }
                if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
                    var y;
                    y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var x = (i + 1) / n, T = 1, E = 1;
                    "horizontal" === y ? T = x : E = x, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")").transition(this.params.speed)
                }
                "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
            }
        }, render: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el,
                    s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        }, init: function () {
            var e = this, t = e.params.pagination;
            if (t.el) {
                var i = s(t.el);
                0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                    t.preventDefault();
                    var i = s(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                })), n.extend(e.pagination, {$el: i, el: i[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, re = {
        setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el,
                    o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                    n[0].style.opacity = 0, n.transition(400)
                }), 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, o = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: o,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        }, getPointerPosition: function (e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }, setDragPosition: function (e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((function () {
                a.css("opacity", 0), a.transition(400)
            }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        }, enableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params, r = t.$el[0],
                    n = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    l = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        }, disableDraggable: function () {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar, i = this.touchEventsTouch, s = this.touchEventsDesktop, a = this.params, r = t.$el[0],
                    n = !(!o.passiveListener || !a.passiveListeners) && {passive: !1, capture: !1},
                    l = !(!o.passiveListener || !a.passiveListeners) && {passive: !0, capture: !1};
                o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, a = s(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                var r = a.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), n.extend(e, {
                    $el: a,
                    el: a[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, ne = {
        setTransform: function (e, t) {
            var i = this.rtl, a = s(e), r = i ? -1 : 1, n = a.attr("data-swiper-parallax") || "0", o = a.attr("data-swiper-parallax-x"),
                l = a.attr("data-swiper-parallax-y"), d = a.attr("data-swiper-parallax-scale"), h = a.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
                var p = h - (h - 1) * (1 - Math.abs(t));
                a[0].style.opacity = p
            }
            if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                var c = d - (d - 1) * (1 - Math.abs(t));
                a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var e = this, t = e.$el, i = e.slides, a = e.progress, r = e.snapGrid;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                e.parallax.setTransform(i, a)
            })), i.each((function (t, i) {
                var n = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                    e.parallax.setTransform(i, n)
                }))
            }))
        }, setTransition: function (e) {
            void 0 === e && (e = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function (t, i) {
                var a = s(i), r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (r = 0), a.transition(r)
            }))
        }
    }, oe = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, a = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e)
            }
            a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (o.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !I.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, o = s.height * t.scale;
                if (!(r < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom, w = this.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), (n = a * b.scale) < c && (n = c), n > v && (n = v), (o = r * b.scale) < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {passive: !1, capture: !0};
                o.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }, disable: function () {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, i = !o.passiveListener || {passive: !1, capture: !0};
                o.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }, le = {
        loadInSlide: function (e, t) {
            void 0 === t && (t = !0);
            var i = this, a = i.params.lazy;
            if (void 0 !== e && 0 !== i.slides.length) {
                var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                    n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((function (e, n) {
                    var o = s(n);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), d = o.attr("data-src"), h = o.attr("data-srcset"), p = o.attr("data-sizes");
                    i.loadImage(o[0], d || l, h, p, !1, (function () {
                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                var e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                    i.lazy.loadInSlide(s.index(), !1)
                                } else {
                                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    i.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            i.emit("lazyImageReady", r[0], o[0])
                        }
                    })), i.emit("lazyImageLoad", r[0], o[0])
                }))
            }
        }, load: function () {
            var e = this, t = e.$wrapperEl, i = e.params, a = e.slides, r = e.activeIndex, n = e.virtual && i.virtual.enabled, o = i.lazy,
                l = i.slidesPerView;

            function d(e) {
                if (n) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (a[e]) return !0;
                return !1
            }

            function h(e) {
                return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
            }

            if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
                var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                e.lazy.loadInSlide(a)
            })); else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r);
            if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
            } else {
                var b = t.children("." + i.slideNextClass);
                b.length > 0 && e.lazy.loadInSlide(h(b));
                var w = t.children("." + i.slidePrevClass);
                w.length > 0 && e.lazy.loadInSlide(h(w))
            }
        }
    }, de = {
        LinearSpline: function (e, t) {
            var i, s, a, r, n, o = function (e, t) {
                for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, s, a = this, r = a.controller.control;

            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof W && n(r[o]); else r instanceof W && t !== r && n(r)
        }, setTransition: function (e, t) {
            var i, s = this, a = s.controller.control;

            function r(t) {
                t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && n.nextTick((function () {
                    t.updateAutoHeight()
                })), t.$wrapperEl.transitionEnd((function () {
                    a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                })))
            }

            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof W && r(a[i]); else a instanceof W && t !== a && r(a)
        }
    }, he = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = s(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        }, updatePagination: function () {
            var e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, a) {
                var r = s(a);
                e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
            }))
        }, init: function () {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }, destroy: function () {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, pe = {
        init: function () {
            if (this.params.history) {
                if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = t.location.pathname.slice(1).split("/").filter((function (e) {
                return "" !== e
            })), i = e.length;
            return {key: e[i - 2], value: e[i - 1]}
        }, setHistory: function (e, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i), a = pe.slugify(s.attr("data-history"));
                t.location.pathname.includes(e) || (a = e + "/" + a);
                var r = t.history.state;
                r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({value: a}, null, a) : t.history.pushState({value: a}, null, a))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, ce = {
        onHashCange: function () {
            var t = e.location.hash.replace("#", "");
            if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === i) return;
                this.slideTo(i)
            }
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var i = this.slides.eq(this.activeIndex), s = i.attr("data-hash") || i.attr("data-history");
                e.location.hash = s || ""
            }
        }, init: function () {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var i = e.location.hash.replace("#", "");
                if (i) for (var a = 0, r = this.slides.length; a < r; a += 1) {
                    var n = this.slides.eq(a);
                    if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                    }
                }
                this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, ue = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }), i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
    }, ve = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.$wrapperEl;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                var a = !1;
                i.transitionEnd((function () {
                    if (!a && t && !t.destroyed) {
                        a = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                    }
                }))
            }
        }
    }, fe = {
        setTranslate: function () {
            var e, t = this.$el, i = this.$wrapperEl, a = this.slides, r = this.width, n = this.height, o = this.rtlTranslate, l = this.size,
                d = this.params.cubeEffect, h = this.isHorizontal(), p = this.virtual && this.params.virtual.enabled, c = 0;
            d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for (var u = 0; u < a.length; u += 1) {
                var v = a.eq(u), f = u;
                p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                    var E = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                        S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                    M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), P = d.shadowScale, z = d.shadowScale / M,
                    k = d.shadowOffset;
                e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (n / 2 + k) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
            }
            var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, me = {
        setTranslate: function () {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var a = e.eq(i), r = a[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -a[0].swiperSlideOffset, d = 0;
                if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                    var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                        p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                }
                a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var t = this, i = t.slides, s = t.activeIndex, a = t.$wrapperEl;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                var r = !1;
                i.eq(s).transitionEnd((function () {
                    if (!r && t && !t.destroyed) {
                        r = !0, t.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                    }
                }))
            }
        }
    }, ge = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                var f = i.eq(u), m = r[u], g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier, b = l ? p * g : 0, w = l ? 0 : p * g,
                    y = -c * Math.abs(g), x = l ? 0 : n.stretch * g, T = l ? n.stretch * g : 0;
                Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                var E = "translate3d(" + T + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (f.transform(E), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                    var S = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                        C = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                }
            }
            (o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = h + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, be = {
        init: function () {
            var e = this.params.thumbs, t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), n.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex, i = e.clickedSlide;
                if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var a;
                    if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                        var r = this.activeIndex;
                        this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex);
                        var n = this.slides.eq(r).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                            o = this.slides.eq(r).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                        a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    }
                    this.slideTo(a)
                }
            }
        }, update: function (e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                            n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                    } else s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1, l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l); else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
            }
        }
    }, we = [R, q, K, U, Z, J, te, {
        name: "mousewheel",
        params: {mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container"}},
        create: function () {
            n.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: ie.enable.bind(this),
                    disable: ie.disable.bind(this),
                    handle: ie.handle.bind(this),
                    handleMouseEnter: ie.handleMouseEnter.bind(this),
                    handleMouseLeave: ie.handleMouseLeave.bind(this),
                    animateSlider: ie.animateSlider.bind(this),
                    releaseScroll: ie.releaseScroll.bind(this),
                    lastScrollTime: n.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        },
        on: {
            init: function () {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            n.extend(this, {
                navigation: {
                    init: se.init.bind(this),
                    update: se.update.bind(this),
                    destroy: se.destroy.bind(this),
                    onNextClick: se.onNextClick.bind(this),
                    onPrevClick: se.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, i = this.navigation, a = i.$nextEl, r = i.$prevEl;
                !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            n.extend(this, {
                pagination: {
                    init: ae.init.bind(this),
                    render: ae.render.bind(this),
                    update: ae.update.bind(this),
                    destroy: ae.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            n.extend(this, {
                scrollbar: {
                    init: re.init.bind(this),
                    destroy: re.destroy.bind(this),
                    updateSize: re.updateSize.bind(this),
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this),
                    enableDraggable: re.enableDraggable.bind(this),
                    disableDraggable: re.disableDraggable.bind(this),
                    setDragPosition: re.setDragPosition.bind(this),
                    getPointerPosition: re.getPointerPosition.bind(this),
                    onDragStart: re.onDragStart.bind(this),
                    onDragMove: re.onDragMove.bind(this),
                    onDragEnd: re.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            n.extend(this, {
                parallax: {
                    setTransform: ne.setTransform.bind(this),
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {$slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3},
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                t[i] = oe[i].bind(e)
            })), n.extend(e, {zoom: t});
            var i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function () {
                    return i
                }, set: function (t) {
                    if (i !== t) {
                        var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                            a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, s, a)
                    }
                    i = t
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }, slideChange: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            n.extend(this, {lazy: {initialImageLoaded: !1, load: le.load.bind(this), loadInSlide: le.loadInSlide.bind(this)}})
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }, slideChange: function () {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            n.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: de.getInterpolateFunction.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var e = this;
            n.extend(e, {a11y: {liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(he).forEach((function (t) {
                e.a11y[t] = he[t].bind(e)
            }))
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            n.extend(this, {
                history: {
                    init: pe.init.bind(this),
                    setHistory: pe.setHistory.bind(this),
                    setHistoryPopState: pe.setHistoryPopState.bind(this),
                    scrollToSlide: pe.scrollToSlide.bind(this),
                    destroy: pe.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }, slideChange: function () {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation", params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}}, create: function () {
            n.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: ce.init.bind(this),
                    destroy: ce.destroy.bind(this),
                    setHash: ce.setHash.bind(this),
                    onHashCange: ce.onHashCange.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }, slideChange: function () {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {autoplay: {enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1}},
        create: function () {
            var e = this;
            n.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ue.run.bind(e),
                    start: ue.start.bind(e),
                    stop: ue.stop.bind(e),
                    pause: ue.pause.bind(e),
                    onVisibilityChange: function () {
                        "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                    },
                    onTransitionEnd: function (t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, touchEnd: function () {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            n.extend(this, {fadeEffect: {setTranslate: ve.setTranslate.bind(this), setTransition: ve.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube", params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}}, create: function () {
            n.extend(this, {cubeEffect: {setTranslate: fe.setTranslate.bind(this), setTransition: fe.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            n.extend(this, {flipEffect: {setTranslate: me.setTranslate.bind(this), setTransition: me.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    n.extend(this.params, e), n.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            n.extend(this, {coverflowEffect: {setTranslate: ge.setTranslate.bind(this), setTransition: ge.setTransition.bind(this)}})
        },
        on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                multipleActiveThumbs: !0,
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            n.extend(this, {thumbs: {swiper: null, init: be.init.bind(this), update: be.update.bind(this), onThumbClick: be.onThumbClick.bind(this)}})
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W
}));


/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, r) {
    var h, n = Array.prototype.slice, t = decodeURIComponent, a = $.param, j, c, m, y, b = $.bbq = $.bbq || {}, s, x, k, e = $.event.special,
        d = "hashchange", B = "querystring", F = "fragment", z = "elemUrlAttr", l = "href", w = "src", p = /^.*\?|#.*$/g, u, H, g, i, C, E = {};

    function G(I) {
        return typeof I === "string"
    }

    function D(J) {
        var I = n.call(arguments, 1);
        return function () {
            return J.apply(this, I.concat(n.call(arguments)))
        }
    }

    function o(I) {
        return I.replace(H, "$2")
    }

    function q(I) {
        return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function f(K, P, I, L, J) {
        var R, O, N, Q, M;
        if (L !== h) {
            N = I.match(K ? H : /^([^#?]*)\??([^#]*)(#?.*)/);
            M = N[3] || "";
            if (J === 2 && G(L)) {
                O = L.replace(K ? u : p, "")
            } else {
                Q = m(N[2]);
                L = G(L) ? m[K ? F : B](L) : L;
                O = J === 2 ? L : J === 1 ? $.extend({}, L, Q) : $.extend({}, Q, L);
                O = j(O);
                if (K) {
                    O = O.replace(g, t)
                }
            }
            R = N[1] + (K ? C : O || !N[1] ? "?" : "") + O + M
        } else {
            R = P(I !== h ? I : location.href)
        }
        return R
    }

    a[B] = D(f, 0, q);
    a[F] = c = D(f, 1, o);
    a.sorted = j = function (J, K) {
        var I = [], L = {};
        $.each(a(J, K).split("&"), function (P, M) {
            var O = M.replace(/(?:%5B|=).*$/, ""), N = L[O];
            if (!N) {
                N = L[O] = [];
                I.push(O)
            }
            N.push(M)
        });
        return $.map(I.sort(), function (M) {
            return L[M]
        }).join("&")
    };
    c.noEscape = function (J) {
        J = J || "";
        var I = $.map(J.split(""), encodeURIComponent);
        g = new RegExp(I.join("|"), "g")
    };
    c.noEscape(",/");
    c.ajaxCrawlable = function (I) {
        if (I !== h) {
            if (I) {
                u = /^.*(?:#!|#)/;
                H = /^([^#]*)(?:#!|#)?(.*)$/;
                C = "#!"
            } else {
                u = /^.*#/;
                H = /^([^#]*)#?(.*)$/;
                C = "#"
            }
            i = !!I
        }
        return i
    };
    c.ajaxCrawlable(0);
    $.deparam = m = function (L, I) {
        var K = {}, J = {"true": !0, "false": !1, "null": null};
        $.each(L.replace(/\+/g, " ").split("&"), function (O, T) {
            var N = T.split("="), S = t(N[0]), M, R = K, P = 0, U = S.split("]["), Q = U.length - 1;
            if (/\[/.test(U[0]) && /\]$/.test(U[Q])) {
                U[Q] = U[Q].replace(/\]$/, "");
                U = U.shift().split("[").concat(U);
                Q = U.length - 1
            } else {
                Q = 0
            }
            if (N.length === 2) {
                M = t(N[1]);
                if (I) {
                    M = M && !isNaN(M) ? +M : M === "undefined" ? h : J[M] !== h ? J[M] : M
                }
                if (Q) {
                    for (; P <= Q; P++) {
                        S = U[P] === "" ? R.length : U[P];
                        R = R[S] = P < Q ? R[S] || (U[P + 1] && isNaN(U[P + 1]) ? {} : []) : M
                    }
                } else {
                    if ($.isArray(K[S])) {
                        K[S].push(M)
                    } else {
                        if (K[S] !== h) {
                            K[S] = [K[S], M]
                        } else {
                            K[S] = M
                        }
                    }
                }
            } else {
                if (S) {
                    K[S] = I ? h : ""
                }
            }
        });
        return K
    };

    function A(K, I, J) {
        if (I === h || typeof I === "boolean") {
            J = I;
            I = a[K ? F : B]()
        } else {
            I = G(I) ? I.replace(K ? u : p, "") : I
        }
        return m(I, J)
    }

    m[B] = D(A, 0);
    m[F] = y = D(A, 1);
    $[z] || ($[z] = function (I) {
        return $.extend(E, I)
    })({a: l, base: l, iframe: w, img: w, input: w, form: "action", link: l, script: w});
    k = $[z];

    function v(L, J, K, I) {
        if (!G(K) && typeof K !== "object") {
            I = K;
            K = J;
            J = h
        }
        return this.each(function () {
            var O = $(this), M = J || k()[(this.nodeName || "").toLowerCase()] || "", N = M && O.attr(M) || "";
            O.attr(M, a[L](N, K, I))
        })
    }

    $.fn[B] = D(v, B);
    $.fn[F] = D(v, F);
    b.pushState = s = function (L, I) {
        if (G(L) && /^#/.test(L) && I === h) {
            I = 2
        }
        var K = L !== h, J = c(location.href, K ? L : {}, K ? I : 2);
        location.href = J
    };
    b.getState = x = function (I, J) {
        return I === h || typeof I === "boolean" ? y(I) : y(J)[I]
    };
    b.removeState = function (I) {
        var J = {};
        if (I !== h) {
            J = x();
            $.each($.isArray(I) ? I : arguments, function (L, K) {
                delete J[K]
            })
        }
        s(J, 2)
    };
    e[d] = $.extend(e[d], {
        add: function (I) {
            var K;

            function J(M) {
                var L = M[F] = c();
                M.getState = function (N, O) {
                    return N === h || typeof N === "boolean" ? m(L, N) : m(L, O)[N]
                };
                K.apply(this, arguments)
            }

            if ($.isFunction(I)) {
                K = I;
                return J
            } else {
                K = I.handler;
                I.handler = J
            }
        }
    })
})(jQuery, this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (e, t, n) {
    "$:nomunge";

    function f(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var r = "hashchange", i = document, s, o = e.event.special, u = i.documentMode, a = "on" + r in t && (u === n || u > 7);
    e.fn[r] = function (e) {
        return e ? this.bind(r, e) : this.trigger(r)
    };
    e.fn[r].delay = 50;
    o[r] = e.extend(o[r], {
        setup: function () {
            if (a) {
                return false
            }
            e(s.start)
        }, teardown: function () {
            if (a) {
                return false
            }
            e(s.stop)
        }
    });
    s = function () {
        function p() {
            var n = f(), i = h(u);
            if (n !== u) {
                c(u = n, i);
                e(t).trigger(r)
            } else if (i !== u) {
                location.href = location.href.replace(/#.*/, "") + i
            }
            o = setTimeout(p, e.fn[r].delay)
        }

        var s = {}, o, u = f(), l = function (e) {
            return e
        }, c = l, h = l;
        s.start = function () {
            o || p()
        };
        s.stop = function () {
            o && clearTimeout(o);
            o = n
        };
        navigator.appName === "Microsoft Internet Explorer" && !a && function () {
            var t, n;
            s.start = function () {
                if (!t) {
                    n = e.fn[r].src;
                    n = n && n + f();
                    t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        n || c(f());
                        p()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow;
                    i.onpropertychange = function () {
                        try {
                            if (event.propertyName === "title") {
                                t.document.title = i.title
                            }
                        } catch (e) {
                        }
                    }
                }
            };
            s.stop = l;
            h = function () {
                return f(t.location.href)
            };
            c = function (n, s) {
                var o = t.document, u = e.fn[r].domain;
                if (n !== s) {
                    o.title = i.title;
                    o.open();
                    u && o.write('<script>document.domain="' + u + '"</script>');
                    o.close();
                    t.location.hash = n
                }
            }
        }();
        return s
    }()
})(jQuery, this);


/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 */
!function (i) {
    i.fn.scwStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)))
        }

        function o(t, e) {
            return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
        }

        function a(t, e) {
            t.initialized = !0;
            var o = i("#scw-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="scw-sticky-sidebar-stylesheet-' + t.namespace + '">.scwStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
                function e() {
                    a.fixedScrollTop = 0, a.sidebar.css({"min-height": "1px"}), a.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function () {
                        e = Math.max(e, i(this).height())
                    }), e
                }

                var a = {};
                if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
                    position: a.options.defaultPosition,
                    overflow: "visible",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }), a.stickySidebar = a.sidebar.find(".scwStickySidebar"), 0 == a.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    a.sidebar.find("script").filter(function (i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), a.stickySidebar = i("<div>").addClass("scwStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
                }
                a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
                var r = a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight();
                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
                    if (a.stickySidebar.is(":visible")) {
                        if (i("body").width() < a.options.minWidth) return void e();
                        if (a.options.disableOnResponsiveLayouts) {
                            var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
                            if (s + 50 > a.container.width()) return void e()
                        }
                        var r = i(document).scrollTop(), d = "static";
                        if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                            var c, p = a.paddingTop + t.additionalMarginTop, b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                l = a.sidebar.offset().top, f = a.sidebar.offset().top + o(a.container), h = 0 + t.additionalMarginTop,
                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                            var u = l - r + a.paddingTop, S = f - r - a.paddingBottom - a.marginBottom, y = a.stickySidebar.offset().top - r,
                                m = a.previousScrollTop - r;
                            "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
                            var k = a.container.height() == a.stickySidebar.outerHeight();
                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var v = i(document).scrollLeft();
                            a.stickySidebar.css({
                                position: "fixed",
                                width: n(a.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var x = {};
                            "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
                        } else "static" == d && e();
                        "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({"min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom}), a.previousScrollTop = r
                    }
                }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a)), i(window).on("resize." + a.options.namespace, function (i) {
                    return function () {
                        i.stickySidebar.css({position: "static"}), i.onScroll(i)
                    }
                }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a))
            })
        }

        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {
            }
            return "undefined" == typeof t && (t = i.width()), t
        }

        var s = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
    }
}(jQuery);
!function () {
    var e = function (t, i) {
        function s() {
            this.q = [], this.add = function (e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function () {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
            }
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new s, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d, r, l = e.resizeSensor.childNodes[0], c = l.childNodes[0], h = e.resizeSensor.childNodes[1], a = (h.childNodes[0], function () {
                c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, d = e.offsetWidth, r = e.offsetHeight
            });
            a();
            var f = function () {
                e.resizedAttached && e.resizedAttached.call()
            }, u = function (e, t, i) {
                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
            }, p = function () {
                e.offsetWidth == d && e.offsetHeight == r || f(), a()
            };
            u(l, "scroll", p), u(h, "scroll", p)
        }

        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i); else n(t, i);
        this.detach = function () {
            if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]); else e.detach(t)
        }
    };
    e.detach = function (e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}();


/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
!function (r, n) {
    function t(r, n, t) {
        var e = f[n.type] || {};
        return null == r ? t || !n.def ? null : n.def : (r = e.floor ? ~~r : parseFloat(r), isNaN(r) ? n.def : e.mod ? (r + e.mod) % e.mod : 0 > r ? 0 : e.max < r ? e.max : r)
    }

    function e(n) {
        var t = l(), e = t._rgba = [];
        return n = n.toLowerCase(), h(u, function (r, o) {
            var a, s = o.re.exec(n), i = s && o.parse(s), u = o.space || "rgba";
            return i ? (a = t[u](i), t[c[u].cache] = a[c[u].cache], e = t._rgba = a._rgba, !1) : void 0
        }), e.length ? ("0,0,0,0" === e.join() && r.extend(e, a.transparent), t) : a[n]
    }

    function o(r, n, t) {
        return t = (t + 1) % 1, 1 > 6 * t ? r + (n - r) * t * 6 : 1 > 2 * t ? n : 2 > 3 * t ? r + (n - r) * (2 / 3 - t) * 6 : r
    }

    var a,
        s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        i = /^([\-+])=\s*(\d+\.?\d*)/, u = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (r) {
                return [r[1], r[2], r[3], r[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (r) {
                return [2.55 * r[1], 2.55 * r[2], 2.55 * r[3], r[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (r) {
                return [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (r) {
                return [parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (r) {
                return [r[1], r[2] / 100, r[3] / 100, r[4]]
            }
        }], l = r.Color = function (n, t, e, o) {
            return new r.Color.fn.parse(n, t, e, o)
        }, c = {
            rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
            hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}
        }, f = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, p = l.support = {}, d = r("<p>")[0], h = r.each;
    d.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = d.style.backgroundColor.indexOf("rgba") > -1, h(c, function (r, n) {
        n.cache = "_" + r, n.props.alpha = {idx: 3, type: "percent", def: 1}
    }), l.fn = r.extend(l.prototype, {
        parse: function (o, s, i, u) {
            if (o === n) return this._rgba = [null, null, null, null], this;
            (o.jquery || o.nodeType) && (o = r(o).css(s), s = n);
            var f = this, p = r.type(o), d = this._rgba = [];
            return s !== n && (o = [o, s, i, u], p = "array"), "string" === p ? this.parse(e(o) || a._default) : "array" === p ? (h(c.rgba.props, function (r, n) {
                d[n.idx] = t(o[n.idx], n)
            }), this) : "object" === p ? (o instanceof l ? h(c, function (r, n) {
                o[n.cache] && (f[n.cache] = o[n.cache].slice())
            }) : h(c, function (n, e) {
                var a = e.cache;
                h(e.props, function (r, n) {
                    if (!f[a] && e.to) {
                        if ("alpha" === r || null == o[r]) return;
                        f[a] = e.to(f._rgba)
                    }
                    f[a][n.idx] = t(o[r], n, !0)
                }), f[a] && r.inArray(null, f[a].slice(0, 3)) < 0 && (f[a][3] = 1, e.from && (f._rgba = e.from(f[a])))
            }), this) : void 0
        }, is: function (r) {
            var n = l(r), t = !0, e = this;
            return h(c, function (r, o) {
                var a, s = n[o.cache];
                return s && (a = e[o.cache] || o.to && o.to(e._rgba) || [], h(o.props, function (r, n) {
                    return null != s[n.idx] ? t = s[n.idx] === a[n.idx] : void 0
                })), t
            }), t
        }, _space: function () {
            var r = [], n = this;
            return h(c, function (t, e) {
                n[e.cache] && r.push(t)
            }), r.pop()
        }, transition: function (r, n) {
            var e = l(r), o = e._space(), a = c[o], s = 0 === this.alpha() ? l("transparent") : this, i = s[a.cache] || a.to(s._rgba), u = i.slice();
            return e = e[a.cache], h(a.props, function (r, o) {
                var a = o.idx, s = i[a], l = e[a], c = f[o.type] || {};
                null !== l && (null === s ? u[a] = l : (c.mod && (l - s > c.mod / 2 ? s += c.mod : s - l > c.mod / 2 && (s -= c.mod)), u[a] = t((l - s) * n + s, o)))
            }), this[o](u)
        }, blend: function (n) {
            if (1 === this._rgba[3]) return this;
            var t = this._rgba.slice(), e = t.pop(), o = l(n)._rgba;
            return l(r.map(t, function (r, n) {
                return (1 - e) * o[n] + e * r
            }))
        }, toRgbaString: function () {
            var n = "rgba(", t = r.map(this._rgba, function (r, n) {
                return null == r ? n > 2 ? 1 : 0 : r
            });
            return 1 === t[3] && (t.pop(), n = "rgb("), n + t.join() + ")"
        }, toHslaString: function () {
            var n = "hsla(", t = r.map(this.hsla(), function (r, n) {
                return null == r && (r = n > 2 ? 1 : 0), n && 3 > n && (r = Math.round(100 * r) + "%"), r
            });
            return 1 === t[3] && (t.pop(), n = "hsl("), n + t.join() + ")"
        }, toHexString: function (n) {
            var t = this._rgba.slice(), e = t.pop();
            return n && t.push(~~(255 * e)), "#" + r.map(t, function (r) {
                return r = (r || 0).toString(16), 1 === r.length ? "0" + r : r
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }), l.fn.parse.prototype = l.fn, c.hsla.to = function (r) {
        if (null == r[0] || null == r[1] || null == r[2]) return [null, null, null, r[3]];
        var n, t, e = r[0] / 255, o = r[1] / 255, a = r[2] / 255, s = r[3], i = Math.max(e, o, a), u = Math.min(e, o, a), l = i - u, c = i + u,
            f = .5 * c;
        return n = u === i ? 0 : e === i ? 60 * (o - a) / l + 360 : o === i ? 60 * (a - e) / l + 120 : 60 * (e - o) / l + 240, t = 0 === l ? 0 : .5 >= f ? l / c : l / (2 - c), [Math.round(n) % 360, t, f, null == s ? 1 : s]
    }, c.hsla.from = function (r) {
        if (null == r[0] || null == r[1] || null == r[2]) return [null, null, null, r[3]];
        var n = r[0] / 360, t = r[1], e = r[2], a = r[3], s = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - s;
        return [Math.round(255 * o(i, s, n + 1 / 3)), Math.round(255 * o(i, s, n)), Math.round(255 * o(i, s, n - 1 / 3)), a]
    }, h(c, function (e, o) {
        var a = o.props, s = o.cache, u = o.to, c = o.from;
        l.fn[e] = function (e) {
            if (u && !this[s] && (this[s] = u(this._rgba)), e === n) return this[s].slice();
            var o, i = r.type(e), f = "array" === i || "object" === i ? e : arguments, p = this[s].slice();
            return h(a, function (r, n) {
                var e = f["object" === i ? r : n.idx];
                null == e && (e = p[n.idx]), p[n.idx] = t(e, n)
            }), c ? (o = l(c(p)), o[s] = p, o) : l(p)
        }, h(a, function (n, t) {
            l.fn[n] || (l.fn[n] = function (o) {
                var a, s = r.type(o), u = "alpha" === n ? this._hsla ? "hsla" : "rgba" : e, l = this[u](), c = l[t.idx];
                return "undefined" === s ? c : ("function" === s && (o = o.call(this, c), s = r.type(o)), null == o && t.empty ? this : ("string" === s && (a = i.exec(o), a && (o = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[t.idx] = o, this[u](l)))
            })
        })
    }), l.hook = function (n) {
        var t = n.split(" ");
        h(t, function (n, t) {
            r.cssHooks[t] = {
                set: function (n, o) {
                    var a, s, i = "";
                    if ("transparent" !== o && ("string" !== r.type(o) || (a = e(o)))) {
                        if (o = l(a || o), !p.rgba && 1 !== o._rgba[3]) {
                            for (s = "backgroundColor" === t ? n.parentNode : n; ("" === i || "transparent" === i) && s && s.style;) try {
                                i = r.css(s, "backgroundColor"), s = s.parentNode
                            } catch (u) {
                            }
                            o = o.blend(i && "transparent" !== i ? i : "_default")
                        }
                        o = o.toRgbaString()
                    }
                    try {
                        n.style[t] = o
                    } catch (u) {
                    }
                }
            }, r.fx.step[t] = function (n) {
                n.colorInit || (n.start = l(n.elem, t), n.end = l(n.end), n.colorInit = !0), r.cssHooks[t].set(n.elem, n.start.transition(n.end, n.pos))
            }
        })
    }, l.hook(s), r.cssHooks.borderColor = {
        expand: function (r) {
            var n = {};
            return h(["Top", "Right", "Bottom", "Left"], function (t, e) {
                n["border" + e + "Color"] = r
            }), n
        }
    }, a = r.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery);


// Toastr v2.1.4
!function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, n) {
                return g({type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t})
            }

            function n(t, n) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = u(t)), v)
            }

            function o(e, t, n) {
                return g({type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t})
            }

            function s(e) {
                C = e
            }

            function i(e, t, n) {
                return g({type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t})
            }

            function a(e, t, n) {
                return g({type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t})
            }

            function r(e, t) {
                var o = m();
                v || n(o), d(e, o, t) || l(o)
            }

            function c(t) {
                var o = m();
                return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove())
            }

            function l(t) {
                for (var n = v.children(), o = n.length - 1; o >= 0; o--) d(e(n[o]), t)
            }

            function d(t, n, o) {
                var s = o && o.force ? o.force : !1;
                return t && (s || 0 === e(":focus", t).length) ? (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function () {
                        h(t)
                    }
                }), !0) : !1
            }

            function u(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
            }

            function p() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning"},
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }

            function f(e) {
                C && C(e)
            }

            function g(t) {
                function o(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function s() {
                    c(), d(), u(), p(), g(), C(), l(), i()
                }

                function i() {
                    var e = "";
                    switch (t.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                    }
                    I.attr("aria-live", e)
                }

                function a() {
                    E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0)
                    }), E.onclick && I.click(function (e) {
                        E.onclick(e), b()
                    })
                }

                function r() {
                    I.hide(), I[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing,
                        complete: E.onShown
                    }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = (new Date).getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)))
                }

                function c() {
                    t.iconClass && I.addClass(E.toastClass).addClass(y)
                }

                function l() {
                    E.newestOnTop ? v.prepend(I) : v.append(I)
                }

                function d() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M)
                    }
                }

                function u() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B)
                    }
                }

                function p() {
                    E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j))
                }

                function g() {
                    E.progressBar && (q.addClass(E.progressClass), I.prepend(q))
                }

                function C() {
                    E.rtl && I.addClass("rtl")
                }

                function O(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === w) return !0;
                        w = t.message
                    }
                    return !1
                }

                function b(t) {
                    var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    return !e(":focus", I).length || t ? (clearTimeout(F.intervalId), I[n]({
                        duration: o, easing: s, complete: function () {
                            h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date, f(P)
                        }
                    })) : void 0
                }

                function D() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = (new Date).getTime() + F.maxHideTime)
                }

                function H() {
                    clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({duration: E.showDuration, easing: E.showEasing})
                }

                function x() {
                    var e = (F.hideEta - (new Date).getTime()) / F.maxHideTime * 100;
                    q.width(e + "%")
                }

                var E = m(), y = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
                    T++, v = n(E, !0);
                    var k = null, I = e("<div/>"), M = e("<div/>"), B = e("<div/>"), q = e("<div/>"), j = e(E.closeHtml),
                        F = {intervalId: null, hideEta: null, maxHideTime: null},
                        P = {toastId: T, state: "visible", startTime: new Date, options: E, map: t};
                    return s(), r(), a(), f(P), E.debug && console && console.log(P), I
                }
            }

            function m() {
                return e.extend({}, p(), b.options)
            }

            function h(e) {
                v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0))
            }

            var v, C, w, T = 0, O = {error: "error", info: "info", success: "success", warning: "warning"},
                b = {clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.4", warning: a};
            return b
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
});


/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {contentType: !1, processData: !1, cache: !1, type: u || "POST"});
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                x.abort(e)
            }, r) for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), g = v[0], x = {
                aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () {
                }, getResponseHeader: function () {
                }, setRequestHeader: function () {
                }, abort: function (t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {
                    }
                    v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                }
            }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, C = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0,
                    o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
            f.resetForm()
        }), t.clearForm && x.push(function () {
            f.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var y = t.success || function () {
            };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
        }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
            return "" !== e(this).val()
        }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
            name: f,
            value: e(d).val(),
            type: d.type
        }), a.push({name: f + ".x", value: o.clk_x}, {
            name: f + ".y",
            value: o.clk_y
        })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
            name: f,
            value: m[l]
        }); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length) for (l = 0; l < v.length; l++) a.push({name: f, value: v[l], type: d.type}); else a.push({name: f, value: "", type: d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({name: f, value: m, type: d.type, required: d.required}));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({name: f, value: g.val()}), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({
                    name: a,
                    value: n[i]
                }); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});


/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change",
        o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () {
        }, u = !!window.jQuery, v = a(window), w = function (a, c) {
            b.ev.on(o + a + p, c)
        }, x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        }, y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        }, z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        }, A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        }, B = function () {
            var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;) if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0
                } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c) if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing,
                            e = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"}, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});


/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function ($) {
    var e = !0;
    $.flexslider = function (t, a) {
        var n = $(t);
        void 0 === a.rtl && "rtl" == $("html").attr("dir") && (a.rtl = !0), n.vars = $.extend({}, $.flexslider.defaults, a);
        var i = n.vars.namespace, r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            o = "click touchend MSPointerUp keyup", l = "", c, d = "vertical" === n.vars.direction, u = n.vars.reverse, v = n.vars.itemWidth > 0,
            p = "fade" === n.vars.animation, m = "" !== n.vars.asNavFor, f = {};
        $.data(t, "flexslider", n), f = {
            init: function () {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : n.vars.rtl ? "marginRight" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t) if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = n.vars.rtl ? 37 === t ? n.getTarget("next") : 39 === t && n.getTarget("prev") : 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
                    e.preventDefault();
                    var r = t < 0 ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(r, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
                    n.manualPlay || n.manualPause || n.pause()
                }, function () {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), s && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
                    n.vars.start(n)
                }, 200)
            }, asNav: {
                setup: function () {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function (e) {
                            e.preventDefault();
                            var t = $(this), a = t.index();
                            $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(o, function (e) {
                        e.preventDefault();
                        var t = $(this), a = t.index(), r;
                        r = n.vars.rtl ? -1 * (t.offset().right - $(n).scrollLeft()) : t.offset().left - $(n).scrollLeft(), r <= 0 && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                }, setupPaging: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging", t = 1, a, r;
                    if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1) for (var s = 0; s < n.pagingCount; s++) {
                        if (r = n.slides.eq(s), void 0 === r.attr("data-thumb-alt") && r.attr("data-thumb-alt", ""), a = $("<a></a>").attr("href", "#").text(t), "thumbnails" === n.vars.controlNav && (a = $("<img/>").attr("src", r.attr("data-thumb"))), "" !== r.attr("data-thumb-alt") && a.attr("alt", r.attr("data-thumb-alt")), "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                            var c = r.attr("data-thumbcaption");
                            if ("" !== c && void 0 !== c) {
                                var d = $("<span></span>").addClass(i + "caption").text(c);
                                a.append(d)
                            }
                        }
                        var u = $("<li>");
                        a.appendTo(u), u.append("</li>"), n.controlNavScaffold.append(u), t++
                    }
                    n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this), a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this), a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                }, active: function () {
                    n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                }, update: function (e, t) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
                        e.preventDefault();
                        var t;
                        "" !== l && l !== e.type || (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var e = i + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
                        e.preventDefault(), "" !== l && l !== e.type || ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                }, update: function (e) {
                    "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                }
            }, touch: function () {
                function e(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
                }

                function a(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX, i = -e.translationY;
                        if (w += d ? i : n, m = (a.vars.rtl ? -1 : 1) * w, x = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA) return void setImmediate(function () {
                            t._gesture.stop()
                        });
                        (!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && w < 0 || a.currentSlide === a.last && w > 0 ? Math.abs(w) / c + 2 : 1)), a.setProps(l + m, "setTouch")))
                    }
                }

                function i(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !x && null !== m) {
                            var a = u ? -m : m, n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        s = null, o = null, m = null, l = null, w = 0
                    }
                }

                var s, o, l, c, m, f, g, h, S, x = !1, y = 0, b = 0, w = 0;
                r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function (e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, s = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
                }, h = function (e) {
                    y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? s - b : (n.vars.rtl ? -1 : 1) * (s - y), x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
                }, S = function (e) {
                    if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
                        var a = u ? -m : m, i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", S, !1), s = null, o = null, m = null, l = null
                }, t.addEventListener("touchstart", g, !1))
            }, resize: function () {
                !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            }, smoothHeight: function (e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({height: n.slides.eq(n.animatingTo).innerHeight()}, e) : t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())
                }
            }, sync: function (e) {
                var t = $(n.vars.sync).data("flexslider"), a = n.animatingTo;
                switch (e) {
                    case"animate":
                        t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        t.playing || t.asNav || t.play();
                        break;
                    case"pause":
                        t.pause();
                        break
                }
            }, uniqueID: function (e) {
                return e.filter("[id]").add(e.find("[id]")).each(function () {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function () {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                }, isHidden: function () {
                    var e = f.pauseInvisible.getHiddenProp();
                    return !!e && document[e]
                }, getHiddenProp: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(c), c = setTimeout(function () {
                    l = ""
                }, 3e3)
            }
        }, n.flexAnimate = function (e, t, a, r, o) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
                if (m && r) {
                    var l = $(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) s ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
                    var c = d ? n.slides.filter(":first").height() : n.computedW, g, h, S;
                    v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
                        n.wrapup(c)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
                        n.wrapup(c)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function (e) {
            p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function () {
            !n.animating && e && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function () {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function () {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function () {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function (e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return !!t || (!(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && (!(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction))))
        }, n.getTarget = function (e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function (e, t, a) {
            var i = function () {
                var a = e || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
                return function () {
                    if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                    switch (t) {
                        case"setTotal":
                            return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                        case"setTouch":
                            return e;
                        case"jumpEnd":
                            return u ? e : n.count * e;
                        case"jumpStart":
                            return u ? n.count * e : e;
                        default:
                            return e
                    }
                }() * (n.vars.rtl ? 1 : -1) + "px"
            }();
            n.transitions && (i = n.isFirefox ? d ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)" : d ? "translate3d(0," + i + ",0)" : "translate3d(" + (n.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function (e) {
            if (p) n.vars.rtl ? n.slides.css({
                width: "100%",
                float: "right",
                marginLeft: "-100%",
                position: "relative"
            }) : n.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (s ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight(); else {
                var t, a;
                "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
                    n.doMath(), n.vars.rtl && n.isFirefox ? n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        float: "right",
                        display: "block"
                    }) : n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        float: "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
        }, n.doMath = function () {
            var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems, i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.isFirefox && (n.w = n.width()), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
        }, n.update = function (e, t) {
            n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function (e, t) {
            var a = $(e);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function (e) {
            var t = isNaN(e) ? n.slides.index($(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, $(window).blur(function (t) {
        e = !1
    }).focus(function (t) {
        e = !0
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        isFirefox: !1,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        },
        rtl: !1
    }, $.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
            var t = $(this), a = e.selector ? e.selector : ".slides > li", n = t.find(a);
            1 === n.length && !1 === e.allowOneSlide || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
        });
        var t = $(this).data("flexslider");
        switch (e) {
            case"play":
                t.play();
                break;
            case"pause":
                t.pause();
                break;
            case"stop":
                t.stop();
                break;
            case"next":
                t.flexAnimate(t.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                t.flexAnimate(t.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && t.flexAnimate(e, !0)
        }
    }
}(jQuery);


// jQuery Paginate v0.4
;(function ($) {
    $.fn.pajinate = function (options) {
        var current_page = "current_page";
        var items_per_page = "items_per_page";
        var meta;
        var defaults = {
            item_container_id: ".content",
            items_per_page: 10,
            nav_panel_id: ".page_navigation",
            nav_info_id: ".info_text",
            num_page_links_to_display: 20,
            start_page: 0,
            wrap_around: false,
            nav_label_first: "First",
            nav_label_prev: "Prev",
            nav_label_next: "Next",
            nav_label_last: "Last",
            nav_order: ["first", "prev", "num", "next", "last"],
            nav_label_info: "Showing {0}-{1} of {2} results",
            show_first_last: true,
            abort_on_small_lists: false,
            jquery_ui: false,
            jquery_ui_active: "ui-state-highlight",
            jquery_ui_default: "ui-state-default",
            jquery_ui_disabled: "ui-state-disabled"
        };
        var options = $.extend(defaults, options);
        var $item_container;
        var $page_container;
        var $items;
        var $nav_panels;
        var total_page_no_links;
        var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : "";
        var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : "";
        var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : "";
        return this.each(function () {
            $page_container = $(this);
            $item_container = $(this).find(options.item_container_id);
            $items = $page_container.find(options.item_container_id).children();
            if (options.abort_on_small_lists && options.items_per_page >= $items.size()) {
                return $page_container
            }
            meta = $page_container;
            meta.data(current_page, 0);
            meta.data(items_per_page, options.items_per_page);
            var total_items = $item_container.children().length;
            var number_of_pages = Math.ceil(total_items / options.items_per_page);
            var more = '<li class="page-item disabled ellipse more"><a class="page-link" href="#">...</a></li>';
            var less = '<li class="page-item disabled ellipse less"><a class="page-link" href="#">...</a></li>';
            var first = !options.show_first_last ? "" : '<li class="page-item first_link ' + jquery_ui_default_class + '"><a class="page-link" href="#">' + options.nav_label_first + "</a></li>";
            var last = !options.show_first_last ? "" : '<li class="page-item last_link ' + jquery_ui_default_class + '"><a class="page-link" href="#">' + options.nav_label_last + "</a></li>";
            var navigation_html = "";
            for (var i = 0; i < options.nav_order.length; i++) {
                switch (options.nav_order[i]) {
                    case"first":
                        navigation_html += first;
                        break;
                    case"last":
                        navigation_html += last;
                        break;
                    case"next":
                        navigation_html += '<li class="page-item next_link ' + jquery_ui_default_class + '"><a class="page-link" href="#">' + options.nav_label_next + "</a></li>";
                        break;
                    case"prev":
                        navigation_html += '<li class="page-item previous_link ' + jquery_ui_default_class + '"><a class="page-link" href="#">' + options.nav_label_prev + "</a></li>";
                        break;
                    case"num":
                        navigation_html += less;
                        var current_link = 0;
                        while (number_of_pages > current_link) {
                            navigation_html += '<li class="page-item page_link ' + jquery_ui_default_class + '" longdesc="' + current_link + '"><a class="page-link" href="#">' + (current_link + 1) + "</a></li>";
                            current_link++
                        }
                        navigation_html += more;
                        break;
                    default:
                        break
                }
            }
            $nav_panels = $page_container.find(options.nav_panel_id);
            $nav_panels.html(navigation_html).each(function () {
                $(this).find(".page_link:first").addClass("first");
                $(this).find(".page_link:last").addClass("last")
            });
            $nav_panels.children(".ellipse").hide();
            $nav_panels.find(".previous_link").next().next().addClass("active " + jquery_ui_active_class);
            $items.hide();
            $items.slice(0, meta.data(items_per_page)).show();
            total_page_no_links = $page_container.find(options.nav_panel_id + ":first").children(".page_link").length;
            options.num_page_links_to_display = Math.min(options.num_page_links_to_display, total_page_no_links);
            $nav_panels.children(".page_link").hide();
            $nav_panels.each(function () {
                $(this).children(".page_link").slice(0, options.num_page_links_to_display).show()
            });
            $page_container.find(".first_link").click(function (e) {
                e.preventDefault();
                movePageNumbersRight($(this), 0);
                gotopage(0)
            });
            $page_container.find(".last_link").click(function (e) {
                e.preventDefault();
                var lastPage = total_page_no_links - 1;
                movePageNumbersLeft($(this), lastPage);
                gotopage(lastPage)
            });
            $page_container.find(".previous_link").click(function (e) {
                e.preventDefault();
                showPrevPage($(this))
            });
            $page_container.find(".next_link").click(function (e) {
                e.preventDefault();
                showNextPage($(this))
            });
            $page_container.find(".page_link").click(function (e) {
                e.preventDefault();
                gotopage($(this).attr("longdesc"))
            });
            gotopage(parseInt(options.start_page));
            toggleMoreLess();
            if (!options.wrap_around) {
                tagNextPrev()
            }
        });

        function showPrevPage(e) {
            new_page = parseInt(meta.data(current_page)) - 1;
            if ($(e).siblings(".active").prev(".page_link").length == true) {
                movePageNumbersRight(e, new_page);
                gotopage(new_page)
            } else {
                if (options.wrap_around) {
                    gotopage(total_page_no_links - 1)
                }
            }
        }

        function showNextPage(e) {
            new_page = parseInt(meta.data(current_page)) + 1;
            if ($(e).siblings(".active").next(".page_link").length == true) {
                movePageNumbersLeft(e, new_page);
                gotopage(new_page)
            } else {
                if (options.wrap_around) {
                    gotopage(0)
                }
            }
        }

        function gotopage(page_num) {
            page_num = parseInt(page_num, 10);
            var ipp = parseInt(meta.data(items_per_page));
            start_from = page_num * ipp;
            end_on = start_from + ipp;
            var items = $items.hide().slice(start_from, end_on);
            items.fadeIn(700);
            $page_container.find(options.nav_panel_id).children(".page_link[longdesc=" + page_num + "]").addClass("active " + jquery_ui_active_class).siblings(".active").removeClass("active " + jquery_ui_active_class);
            meta.data(current_page, page_num);
            var $current_page = parseInt(meta.data(current_page) + 1);
            var total_items = $item_container.children().length;
            var $number_of_pages = Math.ceil(total_items / options.items_per_page);
            $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + items.length).replace("{2}", $items.length).replace("{3}", $current_page).replace("{4}", $number_of_pages));
            toggleMoreLess();
            tagNextPrev();
            if (typeof (options.onPageDisplayed) !== "undefined") {
                options.onPageDisplayed.call(this, page_num + 1)
            }
        }

        function movePageNumbersLeft(e, new_p) {
            var new_page = new_p;
            var $current_active_link = $(e).siblings(".active");
            if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
                $nav_panels.each(function () {
                    $(this).children(".page_link").hide().slice(parseInt(new_page - options.num_page_links_to_display + 1), new_page + 1).show()
                })
            }
        }

        function movePageNumbersRight(e, new_p) {
            var new_page = new_p;
            var $current_active_link = $(e).siblings(".active");
            if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
                $nav_panels.each(function () {
                    $(this).children(".page_link").hide().slice(new_page, new_page + parseInt(options.num_page_links_to_display)).show()
                })
            }
        }

        function toggleMoreLess() {
        }

        function tagNextPrev() {
            if ($nav_panels.children(".last").hasClass("active")) {
                $nav_panels.children(".next_link").add(".last_link").addClass("no_more " + jquery_ui_disabled_class)
            } else {
                $nav_panels.children(".next_link").add(".last_link").removeClass("no_more " + jquery_ui_disabled_class)
            }
            if ($nav_panels.children(".first").hasClass("active")) {
                $nav_panels.children(".previous_link").add(".first_link").addClass("no_more " + jquery_ui_disabled_class)
            } else {
                $nav_panels.children(".previous_link").add(".first_link").removeClass("no_more " + jquery_ui_disabled_class)
            }
        }
    }
})(jQuery);


/*!
 * Infinite Scroll PACKAGED v3.0.6
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018 Metafizzy
 */
!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, r, l) {
        function a(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function (t, a) {
                var h = l.data(a, i);
                if (!h) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var c = h[e];
                if (!c || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var u = c.apply(h, n);
                o = void 0 === o ? u : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function (t, n) {
                var o = l.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), l.data(n, i, o))
            })
        }

        l = l || e || t.jQuery, l && (r.prototype.option || (r.prototype.option = function (t) {
            l.isPlainObject(t) && (this.options = l.extend(!0, this.options, t))
        }), l.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return a(this, t, e)
            }
            return h(this, t), this
        }, n(l))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function () {
    } : function (t) {
        r.error(t)
    };
    return n(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o], s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i], o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function (t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n), s = "data-" + r, l = document.querySelectorAll("[" + s + "]"), a = document.querySelectorAll(".js-" + r),
                h = i.makeArray(l).concat(i.makeArray(a)), c = s + "-options", u = t.jQuery;
            h.forEach(function (t) {
                var i, r = t.getAttribute(s) || t.getAttribute(c);
                try {
                    i = r && JSON.parse(r)
                } catch (l) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + l))
                }
                var a = new e(t, i);
                u && u.data(t, n, a)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils)
}(window, function (t, e, i) {
    function n(t, e) {
        var s = i.getQueryElement(t);
        if (!s) return void console.error("Bad element for InfiniteScroll: " + (s || t));
        if (t = s, t.infiniteScrollGUID) {
            var l = r[t.infiniteScrollGUID];
            return l.option(e), l
        }
        this.element = t, this.options = i.extend({}, n.defaults), this.option(e), o && (this.$element = o(this.element)), this.create()
    }

    var o = t.jQuery, r = {};
    n.defaults = {}, n.create = {}, n.destroy = {};
    var s = n.prototype;
    i.extend(s, e.prototype);
    var l = 0;
    s.create = function () {
        var t = this.guid = ++l;
        this.element.infiniteScrollGUID = t, r[t] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath();
        var e = this.getPath && this.getPath();
        if (!e) return void console.error("Disabling InfiniteScroll");
        this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();
        for (var i in n.create) n.create[i].call(this)
    }, s.option = function (t) {
        i.extend(this.options, t)
    }, s.callOnInit = function () {
        var t = this.options.onInit;
        t && t.call(this, this)
    }, s.dispatchEvent = function (t, e, i) {
        this.log(t, i);
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), o && this.$element) {
            t += ".infiniteScroll";
            var r = t;
            if (e) {
                var s = o.Event(e);
                s.type = t, r = s
            }
            this.$element.trigger(r, i)
        }
    };
    var a = {
        initialized: function (t) {
            return "on " + t
        }, request: function (t) {
            return "URL: " + t
        }, load: function (t, e) {
            return (t.title || "") + ". URL: " + e
        }, error: function (t, e) {
            return t + ". URL: " + e
        }, append: function (t, e, i) {
            return i.length + " items. URL: " + e
        }, last: function (t, e) {
            return "URL: " + e
        }, history: function (t, e) {
            return "URL: " + e
        }, pageIndex: function (t, e) {
            return "current page determined to be: " + t + " from " + e
        }
    };
    s.log = function (t, e) {
        if (this.options.debug) {
            var i = "[InfiniteScroll] " + t, n = a[t];
            n && (i += ". " + n.apply(this, e)), console.log(i)
        }
    }, s.updateMeasurements = function () {
        this.windowHeight = t.innerHeight;
        var e = this.element.getBoundingClientRect();
        this.top = e.top + t.pageYOffset
    }, s.updateScroller = function () {
        var e = this.options.elementScroll;
        if (!e) return void (this.scroller = t);
        if (this.scroller = e === !0 ? this.element : i.getQueryElement(e), !this.scroller) throw"Unable to find elementScroll: " + e
    }, s.updateGetPath = function () {
        var t = this.options.path;
        if (!t) return void console.error("InfiniteScroll path option required. Set as: " + t);
        var e = typeof t;
        if ("function" == e) return void (this.getPath = t);
        var i = "string" == e && t.match("{{#}}");
        return i ? void this.updateGetPathTemplate(t) : void this.updateGetPathSelector(t)
    }, s.updateGetPathTemplate = function (t) {
        this.getPath = function () {
            var e = this.pageIndex + 1;
            return t.replace("{{#}}", e)
        }.bind(this);
        var e = t.replace(/(\\\?|\?)/, "\\?").replace("{{#}}", "(\\d\\d?\\d?)"), i = new RegExp(e), n = location.href.match(i);
        n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]))
    };
    var h = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];
    return s.updateGetPathSelector = function (t) {
        var e = document.querySelector(t);
        if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: " + t);
        for (var i, n, o = e.getAttribute("href"), r = 0; o && r < h.length; r++) {
            n = h[r];
            var s = o.match(n);
            if (s) {
                i = s.slice(1);
                break
            }
        }
        return i ? (this.isPathSelector = !0, this.getPath = function () {
            var t = this.pageIndex + 1;
            return i[0] + t + i[2]
        }.bind(this), this.pageIndex = parseInt(i[1], 10) - 1, void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + o)
    }, s.updateGetAbsolutePath = function () {
        var t = this.getPath(), e = t.match(/^http/) || t.match(/^\//);
        if (e) return void (this.getAbsolutePath = this.getPath);
        var i = location.pathname, n = t.match(/^\?/);
        if (n) return void (this.getAbsolutePath = function () {
            return i + this.getPath()
        });
        var o = i.substring(0, i.lastIndexOf("/"));
        this.getAbsolutePath = function () {
            return o + "/" + this.getPath()
        }
    }, n.create.hideNav = function () {
        var t = i.getQueryElement(this.options.hideNav);
        t && (t.style.display = "none", this.nav = t)
    }, n.destroy.hideNav = function () {
        this.nav && (this.nav.style.display = "")
    }, s.destroy = function () {
        this.allOff();
        for (var t in n.destroy) n.destroy[t].call(this);
        delete this.element.infiniteScrollGUID, delete r[this.guid], o && this.$element && o.removeData(this.element, "infiniteScroll")
    }, n.throttle = function (t, e) {
        e = e || 200;
        var i, n;
        return function () {
            var o = +new Date, r = arguments, s = function () {
                i = o, t.apply(this, r)
            }.bind(this);
            i && o < i + e ? (clearTimeout(n), n = setTimeout(s, e)) : s()
        }
    }, n.data = function (t) {
        t = i.getQueryElement(t);
        var e = t && t.infiniteScrollGUID;
        return e && r[e]
    }, n.setJQuery = function (t) {
        o = t
    }, i.htmlInit(n, "infinite-scroll"), s._init = function () {
    }, o && o.bridget && o.bridget("infiniteScroll", n), n
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll)
}(window, function (t, e) {
    function i(t) {
        for (var e = document.createDocumentFragment(), i = 0; t && i < t.length; i++) e.appendChild(t[i]);
        return e
    }

    function n(t) {
        for (var e = t.querySelectorAll("script"), i = 0; i < e.length; i++) {
            var n = e[i], r = document.createElement("script");
            o(n, r), r.innerHTML = n.innerHTML, n.parentNode.replaceChild(r, n)
        }
    }

    function o(t, e) {
        for (var i = t.attributes, n = 0; n < i.length; n++) {
            var o = i[n];
            e.setAttribute(o.name, o.value)
        }
    }

    function r(t, e, i, n, o) {
        var r = new XMLHttpRequest;
        r.open("GET", t, !0), r.responseType = e || "", r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.onload = function () {
            if (200 == r.status) i(r.response); else if (204 == r.status) o(r.response); else {
                var t = new Error(r.statusText);
                n(t)
            }
        }, r.onerror = function () {
            var e = new Error("Network error requesting " + t);
            n(e)
        }, r.send()
    }

    var s = e.prototype;
    return e.defaults.loadOnScroll = !0, e.defaults.checkLastPage = !0, e.defaults.responseType = "document", e.create.pageLoad = function () {
        this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }, s.onScrollThresholdLoad = function () {
        this.options.loadOnScroll && this.loadNextPage()
    }, s.loadNextPage = function () {
        if (!this.isLoading && this.canLoad) {
            var t = this.getAbsolutePath();
            this.isLoading = !0;
            var e = function (e) {
                this.onPageLoad(e, t)
            }.bind(this), i = function (e) {
                this.onPageError(e, t)
            }.bind(this), n = function (e) {
                this.lastPageReached(e, t)
            }.bind(this);
            r(t, this.options.responseType, e, i, n), this.dispatchEvent("request", null, [t])
        }
    }, s.onPageLoad = function (t, e) {
        return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e]), this.appendNextPage(t, e), t
    }, s.appendNextPage = function (t, e) {
        var n = this.options.append, o = "document" == this.options.responseType;
        if (o && n) {
            var r = t.querySelectorAll(n), s = i(r), l = function () {
                this.appendItems(r, s), this.isLoading = !1, this.dispatchEvent("append", null, [t, e, r])
            }.bind(this);
            this.options.outlayer ? this.appendOutlayerItems(s, l) : l()
        }
    }, s.appendItems = function (t, e) {
        t && t.length && (e = e || i(t), n(e), this.element.appendChild(e))
    }, s.appendOutlayerItems = function (i, n) {
        var o = e.imagesLoaded || t.imagesLoaded;
        return o ? void o(i, n) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void (this.isLoading = !1))
    }, s.onAppendOutlayer = function (t, e, i) {
        this.options.outlayer.appended(i)
    }, s.checkLastPage = function (t, e) {
        var i = this.options.checkLastPage;
        if (i) {
            var n = this.options.path;
            if ("function" == typeof n) {
                var o = this.getPath();
                if (!o) return void this.lastPageReached(t, e)
            }
            var r;
            if ("string" == typeof i ? r = i : this.isPathSelector && (r = n), r && t.querySelector) {
                var s = t.querySelector(r);
                s || this.lastPageReached(t, e)
            }
        }
    }, s.lastPageReached = function (t, e) {
        this.canLoad = !1, this.dispatchEvent("last", null, [t, e])
    }, s.onPageError = function (t, e) {
        return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [t, e]), t
    }, e.create.prefill = function () {
        if (this.options.prefill) {
            var t = this.options.append;
            if (!t) return void console.error("append option required for prefill. Set as :" + t);
            this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()
        }
    }, s.prefill = function () {
        var t = this.getPrefillDistance();
        this.isPrefilling = t >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill()
    }, s.getPrefillDistance = function () {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }, s.stopPrefill = function () {
        this.log("stopPrefill"), this.off("append", this.prefill)
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = e.prototype;
    return e.defaults.scrollThreshold = 400, e.create.scrollWatch = function () {
        this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
        var t = this.options.scrollThreshold, e = t || 0 === t;
        e && this.enableScrollWatch()
    }, e.destroy.scrollWatch = function () {
        this.disableScrollWatch()
    }, n.enableScrollWatch = function () {
        this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0))
    }, n.disableScrollWatch = function () {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching)
    }, n.bindScrollWatchEvents = function (e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.pageScrollHandler), t[i]("resize", this.resizeHandler)
    }, n.onPageScroll = e.throttle(function () {
        var t = this.getBottomDistance();
        t <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }), n.getBottomDistance = function () {
        return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance()
    }, n.getWindowBottomDistance = function () {
        var e = this.top + this.element.clientHeight, i = t.pageYOffset + this.windowHeight;
        return e - i
    }, n.getElementBottomDistance = function () {
        var t = this.scroller.scrollHeight, e = this.scroller.scrollTop + this.scroller.clientHeight;
        return t - e
    }, n.onResize = function () {
        this.updateMeasurements()
    }, i.debounceMethod(e, "onResize", 150), e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = e.prototype;
    e.defaults.history = "replace";
    var o = document.createElement("a");
    return e.create.history = function () {
        if (this.options.history) {
            o.href = this.getAbsolutePath();
            var t = o.origin || o.protocol + "//" + o.host, e = t == location.origin;
            return e ? void (this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + o.origin + " on " + location.origin + " . History behavior disabled.")
        }
    }, n.createHistoryAppend = function () {
        this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }], this.scrollPageIndex = 0, this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0)
    }, n.bindHistoryAppendEvents = function (e) {
        var i = e ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.scrollHistoryHandler), t[i]("unload", this.unloadHandler)
    }, n.createHistoryPageLoad = function () {
        this.on("load", this.onPageLoadHistory)
    }, e.destroy.history = n.destroyHistory = function () {
        var t = this.options.history && this.options.append;
        t && this.bindHistoryAppendEvents(!1)
    }, n.onAppendHistory = function (t, e, i) {
        if (i && i.length) {
            var n = i[0], r = this.getElementScrollY(n);
            o.href = e, this.scrollPages.push({top: r, path: o.href, title: t.title})
        }
    }, n.getElementScrollY = function (t) {
        return this.options.elementScroll ? this.getElementElementScrollY(t) : this.getElementWindowScrollY(t)
    }, n.getElementWindowScrollY = function (e) {
        var i = e.getBoundingClientRect();
        return i.top + t.pageYOffset
    }, n.getElementElementScrollY = function (t) {
        return t.offsetTop - this.top
    }, n.onScrollHistory = function () {
        for (var t, e, i = this.getScrollViewY(), n = 0; n < this.scrollPages.length; n++) {
            var o = this.scrollPages[n];
            if (o.top >= i) break;
            t = n, e = o
        }
        t != this.scrollPageIndex && (this.scrollPageIndex = t, this.setHistory(e.title, e.path))
    }, i.debounceMethod(e, "onScrollHistory", 150), n.getScrollViewY = function () {
        return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : t.pageYOffset + this.windowHeight / 2
    }, n.setHistory = function (t, e) {
        var i = this.options.history, n = i && history[i + "State"];
        n && (history[i + "State"](null, t, e), this.options.historyTitle && (document.title = t), this.dispatchEvent("history", null, [t, e]))
    }, n.onUnload = function () {
        var e = this.scrollPageIndex;
        if (0 !== e) {
            var i = this.scrollPages[e], n = t.pageYOffset - i.top + this.top;
            this.destroyHistory(), scrollTo(0, n)
        }
    }, n.onPageLoadHistory = function (t, e) {
        this.setHistory(t.title, e)
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    function n(t, e) {
        this.element = t, this.infScroll = e, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), e.on("request", this.disable.bind(this)), e.on("load", this.enable.bind(this)), e.on("error", this.hide.bind(this)), e.on("last", this.hide.bind(this))
    }

    return e.create.button = function () {
        var t = i.getQueryElement(this.options.button);
        if (t) return void (this.button = new n(t, this))
    }, e.destroy.button = function () {
        this.button && this.button.destroy()
    }, n.prototype.onClick = function (t) {
        t.preventDefault(), this.infScroll.loadNextPage()
    }, n.prototype.enable = function () {
        this.element.removeAttribute("disabled")
    }, n.prototype.disable = function () {
        this.element.disabled = "disabled"
    }, n.prototype.hide = function () {
        this.element.style.display = "none"
    }, n.prototype.destroy = function () {
        this.element.removeEventListener("click", this.clickHandler)
    }, e.Button = n, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    function n(t) {
        r(t, "none")
    }

    function o(t) {
        r(t, "block")
    }

    function r(t, e) {
        t && (t.style.display = e)
    }

    var s = e.prototype;
    return e.create.status = function () {
        var t = i.getQueryElement(this.options.status);
        t && (this.statusElement = t, this.statusEventElements = {
            request: t.querySelector(".infinite-scroll-request"),
            error: t.querySelector(".infinite-scroll-error"),
            last: t.querySelector(".infinite-scroll-last")
        }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"))
    }, s.bindHideStatus = function (t) {
        var e = this.options.append ? "append" : "load";
        this[t](e, this.hideAllStatus)
    }, s.showRequestStatus = function () {
        this.showStatus("request")
    }, s.showErrorStatus = function () {
        this.showStatus("error")
    }, s.showLastStatus = function () {
        this.showStatus("last"), this.bindHideStatus("off")
    }, s.showStatus = function (t) {
        o(this.statusElement), this.hideStatusEventElements();
        var e = this.statusEventElements[t];
        o(e)
    }, s.hideAllStatus = function () {
        n(this.statusElement), this.hideStatusEventElements()
    }, s.hideStatusEventElements = function () {
        for (var t in this.statusEventElements) {
            var e = this.statusEventElements[t];
            n(e)
        }
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")))
}(window, function (t) {
    return t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        if (Array.isArray(t)) return t;
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? h.call(t) : [t]
    }

    function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        var s = t;
        return "string" == typeof t && (s = document.querySelectorAll(t)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), l && (this.jqDeferred = new l.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || t))
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    var l = t.jQuery, a = t.console, h = Array.prototype.slice;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var c = {1: !0, 9: !0, 11: !0};
    return o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var o = n && n[2];
            o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
        }
    }, o.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function (t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function () {
        function t(t, i, n) {
            setTimeout(function () {
                e.progress(t, i, n)
            })
        }

        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function (e) {
        e = e || t.jQuery, e && (l = e, l.fn.imagesLoaded = function (t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(l(this))
        })
    }, o.makeJQueryPlugin(), o
});


/*! jQuery UI - v1.12.1 - 2018-01-02
* http://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/tabs.js, effect.js, effects/effect-fade.js, effects/effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e = 0, i = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
            } catch (a) {
            }
            e(i)
        }
    }(t.cleanData), t.widget = function (e, i, s) {
        var n, o, a, r = {}, l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
            return t.isFunction(s) ? (r[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }

                return function () {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }(), void 0) : (r[e] = s, void 0)
        }), o.prototype = t.widget.extend(a, {widgetEventPrefix: n ? a.widgetEventPrefix || e : e}, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), n ? (t.each(n._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function (e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++) for (s in o[a]) n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }, t.widget.bridge = function (e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
            var a = "string" == typeof o, r = i.call(arguments, 1), l = this;
            return a ? this.length || "instance" !== o ? this.each(function () {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function () {
                var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this))
            })), l
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (i, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                n[e] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i
            }
            return this._setOptions(a), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }

            var s = [], n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function (e) {
            var i = this;
            t.each(i.classesElementLookup, function (s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t, o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function (e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }

                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                }, focusout: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = {effect: n});
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {duration: n}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    }), t.widget, t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.fn.extend({
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.ui.escapeSelector = function () {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function (e) {
            return e.replace(t, "\\$1")
        }
    }(), t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var t = /#.*$/;
            return function (e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (n) {
                }
                try {
                    s = decodeURIComponent(s)
                } catch (n) {
                }
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function () {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function (i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }

            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"), l = t(s).closest("li"), h = l.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
        },
        _setupEvents: function (e) {
            var i = {};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0], r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(o), h = s.length ? this._getPanelForTab(s) : t(),
                c = {oldTab: s, oldPanel: h, newTab: r ? t() : o, newPanel: l};
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }

            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function (t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function (e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), a = this._getPanelForTab(n), r = {tab: n, panel: a},
                l = function (t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
                setTimeout(function () {
                    a.html(t), s._trigger("load", i, r), l(n, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) {
                    return n._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs;
    var s = "ui-effects-", n = "ui-effects-style", o = "ui-effects-animated", a = t;
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function (t, o) {
                var a, r = o.re.exec(i), l = r && o.parse(r), h = o.space || "rgba";
                return l ? (a = s[h](l), s[c[h].cache] = a[c[h].cache], n = s._rgba = a._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var o,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], h = t.Color = function (e, i, s, n) {
                return new t.Color.fn.parse(e, i, s, n)
            }, c = {
                rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
                hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}
            }, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), h.fn = t.extend(h.prototype, {
            parse: function (n, a, r, l) {
                if (n === e) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return a !== e && (n = [n, a, r, l], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function (e, s) {
                    var o = s.cache;
                    f(s.props, function (t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t]) return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                }), this) : e
            }, is: function (t) {
                var i = h(t), s = !0, n = this;
                return f(c, function (t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return f(c, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var s = h(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? h("transparent") : this, r = a[o.cache] || o.to(a._rgba),
                    l = r.slice();
                return s = s[o.cache], f(o.props, function (t, n) {
                    var o = n.idx, a = r[o], h = s[o], c = u[n.type] || {};
                    null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, n)))
                }), this[n](l)
            }, blend: function (e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
                return h(t.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), l = Math.min(s, n, o), h = r - l, c = r + l,
                u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
        }, f(c, function (s, n) {
            var o = n.props, a = n.cache, l = n.to, c = n.from;
            h.fn[s] = function (s) {
                if (l && !this[a] && (this[a] = l(this._rgba)), s === e) return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[a] = d, n) : h(d)
            }, f(o, function (e, i) {
                h.fn[e] || (h.fn[e] = function (n) {
                    var o, a = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](), c = h[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = h(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode
                                } catch (l) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (l) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(a), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(a), function () {
        function e(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }

        function i(e, i) {
            var s, o, a = {};
            for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
            return a
        }

        var s = ["add", "remove", "toggle"],
            n = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (a.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (n, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function () {
                var o, a = t(this), r = a.attr("class") || "", h = l.children ? a.find("*").addBack() : a;
                h = h.map(function () {
                    var i = t(this);
                    return {el: i, start: e(this)}
                }), o = function () {
                    t.each(s, function (t, e) {
                        n[e] && a[e + "Class"](n[e])
                    })
                }, o(), h = h.map(function () {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                }), a.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    o(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(a[0])
                })
            })
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (e) {
                return function (i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, s, n, o)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o)
            }
        })
    }(), function () {
        function e(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function i(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        function a(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(),
                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                o = n.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            }
        }

        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
            return function (i) {
                return !!t(i).data(o) || e(i)
            }
        }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
            save: function (t, e) {
                for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(s + e[i], t[0].style[e[i]])
            }, restore: function (t, e) {
                for (var i, n = 0, o = e.length; o > n; n++) null !== e[n] && (i = t.data(s + e[n]), t.css(e[n], i))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
            }
        }), t.extend(t.effects, {
            version: "1.12.1", define: function (e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
            }, scaledDimensions: function (t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s}
            }, clipToBox: function (t) {
                return {width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top}
            }, unshift: function (t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(n, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(n) || "", t.removeData(n)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createPlaceholder: function (e) {
                var i, n = e.css("position"), o = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    "float": e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(s + "placeholder", i)), e.css({
                    position: n,
                    left: o.left,
                    top: o.top
                }), i
            }, removePlaceholder: function (t) {
                var e = s + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e))
            }, cleanUp: function (e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function () {
                function i(e) {
                    function i() {
                        l.removeData(o), t.effects.cleanUp(l), "hide" === s.mode && l.hide(), r()
                    }

                    function r() {
                        t.isFunction(h) && h.call(l[0]), t.isFunction(e) && e()
                    }

                    var l = t(this);
                    s.mode = u.shift(), t.uiBackCompat === !1 || a ? "none" === s.mode ? (l[c](), r()) : n.call(l[0], s, i) : (l.is(":hidden") ? "hide" === c : "show" === c) ? (l[c](), r()) : n.call(l[0], s, r)
                }

                var s = e.apply(this, arguments), n = t.effects.effect[s.effect], a = n.mode, r = s.queue, l = r || "fx", h = s.complete, c = s.mode,
                    u = [], d = function (e) {
                        var i = t(this), s = t.effects.mode(i, c) || a;
                        i.data(o, !0), u.push(s), a && ("show" === s || s === a && "hide" === s) && i.show(), a && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                    };
                return t.fx.off || !n ? c ? this[c](s.duration, h) : this.each(function () {
                    h && h.call(this)
                }) : r === !1 ? this.each(d).each(i) : this.queue(l, d).queue(l, i)
            }, show: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n)
                }
            }(t.fn.show), hide: function (t) {
                return function (s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : a(this.css("clip"), this)
            }, transfer: function (e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, l = o ? a.scrollLeft() : 0,
                    h = n.offset(), c = {top: h.top - r, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()}, u = s.offset(),
                    d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: u.top - r,
                        left: u.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(c, e.duration, e.easing, function () {
                        d.remove(), t.isFunction(i) && i()
                    })
            }
        }), t.fx.step.clip = function (e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = a(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }(), t.effects, t.effects.define("fade", "toggle", function (e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({opacity: s ? 1 : 0}, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }), t.effects.define("slide", "show", function (e, i) {
        var s, n, o = t(this), a = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]}, r = e.mode,
            l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l,
            u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    })
});


/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case'HTML':
            case'BODY':
                return e.ownerDocument.body;
            case'#document':
                return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }

    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }

    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }

    function c(e) {
        var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o);
        return {height: h('Height', t, o, n), width: h('Width', t, o, n)}
    }

    function g(e) {
        return le({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'), i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {
        }
        var p = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top}, s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
            d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }

    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e),
            m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g({top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height});
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop, 10), y = parseFloat(m.marginLeft, 10);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
    }

    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o),
            i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'), d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
        return g(d)
    }

    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) return !1;
        if ('fixed' === t(e, 'position')) return !0;
        var i = o(e);
        return !!i && y(i)
    }

    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }

    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = {top: 0, left: 0}, l = s ? E(e) : a(e, i(t));
        if ('viewport' === p) d = w(l, s); else {
            var f;
            'scrollParent' === p ? (f = n(o(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument), g = h.height, u = h.width;
                d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left
            } else d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d
    }

    function x(e) {
        var t = e.width, o = e.height;
        return t * o
    }

    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = v(o, n, r, i), s = {
            top: {width: p.width, height: t.top - p.top},
            right: {width: p.right - t.right, height: p.height},
            bottom: {width: p.width, height: p.bottom - t.bottom},
            left: {width: t.left - p.left, height: p.height}
        }, d = Object.keys(s).map(function (e) {
            return le({key: e}, s[e], {area: x(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }

    function S(e) {
        var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
            i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {width: e.offsetWidth + i, height: e.offsetHeight + n};
        return r
    }

    function T(e) {
        var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e), i = {width: n.width, height: n.height}, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top',
            d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === o
        });
        var n = D(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function (e) {
            var o = e.name, n = e.enabled;
            return n && o === t
        })
    }

    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {passive: !0}), r || M(n(p.parentNode), t, o, i), i.push(p)
    }

    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {passive: !0});
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }

    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function V(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t) {
        var o = e.offsets, n = o.popper, i = o.reference, r = $, p = function (e) {
                return e
            }, s = r(i.width), d = r(n.width), a = -1 !== ['left', 'right'].indexOf(e.placement), l = -1 !== e.placement.indexOf('-'),
            f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p;
        return {left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right)}
    }

    function K(e, t, o) {
        var n = D(e, function (e) {
            var o = e.name;
            return o === t
        }), i = !!n && e.some(function (e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }

    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case'%p':
                    s = o;
                    break;
                case'%':
                case'%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function X(e, t, o, n) {
        var i = [0, 0], r = -1 !== ['right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(D(p, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
            return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return _(e, i, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }

    var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max,
        te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator, oe = function () {
            for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1) if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }(), ne = te && window.Promise, ie = ne ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, oe))
            }
        }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }, de = function () {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            return function (t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(), ae = function (e, t, o) {
            return t in e ? Object.defineProperty(e, t, {value: o, enumerable: !0, configurable: !0, writable: !0}) : e[t] = o, e
        }, le = Object.assign || function (e) {
            for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }, fe = te && /Firefox/i.test(navigator.userAgent),
        me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        he = me.slice(3), ce = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'}, ge = function () {
            function t(o, n) {
                var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return le({name: e}, i.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }

            return de(t, [{
                key: 'update', value: function () {
                    return k.call(this)
                }
            }, {
                key: 'destroy', value: function () {
                    return H.call(this)
                }
            }, {
                key: 'enableEventListeners', value: function () {
                    return I.call(this)
                }
            }, {
                key: 'disableEventListeners', value: function () {
                    return U.call(this)
                }
            }]), t
        }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
        placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
        }, onUpdate: function () {
        }, modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height', l = {start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a])};
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            }, offset: {order: 200, enabled: !0, fn: J, offset: 0}, preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority, f = e.offsets.popper, m = {
                        primary: function (e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({}, e, o)
                        }, secondary: function (e) {
                            var o = 'right' === e ? 'left' : 'top', n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
                        }
                    };
                    return l.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
            }, keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            }, arrow: {
                order: 500, enabled: !0, fn: function (e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w['margin' + f], 10),
                        E = parseFloat(w['border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, $(v)), ae(n, h, ''), n), e
                }, element: '[x-arrow]'
            }, flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = [];
                    switch (t.behavior) {
                        case ce.FLIP:
                            p = [n, i];
                            break;
                        case ce.CLOCKWISE:
                            p = G(n);
                            break;
                        case ce.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function (s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            w = -1 !== ['top', 'bottom'].indexOf(n),
                            y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u),
                            E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g),
                            v = y || E;
                        (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport', flipVariations: !1, flipVariationsByContent: !1
            }, inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            }, hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            }, computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {position: i.position},
                        h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right',
                        b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
                        var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g
                    }
                    var E = {"x-placement": e.placement};
                    return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: 'bottom', y: 'right'
            }, applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), V(t, {position: o.positionFixed ? 'fixed' : 'absolute'}), o
                }, gpuAcceleration: void 0
            }
        }
    }, ge
});

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, g, u) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(r), !0).forEach(function (t) {
                var e, n, i;
                e = o, i = r[n = t], n in e ? Object.defineProperty(e, n, {value: i, enumerable: !0, configurable: !0, writable: !0}) : e[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
                Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return o
    }

    g = g && g.hasOwnProperty("default") ? g.default : g, u = u && u.hasOwnProperty("default") ? u.default : u;
    var n = "transitionend";

    function o(t) {
        var e = this, n = !1;
        return g(this).one(_.TRANSITION_END, function () {
            n = !0
        }), setTimeout(function () {
            n || _.triggerTransitionEnd(e)
        }, t), this
    }

    var _ = {
        TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
            return t
        }, getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        }, getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var e = g(t).css("transition-duration"), n = g(t).css("transition-delay"), i = parseFloat(e), o = parseFloat(n);
            return i || o ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0
        }, reflow: function (t) {
            return t.offsetHeight
        }, triggerTransitionEnd: function (t) {
            g(t).trigger(n)
        }, supportsTransitionEnd: function () {
            return Boolean(n)
        }, isElement: function (t) {
            return (t[0] || t).nodeType
        }, typeCheckConfig: function (t, e, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var o = n[i], r = e[i], s = r && _.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
            }
            var a
        }, findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }, jQueryDetection: function () {
            if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = g.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    _.jQueryDetection(), g.fn.emulateTransitionEnd = o, g.event.special[_.TRANSITION_END] = {
        bindType: n, delegateType: n, handle: function (t) {
            if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert", a = "bs.alert", c = "." + a, h = g.fn[r],
        f = {CLOSE: "close" + c, CLOSED: "closed" + c, CLICK_DATA_API: "click" + c + ".data-api"}, d = "alert", m = "fade", p = "show",
        v = function () {
            function i(t) {
                this._element = t
            }

            var t = i.prototype;
            return t.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function () {
                g.removeData(this._element, a), this._element = null
            }, t._getRootElement = function (t) {
                var e = _.getSelectorFromElement(t), n = !1;
                return e && (n = document.querySelector(e)), n = n || g(t).closest("." + d)[0]
            }, t._triggerCloseEvent = function (t) {
                var e = g.Event(f.CLOSE);
                return g(t).trigger(e), e
            }, t._removeElement = function (e) {
                var n = this;
                if (g(e).removeClass(p), g(e).hasClass(m)) {
                    var t = _.getTransitionDurationFromElement(e);
                    g(e).one(_.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function (t) {
                g(t).detach().trigger(f.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = g(this), e = t.data(a);
                    e || (e = new i(this), t.data(a, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function (e) {
                return function (t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), g.fn[r] = v._jQueryInterface, g.fn[r].Constructor = v, g.fn[r].noConflict = function () {
        return g.fn[r] = h, v._jQueryInterface
    };
    var y = "button", E = "bs.button", C = "." + E, T = ".data-api", b = g.fn[y], S = "active", D = "btn", I = "focus", w = '[data-toggle^="button"]',
        A = '[data-toggle="buttons"]', N = '[data-toggle="button"]', O = '[data-toggle="buttons"] .btn', k = 'input:not([type="hidden"])',
        P = ".active", L = ".btn",
        j = {CLICK_DATA_API: "click" + C + T, FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T, LOAD_DATA_API: "load" + C + T},
        H = function () {
            function n(t) {
                this._element = t
            }

            var t = n.prototype;
            return t.toggle = function () {
                var t = !0, e = !0, n = g(this._element).closest(A)[0];
                if (n) {
                    var i = this._element.querySelector(k);
                    if (i) {
                        if ("radio" === i.type) if (i.checked && this._element.classList.contains(S)) t = !1; else {
                            var o = n.querySelector(P);
                            o && g(o).removeClass(S)
                        } else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(S) && (t = !1) : t = !1;
                        t && (i.checked = !this._element.classList.contains(S), g(i).trigger("change")), i.focus(), e = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S))
            }, t.dispose = function () {
                g.removeData(this._element, E), this._element = null
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = g(this).data(E);
                    t || (t = new n(this), g(this).data(E, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }]), n
        }();
    g(document).on(j.CLICK_DATA_API, w, function (t) {
        var e = t.target;
        if (g(e).hasClass(D) || (e = g(e).closest(L)[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled")) t.preventDefault(); else {
            var n = e.querySelector(k);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();
            H._jQueryInterface.call(g(e), "toggle")
        }
    }).on(j.FOCUS_BLUR_DATA_API, w, function (t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }), g(window).on(j.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(O)), e = 0, n = t.length; e < n; e++) {
            var i = t[e], o = i.querySelector(k);
            o.checked || o.hasAttribute("checked") ? i.classList.add(S) : i.classList.remove(S)
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length; r < s; r++) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(S) : a.classList.remove(S)
        }
    }), g.fn[y] = H._jQueryInterface, g.fn[y].Constructor = H, g.fn[y].noConflict = function () {
        return g.fn[y] = b, H._jQueryInterface
    };
    var R = "carousel", x = "bs.carousel", F = "." + x, U = ".data-api", W = g.fn[R],
        q = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, M = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, K = "next", Q = "prev", B = "left", V = "right", Y = {
            SLIDE: "slide" + F,
            SLID: "slid" + F,
            KEYDOWN: "keydown" + F,
            MOUSEENTER: "mouseenter" + F,
            MOUSELEAVE: "mouseleave" + F,
            TOUCHSTART: "touchstart" + F,
            TOUCHMOVE: "touchmove" + F,
            TOUCHEND: "touchend" + F,
            POINTERDOWN: "pointerdown" + F,
            POINTERUP: "pointerup" + F,
            DRAG_START: "dragstart" + F,
            LOAD_DATA_API: "load" + F + U,
            CLICK_DATA_API: "click" + F + U
        }, z = "carousel", X = "active", $ = "slide", G = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next",
        tt = "carousel-item-prev", et = "pointer-event", nt = ".active", it = ".active.carousel-item", ot = ".carousel-item",
        rt = ".carousel-item img", st = ".carousel-item-next, .carousel-item-prev", at = ".carousel-indicators", lt = "[data-slide], [data-slide-to]",
        ct = '[data-ride="carousel"]', ht = {TOUCH: "touch", PEN: "pen"}, ut = function () {
            function r(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(at), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }

            var t = r.prototype;
            return t.next = function () {
                this._isSliding || this._slide(K)
            }, t.nextWhenVisible = function () {
                !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
            }, t.prev = function () {
                this._isSliding || this._slide(Q)
            }, t.pause = function (t) {
                t || (this._isPaused = !0), this._element.querySelector(st) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function (t) {
                var e = this;
                this._activeElement = this._element.querySelector(it);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) g(this._element).one(Y.SLID, function () {
                    return e.to(t)
                }); else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = n < t ? K : Q;
                    this._slide(i, this._items[t])
                }
            }, t.dispose = function () {
                g(this._element).off(F), g.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function (t) {
                return t = l({}, q, {}, t), _.typeCheckConfig(R, t, M), t
            }, t._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
                }
            }, t._addEventListeners = function () {
                var e = this;
                this._config.keyboard && g(this._element).on(Y.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && g(this._element).on(Y.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(Y.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, t._addTouchEventListeners = function () {
                var e = this;
                if (this._touchSupported) {
                    var n = function (t) {
                        e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                    }, i = function (t) {
                        e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t)
                        }, 500 + e._config.interval))
                    };
                    g(this._element.querySelectorAll(rt)).on(Y.DRAG_START, function (t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (g(this._element).on(Y.POINTERDOWN, function (t) {
                        return n(t)
                    }), g(this._element).on(Y.POINTERUP, function (t) {
                        return i(t)
                    }), this._element.classList.add(et)) : (g(this._element).on(Y.TOUCHSTART, function (t) {
                        return n(t)
                    }), g(this._element).on(Y.TOUCHMOVE, function (t) {
                        return function (t) {
                            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), g(this._element).on(Y.TOUCHEND, function (t) {
                        return i(t)
                    }))
                }
            }, t._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(ot)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function (t, e) {
                var n = t === K, i = t === Q, o = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === Q ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(it)),
                    o = g.Event(Y.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
                return g(this._element).trigger(o), o
            }, t._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
                    g(e).removeClass(X);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && g(n).addClass(X)
                }
            }, t._slide = function (t, e) {
                var n, i, o, r = this, s = this._element.querySelector(it), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l), h = Boolean(this._interval);
                if (o = t === K ? (n = J, i = Z, B) : (n = G, i = tt, V), l && g(l).hasClass(X)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = g.Event(Y.SLID, {relatedTarget: l, direction: o, from: a, to: c});
                    if (g(this._element).hasClass($)) {
                        g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = _.getTransitionDurationFromElement(s);
                        g(s).one(_.TRANSITION_END, function () {
                            g(l).removeClass(n + " " + i).addClass(X), g(s).removeClass(X + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                                return g(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else g(s).removeClass(X), g(l).addClass(X), this._isSliding = !1, g(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = g(this).data(x), e = l({}, q, {}, g(this).data());
                    "object" == typeof i && (e = l({}, e, {}, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new r(this, e), g(this).data(x, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && e.ride && (t.pause(), t.cycle())
                })
            }, r._dataApiClickHandler = function (t) {
                var e = _.getSelectorFromElement(this);
                if (e) {
                    var n = g(e)[0];
                    if (n && g(n).hasClass(z)) {
                        var i = l({}, g(n).data(), {}, g(this).data()), o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(x).to(o), t.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return q
                }
            }]), r
        }();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler), g(window).on(Y.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(ct)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            ut._jQueryInterface.call(i, i.data())
        }
    }), g.fn[R] = ut._jQueryInterface, g.fn[R].Constructor = ut, g.fn[R].noConflict = function () {
        return g.fn[R] = W, ut._jQueryInterface
    };
    var ft = "collapse", dt = "bs.collapse", gt = "." + dt, _t = g.fn[ft], mt = {toggle: !0, parent: ""},
        pt = {toggle: "boolean", parent: "(string|element)"},
        vt = {SHOW: "show" + gt, SHOWN: "shown" + gt, HIDE: "hide" + gt, HIDDEN: "hidden" + gt, CLICK_DATA_API: "click" + gt + ".data-api"},
        yt = "show", Et = "collapse", Ct = "collapsing", Tt = "collapsed", bt = "width", St = "height", Dt = ".show, .collapsing",
        It = '[data-toggle="collapse"]', wt = function () {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(It)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i], s = _.getSelectorFromElement(r), a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                        return t === e
                    });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }

            var t = a.prototype;
            return t.toggle = function () {
                g(this._element).hasClass(yt) ? this.hide() : this.show()
            }, t.show = function () {
                var t, e, n = this;
                if (!this._isTransitioning && !g(this._element).hasClass(yt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Dt)).filter(function (t) {
                    return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(Et)
                })).length && (t = null), !(t && (e = g(t).not(this._selector).data(dt)) && e._isTransitioning))) {
                    var i = g.Event(vt.SHOW);
                    if (g(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(dt, null));
                        var o = this._getDimension();
                        g(this._element).removeClass(Et).addClass(Ct), this._element.style[o] = 0, this._triggerArray.length && g(this._triggerArray).removeClass(Tt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)), s = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function () {
                            g(n._element).removeClass(Ct).addClass(Et).addClass(yt), n._element.style[o] = "", n.setTransitioning(!1), g(n._element).trigger(vt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, t.hide = function () {
                var t = this;
                if (!this._isTransitioning && g(this._element).hasClass(yt)) {
                    var e = g.Event(vt.HIDE);
                    if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _.reflow(this._element), g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
                        var i = this._triggerArray.length;
                        if (0 < i) for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o], s = _.getSelectorFromElement(r);
                            if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(yt) || g(r).addClass(Tt).attr("aria-expanded", !1)
                        }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function () {
                            t.setTransitioning(!1), g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function (t) {
                this._isTransitioning = t
            }, t.dispose = function () {
                g.removeData(this._element, dt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function (t) {
                return (t = l({}, mt, {}, t)).toggle = Boolean(t.toggle), _.typeCheckConfig(ft, t, pt), t
            }, t._getDimension = function () {
                return g(this._element).hasClass(bt) ? bt : St
            }, t._getParent = function () {
                var t, n = this;
                _.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(t.querySelectorAll(e));
                return g(i).each(function (t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function (t, e) {
                var n = g(t).hasClass(yt);
                e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function (t) {
                var e = _.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var t = g(this), e = t.data(dt), n = l({}, mt, {}, t.data(), {}, "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(dt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return mt
                }
            }]), a
        }();
    g(document).on(vt.CLICK_DATA_API, It, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this), e = _.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function () {
            var t = g(this), e = t.data(dt) ? "toggle" : n.data();
            wt._jQueryInterface.call(t, e)
        })
    }), g.fn[ft] = wt._jQueryInterface, g.fn[ft].Constructor = wt, g.fn[ft].noConflict = function () {
        return g.fn[ft] = _t, wt._jQueryInterface
    };
    var At = "dropdown", Nt = "bs.dropdown", Ot = "." + Nt, kt = ".data-api", Pt = g.fn[At], Lt = new RegExp("38|40|27"), jt = {
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot,
            CLICK: "click" + Ot,
            CLICK_DATA_API: "click" + Ot + kt,
            KEYDOWN_DATA_API: "keydown" + Ot + kt,
            KEYUP_DATA_API: "keyup" + Ot + kt
        }, Ht = "disabled", Rt = "show", xt = "dropup", Ft = "dropright", Ut = "dropleft", Wt = "dropdown-menu-right", qt = "position-static",
        Mt = '[data-toggle="dropdown"]', Kt = ".dropdown form", Qt = ".dropdown-menu", Bt = ".navbar-nav",
        Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Yt = "top-start", zt = "top-end", Xt = "bottom-start", $t = "bottom-end",
        Gt = "right-start", Jt = "left-start",
        Zt = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null}, te = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, ee = function () {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var t = c.prototype;
            return t.toggle = function () {
                if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
                    var t = g(this._menu).hasClass(Rt);
                    c._clearMenus(), t || this.show(!0)
                }
            }, t.show = function (t) {
                if (void 0 === t && (t = !1), !(this._element.disabled || g(this._element).hasClass(Ht) || g(this._menu).hasClass(Rt))) {
                    var e = {relatedTarget: this._element}, n = g.Event(jt.SHOW, e), i = c._getParentFromElement(this._element);
                    if (g(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && t) {
                            if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = i : _.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && g(i).addClass(qt), this._popper = new u(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === g(i).closest(Bt).length && g(document.body).children().on("mouseover", null, g.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), g(this._menu).toggleClass(Rt), g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e))
                    }
                }
            }, t.hide = function () {
                if (!this._element.disabled && !g(this._element).hasClass(Ht) && g(this._menu).hasClass(Rt)) {
                    var t = {relatedTarget: this._element}, e = g.Event(jt.HIDE, t), n = c._getParentFromElement(this._element);
                    g(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), g(this._menu).toggleClass(Rt), g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)))
                }
            }, t.dispose = function () {
                g.removeData(this._element, Nt), g(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function () {
                var e = this;
                g(this._element).on(jt.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function (t) {
                return t = l({}, this.constructor.Default, {}, g(this._element).data(), {}, t), _.typeCheckConfig(At, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function () {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(Qt))
                }
                return this._menu
            }, t._getPlacement = function () {
                var t = g(this._element.parentNode), e = Xt;
                return t.hasClass(xt) ? (e = Yt, g(this._menu).hasClass(Wt) && (e = zt)) : t.hasClass(Ft) ? e = Gt : t.hasClass(Ut) ? e = Jt : g(this._menu).hasClass(Wt) && (e = $t), e
            }, t._detectNavbar = function () {
                return 0 < g(this._element).closest(".navbar").length
            }, t._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, t._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {enabled: !1}), l({}, t, {}, this._config.popperConfig)
            }, c._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = g(this).data(Nt);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), g(this).data(Nt, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll(Mt)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n]), r = g(e[n]).data(Nt), s = {relatedTarget: e[n]};
                    if (t && "click" === t.type && (s.clickEvent = t), r) {
                        var a = r._menu;
                        if (g(o).hasClass(Rt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                            var l = g.Event(jt.HIDE, s);
                            g(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), e[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), g(a).removeClass(Rt), g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)))
                        }
                    }
                }
            }, c._getParentFromElement = function (t) {
                var e, n = _.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(Qt).length)) : Lt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Ht))) {
                    var e = c._getParentFromElement(this), n = g(e).hasClass(Rt);
                    if (n || 27 !== t.which) if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Vt)).filter(function (t) {
                            return g(t).is(":visible")
                        });
                        if (0 !== i.length) {
                            var o = i.indexOf(t.target);
                            38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var r = e.querySelector(Mt);
                            g(r).trigger("focus")
                        }
                        g(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return Zt
                }
            }, {
                key: "DefaultType", get: function () {
                    return te
                }
            }]), c
        }();
    g(document).on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus).on(jt.CLICK_DATA_API, Mt, function (t) {
        t.preventDefault(), t.stopPropagation(), ee._jQueryInterface.call(g(this), "toggle")
    }).on(jt.CLICK_DATA_API, Kt, function (t) {
        t.stopPropagation()
    }), g.fn[At] = ee._jQueryInterface, g.fn[At].Constructor = ee, g.fn[At].noConflict = function () {
        return g.fn[At] = Pt, ee._jQueryInterface
    };
    var ne = "modal", ie = "bs.modal", oe = "." + ie, re = g.fn[ne], se = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
        ae = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, le = {
            HIDE: "hide" + oe,
            HIDE_PREVENTED: "hidePrevented" + oe,
            HIDDEN: "hidden" + oe,
            SHOW: "show" + oe,
            SHOWN: "shown" + oe,
            FOCUSIN: "focusin" + oe,
            RESIZE: "resize" + oe,
            CLICK_DISMISS: "click.dismiss" + oe,
            KEYDOWN_DISMISS: "keydown.dismiss" + oe,
            MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
            CLICK_DATA_API: "click" + oe + ".data-api"
        }, ce = "modal-dialog-scrollable", he = "modal-scrollbar-measure", ue = "modal-backdrop", fe = "modal-open", de = "fade", ge = "show",
        _e = "modal-static", me = ".modal-dialog", pe = ".modal-body", ve = '[data-toggle="modal"]', ye = '[data-dismiss="modal"]',
        Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ce = ".sticky-top", Te = function () {
            function o(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(me), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }

            var t = o.prototype;
            return t.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    g(this._element).hasClass(de) && (this._isTransitioning = !0);
                    var n = g.Event(le.SHOW, {relatedTarget: t});
                    g(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
                        return e.hide(t)
                    }), g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
                        g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
                            g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function (t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = g.Event(le.HIDE);
                    if (g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = g(this._element).hasClass(de);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), g(document).off(le.FOCUSIN), g(this._element).removeClass(ge), g(this._element).off(le.CLICK_DISMISS), g(this._dialog).off(le.MOUSEDOWN_DISMISS), i) {
                            var o = _.getTransitionDurationFromElement(this._element);
                            g(this._element).one(_.TRANSITION_END, function (t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function () {
                [window, this._element, this._dialog].forEach(function (t) {
                    return g(t).off(oe)
                }), g(document).off(le.FOCUSIN), g.removeData(this._element, ie), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, t.handleUpdate = function () {
                this._adjustDialog()
            }, t._getConfig = function (t) {
                return t = l({}, se, {}, t), _.typeCheckConfig(ne, t, ae), t
            }, t._triggerBackdropTransition = function () {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var e = g.Event(le.HIDE_PREVENTED);
                    if (g(this._element).trigger(e), e.defaultPrevented) return;
                    this._element.classList.add(_e);
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function () {
                        t._element.classList.remove(_e)
                    }).emulateTransitionEnd(n), this._element.focus()
                } else this.hide()
            }, t._showElement = function (t) {
                var e = this, n = g(this._element).hasClass(de), i = this._dialog ? this._dialog.querySelector(pe) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), g(this._dialog).hasClass(ce) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && _.reflow(this._element), g(this._element).addClass(ge), this._config.focus && this._enforceFocus();

                function o() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, g(e._element).trigger(r)
                }

                var r = g.Event(le.SHOWN, {relatedTarget: t});
                if (n) {
                    var s = _.getTransitionDurationFromElement(this._dialog);
                    g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, t._enforceFocus = function () {
                var e = this;
                g(document).off(le.FOCUSIN).on(le.FOCUSIN, function (t) {
                    document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && e._triggerBackdropTransition()
                }) : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function () {
                var e = this;
                this._isShown ? g(window).on(le.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : g(window).off(le.RESIZE)
            }, t._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    g(document.body).removeClass(fe), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(le.HIDDEN)
                })
            }, t._removeBackdrop = function () {
                this._backdrop && (g(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function (t) {
                var e = this, n = g(this._element).hasClass(de) ? de : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ue, n && this._backdrop.classList.add(n), g(this._backdrop).appendTo(document.body), g(this._element).on(le.CLICK_DISMISS, function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                    }), n && _.reflow(this._backdrop), g(this._backdrop).addClass(ge), !t) return;
                    if (!n) return void t();
                    var i = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    g(this._backdrop).removeClass(ge);
                    var o = function () {
                        e._removeBackdrop(), t && t()
                    };
                    if (g(this._element).hasClass(de)) {
                        var r = _.getTransitionDurationFromElement(this._backdrop);
                        g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else t && t()
            }, t._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function () {
                var o = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(Ee)), e = [].slice.call(document.querySelectorAll(Ce));
                    g(t).each(function (t, e) {
                        var n = e.style.paddingRight, i = g(e).css("padding-right");
                        g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), g(e).each(function (t, e) {
                        var n = e.style.marginRight, i = g(e).css("margin-right");
                        g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = g(document.body).css("padding-right");
                    g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                g(document.body).addClass(fe)
            }, t._resetScrollbar = function () {
                var t = [].slice.call(document.querySelectorAll(Ee));
                g(t).each(function (t, e) {
                    var n = g(e).data("padding-right");
                    g(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + Ce));
                g(e).each(function (t, e) {
                    var n = g(e).data("margin-right");
                    "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
                });
                var n = g(document.body).data("padding-right");
                g(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = he, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var t = g(this).data(ie), e = l({}, se, {}, g(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (t || (t = new o(this, e), g(this).data(ie, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(o, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return se
                }
            }]), o
        }();
    g(document).on(le.CLICK_DATA_API, ve, function (t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(le.SHOW, function (t) {
            t.isDefaultPrevented() || r.one(le.HIDDEN, function () {
                g(n).is(":visible") && n.focus()
            })
        });
        Te._jQueryInterface.call(g(e), o, this)
    }), g.fn[ne] = Te._jQueryInterface, g.fn[ne].Constructor = Te, g.fn[ne].noConflict = function () {
        return g.fn[ne] = re, Te._jQueryInterface
    };
    var be = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Se = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function we(t, r, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function (t) {
            var e = a[t], n = e.nodeName.toLowerCase();
            if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e), "continue";
            var i = [].slice.call(e.attributes), o = [].concat(r["*"] || [], r[n] || []);
            i.forEach(function (t) {
                !function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n)) return -1 === be.indexOf(n) || Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie));
                    for (var i = e.filter(function (t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                    return !1
                }(t, o) && e.removeAttribute(t.nodeName)
            })
        }, o = 0, l = a.length; o < l; o++) i(o);
        return n.body.innerHTML
    }

    var Ae = "tooltip", Ne = "bs.tooltip", Oe = "." + Ne, ke = g.fn[Ae], Pe = "bs-tooltip", Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
        je = ["sanitize", "whiteList", "sanitizeFn"], He = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }, Re = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, xe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Se,
            popperConfig: null
        }, Fe = "show", Ue = "out", We = {
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            SHOW: "show" + Oe,
            SHOWN: "shown" + Oe,
            INSERTED: "inserted" + Oe,
            CLICK: "click" + Oe,
            FOCUSIN: "focusin" + Oe,
            FOCUSOUT: "focusout" + Oe,
            MOUSEENTER: "mouseenter" + Oe,
            MOUSELEAVE: "mouseleave" + Oe
        }, qe = "fade", Me = "show", Ke = ".tooltip-inner", Qe = ".arrow", Be = "hover", Ve = "focus", Ye = "click", ze = "manual", Xe = function () {
            function i(t, e) {
                if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }

            var t = i.prototype;
            return t.enable = function () {
                this._isEnabled = !0
            }, t.disable = function () {
                this._isEnabled = !1
            }, t.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, n = g(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (g(this.getTipElement()).hasClass(Me)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), g.removeData(this.element, this.constructor.DATA_KEY), g(this.element).off(this.constructor.EVENT_KEY), g(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && g(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function () {
                var e = this;
                if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                var t = g.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    g(this.element).trigger(t);
                    var n = _.findShadowRoot(this.element), i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(), r = _.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(qe);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    g(o).data(this.constructor.DATA_KEY, this), g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l), g(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, o, this._getPopperConfig(a)), g(o).addClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                    var c = function () {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, g(e.element).trigger(e.constructor.Event.SHOWN), t === Ue && e._leave(null, e)
                    };
                    if (g(this.tip).hasClass(qe)) {
                        var h = _.getTransitionDurationFromElement(this.tip);
                        g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, t.hide = function (t) {
                function e() {
                    n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), g(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                }

                var n = this, i = this.getTipElement(), o = g.Event(this.constructor.Event.HIDE);
                if (g(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (g(i).removeClass(Me), "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop), this._activeTrigger[Ye] = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Be] = !1, g(this.tip).hasClass(qe)) {
                        var r = _.getTransitionDurationFromElement(i);
                        g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else e();
                    this._hoverState = ""
                }
            }, t.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function () {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function (t) {
                g(this.getTipElement()).addClass(Pe + "-" + t)
            }, t.getTipElement = function () {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()), g(t).removeClass(qe + " " + Me)
            }, t.setElementContent = function (t, e) {
                "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = we(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
            }, t.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, t._getPopperConfig = function (t) {
                var e = this;
                return l({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {behavior: this.config.fallbackPlacement},
                        arrow: {element: Qe},
                        preventOverflow: {boundariesElement: this.config.boundary}
                    },
                    onCreate: function (t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function (t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }, {}, this.config.popperConfig)
            }, t._getOffset = function () {
                var e = this, t = {};
                return "function" == typeof this.config.offset ? t.fn = function (t) {
                    return t.offsets = l({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, t._getContainer = function () {
                return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
            }, t._getAttachment = function (t) {
                return Re[t.toUpperCase()]
            }, t._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (t) {
                    if ("click" === t) g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                        return i.toggle(t)
                    }); else if (t !== ze) {
                        var e = t === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        g(i.element).on(e, i.config.selector, function (t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function (t) {
                            return i._leave(t)
                        })
                    }
                }), this._hideModalHandler = function () {
                    i.element && i.hide()
                }, g(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0), g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe ? e._hoverState = Fe : (clearTimeout(e._timeout), e._hoverState = Fe, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                    e._hoverState === Fe && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), g(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Ue, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                    e._hoverState === Ue && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function (t) {
                var e = g(this.element).data();
                return Object.keys(e).forEach(function (t) {
                    -1 !== je.indexOf(t) && delete e[t]
                }), "number" == typeof (t = l({}, this.constructor.Default, {}, e, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), _.typeCheckConfig(Ae, t, this.constructor.DefaultType), t.sanitize && (t.template = we(t.template, t.whiteList, t.sanitizeFn)), t
            }, t._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function () {
                var t = g(this.getTipElement()), e = t.attr("class").match(Le);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function () {
                var t = this.getTipElement(), e = this.config.animation;
                null === t.getAttribute("x-placement") && (g(t).removeClass(qe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = g(this).data(Ne), e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ne, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return xe
                }
            }, {
                key: "NAME", get: function () {
                    return Ae
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ne
                }
            }, {
                key: "Event", get: function () {
                    return We
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Oe
                }
            }, {
                key: "DefaultType", get: function () {
                    return He
                }
            }]), i
        }();
    g.fn[Ae] = Xe._jQueryInterface, g.fn[Ae].Constructor = Xe, g.fn[Ae].noConflict = function () {
        return g.fn[Ae] = ke, Xe._jQueryInterface
    };
    var $e = "popover", Ge = "bs.popover", Je = "." + Ge, Ze = g.fn[$e], tn = "bs-popover", en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
        nn = l({}, Xe.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), on = l({}, Xe.DefaultType, {content: "(string|element|function)"}), rn = "fade", sn = "show", an = ".popover-header",
        ln = ".popover-body", cn = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            INSERTED: "inserted" + Je,
            CLICK: "click" + Je,
            FOCUSIN: "focusin" + Je,
            FOCUSOUT: "focusout" + Je,
            MOUSEENTER: "mouseenter" + Je,
            MOUSELEAVE: "mouseleave" + Je
        }, hn = function (t) {
            function i() {
                return t.apply(this, arguments) || this
            }

            !function (t, e) {
                t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
            }(i, t);
            var e = i.prototype;
            return e.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, e.addAttachmentClass = function (t) {
                g(this.getTipElement()).addClass(tn + "-" + t)
            }, e.getTipElement = function () {
                return this.tip = this.tip || g(this.config.template)[0], this.tip
            }, e.setContent = function () {
                var t = g(this.getTipElement());
                this.setElementContent(t.find(an), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(ln), e), t.removeClass(rn + " " + sn)
            }, e._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, e._cleanTipClass = function () {
                var t = g(this.getTipElement()), e = t.attr("class").match(en);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = g(this).data(Ge), e = "object" == typeof n ? n : null;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), g(this).data(Ge, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return nn
                }
            }, {
                key: "NAME", get: function () {
                    return $e
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return Ge
                }
            }, {
                key: "Event", get: function () {
                    return cn
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return Je
                }
            }, {
                key: "DefaultType", get: function () {
                    return on
                }
            }]), i
        }(Xe);
    g.fn[$e] = hn._jQueryInterface, g.fn[$e].Constructor = hn, g.fn[$e].noConflict = function () {
        return g.fn[$e] = Ze, hn._jQueryInterface
    };
    var un = "scrollspy", fn = "bs.scrollspy", dn = "." + fn, gn = g.fn[un], _n = {offset: 10, method: "auto", target: ""},
        mn = {offset: "number", method: "string", target: "(string|element)"},
        pn = {ACTIVATE: "activate" + dn, SCROLL: "scroll" + dn, LOAD_DATA_API: "load" + dn + ".data-api"}, vn = "dropdown-item", yn = "active",
        En = '[data-spy="scroll"]', Cn = ".nav, .list-group", Tn = ".nav-link", bn = ".nav-item", Sn = ".list-group-item", Dn = ".dropdown",
        In = ".dropdown-item", wn = ".dropdown-toggle", An = "offset", Nn = "position", On = function () {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Tn + "," + this._config.target + " " + Sn + "," + this._config.target + " " + In, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, g(this._scrollElement).on(pn.SCROLL, function (t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }

            var t = n.prototype;
            return t.refresh = function () {
                var e = this, t = this._scrollElement === this._scrollElement.window ? An : Nn,
                    o = "auto" === this._config.method ? t : this._config.method, r = o === Nn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                    var e, n = _.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [g(e)[o]().top + r, n]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function () {
                g.removeData(this._element, fn), g(this._scrollElement).off(dn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function (t) {
                if ("string" != typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {})).target) {
                    var e = g(t.target).attr("id");
                    e || (e = _.getUID(un), g(t.target).attr("id", e)), t.target = "#" + e
                }
                return _.typeCheckConfig(un, t, mn), t
            }, t._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, t._activate = function (e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",").map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                }), n = g([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(vn) ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn)) : (n.addClass(yn), n.parents(Cn).prev(Tn + ", " + Sn).addClass(yn), n.parents(Cn).prev(bn).children(Tn).addClass(yn)), g(this._scrollElement).trigger(pn.ACTIVATE, {relatedTarget: e})
            }, t._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
                    return t.classList.contains(yn)
                }).forEach(function (t) {
                    return t.classList.remove(yn)
                })
            }, n._jQueryInterface = function (e) {
                return this.each(function () {
                    var t = g(this).data(fn);
                    if (t || (t = new n(this, "object" == typeof e && e), g(this).data(fn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default", get: function () {
                    return _n
                }
            }]), n
        }();
    g(window).on(pn.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll(En)), e = t.length; e--;) {
            var n = g(t[e]);
            On._jQueryInterface.call(n, n.data())
        }
    }), g.fn[un] = On._jQueryInterface, g.fn[un].Constructor = On, g.fn[un].noConflict = function () {
        return g.fn[un] = gn, On._jQueryInterface
    };
    var kn = "bs.tab", Pn = "." + kn, Ln = g.fn.tab,
        jn = {HIDE: "hide" + Pn, HIDDEN: "hidden" + Pn, SHOW: "show" + Pn, SHOWN: "shown" + Pn, CLICK_DATA_API: "click" + Pn + ".data-api"},
        Hn = "dropdown-menu", Rn = "active", xn = "disabled", Fn = "fade", Un = "show", Wn = ".dropdown", qn = ".nav, .list-group", Mn = ".active",
        Kn = "> li > .active", Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Bn = ".dropdown-toggle",
        Vn = "> .dropdown-menu .active", Yn = function () {
            function i(t) {
                this._element = t
            }

            var t = i.prototype;
            return t.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Rn) || g(this._element).hasClass(xn))) {
                    var t, i, e = g(this._element).closest(qn)[0], o = _.getSelectorFromElement(this._element);
                    if (e) {
                        var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                        i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                    }
                    var s = g.Event(jn.HIDE, {relatedTarget: this._element}), a = g.Event(jn.SHOW, {relatedTarget: i});
                    if (i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (t = document.querySelector(o)), this._activate(this._element, e);
                        var l = function () {
                            var t = g.Event(jn.HIDDEN, {relatedTarget: n._element}), e = g.Event(jn.SHOWN, {relatedTarget: i});
                            g(i).trigger(t), g(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function () {
                g.removeData(this._element, kn), this._element = null
            }, t._activate = function (t, e, n) {
                function i() {
                    return o._transitionComplete(t, r, n)
                }

                var o = this, r = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Mn) : g(e).find(Kn))[0],
                    s = n && r && g(r).hasClass(Fn);
                if (r && s) {
                    var a = _.getTransitionDurationFromElement(r);
                    g(r).removeClass(Un).one(_.TRANSITION_END, i).emulateTransitionEnd(a)
                } else i()
            }, t._transitionComplete = function (t, e, n) {
                if (e) {
                    g(e).removeClass(Rn);
                    var i = g(e.parentNode).find(Vn)[0];
                    i && g(i).removeClass(Rn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (g(t).addClass(Rn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(Fn) && t.classList.add(Un), t.parentNode && g(t.parentNode).hasClass(Hn)) {
                    var o = g(t).closest(Wn)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Bn));
                        g(r).addClass(Rn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = g(this), e = t.data(kn);
                    if (e || (e = new i(this), t.data(kn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }]), i
        }();
    g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
        t.preventDefault(), Yn._jQueryInterface.call(g(this), "show")
    }), g.fn.tab = Yn._jQueryInterface, g.fn.tab.Constructor = Yn, g.fn.tab.noConflict = function () {
        return g.fn.tab = Ln, Yn._jQueryInterface
    };
    var zn = "toast", Xn = "bs.toast", $n = "." + Xn, Gn = g.fn[zn],
        Jn = {CLICK_DISMISS: "click.dismiss" + $n, HIDE: "hide" + $n, HIDDEN: "hidden" + $n, SHOW: "show" + $n, SHOWN: "shown" + $n}, Zn = "fade",
        ti = "hide", ei = "show", ni = "showing", ii = {animation: "boolean", autohide: "boolean", delay: "number"},
        oi = {animation: !0, autohide: !0, delay: 500}, ri = '[data-dismiss="toast"]', si = function () {
            function i(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }

            var t = i.prototype;
            return t.show = function () {
                var t = this, e = g.Event(Jn.SHOW);
                if (g(this._element).trigger(e), !e.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add(Zn);
                    var n = function () {
                        t._element.classList.remove(ni), t._element.classList.add(ei), g(t._element).trigger(Jn.SHOWN), t._config.autohide && (t._timeout = setTimeout(function () {
                            t.hide()
                        }, t._config.delay))
                    };
                    if (this._element.classList.remove(ti), _.reflow(this._element), this._element.classList.add(ni), this._config.animation) {
                        var i = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, t.hide = function () {
                if (this._element.classList.contains(ei)) {
                    var t = g.Event(Jn.HIDE);
                    g(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, t.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ei) && this._element.classList.remove(ei), g(this._element).off(Jn.CLICK_DISMISS), g.removeData(this._element, Xn), this._element = null, this._config = null
            }, t._getConfig = function (t) {
                return t = l({}, oi, {}, g(this._element).data(), {}, "object" == typeof t && t ? t : {}), _.typeCheckConfig(zn, t, this.constructor.DefaultType), t
            }, t._setListeners = function () {
                var t = this;
                g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
                    return t.hide()
                })
            }, t._close = function () {
                function t() {
                    e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN)
                }

                var e = this;
                if (this._element.classList.remove(ei), this._config.animation) {
                    var n = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var t = g(this), e = t.data(Xn);
                    if (e || (e = new i(this, "object" == typeof n && n), t.data(Xn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION", get: function () {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType", get: function () {
                    return ii
                }
            }, {
                key: "Default", get: function () {
                    return oi
                }
            }]), i
        }();
    g.fn[zn] = si._jQueryInterface, g.fn[zn].Constructor = si, g.fn[zn].noConflict = function () {
        return g.fn[zn] = Gn, si._jQueryInterface
    }, t.Alert = v, t.Button = H, t.Carousel = ut, t.Collapse = wt, t.Dropdown = ee, t.Modal = Te, t.Popover = hn, t.Scrollspy = On, t.Tab = Yn, t.Toast = si, t.Tooltip = Xe, t.Util = _, Object.defineProperty(t, "__esModule", {value: !0})
});


/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function (b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        }, rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0], k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case"add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case"remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        }, filled: function (b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
                        var e = a.data(this.form, "validator"), f = "on" + b.type.replace(/^validate/, ""), g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.currentForm, e = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        e[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            }, showErrors: function (b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
                        return {message: a, element: c.findByName(b)[0]}
                    }), this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            }, resetElements: function (a) {
                var b;
                if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var d = this.name || a(this).attr("name"),
                        e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0))
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c, d, e = a(b), f = b.type, g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(), h = a.map(g, function (a, b) {
                    return b
                }).length, i = !1, j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) {
                    e = {method: d, parameters: g[d]};
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            }, customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
            }, defaultMessage: function (b, c) {
                "string" == typeof c && (c = {method: c});
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            }, formatAndAdd: function (a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({message: c, element: a, method: b.method}), this.errorMap[a.name] = c, this.submitted[a.name] = c
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            }, errorsFor: function (b) {
                var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            }, escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {method: c})
                })
            }, destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case"string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case"function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0
            }, email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            }, date: function () {
                var a = !1;
                return function (b, c) {
                    return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                }
            }(), dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || a <= c
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, step: function (b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function (a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    }, l = function (a) {
                        return Math.round(a * Math.pow(10, e))
                    }, m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }, remote: function (b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {url: d} || d, h = a.param(a.extend({data: b}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function (a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});

// jQuery Typing
(function (f) {
    function l(g, h) {
        function d(a) {
            if (!e) {
                e = true;
                c.start && c.start(a, b)
            }
        }

        function i(a, j) {
            if (e) {
                clearTimeout(k);
                k = setTimeout(function () {
                    e = false;
                    c.stop && c.stop(a, b)
                }, j >= 0 ? j : c.delay)
            }
        }

        var c = f.extend({start: null, stop: null, delay: 400}, h), b = f(g), e = false, k;
        b.keypress(d);
        b.keydown(function (a) {
            if (a.keyCode === 8 || a.keyCode === 46) d(a)
        });
        b.keyup(i);
        b.blur(function (a) {
            i(a, 0)
        })
    }

    f.fn.typing = function (g) {
        return this.each(function (h, d) {
            l(d, g)
        })
    }
})(jQuery);