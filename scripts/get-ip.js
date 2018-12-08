#!/usr/bin/env node

var os = require('os');
var ifaces = os.networkInterfaces();

// Based on something found here: https://stackoverflow.com/a/8440736/253576
Object.keys(ifaces).forEach(function (ifname) {
  'use strict';
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(iface.address);
    }
    ++alias;
  });
});