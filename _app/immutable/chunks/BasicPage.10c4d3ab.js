import{s as le,n as R,f as z}from"./scheduler.63274e7e.js";import{S as se,i as ae,g,s as w,h as p,j as D,y as ne,c as k,f as _,l as N,k as v,a as S,x as n,z as re,m as A,n as j,o as P,r as ce,u as oe,v as ie,d as he,t as ue,w as fe,e as Q}from"./index.ff16eba4.js";function U(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function X(s,e,t){const a=s.slice();return a[2]=e[t],a}function Z(s){let e,t,a=s[2].rank+"",o,l,i,d=s[2].name+"",u,r,h,c=s[2].pseudo+"",y,L,H,C=s[2].elo+"",B,V,m,f=s[2].win+"",T,q,b,I=s[2].loss+"",G,O;return{c(){e=g("tr"),t=g("td"),o=A(a),l=w(),i=g("td"),u=A(d),r=w(),h=g("td"),y=A(c),L=w(),H=g("td"),B=A(C),V=w(),m=g("td"),T=A(f),q=w(),b=g("td"),G=A(I),O=w(),this.h()},l(M){e=p(M,"TR",{class:!0});var E=D(e);t=p(E,"TD",{class:!0});var W=D(t);o=j(W,a),W.forEach(_),l=k(E),i=p(E,"TD",{class:!0});var Y=D(i);u=j(Y,d),Y.forEach(_),r=k(E),h=p(E,"TD",{class:!0});var $=D(h);y=j($,c),$.forEach(_),L=k(E),H=p(E,"TD",{class:!0});var F=D(H);B=j(F,C),F.forEach(_),V=k(E),m=p(E,"TD",{class:!0});var J=D(m);T=j(J,f),J.forEach(_),q=k(E),b=p(E,"TD",{class:!0});var K=D(b);G=j(K,I),K.forEach(_),O=k(E),E.forEach(_),this.h()},h(){v(t,"class","center svelte-oat3cq"),v(i,"class","left svelte-oat3cq"),v(h,"class","center svelte-oat3cq"),v(H,"class","right svelte-oat3cq"),v(m,"class","center svelte-oat3cq"),v(b,"class","center svelte-oat3cq"),v(e,"class","svelte-oat3cq")},m(M,E){S(M,e,E),n(e,t),n(t,o),n(e,l),n(e,i),n(i,u),n(e,r),n(e,h),n(h,y),n(e,L),n(e,H),n(H,B),n(e,V),n(e,m),n(m,T),n(e,q),n(e,b),n(b,G),n(e,O)},p(M,E){E&1&&a!==(a=M[2].rank+"")&&P(o,a),E&1&&d!==(d=M[2].name+"")&&P(u,d),E&1&&c!==(c=M[2].pseudo+"")&&P(y,c),E&1&&C!==(C=M[2].elo+"")&&P(B,C),E&1&&f!==(f=M[2].win+"")&&P(T,f),E&1&&I!==(I=M[2].loss+"")&&P(G,I)},d(M){M&&_(e)}}}function ve(s){let e,t,a,o='<tr class="svelte-oat3cq"><th class="center svelte-oat3cq">Rank</th> <th class="left svelte-oat3cq">Name</th> <th class="center svelte-oat3cq">Pseudo</th> <th class="right svelte-oat3cq">Elo</th> <th class="center svelte-oat3cq">Win</th> <th class="center svelte-oat3cq">Loss</th></tr>',l,i,d=U(s[0]),u=[];for(let r=0;r<d.length;r+=1)u[r]=Z(X(s,d,r));return{c(){e=g("div"),t=g("table"),a=g("thead"),a.innerHTML=o,l=w(),i=g("tbody");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=p(r,"DIV",{style:!0});var h=D(e);t=p(h,"TABLE",{class:!0});var c=D(t);a=p(c,"THEAD",{style:!0,"data-svelte-h":!0}),ne(a)!=="svelte-9o96hf"&&(a.innerHTML=o),l=k(c),i=p(c,"TBODY",{class:!0});var y=D(i);for(let L=0;L<u.length;L+=1)u[L].l(y);y.forEach(_),c.forEach(_),h.forEach(_),this.h()},h(){N(a,"border-radius","100%"),v(i,"class","Body"),v(t,"class","svelte-oat3cq"),N(e,"width","50%")},m(r,h){S(r,e,h),n(e,t),n(t,a),n(t,l),n(t,i);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(i,null)},p(r,[h]){if(h&1){d=U(r[0]);let c;for(c=0;c<d.length;c+=1){const y=X(r,d,c);u[c]?u[c].p(y,h):(u[c]=Z(y),u[c].c(),u[c].m(i,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=d.length}},i:R,o:R,d(r){r&&_(e),re(u,r)}}}function de(s,e,t){let{players:a=[{rank:1,name:"Hugo",pseudo:"Hugo",elo:1e3,win:0,loss:0}]}=e,{name:o}=e;return s.$$set=l=>{"players"in l&&t(0,a=l.players),"name"in l&&t(1,o=l.name)},[a,o]}class _e extends se{constructor(e){super(),ae(this,e,de,ve,le,{players:0,name:1})}}const x={Brawlhalla:"/brawlhalla",SmashBros:"/smashbros",Multiversus:"/multiversus"};function ee(s,e,t){const a=s.slice();return a[2]=e[t][0],a[3]=e[t][1],a}function me(s){let e,t,a,o,l,i=s[2]+"",d,u;return{c(){e=g("a"),t=g("img"),o=w(),l=g("h3"),d=A(i),u=w(),this.h()},l(r){e=p(r,"A",{href:!0,class:!0});var h=D(e);t=p(h,"IMG",{class:!0,src:!0,alt:!0}),o=k(h),l=p(h,"H3",{style:!0});var c=D(l);d=j(c,i),c.forEach(_),u=k(h),h.forEach(_),this.h()},h(){v(t,"class","nav-img svelte-l5g5tv"),z(t.src,a=`/${s[2]}.png`)||v(t,"src",a),v(t,"alt",s[2]),N(l,"color","white"),v(e,"href",s[3]),v(e,"class","nav-a svelte-l5g5tv")},m(r,h){S(r,e,h),n(e,t),n(e,o),n(e,l),n(l,d),n(e,u)},p:R,d(r){r&&_(e)}}}function ge(s){let e,t,a,o,l,i=s[2]+"",d,u;return{c(){e=g("a"),t=g("img"),o=w(),l=g("h3"),d=A(i),u=w(),this.h()},l(r){e=p(r,"A",{href:!0,class:!0});var h=D(e);t=p(h,"IMG",{class:!0,src:!0,alt:!0}),o=k(h),l=p(h,"H3",{style:!0});var c=D(l);d=j(c,i),c.forEach(_),u=k(h),h.forEach(_),this.h()},h(){v(t,"class","nav-img svelte-l5g5tv"),z(t.src,a=`/${s[2]}.png`)||v(t,"src",a),v(t,"alt",s[2]),N(l,"color","white"),v(e,"href",s[3]),v(e,"class","nav-a nav-selected svelte-l5g5tv")},m(r,h){S(r,e,h),n(e,t),n(e,o),n(e,l),n(l,d),n(e,u)},p:R,d(r){r&&_(e)}}}function te(s){let e;function t(l,i){return l[0]==l[2]?ge:me}let a=t(s),o=a(s);return{c(){o.c(),e=Q()},l(l){o.l(l),e=Q()},m(l,i){o.m(l,i),S(l,e,i)},p(l,i){a===(a=t(l))&&o?o.p(l,i):(o.d(1),o=a(l),o&&(o.c(),o.m(e.parentNode,e)))},d(l){l&&_(e),o.d(l)}}}function pe(s){let e,t,a,o,l,i,d,u,r,h,c,y,L,H,C="",B,V=U(Object.entries(x)),m=[];for(let f=0;f<V.length;f+=1)m[f]=te(ee(s,V,f));return y=new _e({props:{name:s[0],players:s[1]}}),{c(){e=g("div"),t=g("div"),a=g("div");for(let f=0;f<m.length;f+=1)m[f].c();o=w(),l=g("div"),i=g("img"),u=w(),r=g("h1"),h=A(s[0]),c=w(),ce(y.$$.fragment),L=w(),H=g("div"),H.innerHTML=C,this.h()},l(f){e=p(f,"DIV",{class:!0});var T=D(e);t=p(T,"DIV",{class:!0});var q=D(t);a=p(q,"DIV",{class:!0});var b=D(a);for(let O=0;O<m.length;O+=1)m[O].l(b);b.forEach(_),o=k(q),l=p(q,"DIV",{class:!0});var I=D(l);i=p(I,"IMG",{class:!0,src:!0,alt:!0}),u=k(I),r=p(I,"H1",{style:!0});var G=D(r);h=j(G,s[0]),G.forEach(_),I.forEach(_),c=k(q),oe(y.$$.fragment,q),L=k(q),H=p(q,"DIV",{class:!0,"data-svelte-h":!0}),ne(H)!=="svelte-1uwft06"&&(H.innerHTML=C),q.forEach(_),T.forEach(_),this.h()},h(){v(a,"class","navigation svelte-l5g5tv"),v(i,"class","main-img svelte-l5g5tv"),z(i.src,d=`/${s[0]}.png`)||v(i,"src",d),v(i,"alt",s[0]),N(r,"color","white"),v(l,"class","header-container svelte-l5g5tv"),v(H,"class","footer-container svelte-l5g5tv"),v(t,"class","center svelte-l5g5tv"),v(e,"class","container svelte-l5g5tv")},m(f,T){S(f,e,T),n(e,t),n(t,a);for(let q=0;q<m.length;q+=1)m[q]&&m[q].m(a,null);n(t,o),n(t,l),n(l,i),n(l,u),n(l,r),n(r,h),n(t,c),ie(y,t,null),n(t,L),n(t,H),B=!0},p(f,[T]){if(T&1){V=U(Object.entries(x));let b;for(b=0;b<V.length;b+=1){const I=ee(f,V,b);m[b]?m[b].p(I,T):(m[b]=te(I),m[b].c(),m[b].m(a,null))}for(;b<m.length;b+=1)m[b].d(1);m.length=V.length}(!B||T&1&&!z(i.src,d=`/${f[0]}.png`))&&v(i,"src",d),(!B||T&1)&&v(i,"alt",f[0]),(!B||T&1)&&P(h,f[0]);const q={};T&1&&(q.name=f[0]),T&2&&(q.players=f[1]),y.$set(q)},i(f){B||(he(y.$$.fragment,f),B=!0)},o(f){ue(y.$$.fragment,f),B=!1},d(f){f&&_(e),re(m,f),fe(y)}}}function be(s,e,t){let{name:a="Undefined"}=e,{players:o=[]}=e;return s.$$set=l=>{"name"in l&&t(0,a=l.name),"players"in l&&t(1,o=l.players)},[a,o]}class ye extends se{constructor(e){super(),ae(this,e,be,pe,le,{name:0,players:1})}}export{ye as B};