"use strict";var F=Math.pow;(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[9089],{53265:(st,Q,z)=>{function X(o){return"h"in o&&"s"in o&&"v"in o}function T(o){return"l"in o&&"a"in o&&"b"in o}function K(o){return"l"in o&&"c"in o&&"h"in o}function V(o){return"x"in o&&"y"in o&&"z"in o}z.d(Q,{_Y:()=>i,Y3:()=>C,sJ:()=>rt,xr:()=>u});const at=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],W=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function P(o,p){const d=[];let y,b;if(o[0].length!==p.length)throw"dimensions do not match";const Z=o.length,j=o[0].length;let B=0;for(y=0;y<Z;y++){for(B=0,b=0;b<j;b++)B+=o[y][b]*p[b];d.push(B)}return d}function R(o){const p=[o.r/255,o.g/255,o.b/255].map(y=>y<=.04045?y/12.92:F((y+.055)/1.055,2.4)),d=P(at,p);return{x:100*d[0],y:100*d[1],z:100*d[2]}}function U(o){const p=P(W,[o.x/100,o.y/100,o.z/100]).map(d=>{const y=d<=.0031308?12.92*d:1.055*F(d,1/2.4)-.055;return Math.min(1,Math.max(y,0))});return{r:Math.round(255*p[0]),g:Math.round(255*p[1]),b:Math.round(255*p[2])}}function q(o){const p=[o.x/95.047,o.y/100,o.z/108.883].map(d=>d>F(6/29,3)?F(d,1/3):1/3*F(29/6,2)*d+4/29);return{l:116*p[1]-16,a:500*(p[0]-p[1]),b:200*(p[1]-p[2])}}function Y(o){const p=o.l,d=[(p+16)/116+o.a/500,(p+16)/116,(p+16)/116-o.b/200].map(y=>y>6/29?F(y,3):3*F(6/29,2)*(y-4/29));return{x:95.047*d[0],y:100*d[1],z:108.883*d[2]}}function l(o){return q(R(o))}function r(o){return U(Y(o))}function v(o){return function(o){const p=o.l,d=o.a,y=o.b,b=Math.sqrt(d*d+y*y);let Z=Math.atan2(y,d);return Z=Z>0?Z:Z+2*Math.PI,{l:p,c:b,h:Z}}(q(R(o)))}function m(o){return U(Y(function(o){const p=o.l,d=o.c,y=o.h;return{l:p,a:d*Math.cos(y),b:d*Math.sin(y)}}(o)))}function u(o){return function(o){return"r"in o&&"g"in o&&"b"in o}(o)?o:K(o)?m(o):T(o)?r(o):V(o)?U(o):X(o)?function(o){const p=(o.h+360)%360/60,d=o.s/100,y=o.v/100*255,b=y*d,Z=b*(1-Math.abs(p%2-1));let j;switch(Math.floor(p)){case 0:j={r:b,g:Z,b:0};break;case 1:j={r:Z,g:b,b:0};break;case 2:j={r:0,g:b,b:Z};break;case 3:j={r:0,g:Z,b};break;case 4:j={r:Z,g:0,b};break;case 5:case 6:j={r:b,g:0,b:Z};break;default:j={r:0,g:0,b:0}}return j.r=Math.round(j.r+y-b),j.g=Math.round(j.g+y-b),j.b=Math.round(j.b+y-b),j}(o):o}function i(o){return X(o)?o:function(o){const p=o.r,d=o.g,y=o.b,b=Math.max(p,d,y),Z=b-Math.min(p,d,y);let j=b,B=0===Z?0:b===p?(d-y)/Z%6:b===d?(y-p)/Z+2:(p-d)/Z+4,ot=0===Z?0:Z/j;return B<0&&(B+=6),B*=60,ot*=100,j*=100/255,{h:B,s:ot,v:j}}(u(o))}function C(o){return T(o)?o:l(u(o))}function rt(o){return K(o)?o:v(u(o))}},65864:(st,Q,z)=>{z.d(Q,{dc:()=>M,uH:()=>Y,TE:()=>P,Pc:()=>at,EB:()=>W,XX:()=>U,EV:()=>K,DY:()=>R,eb:()=>T,tp:()=>q,ht:()=>V,JZ:()=>X});var O=z(28503);const X={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function T(h,l,r){let m=22,x=22;h<1?m*=.75:h>1&&(x*=1.25);let i=22,C=22;return l&&r&&(m=x=i=C=0),[{type:"path",path:[{command:"M",values:[i,0]},{command:"L",values:[r?i:.875*i,0]},{command:"L",values:[r?m-.5*i:0,x-.5*C]},{command:"L",values:[m-.5*i,x-.5*C]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[i,0]},{command:"L",values:[i,l?0:.125*C]},{command:"L",values:[m-.5*i,l?x-.5*C:C]},{command:"L",values:[m-.5*i,x-.5*C]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[m-.5*i,x-.5*C]},{command:"L",values:[r?m-.5*i:0,x-.5*C]},{command:"L",values:[r?m-.5*i:0,l?x-.5*C:C]},{command:"L",values:[m-.5*i,l?x-.5*C:C]},{command:"Z",values:[]}]}]}function K(h){const l=22,r=.5*h;return[{type:"path",path:[{command:"M",values:[0,.7*l*.5]},{command:"L",values:[6.6,.7*l]},{command:"L",values:[6.6,.7*l+r]},{command:"L",values:[0,.7*l+r-.7*l*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,.7*l]},{command:"L",values:[6.6,.7*l+r]},{command:"L",values:[l,r]},{command:"L",values:[l,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,0]},{command:"L",values:[l,0]},{command:"L",values:[6.6,.7*l]},{command:"L",values:[0,.7*l*.5]},{command:"Z",values:[]}]}]}function V(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function at(h,l){let r=l?20:h;const v=l?4:6;r-=r<=22?.5*v:v;const L=l?.35*r:.5*r;return[{type:"path",path:[{command:"M",values:[.5*r,0]},{command:"L",values:[r,.5*L]},{command:"L",values:[.5*r,L]},{command:"L",values:[0,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*r,L]},{command:"L",values:[.5*r,h]},{command:"L",values:[0,h-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*r,L]},{command:"L",values:[.5*r,h]},{command:"L",values:[r,h-.5*L]},{command:"L",values:[r,.5*L]},{command:"Z",values:[]}]}]}function W(h,l){let r=l?20:h;const v=l?4:6;r-=r<=22?.5*v:v;const m=.5*r,x=.15*r,u=h-x;return[{type:"ellipse",cx:.5*r,cy:u,rx:m,ry:x},{type:"path",path:[{command:"M",values:[0,x]},{command:"L",values:[0,u]},{command:"L",values:[r,u]},{command:"L",values:[r,x]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*r,cy:x,rx:m,ry:x}]}function P(h,l){let r=l?20:h;const v=l?4:6;r-=r<=22?.5*v:v;const m=.15*r,x=h-m;return[{type:"ellipse",cx:.5*r,cy:x,rx:.5*r,ry:m},{type:"path",path:[{command:"M",values:[.5*r,0]},{command:"L",values:[r,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]}]}function R(h){let l=h;l-=l<22?3:6;const v=.15*l;return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[.5*l,h-v]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*l,cy:0,rx:.5*l,ry:v}]}function U(h){let l=h;const r=h;l-=l<22?2:4;const L=l,u=r,i=Math.floor(h/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*L,0]},{command:"L",values:[L,.5*u-i]},{command:"L",values:[.45*L-i,.5*u+i]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,0]},{command:"L",values:[.45*L-i,.5*u+i]},{command:"L",values:[0,.5*u-i]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*u-i]},{command:"L",values:[.45*L-i,.5*u+i]},{command:"L",values:[.45*L,r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,r]},{command:"L",values:[L,.5*u-i]},{command:"L",values:[.45*L-i,.5*u+i]},{command:"Z",values:[]}]}]}function q(h){let r=h;r-=r<22?1:2;return[{type:"path",path:[{command:"M",values:[.45*h,0]},{command:"L",values:[h,r]},{command:"L",values:[.45*h,.6*r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*h,0]},{command:"L",values:[.45*h,.6*r]},{command:"L",values:[0,r]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,r]},{command:"L",values:[.45*h,.6*r]},{command:"L",values:[h,r]},{command:"Z",values:[]}]}]}function Y(h,l){return Math.round(Math.min(Math.max(h+255*l*.75,0),255))}function M(h,l){if("type"in h&&("linear"===h.type||"pattern"===h.type))return h;const r=new O.Z(h);return new O.Z([Y(r.r,l),Y(r.g,l),Y(r.b,l),r.a])}},942:(st,Q,z)=>{z.d(Q,{w:()=>xt,r:()=>Zt});var O=z(77871),X=z(30351),T=z(53265),K=z(61414),V=z(30627),W=(z(99433),z(64891)),P=z(28503),R=z(63319),U=z(62039),M=(z(75732),z(22345),z(19700));let l=0,r=0;const v=(0,V.Z)("android"),m=(0,V.Z)("chrome")||v&&v>=4?"auto":"optimizeLegibility",x={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},L=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let u={},i={};const C={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},rt=Math.PI;let lt=1;function J(t,e){const n=t*(rt/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function o(t){return t.map(e=>`${e.command} ${e.values.join(" ")}`).join(" ").trim()}function p(t,e,n,a){if(t){if("circle"===t.type)return(0,M.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,M.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,M.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,M.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const c="string"!=typeof t.path?o(t.path):t.path;return(0,M.u)("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:c})}if("text"===t.type)return(0,M.u)("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":a.align,"text-decoration":a.decoration,kerning:a.kerning,rotate:a.rotate,"text-rendering":m,"font-style":a.font.style,"font-variant":a.font.variant,"font-weight":a.font.weight,"font-size":a.font.size,"font-family":a.font.family,x:t.x,y:t.y},t.text)}return null}function d(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++l;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++r;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map(a=>({offset:a.offset,color:a.color&&new P.Z(a.color).toString()}))}}else if(t){const n=new P.Z(t);e.fill=n.toString()}return e}function y(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new P.Z(t.color).toString()),t.style)){let n=null;if(t.style in C&&(n=C[t.style]),Array.isArray(n)){n=n.slice(0);for(let a=0;a<n.length;++a)n[a]*=t.width;if("butt"!==t.cap){for(let a=0;a<n.length;a+=2)n[a]-=t.width,n[a]<1&&(n[a]=1);for(let a=1;a<n.length;a+=2)n[a]+=t.width}n=n.join(",")}e.dashArray=n}return e}function b(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function Z(t){const{pattern:e,linearGradient:n}=t;if(e)return(0,M.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,M.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const a=n.stops.map((c,s)=>(0,M.u)("stop",{key:`${s}-stop`,offset:c.offset,"stop-color":c.color}));return(0,M.u)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},a)}return null}function j(t,e,n){return(0,U.t)(t,(0,U.i)(t),[e,n])}function B(t,e,n,a,c){return(0,U.s)(t,(0,U.i)(t),[e,n]),t[4]=t[4]*e-a*e+a,t[5]=t[5]*n-c*n+c,t}function $(t,e){u&&"left"in u?(u.left>t&&(u.left=t),u.right<t&&(u.right=t),u.top>e&&(u.top=e),u.bottom<e&&(u.bottom=e)):u={left:t,bottom:e,right:t,top:e}}function ct(t){const e=t.args,n=e.length;let a;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(a=0;a<n;a+=2)$(e[a],e[a+1]);i.x=e[n-2],i.y=e[n-1];break;case"H":for(a=0;a<n;++a)$(e[a],i.y);i.x=e[n-1];break;case"V":for(a=0;a<n;++a)$(i.x,e[a]);i.y=e[n-1];break;case"m":{let c=0;for(("x"in i||($(i.x=e[0],i.y=e[1]),c=2),a=c);a<n;a+=2)$(i.x+=e[a],i.y+=e[a+1]);break}case"l":case"t":for(a=0;a<n;a+=2)$(i.x+=e[a],i.y+=e[a+1]);break;case"h":for(a=0;a<n;++a)$(i.x+=e[a],i.y);break;case"v":for(a=0;a<n;++a)$(i.x,i.y+=e[a]);break;case"c":for(a=0;a<n;a+=6)$(i.x+e[a],i.y+e[a+1]),$(i.x+e[a+2],i.y+e[a+3]),$(i.x+=e[a+4],i.y+=e[a+5]);break;case"s":case"q":for(a=0;a<n;a+=4)$(i.x+e[a],i.y+e[a+1]),$(i.x+=e[a+2],i.y+=e[a+3]);break;case"A":for(a=0;a<n;a+=7)$(e[a+5],e[a+6]);i.x=e[n-2],i.y=e[n-1];break;case"a":for(a=0;a<n;a+=7)$(i.x+=e[a+5],i.y+=e[a+6])}}function ht(t,e,n){const a=x[t.toLowerCase()];let c;"number"==typeof a&&(a?e.length>=a&&(c={action:t,args:e.slice(0,e.length-e.length%a)},n.push(c),ct(c)):(c={action:t,args:[]},n.push(c),ct(c)))}function mt(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=function(t){const e=("string"!=typeof t.path?o(t.path):t.path).match(L),n=[];if(u={},i={},!e)return null;let a="",c=[];const s=e.length;for(let w=0;w<s;++w){const g=e[w],S=parseFloat(g);isNaN(S)?(a&&ht(a,c,n),c=[],a=g):c.push(S)}ht(a,c,n);const f={x:0,y:0,width:0,height:0};return u&&"left"in u&&(f.x=u.left,f.y=u.top,f.width=u.right-u.left,f.height=u.bottom-u.top),f}(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function pt(t){const e={x:0,y:0,width:0,height:0};let n=null,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;for(const s of t)n?(n.x=Math.min(n.x,s.x),n.y=Math.min(n.y,s.y),a=Math.max(a,s.x+s.width),c=Math.max(c,s.y+s.height)):(n=e,n.x=s.x,n.y=s.y,a=s.x+s.width,c=s.y+s.height);return n&&(n.width=a-n.x,n.height=c-n.y),n}function ft(t,e,n,a,c,s,f,w,g){let S=(f&&s?J(s,e):e)/2,E=(f&&s?J(s,n):n)/2;if(g){const N=g[0],D=g[1];S=(f&&s?J(s,N):N)/2,E=(f&&s?J(s,D):D)/2}const I=t.width+a,A=t.height+a,G=(0,R.c)(),k=(0,R.c)();let _=!1;if(c&&0!==I&&0!==A){const N=I/A,D=e>n?e:n;let H=1,nt=1;isNaN(D)||(N>1?(H=D/I,nt=D/N/A):(nt=D/A,H=D*N/I)),(0,U.m)(k,k,B(G,H,nt,S,E)),_=!0}const tt=t.x+(I-a)/2,et=t.y+(A-a)/2;if((0,U.m)(k,k,j(G,S-tt,E-et)),!_&&(I>e||A>n)){const N=I/e>A/n,D=(N?e:n)/(N?I:A);(0,U.m)(k,k,B(G,D,D,tt,et))}return s&&(0,U.m)(k,k,function(t,e,n,a){const c=e%360*Math.PI/180;(0,U.r)(t,(0,U.i)(t),c);const s=Math.cos(c),f=Math.sin(c),w=t[4],g=t[5];return t[4]=w*s-g*f+a*f-n*s+n,t[5]=g*s+w*f-n*f-a*s+a,t}(G,s,tt,et)),w&&(0,U.m)(k,k,j(G,w[0],w[1])),`matrix(${k[0]},${k[1]},${k[2]},${k[3]},${k[4]},${k[5]})`}function Lt(t,e,n,a){const c=[],s=[],f=++lt,w=function(t,e,n){const a=null==t?void 0:t.effects.find(S=>"bloom"===S.type);if(!a)return null;const{strength:c,radius:s}=a,f=c>0?s:0,w=(c+f)*e,g=4*c+1;return(0,M.u)("filter",{id:`bloom${n}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,M.u)("feMorphology",{operator:"dilate",radius:(c+.5*f)*(F(5,e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,M.u)("feGaussianBlur",{in:"dilate",stdDeviation:w/25,result:"blur"}),(0,M.u)("feGaussianBlur",{in:"blur",stdDeviation:w/50,result:"intensityBlur"}),(0,M.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,M.u)("feFuncR",{type:"linear",slope:g}),(0,M.u)("feFuncG",{type:"linear",slope:g}),(0,M.u)("feFuncB",{type:"linear",slope:g})),(0,M.u)("feMerge",null,(0,M.u)("feMergeNode",{in:"intensityBlur"}),(0,M.u)("feMergeNode",{in:"intensityBrightness"}),(0,M.u)("feGaussianBlur",{stdDeviation:c/10})))}(null==a?void 0:a.effectView,e,f);let g=null;if(w){var S;const E=null==a||null==(S=a.effectView)?void 0:S.effects.find(k=>"bloom"===k.type),I=(E.strength?E.strength+E.radius/2:0)/3,A=e+e*I,G=n+n*I;g=[Math.max(A,10),Math.max(G,10)]}for(const E of t){const I=[],A=[];let G=0,k=0,_=0;for(const et of E){const{shape:N,fill:D,stroke:H,font:nt,offset:it}=et;G+=H&&H.width||0;const ut=d(D),jt=y(H),zt="text"===N.type?b(N,nt):null;c.push(Z(ut)),I.push(p(N,ut.fill,jt,zt)),A.push(mt(N)),it&&(k+=it[0],_+=it[1])}const tt=ft(pt(A),e,n,G,null==a?void 0:a.scale,null==a?void 0:a.rotation,null==a?void 0:a.useRotationSize,[k,_],g);s.push((0,M.u)("g",{transform:tt},I))}return null!=a&&a.useRotationSize&&null!=a&&a.rotation&&(e=J(null==a?void 0:a.rotation,e),n=J(null==a?void 0:a.rotation,n)),w&&(e=g[0],n=g[1]),(0,M.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:n},w,(0,M.u)("defs",null,c),w?(0,M.u)("g",{filter:`url(#bloom${f})`},s):s)}var gt=z(71185);const vt=(0,W.E)();function xt(t,e,n){const a=Math.ceil(e[0]),c=Math.ceil(e[1]);if(!t.some(f=>!!f.length))return null;const s=n&&n.node||document.createElement("div");return null!=n.opacity&&(s.style.opacity=n.opacity.toString()),null!=n.effectView&&(s.style.filter=(0,gt.wJ)(n.effectView)),vt.append(s,Lt.bind(null,t,a,c,n)),s}function kt(t,e,n,a,c){switch(c){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const s=(0,T._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});s.h=a.h,s.s=a.s,s.v=s.v/100*a.v;const f=(0,T.xr)(s);t[e+0]=f.r,t[e+1]=f.g,t[e+2]=f.b,t[e+3]*=n[3];break}}}function Zt(t,e,n,a,c){return function(t,e,n){return t?(0,X.default)(t,{responseType:"image"}).then(a=>{const c=a.data,s=c.width,f=c.height,w=s/f;let g=e;if(n){const S=Math.max(s,f);g=Math.min(g,S)}return{image:c,width:w<=1?Math.ceil(g*w):g,height:w<=1?g:Math.ceil(g/w)}}):Promise.reject(new K.Z("renderUtils: imageDataSize","href not provided."))}(t,e,c).then(s=>{const f=s.width?s.width:e,w=s.height?s.height:e;if(s.image&&function(t,e){return!(!t||"ignore"===e||"multiply"===e&&255===t.r&&255===t.g&&255===t.b&&1===t.a)}(n,a)){let g=s.image.width,S=s.image.height;(0,V.Z)("edge")&&/\.svg$/i.test(t)&&(g-=1,S-=1);const E=function(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const a=n.getContext("2d");return a.clearRect(0,0,t,e),a}(f,w);E.drawImage(s.image,0,0,g,S,0,0,f,w);const I=E.getImageData(0,0,f,w),A=[n.r/255,n.g/255,n.b/255,n.a],G=(0,T._Y)(n);for(let k=0;k<I.data.length;k+=4)kt(I.data,k,A,G,a);E.putImageData(I,0,0),t=E.canvas.toDataURL("image/png")}else{const g=O.id&&O.id.findCredential(t);if(g&&g.token){const S=-1===t.indexOf("?")?"?":"&";t=`${t}${S}token=${g.token}`}}return{url:t,width:f,height:w}}).catch(function(){return{url:t,width:e,height:e}})}}}]);
//# sourceMappingURL=9089.8de5959594fb93ca1ea1.js.map