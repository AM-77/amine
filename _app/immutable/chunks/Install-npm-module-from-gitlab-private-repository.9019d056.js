import{S as Xs,i as $s,s as gs,k as t,r as p,a as f,l as e,m as o,h as s,u as c,c as N,p as i,b as u,E as n,n as ds}from"./index.fbbdd111.js";function an(Zs){let m,_,U,Ca,z,Da,ua,v,B,Pa,Sa,L,xa,Aa,ia,b,w,M,Wa,Y,ja,ra,h,Ja,I,Ta,Ga,K,Ha,Ra,ka,E,O,Q,qa,Z,Ua,fa,d,za,F,Ba,La,V,Ma,Ya,X,Ia,Na,y,C,$,Ka,ma,r,Qa,g,Za,Fa,aa,Va,Xa,sa,$a,ga,na,as,ss,ta,ns,ts,ea,es,os,da,j,ps,ha,P,Fs=`<code class="language-javascript">
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true // it trys to convert "test" to a number returns NaN then check if the converted value is NaN</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false  // check directly if the converted value is NaN</span>

<span class="token comment">// value is NaN</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// value is undefined</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is null</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // is coerced to 0</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is a boolean</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // is coerced to 1</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is a boolean</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // is coerced to 0</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is an object</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is a number</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">37</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is a date</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // coerced to a number (timestamp)</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is "NaN"</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">"NaN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true // coerced to NaN</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">"NaN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is empty string</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // coerced to 0</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// value is empty array</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false // coerced to 0</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code>`,va,J,D,oa,cs,ls,pa,us,is,ba,T,rs,Ea,G,S,ks,_a,H,x,fs,wa,R,A,Ns;return{c(){m=t("h2"),_=t("a"),U=t("span"),Ca=p("What is the global "),z=t("code"),Da=p("NaN"),ua=f(),v=t("p"),B=t("code"),Pa=p("NaN"),Sa=p(" is a property of the "),L=t("strong"),xa=p("global object"),Aa=p(" that represents a Not-A-Number."),ia=f(),b=t("h2"),w=t("a"),M=t("span"),Wa=p("What is "),Y=t("code"),ja=p("isNaN(value)"),ra=f(),h=t("p"),Ja=p("a function that checks if "),I=t("code"),Ta=p("value"),Ga=p(" is "),K=t("code"),Ha=p("NaN"),Ra=p(" after trying converting it to a number."),ka=f(),E=t("h2"),O=t("a"),Q=t("span"),qa=p("What is "),Z=t("code"),Ua=p("Number.isNaN(value)"),fa=f(),d=t("p"),za=p("a static method of the "),F=t("code"),Ba=p("Number"),La=p(" class determines whether the passed "),V=t("code"),Ma=p("value"),Ya=p(" is the number value "),X=t("code"),Ia=p("NaN"),Na=f(),y=t("h2"),C=t("a"),$=t("span"),Ka=p("The difference"),ma=f(),r=t("p"),Qa=p("the main difference is that "),g=t("code"),Za=p("isNaN"),Fa=p(" try to converts the passed "),aa=t("code"),Va=p("value"),Xa=p(" to a number then checks if it is "),sa=t("code"),$a=p("NaN"),ga=p(", while the "),na=t("code"),as=p("Number.isNaN()"),ss=p(" check the passed "),ta=t("code"),ns=p("value"),ts=p(" as it is, so non-numbers always return "),ea=t("code"),es=p("false"),os=p("."),da=f(),j=t("p"),ps=p("examples:"),ha=f(),P=t("pre"),va=f(),J=t("blockquote"),D=t("p"),oa=t("code"),cs=p("Number.isNaN"),ls=p(" is a more safe and robust version of "),pa=t("code"),us=p("isNaN"),is=p("."),ba=f(),T=t("p"),rs=p("You can find more details:"),Ea=f(),G=t("p"),S=t("a"),ks=p("NaN"),_a=f(),H=t("p"),x=t("a"),fs=p("isNaN()"),wa=f(),R=t("p"),A=t("a"),Ns=p("Number.isNaN()"),this.h()},l(a){m=e(a,"H2",{id:!0});var l=o(m);_=e(l,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var hs=o(_);U=e(hs,"SPAN",{class:!0}),o(U).forEach(s),hs.forEach(s),Ca=c(l,"What is the global "),z=e(l,"CODE",{});var vs=o(z);Da=c(vs,"NaN"),vs.forEach(s),l.forEach(s),ua=N(a),v=e(a,"P",{});var ca=o(v);B=e(ca,"CODE",{});var bs=o(B);Pa=c(bs,"NaN"),bs.forEach(s),Sa=c(ca," is a property of the "),L=e(ca,"STRONG",{});var Es=o(L);xa=c(Es,"global object"),Es.forEach(s),Aa=c(ca," that represents a Not-A-Number."),ca.forEach(s),ia=N(a),b=e(a,"H2",{id:!0});var Oa=o(b);w=e(Oa,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var _s=o(w);M=e(_s,"SPAN",{class:!0}),o(M).forEach(s),_s.forEach(s),Wa=c(Oa,"What is "),Y=e(Oa,"CODE",{});var ws=o(Y);ja=c(ws,"isNaN(value)"),ws.forEach(s),Oa.forEach(s),ra=N(a),h=e(a,"P",{});var q=o(h);Ja=c(q,"a function that checks if "),I=e(q,"CODE",{});var Os=o(I);Ta=c(Os,"value"),Os.forEach(s),Ga=c(q," is "),K=e(q,"CODE",{});var ys=o(K);Ha=c(ys,"NaN"),ys.forEach(s),Ra=c(q," after trying converting it to a number."),q.forEach(s),ka=N(a),E=e(a,"H2",{id:!0});var ya=o(E);O=e(ya,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var Cs=o(O);Q=e(Cs,"SPAN",{class:!0}),o(Q).forEach(s),Cs.forEach(s),qa=c(ya,"What is "),Z=e(ya,"CODE",{});var Ds=o(Z);Ua=c(Ds,"Number.isNaN(value)"),Ds.forEach(s),ya.forEach(s),fa=N(a),d=e(a,"P",{});var W=o(d);za=c(W,"a static method of the "),F=e(W,"CODE",{});var Ps=o(F);Ba=c(Ps,"Number"),Ps.forEach(s),La=c(W," class determines whether the passed "),V=e(W,"CODE",{});var Ss=o(V);Ma=c(Ss,"value"),Ss.forEach(s),Ya=c(W," is the number value "),X=e(W,"CODE",{});var xs=o(X);Ia=c(xs,"NaN"),xs.forEach(s),W.forEach(s),Na=N(a),y=e(a,"H2",{id:!0});var ms=o(y);C=e(ms,"A",{"aria-hidden":!0,tabindex:!0,href:!0});var As=o(C);$=e(As,"SPAN",{class:!0}),o($).forEach(s),As.forEach(s),Ka=c(ms,"The difference"),ms.forEach(s),ma=N(a),r=e(a,"P",{});var k=o(r);Qa=c(k,"the main difference is that "),g=e(k,"CODE",{});var Ws=o(g);Za=c(Ws,"isNaN"),Ws.forEach(s),Fa=c(k," try to converts the passed "),aa=e(k,"CODE",{});var js=o(aa);Va=c(js,"value"),js.forEach(s),Xa=c(k," to a number then checks if it is "),sa=e(k,"CODE",{});var Js=o(sa);$a=c(Js,"NaN"),Js.forEach(s),ga=c(k,", while the "),na=e(k,"CODE",{});var Ts=o(na);as=c(Ts,"Number.isNaN()"),Ts.forEach(s),ss=c(k," check the passed "),ta=e(k,"CODE",{});var Gs=o(ta);ns=c(Gs,"value"),Gs.forEach(s),ts=c(k," as it is, so non-numbers always return "),ea=e(k,"CODE",{});var Hs=o(ea);es=c(Hs,"false"),Hs.forEach(s),os=c(k,"."),k.forEach(s),da=N(a),j=e(a,"P",{});var Rs=o(j);ps=c(Rs,"examples:"),Rs.forEach(s),ha=N(a),P=e(a,"PRE",{class:!0});var Vs=o(P);Vs.forEach(s),va=N(a),J=e(a,"BLOCKQUOTE",{});var qs=o(J);D=e(qs,"P",{});var la=o(D);oa=e(la,"CODE",{});var Us=o(oa);cs=c(Us,"Number.isNaN"),Us.forEach(s),ls=c(la," is a more safe and robust version of "),pa=e(la,"CODE",{});var zs=o(pa);us=c(zs,"isNaN"),zs.forEach(s),is=c(la,"."),la.forEach(s),qs.forEach(s),ba=N(a),T=e(a,"P",{});var Bs=o(T);rs=c(Bs,"You can find more details:"),Bs.forEach(s),Ea=N(a),G=e(a,"P",{});var Ls=o(G);S=e(Ls,"A",{href:!0,rel:!0});var Ms=o(S);ks=c(Ms,"NaN"),Ms.forEach(s),Ls.forEach(s),_a=N(a),H=e(a,"P",{});var Ys=o(H);x=e(Ys,"A",{href:!0,rel:!0});var Is=o(x);fs=c(Is,"isNaN()"),Is.forEach(s),Ys.forEach(s),wa=N(a),R=e(a,"P",{});var Ks=o(R);A=e(Ks,"A",{href:!0,rel:!0});var Qs=o(A);Ns=c(Qs,"Number.isNaN()"),Qs.forEach(s),Ks.forEach(s),this.h()},h(){i(U,"class","icon icon-link"),i(_,"aria-hidden","true"),i(_,"tabindex","-1"),i(_,"href","#what-is-the-global-nan"),i(m,"id","what-is-the-global-nan"),i(M,"class","icon icon-link"),i(w,"aria-hidden","true"),i(w,"tabindex","-1"),i(w,"href","#what-is-isnanvalue"),i(b,"id","what-is-isnanvalue"),i(Q,"class","icon icon-link"),i(O,"aria-hidden","true"),i(O,"tabindex","-1"),i(O,"href","#what-is-numberisnanvalue"),i(E,"id","what-is-numberisnanvalue"),i($,"class","icon icon-link"),i(C,"aria-hidden","true"),i(C,"tabindex","-1"),i(C,"href","#the-difference"),i(y,"id","the-difference"),i(P,"class","language-javascript"),i(S,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"),i(S,"rel","nofollow"),i(x,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN"),i(x,"rel","nofollow"),i(A,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"),i(A,"rel","nofollow")},m(a,l){u(a,m,l),n(m,_),n(_,U),n(m,Ca),n(m,z),n(z,Da),u(a,ua,l),u(a,v,l),n(v,B),n(B,Pa),n(v,Sa),n(v,L),n(L,xa),n(v,Aa),u(a,ia,l),u(a,b,l),n(b,w),n(w,M),n(b,Wa),n(b,Y),n(Y,ja),u(a,ra,l),u(a,h,l),n(h,Ja),n(h,I),n(I,Ta),n(h,Ga),n(h,K),n(K,Ha),n(h,Ra),u(a,ka,l),u(a,E,l),n(E,O),n(O,Q),n(E,qa),n(E,Z),n(Z,Ua),u(a,fa,l),u(a,d,l),n(d,za),n(d,F),n(F,Ba),n(d,La),n(d,V),n(V,Ma),n(d,Ya),n(d,X),n(X,Ia),u(a,Na,l),u(a,y,l),n(y,C),n(C,$),n(y,Ka),u(a,ma,l),u(a,r,l),n(r,Qa),n(r,g),n(g,Za),n(r,Fa),n(r,aa),n(aa,Va),n(r,Xa),n(r,sa),n(sa,$a),n(r,ga),n(r,na),n(na,as),n(r,ss),n(r,ta),n(ta,ns),n(r,ts),n(r,ea),n(ea,es),n(r,os),u(a,da,l),u(a,j,l),n(j,ps),u(a,ha,l),u(a,P,l),P.innerHTML=Fs,u(a,va,l),u(a,J,l),n(J,D),n(D,oa),n(oa,cs),n(D,ls),n(D,pa),n(pa,us),n(D,is),u(a,ba,l),u(a,T,l),n(T,rs),u(a,Ea,l),u(a,G,l),n(G,S),n(S,ks),u(a,_a,l),u(a,H,l),n(H,x),n(x,fs),u(a,wa,l),u(a,R,l),n(R,A),n(A,Ns)},p:ds,i:ds,o:ds,d(a){a&&s(m),a&&s(ua),a&&s(v),a&&s(ia),a&&s(b),a&&s(ra),a&&s(h),a&&s(ka),a&&s(E),a&&s(fa),a&&s(d),a&&s(Na),a&&s(y),a&&s(ma),a&&s(r),a&&s(da),a&&s(j),a&&s(ha),a&&s(P),a&&s(va),a&&s(J),a&&s(ba),a&&s(T),a&&s(Ea),a&&s(G),a&&s(_a),a&&s(H),a&&s(wa),a&&s(R)}}}const nn={title:"isNaN() vs Number.isNaN() in JavaScript",date:"2023-06-26T13:50:13.284Z",description:"What is the difference Between isNaN() and Number.isNaN()?",tags:"NodeJS,NPM,Gitlab,JavaScript"};class tn extends Xs{constructor(m){super(),$s(this,m,null,an,gs,{})}}export{tn as default,nn as metadata};
