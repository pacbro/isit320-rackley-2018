(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        14: function(e, n, t) {},
        16: function(e, n, t) {},
        18: function(e, n, t) {
            'use strict';
            t.r(n);
            var a = t(0),
                o = t.n(a),
                r = t(2),
                c = t.n(r),
                i = (t(14), t(3)),
                l = t(4),
                s = t(7),
                p = t(5),
                u = t(8),
                d = t(6),
                h = t.n(d),
                m = (t(16),
                (function(e) {
                    function n() {
                        var e, t;
                        Object(i.a)(this, n);
                        for (
                            var a = arguments.length, o = new Array(a), r = 0;
                            r < a;
                            r++
                        )
                            o[r] = arguments[r];
                        return (
                            ((t = Object(s.a)(
                                this,
                                (e = Object(p.a)(n)).call.apply(
                                    e,
                                    [this].concat(o)
                                )
                            )).copyScript = function() {
                                fetch('/script-pusher/copy-script')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('parsed json', e);
                                    })
                                    .catch(function(e) {
                                        console.log('parsing failed', e);
                                    });
                            }),
                            t
                        );
                    }
                    return (
                        Object(u.a)(n, e),
                        Object(l.a)(n, [
                            {
                                key: 'render',
                                value: function() {
                                    return o.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        o.a.createElement(
                                            'header',
                                            { className: 'App-header' },
                                            o.a.createElement('img', {
                                                src: h.a,
                                                className: 'App-logo',
                                                alt: 'logo'
                                            }),
                                            o.a.createElement(
                                                'p',
                                                null,
                                                'Edit ',
                                                o.a.createElement(
                                                    'code',
                                                    null,
                                                    'src/App.js'
                                                ),
                                                ' and save to reload.'
                                            ),
                                            o.a.createElement(
                                                'a',
                                                {
                                                    className: 'App-link',
                                                    href: 'https://reactjs.org',
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer'
                                                },
                                                'Learn React'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        n
                    );
                })(a.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            c.a.render(
                o.a.createElement(m, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        6: function(e, n, t) {
            e.exports = t.p + 'static/media/logo.5d5d9eef.svg';
        },
        9: function(e, n, t) {
            e.exports = t(18);
        }
    },
    [[9, 2, 1]]
]);
//# sourceMappingURL=main.6f0efef8.chunk.js.map
