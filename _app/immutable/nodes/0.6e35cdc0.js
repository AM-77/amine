import{S as se,i as oe,s as ie,k as w,r as le,a as I,l as _,m as c,u as ae,c as D,h as i,p as t,D as J,b as W,E as s,v as xe,n as ee,F as $,G as y,z as U,A as Y,H as $e,B as Q,I as ye,g as G,d as P,C as R,J as ce,K as Ee,L as ze,M as Me,N as Ve}from"../chunks/index.fbbdd111.js";import{w as Le,e as K}from"../chunks/singletons.e42fa829.js";import{p as Ae}from"../chunks/stores.b2815314.js";const Be=!0,Ie=!0,Ye=Object.freeze(Object.defineProperty({__proto__:null,prerender:Be,csr:Ie},Symbol.toStringTag,{value:"Module"})),De=window.localStorage.getItem("darkMode")==="true",te=Le(De);te.subscribe(u=>{localStorage.darkMode=String(u)});function be(u){let e,a;return{c(){e=$("svg"),a=$("path"),this.h()},l(l){e=y(l,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var r=c(e);a=y(r,"path",{d:!0}),c(a).forEach(i),r.forEach(i),this.h()},h(){t(a,"d","M11.029 2.54a2 2 0 0 1 1.942 0l7 3.888A2 2 0 0 1 21 8.177v7.646a2 2 0 0 1-1.029 1.748l-7 3.89a2 2 0 0 1-1.942 0l-7-3.89A2 2 0 0 1 3 15.824V8.177a2 2 0 0 1 1.029-1.749l7-3.888z"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width","8"),t(e,"height","8"),t(e,"viewBox","0 0 24 24"),t(e,"fill","none"),t(e,"stroke","currentColor"),t(e,"stroke-width","0.5"),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"class","absolute top-1.5 -left-3 hidden lg:block svelte-l7mpdx"),J(e,"active-icon",u[2]),J(e,"active",u[2])},m(l,r){W(l,e,r),s(e,a)},p(l,r){r&4&&J(e,"active-icon",l[2]),r&4&&J(e,"active",l[2])},d(l){l&&i(e)}}}function je(u){let e,a,l,r=u[2]&&be(u);return{c(){e=w("a"),a=le(u[0]),l=I(),r&&r.c(),this.h()},l(o){e=_(o,"A",{class:!0,href:!0});var n=c(e);a=ae(n,u[0]),l=D(n),r&&r.l(n),n.forEach(i),this.h()},h(){t(e,"class","link text-gray-900 dark:text-gray-100 svelte-l7mpdx"),t(e,"href",u[1]),J(e,"active",u[2])},m(o,n){W(o,e,n),s(e,a),s(e,l),r&&r.m(e,null)},p(o,[n]){n&1&&xe(a,o[0]),o[2]?r?r.p(o,n):(r=be(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null),n&2&&t(e,"href",o[1]),n&4&&J(e,"active",o[2])},i:ee,o:ee,d(o){o&&i(e),r&&r.d()}}}function Ce(u,e,a){let{text:l}=e,{href:r}=e,{active:o}=e;return u.$$set=n=>{"text"in n&&a(0,l=n.text),"href"in n&&a(1,r=n.href),"active"in n&&a(2,o=n.active)},[l,r,o]}class Z extends se{constructor(e){super(),oe(this,e,Ce,je,ie,{text:0,href:1,active:2})}}function Se(u){let e,a,l;return{c(){e=$("svg"),a=$("path"),l=$("circle"),this.h()},l(r){e=y(r,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=c(e);a=y(o,"path",{d:!0}),c(a).forEach(i),l=y(o,"circle",{cx:!0,cy:!0,r:!0}),c(l).forEach(i),o.forEach(i),this.h()},h(){t(a,"d","M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"),t(l,"cx","12"),t(l,"cy","12"),t(l,"r","4"),t(e,"class","w-full h-full p-3 text-yellow-300 hover:animate-spin"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width","24"),t(e,"height","24"),t(e,"viewBox","0 0 24 24"),t(e,"fill","none"),t(e,"stroke","currentColor"),t(e,"stroke-width","2"),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round")},m(r,o){W(r,e,o),s(e,a),s(e,l)},d(r){r&&i(e)}}}function He(u){let e,a,l;return{c(){e=$("svg"),a=$("path"),l=$("path"),this.h()},l(r){e=y(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var o=c(e);a=y(o,"path",{d:!0}),c(a).forEach(i),l=y(o,"path",{d:!0}),c(l).forEach(i),o.forEach(i),this.h()},h(){t(a,"d","M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862 3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675z"),t(l,"d","M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63z"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"width","24"),t(e,"height","24"),t(e,"viewBox","0 0 24 24"),t(e,"fill","none"),t(e,"stroke","currentColor"),t(e,"stroke-width","2"),t(e,"stroke-linecap","round"),t(e,"stroke-linejoin","round"),t(e,"class","w-full h-full p-3 text-gray-300 hover:animate-pulse")},m(r,o){W(r,e,o),s(e,a),s(e,l)},d(r){r&&i(e)}}}function Ne(u){let e,a,l,r,o,n,v,k,b,m,L,x,f,h,V,E,p,z,C,B,A;k=new Z({props:{text:"home",active:u[1].route.id==="/",href:K+"/"}}),m=new Z({props:{text:"portfolio",active:u[1].route.id==="/portfolio",href:K+"/portfolio"}}),x=new Z({props:{text:"blog",active:(u[1].route.id||"").includes("/blog"),href:K+"/blog"}}),h=new Z({props:{text:"til",active:(u[1].route.id||"").includes("/til"),href:K+"/til"}}),E=new Z({props:{text:"contact",active:u[1].route.id==="/contact",href:K+"/contact"}});function O(d,g){return d[0]?He:Se}let S=O(u),j=S(u);return{c(){e=w("div"),a=w("div"),l=w("a"),r=w("img"),n=I(),v=w("div"),U(k.$$.fragment),b=I(),U(m.$$.fragment),L=I(),U(x.$$.fragment),f=I(),U(h.$$.fragment),V=I(),U(E.$$.fragment),p=I(),z=w("button"),j.c(),this.h()},l(d){e=_(d,"DIV",{class:!0});var g=c(e);a=_(g,"DIV",{class:!0});var N=c(a);l=_(N,"A",{href:!0,class:!0});var T=c(l);r=_(T,"IMG",{src:!0,class:!0,alt:!0}),T.forEach(i),N.forEach(i),n=D(g),v=_(g,"DIV",{class:!0});var M=c(v);Y(k.$$.fragment,M),b=D(M),Y(m.$$.fragment,M),L=D(M),Y(x.$$.fragment,M),f=D(M),Y(h.$$.fragment,M),V=D(M),Y(E.$$.fragment,M),M.forEach(i),p=D(g),z=_(g,"BUTTON",{class:!0});var F=c(z);j.l(F),F.forEach(i),g.forEach(i),this.h()},h(){$e(r.src,o=K+"/logo.svg")||t(r,"src",o),t(r,"class","w-6 h-6"),t(r,"alt",""),t(l,"href",K+"/"),t(l,"class","flex justify-center items-center w-12 h-12 cursor-pointer hover:animate-pulse"),t(a,"class","flex justify-center items-center w-12 h-12 border-r border-gray-900 dark:border-gray-100"),t(v,"class","flex h-full gap-3 lg:gap-6 items-center ml-auto mr-auto lg:mr-4"),t(z,"class","w-12 h-12 border-l border-gray-900 dark:border-gray-100 cursor-pointer"),t(e,"class","flex h-12 items-center backdrop-blur-md border-b border-x-0 lg:border-x border-gray-900 dark:border-gray-100")},m(d,g){W(d,e,g),s(e,a),s(a,l),s(l,r),s(e,n),s(e,v),Q(k,v,null),s(v,b),Q(m,v,null),s(v,L),Q(x,v,null),s(v,f),Q(h,v,null),s(v,V),Q(E,v,null),s(e,p),s(e,z),j.m(z,null),C=!0,B||(A=ye(z,"click",u[2]),B=!0)},p(d,[g]){const N={};g&2&&(N.active=d[1].route.id==="/"),k.$set(N);const T={};g&2&&(T.active=d[1].route.id==="/portfolio"),m.$set(T);const M={};g&2&&(M.active=(d[1].route.id||"").includes("/blog")),x.$set(M);const F={};g&2&&(F.active=(d[1].route.id||"").includes("/til")),h.$set(F);const q={};g&2&&(q.active=d[1].route.id==="/contact"),E.$set(q),S!==(S=O(d))&&(j.d(1),j=S(d),j&&(j.c(),j.m(z,null)))},i(d){C||(G(k.$$.fragment,d),G(m.$$.fragment,d),G(x.$$.fragment,d),G(h.$$.fragment,d),G(E.$$.fragment,d),C=!0)},o(d){P(k.$$.fragment,d),P(m.$$.fragment,d),P(x.$$.fragment,d),P(h.$$.fragment,d),P(E.$$.fragment,d),C=!1},d(d){d&&i(e),R(k),R(m),R(x),R(h),R(E),j.d(),B=!1,A()}}}function Fe(u,e,a){let l,r;return ce(u,te,n=>a(0,l=n)),ce(u,Ae,n=>a(1,r=n)),[l,r,()=>{window.localStorage.setItem("darkMode",l?"false":"true"),l?te.set(!1):te.set(!0)}]}class Oe extends se{constructor(e){super(),oe(this,e,Fe,Ne,ie,{})}}function Te(u){let e,a,l,r,o,n,v,k,b,m,L,x,f,h,V,E,p,z,C,B,A,O,S,j,d,g,N,T=new Date().getFullYear()+"",M,F;return{c(){e=w("div"),a=w("div"),l=w("a"),r=$("svg"),o=$("g"),n=$("path"),v=I(),k=w("a"),b=$("svg"),m=$("path"),L=I(),x=w("a"),f=$("svg"),h=$("path"),V=I(),E=w("a"),p=$("svg"),z=$("path"),C=I(),B=w("a"),A=$("svg"),O=$("path"),S=$("path"),j=I(),d=w("div"),g=w("span"),N=le("© "),M=le(T),F=le(" amine griche"),this.h()},l(q){e=_(q,"DIV",{class:!0});var X=c(e);a=_(X,"DIV",{class:!0});var H=c(a);l=_(H,"A",{class:!0,href:!0});var ue=c(l);r=y(ue,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0});var he=c(r);o=y(he,"g",{"clip-path":!0});var de=c(o);n=y(de,"path",{"fill-rule":!0,"clip-rule":!0,d:!0}),c(n).forEach(i),de.forEach(i),he.forEach(i),ue.forEach(i),v=D(H),k=_(H,"A",{class:!0,href:!0});var fe=c(k);b=y(fe,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var ve=c(b);m=y(ve,"path",{d:!0}),c(m).forEach(i),ve.forEach(i),fe.forEach(i),L=D(H),x=_(H,"A",{class:!0,href:!0});var ge=c(x);f=y(ge,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0});var me=c(f);h=y(me,"path",{"fill-rule":!0,"clip-rule":!0,d:!0}),c(h).forEach(i),me.forEach(i),ge.forEach(i),V=D(H),E=_(H,"A",{class:!0,href:!0});var pe=c(E);p=y(pe,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0});var we=c(p);z=y(we,"path",{"fill-rule":!0,"clip-rule":!0,d:!0}),c(z).forEach(i),we.forEach(i),pe.forEach(i),C=D(H),B=_(H,"A",{class:!0,href:!0});var _e=c(B);A=y(_e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,"stroke-width":!0});var ne=c(A);O=y(ne,"path",{d:!0}),c(O).forEach(i),S=y(ne,"path",{d:!0}),c(S).forEach(i),ne.forEach(i),_e.forEach(i),H.forEach(i),j=D(X),d=_(X,"DIV",{class:!0});var ke=c(d);g=_(ke,"SPAN",{class:!0});var re=c(g);N=ae(re,"© "),M=ae(re,T),F=ae(re," amine griche"),re.forEach(i),ke.forEach(i),X.forEach(i),this.h()},h(){t(n,"fill-rule","evenodd"),t(n,"clip-rule","evenodd"),t(n,"d","M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"),t(o,"clip-path","url(#clip0_100_4)"),t(r,"xmlns","http://www.w3.org/2000/svg"),t(r,"width","24"),t(r,"height","24"),t(r,"viewBox","0 0 24 24"),t(r,"fill","currentColor"),t(r,"stroke-width","2"),t(l,"class","icon dark:border-gray-100 dark:text-gray-100 svelte-v3mbcg"),t(l,"href","https://github.com/AM-77"),t(m,"d","M10.006 18.443L6.326 7.118h7.36l-3.68 11.325zm0 0L1.168 7.118h5.158l3.68 11.325zM1.168 7.118l8.838 11.325-9.68-7.032a.762.762 0 0 1-.276-.852l1.118-3.441zm0 0L3.385.296a.38.38 0 0 1 .724 0l2.217 6.822H1.168zm8.838 11.325l3.68-11.325h5.157l-8.837 11.325zm8.837-11.325l1.119 3.441a.762.762 0 0 1-.277.852l-9.68 7.032 8.838-11.325zm0 0h-5.157L15.902.296a.38.38 0 0 1 .725 0l2.216 6.822z"),t(b,"width","24px"),t(b,"height","24px"),t(b,"viewBox","-2 -2.5 24 24"),t(b,"xmlns","http://www.w3.org/2000/svg"),t(k,"class","icon dark:border-gray-100 dark:fill-gray-100 svelte-v3mbcg"),t(k,"href","https://gitlab.com/amine-griche"),t(h,"fill-rule","evenodd"),t(h,"clip-rule","evenodd"),t(h,"d","M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z"),t(f,"xmlns","http://www.w3.org/2000/svg"),t(f,"width","24"),t(f,"height","24"),t(f,"viewBox","0 0 24 24"),t(f,"fill","currentColor"),t(f,"stroke-width","2"),t(x,"class","icon dark:border-gray-100 dark:text-gray-100 w-6 h-6 svelte-v3mbcg"),t(x,"href","https://www.linkedin.com/in/mohamed-amine-griche"),t(z,"fill-rule","evenodd"),t(z,"clip-rule","evenodd"),t(z,"d","M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.136 1.136 0 0 1 0 15.654V8.346c0-.38.19-.736.508-.947L11.372.19zm-9.1 10.273v3.058l2.288-1.54-2.288-1.518zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583L6.61 13.341zm6.527 2.824v4.582l7.684-5.1-3.43-2.306-4.254 2.824zm6.303-4.183l2.29 1.54v-3.06l-2.29 1.52zm1.371-3.636l-3.41 2.263-4.264-2.868V3.253l7.674 5.093zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346l7.674-5.093zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223L12 9.715z"),t(p,"xmlns","http://www.w3.org/2000/svg"),t(p,"width","24"),t(p,"height","24"),t(p,"viewBox","0 0 24 24"),t(p,"fill","currentColor"),t(p,"stroke-width","2"),t(E,"class","icon dark:border-gray-100 dark:text-gray-100 svelte-v3mbcg"),t(E,"href","https://codepen.io/am-77"),t(O,"d","M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358h12.582z"),t(S,"d","M7.768 14.356l8.79 1.824.372-1.755L8.14 12.6l-.372 1.756zm1.162-4.157l8.14 3.764.744-1.617-8.14-3.787-.744 1.64zm2.256-3.973l6.907 5.705 1.14-1.363-6.907-5.704-1.14 1.362zM15.651 2L14.21 3.062l5.35 7.16L21 9.159 15.651 2zm-8.07 16.42h8.977v-1.778H7.581v1.778z"),t(A,"xmlns","http://www.w3.org/2000/svg"),t(A,"width","24"),t(A,"height","24"),t(A,"viewBox","0 0 24 24"),t(A,"fill","currentColor"),t(A,"stroke-width","2"),t(B,"class","icon dark:border-gray-100 dark:text-gray-100 svelte-v3mbcg"),t(B,"href","https://stackoverflow.com/users/10564525"),t(a,"class","flex"),t(g,"class","text-xs text-gray-900 dark:text-gray-100 font-syne font-medium capitalize"),t(d,"class","flex items-center justify-center px-4 h-12 border-l border-gray-900 dark:border-gray-100"),t(e,"class","flex items-center backdrop-blur-md justify-between h-12 border-t border-x-0 lg:border-x border-gray-900 dark:border-gray-100")},m(q,X){W(q,e,X),s(e,a),s(a,l),s(l,r),s(r,o),s(o,n),s(a,v),s(a,k),s(k,b),s(b,m),s(a,L),s(a,x),s(x,f),s(f,h),s(a,V),s(a,E),s(E,p),s(p,z),s(a,C),s(a,B),s(B,A),s(A,O),s(A,S),s(e,j),s(e,d),s(d,g),s(g,N),s(g,M),s(g,F)},p:ee,i:ee,o:ee,d(q){q&&i(e)}}}class qe extends se{constructor(e){super(),oe(this,e,null,Te,ie,{})}}function Ge(u){let e,a,l,r,o,n,v,k,b,m,L;o=new Oe({});const x=u[2].default,f=Ee(x,u,u[1],null);return m=new qe({}),{c(){e=w("div"),a=w("div"),l=w("div"),r=w("div"),U(o.$$.fragment),n=I(),v=w("div"),f&&f.c(),k=I(),b=w("div"),U(m.$$.fragment),this.h()},l(h){e=_(h,"DIV",{});var V=c(e);a=_(V,"DIV",{class:!0});var E=c(a);l=_(E,"DIV",{class:!0});var p=c(l);r=_(p,"DIV",{class:!0});var z=c(r);Y(o.$$.fragment,z),z.forEach(i),n=D(p),v=_(p,"DIV",{class:!0});var C=c(v);f&&f.l(C),C.forEach(i),k=D(p),b=_(p,"DIV",{class:!0});var B=c(b);Y(m.$$.fragment,B),B.forEach(i),p.forEach(i),E.forEach(i),V.forEach(i),this.h()},h(){t(r,"class","fixed top-0 w-full max-w-5xl"),t(v,"class","min-h-[calc(100%-49px)] py-12"),t(b,"class","fixed bottom-0 w-full max-w-5xl"),t(l,"class","w-full max-w-5xl h-full"),t(a,"class","flex w-screen h-screen justify-center overflow-y-scroll bg-gray-100 dark:bg-neutral-900"),J(e,"dark",u[0])},m(h,V){W(h,e,V),s(e,a),s(a,l),s(l,r),Q(o,r,null),s(l,n),s(l,v),f&&f.m(v,null),s(l,k),s(l,b),Q(m,b,null),L=!0},p(h,[V]){f&&f.p&&(!L||V&2)&&ze(f,x,h,h[1],L?Ve(x,h[1],V,null):Me(h[1]),null),(!L||V&1)&&J(e,"dark",h[0])},i(h){L||(G(o.$$.fragment,h),G(f,h),G(m.$$.fragment,h),L=!0)},o(h){P(o.$$.fragment,h),P(f,h),P(m.$$.fragment,h),L=!1},d(h){h&&i(e),R(o),f&&f.d(h),R(m)}}}function Pe(u,e,a){let l;ce(u,te,n=>a(0,l=n));let{$$slots:r={},$$scope:o}=e;return u.$$set=n=>{"$$scope"in n&&a(1,o=n.$$scope)},[l,o,r]}class Qe extends se{constructor(e){super(),oe(this,e,Pe,Ge,ie,{})}}export{Qe as component,Ye as universal};
