"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{1393:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var r=n(8362),i=n(7067),u=n(7773),a=function(t,e,n,a,c){var o=t.ownerDocument.defaultView,s=(0,i.i)(t),f=function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50},h=function(t){return s?-t.deltaX:t.deltaX},d=function(n){return s=(0,i.i)(t),f(n)&&e()},l=function(t){var e=h(t)/o.innerWidth;a(e)},v=function(t){var e,n=h(t),i=o.innerWidth,u=n/i,a=s?-t.velocityX:t.velocityX,f=a>=0&&(a>.2||n>i/2),d=(f?1-u:u)*i,l=0;d>5&&(l=Math.min(d/Math.abs(a),540)),c(f,u<=0?.01:(0,r.h)(0,u,.9999),l)};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:d,onStart:n,onMove:l,onEnd:v})}}}]);