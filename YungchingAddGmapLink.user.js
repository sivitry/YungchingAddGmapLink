// ==UserScript==
// @name         YungchingAddGmapLink
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       You
// @match        https://buy.yungching.com.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("123")

    // get message include lat, lng
    var link= document.querySelector("body > main > section.m-house-detail-block.detail-data > section.m-house-detail-list.bg-price > ul > li.right > a");

    console.log(link)

    // filter lat, lng
    var x = link.href.indexOf('x=')
    var y = link.href.indexOf('y=')
    console.log(x)
    console.log(y)
    var start, end

    start = x+2
    end = y-1
    var lat = link.href.substring(start,end)

    start = y+2
    end = y+13
    var lng = link.href.substring(start,end)
    console.log(lat)
    console.log(lng)

    //assemble gmap URL like: "https://www.google.com.tw/maps/place/25.059498137693,121.5243753898"
    var gmaplink = "https://www.google.com.tw/maps/place/"+lat+','+lng
    console.log(gmaplink)

    // add link on address
    var anchor = document.querySelector("body > main > section.m-house-infomation > div.m-house-infos > div.m-info-house > div > div.house-info-addr");
    var createA = document.createElement('a');
    var createAText = document.createTextNode(anchor.textContent);
    createA.setAttribute('href', gmaplink);
    createA.setAttribute('target', '_blank');
    createA.appendChild(createAText);
    anchor.textContent="";
    anchor.appendChild(createA);
})();
