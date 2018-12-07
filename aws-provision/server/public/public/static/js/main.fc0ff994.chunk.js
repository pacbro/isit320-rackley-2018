(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        10: function(t, e, a) {
            t.exports = a(20);
        },
        15: function(t, e, a) {},
        17: function(t, e, a) {},
        20: function(t, e, a) {
            'use strict';
            a.r(e);
            var n = a(0),
                c = a.n(n),
                o = a(3),
                r = a.n(o),
                i = (a(15), a(4)),
                s = a(5),
                l = a(8),
                u = a(6),
                d = a(9),
                h = a(1),
                p = a(7),
                f = a.n(p),
                m = (a(17),
                a(19),
                (function(t) {
                    function e() {
                        var t;
                        return (
                            Object(i.a)(this, e),
                            ((t = Object(l.a)(
                                this,
                                Object(u.a)(e).call(this)
                            )).queryServer = function() {
                                var e = Object(h.a)(Object(h.a)(t));
                                fetch('/foo')
                                    .then(function(t) {
                                        return t.json();
                                    })
                                    .then(function(t) {
                                        console.log('parsed json', t),
                                            e.setState(function(e) {
                                                return t;
                                            });
                                    })
                                    .catch(function(t) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            t
                                        );
                                    });
                            }),
                            (t.createEducate = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/create-educate');
                            }),
                            (t.createWithAwsStandardAccount = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/create-standard');
                            }),
                            (t.associateElasticIp = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/associate-elastic-ip');
                            }),
                            (t.copyGetStarted = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/script-pusher/copy-get-started');
                            }),
                            (t.runGetStarted = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/script-pusher/run-get-started');
                            }),
                            (t.removeKnownHost = function() {
                                Object(h.a)(Object(h.a)(t));
                                fetch('/script-pusher/remove-known-host');
                            }),
                            (t.state = {
                                file: 'File name will be placed here.',
                                status: 'waiting for server'
                            }),
                            t
                        );
                    }
                    return (
                        Object(d.a)(e, t),
                        Object(s.a)(e, [
                            {
                                key: 'render',
                                value: function() {
                                    return c.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        c.a.createElement(
                                            'div',
                                            { className: 'App-header' },
                                            c.a.createElement('img', {
                                                src: f.a,
                                                className: 'App-logo',
                                                alt: 'logo'
                                            }),
                                            c.a.createElement(
                                                'h2',
                                                null,
                                                'Welcome to React'
                                            )
                                        ),
                                        c.a.createElement(
                                            'p',
                                            { className: 'App-intro' },
                                            'state: ',
                                            this.state.status,
                                            ' file: ',
                                            this.state.file
                                        ),
                                        c.a.createElement(
                                            'button',
                                            { onClick: this.queryServer },
                                            'Bar'
                                        ),
                                        c.a.createElement(
                                            'div',
                                            null,
                                            c.a.createElement(
                                                'button',
                                                { onClick: this.createEducate },
                                                'Create with AWS Educate Account'
                                            ),
                                            c.a.createElement(
                                                'button',
                                                {
                                                    onClick: this
                                                        .createWithAwsStandardAccount
                                                },
                                                'Create with AWS Standard Account'
                                            ),
                                            c.a.createElement(
                                                'button',
                                                {
                                                    onClick: this
                                                        .associateElasticIp
                                                },
                                                'Associate Elastic Ip'
                                            ),
                                            c.a.createElement(
                                                'button',
                                                {
                                                    onClick: this.copyGetStarted
                                                },
                                                'Copy the GetStarted Script'
                                            ),
                                            c.a.createElement(
                                                'button',
                                                {
                                                    onClick: this
                                                        .removeKnownHost
                                                },
                                                'Remove from KnownHost'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        e
                    );
                })(n.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            r.a.render(
                c.a.createElement(m, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(t) {
                        t.unregister();
                    });
        },
        7: function(t, e, a) {
            t.exports = a.p + 'static/media/logo.5d5d9eef.svg';
        }
    },
    [[10, 2, 1]]
]);
//# sourceMappingURL=main.fc0ff994.chunk.js.map
