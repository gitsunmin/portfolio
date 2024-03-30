var l=document.createElement("template"),e=document.createElement("style");e.innerHTML=`
  .footer {
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;l.innerHTML=`
  <footer class="footer">
    Gitsunmin's Portfolio \xA9 2024
  </footer>
`;class W extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(e.cloneNode(!0)),this.shadowRoot?.appendChild(l.content.cloneNode(!0))}}var t=document.createElement("template"),hh=document.createElement("style");hh.innerHTML=`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .profile-image {
    padding: 10px;
  }

  .menu {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  a {
    color: white;
  }
`;t.innerHTML=`
  <header class="header">
    <a class="profile" href="https://gitsunmin.github.io/portfolio">
      <profile-image class="profile-image" width="50px" height="50px" alt="me"></profile-image>
      <span class="site-name">
        Gitsunmin's Portfolio
      </span>
    </a>

    <div class="slot">
      <slot></slot>
    </div>

    <div class="menu">
      <a href="https://gitsunmin.github.io/">Blog</a>
    </div>
  </header>
`;class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(hh.cloneNode(!0)),this.shadowRoot?.appendChild(t.content.cloneNode(!0))}}var Nh=document.createElement("template"),fh=document.createElement("style");fh.innerHTML=`
  .header-case {
    margin-top: 90px;
  }
`;Nh.innerHTML=`
  <div class="header-case"></div> 
  <main class="main">
    <slot></slot>
  </main>
`;class K extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(fh.cloneNode(!0)),this.shadowRoot?.appendChild(Nh.content.cloneNode(!0))}}var Ch=document.createElement("template"),Rh=document.createElement("style");Rh.innerHTML=`
  .profile-image {
    box-shadow: 0 0 10px 0 white;
    isolation: isolate;
  }
`;Ch.innerHTML=`
    <img class="profile-image" src="./assets/me.jpeg" width="200px" sync/>
`;class V extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Rh.cloneNode(!0)),this.shadowRoot?.appendChild(Ch.content.cloneNode(!0)),this.profileImage$el=this.shadowRoot?.querySelector(".profile-image")??null}profileImage$el=null;static get observedAttributes(){return["width","height","round"]}get width(){return this.getAttribute("width")??"200px"}set width(h){this.setAttribute("width",h)}get height(){return this.getAttribute("height")??"200px"}set height(h){this.setAttribute("height",h)}get round(){return this.getAttribute("round")??"200px"}set round(h){this.setAttribute("round",h)}attributeChangedCallback(h,N,f){const C=this.shadowRoot?.querySelector(".profile-image")??null;switch(h){case"width":C?.setAttribute("width",f);break;case"height":C?.setAttribute("height",f);break;case"round":C?.setAttribute("style",`border-radius: ${f?"50%":"10%"}`);break;default:throw new Error("Unexpected attribute")}}}var dh=document.createElement("template"),Dh=document.createElement("style");Dh.innerHTML=`
    .labeled-icon {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .icon {
        border-radius: 12%;
        box-shadow: 0 0 5px 0 white:
    }

    .label {
        margin-top: 10px;
        font-size: 1.2em;
    }
`;dh.innerHTML=`
    <figure class="labeled-icon">
        <img class="icon" width="50px" />
        <figcaption class="label"></figcaption>
    </figure>
`;class w extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Dh.cloneNode(!0)),this.shadowRoot?.appendChild(dh.content.cloneNode(!0))}static get observedAttributes(){return["icon","label"]}get icon(){return this.getAttribute("icon")}set icon(h){this.setAttribute("icon",h)}get label(){return this.getAttribute("label")}set label(h){this.setAttribute("label",h)}attributeChangedCallback(h,N,f){const C=this.shadowRoot?.querySelector(".icon")??null,R=this.shadowRoot?.querySelector(".label")??null;if(C===null||R===null)return;switch(h){case"icon":C.setAttribute("src",f),C.setAttribute("alt",f);break;case"label":R.setAttribute("src",f);break;default:throw new Error("Unexpected attribute")}}}var Oh=document.createElement("template"),qh=document.createElement("style");qh.innerHTML=`
  .section-title {
    text-align: center;
  }
`;Oh.innerHTML=`
    <h2 class="section-title">
        <slot></slot>
    </h2>
`;class P extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(qh.cloneNode(!0)),this.shadowRoot?.appendChild(Oh.content.cloneNode(!0))}}var zh=document.createElement("template"),Hh=document.createElement("style");Hh.innerHTML="";zh.innerHTML=`
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;class $ extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Hh.cloneNode(!0)),this.shadowRoot?.appendChild(zh.content.cloneNode(!0))}static get observedAttributes(){return["align"]}get align(){return this.getAttribute("align")??"200px"}set align(h){this.setAttribute("align",h)}connectedCallback(){this.shadowRoot?.querySelector(".section-wrapper")?.setAttribute("style",`text-align: ${this.getAttribute("align")};`)}}var Jh=document.createElement("template"),Qh=document.createElement("style");Qh.innerHTML=`
  .hello-section {
    height: 75vh;
  }

  .guide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
    margin-top: 30vh;
    font-size: 1.2em;
    padding: 20px;
    line-height: 1.3;
    width: 100%;
    rotate: 0deg;
  }
`;Jh.innerHTML=`
    <section class="hello-section">
      <global-greetings></global-greetings>

      <p class="guide">
        \uC2A4\uD06C\uB864\uC744 \uB0B4\uB9AC\uBA74\uC11C,
        <br />
        \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.
        <br />
        \uAC10\uC0AC\uD569\uB2C8\uB2E4.
      </p>
    </section>
`;class k extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),!this.shadowRoot)throw new Error("Shadow DOM\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");this.shadowRoot.appendChild(Qh.cloneNode(!0)),this.shadowRoot.appendChild(Jh.content.cloneNode(!0))}connectedCallback(){if(!this.shadowRoot)throw new Error("Shadow DOM\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");this.shadowRoot.querySelector(".guide")?.animate([{rotate:"45deg",transform:"translateX(-80px)","-webkit-transform":"translateX(-80px)",fontWight:"bold"},{rotate:"45deg",transform:"translateX(-60px)","-webkit-transform":"translateX(-60px)",fontWight:"bold"},{rotate:"45deg",transform:"translateX(-80px)","-webkit-transform":"translateX(-80px)",fontWight:"bold"}],{fill:"forwards",duration:1250,iterations:Infinity})}}var Uh=document.createElement("template"),Xh=document.createElement("style");Xh.innerHTML=`
  .wrapper {
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 2.5em;
    height: 30px; /* \uD14D\uC2A4\uD2B8 \uB192\uC774\uC5D0 \uB9DE\uAC8C \uC870\uC815 */
    margin-top: 25vh;
  }
  `;Uh.innerHTML=`
  <div class="wrapper">
    <span class="greeting">Hello</span>
    <span class="greeting">\uC548\uB155\uD558\uC138\uC694</span>
    <span class="greeting">\u3053\u3093\u306B\u3061\u306F</span>
    <span class="greeting">Hallo</span>
    <span class="greeting">Bonjour</span>
    <span class="greeting">Hola</span>
  </div>
`;var Yh=(h)=>(N)=>{h[N].animate([{opacity:0,display:"block"},{opacity:1,display:"block"},{opacity:1,display:"none"}],{duration:2500,fill:"forwards"}).onfinish=()=>{const f=(N+1)%h.length;Yh(h)(f)}};class L extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),!this.shadowRoot)throw new Error("Shadow DOM\uB97C \uC124\uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");this.shadowRoot.appendChild(Xh.cloneNode(!0)),this.shadowRoot.appendChild(Uh.content.cloneNode(!0))}connectedCallback(){if(!this.shadowRoot)throw new Error("Shadow DOM\uB97C \uC124\uC815\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");const h=this.shadowRoot?.querySelectorAll(".greeting")??[];h.forEach((f)=>f.setAttribute("style","display: none;")),Yh(h)(0)}}var Zh=document.createElement("template"),Bh=document.createElement("style");Bh.innerHTML=`
  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;Zh.innerHTML=`
    <section-wrapper align="center">
      <about-me-profile></about-me-profile>
    </section-wrapper>
`;class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Bh.cloneNode(!0)),this.shadowRoot?.appendChild(Zh.content.cloneNode(!0))}}var Fh=document.createElement("template"),Th=document.createElement("style");Th.innerHTML=`
  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
    margin: 0 auto;
    margin-top: 40px;
    text-align: left;
    max-width: 400px;
  }
`;Fh.innerHTML=`
  <div class="about-me-scene1">
    <div class="abount-me-scene1-profile">
      <profile-image round="true"></profile-image>
    </div>
    <p class="abount-me-scene1-description">
      \uC548\uB155\uD558\uC138\uC694.
      <br />
      <br />
      \uC800\uB294 2019\uB144\uBD80\uD130 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uD574\uC624\uACE0 \uC788\uB294 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4. 
      \uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC\uC5D0\uC11C \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD55C \uC791\uC5C5\uC5D0 \uCC38\uC5EC\uD574\uC654\uC73C\uBA70,
      \uD2B9\uD788 Mobile, Desktop, Web \uBD84\uC57C\uC5D0\uC11C \uC2E4\uB825\uC744 \uC313\uC544\uC654\uC2B5\uB2C8\uB2E4.
      \uAE30\uC220\uC801\uC778 \uB3C4\uC804\uC744 \uD574\uACB0\uD558\uBA70 \uC131\uC7A5\uD558\uB294 \uACFC\uC815\uC744 \uC911\uC694\uC2DC\uD558\uACE0,
      \uD56D\uC0C1 \uC0C8\uB85C\uC6B4 \uAC83\uC744 \uBC30\uC6B0\uB824\uB294 \uC790\uC138\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.
      <br />
      <br />
      \uAC1C\uBC1C \uC791\uC5C5\uC744 \uD560 \uB54C\uB294 \uC0AC\uC6A9\uC790 \uC911\uC2EC\uC758 \uB514\uC790\uC778\uC744 \uC9C0\uD5A5\uD558\uBA70, \uC6F9 \uD45C\uC900\uACFC \uC811\uADFC\uC131,
      \uBC18\uC751\uD615 \uB514\uC790\uC778\uC744 \uACE0\uB824\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4.
      JavaScript, React, Vue.js \uAC19\uC740 \uD604\uB300\uC801\uC778 \uAE30\uC220 \uC2A4\uD0DD\uC744 \uD65C\uC6A9\uD558\uC5EC,
      \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBCF4\uB2E4 \uB098\uC740 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD569\uB2C8\uB2E4. 
      <br />
      <br />
      \uC800\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB294 \uC800\uC758 \uAE30\uC220\uACFC \uACBD\uD5D8\uC744 \uC18C\uAC1C\uD558\uB294 \uACF5\uAC04\uC785\uB2C8\uB2E4.
      \uD611\uC5C5\uC5D0 \uB300\uD55C \uC5F4\uB9B0 \uB9C8\uC74C\uACFC \uD568\uAED8, \uACC4\uC18D\uD574\uC11C \uBC30\uC6B0\uACE0 \uC131\uC7A5\uD558\uAE30 \uC704\uD55C \uC800\uC758 \uC5F4\uC815\uC744 \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
      <br />
      <br />
      \uB9CC\uC57D \uC81C \uC791\uC5C5\uC5D0 \uB300\uD574 \uB354 \uC54C\uACE0 \uC2F6\uC73C\uC2DC\uB2E4\uBA74, \uC5B8\uC81C\uB4E0\uC9C0 \uC5F0\uB77D \uC8FC\uC138\uC694.
      <br />
      <br />
      \uAC10\uC0AC\uD569\uB2C8\uB2E4.
    </p>

    <p>
      tjsals116@gmail.com
    </p>
  </div>
`;class j extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Th.cloneNode(!0)),this.shadowRoot?.appendChild(Fh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((N)=>{N.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".abount-me-scene1-profile")?.animate({opacity:[0,1],transform:["translateX(200px)","translateX(-20px)","translateX(0)"]},{duration:1200,iterations:1,easing:"ease-in-out"});this.shadowRoot?.querySelector(".abount-me-scene1-description")?.animate({opacity:[0,1]},{duration:2000,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var _h=document.createElement("template"),Mh=document.createElement("style");Mh.innerHTML=`
  ul {
    list-style: none;
    padding-left: 0;
  }

  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;_h.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Skills</h1>
      <skills-list></skills-list>
    </section-wrapper>
`;class E extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Mh.cloneNode(!0)),this.shadowRoot?.appendChild(_h.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((N)=>{N.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Gh=document.createElement("template"),Ih=document.createElement("style");Ih.innerHTML=`
  .skills-list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    height: 300px;
    max-width: 80vw;
    overflow-x: scroll;

    margin: 0 auto;
    white-space: nowrap;
  }

  .skills-list-unordered {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 12px;
  }

  .skills-list-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    white-space: normal;
  }
`;Gh.innerHTML=`
  <div class="skills-list">
    <ul class="skills-list-unordered">
    </ul>
  </div>
`;var xh=[{name:"HTML5",icon:"./assets/icons/html5.svg",description:"\uC2DC\uBA58\uD2F1, \uC6F9 \uD45C\uC900, \uC6F9 \uC811\uADFC\uC131, SEO \uB4F1 \uAE30\uBCF8\uC801\uC778 \uC6F9 \uAE30\uC220\uC5D0 \uB300\uD55C \uC774\uD574\uC640 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"CSS3",icon:"./assets/icons/css3.svg",description:"Box Model, Flexbox, Grid, Animation, Media Query \uB4F1\uC744 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Javascript",icon:"./assets/icons/javascript.svg",description:"ES6+ \uBB38\uBC95, \uBE44\uB3D9\uAE30 \uCC98\uB9AC, \uD638\uC774\uC2A4\uD305, \uB3D9\uC791 \uC6D0\uB9AC \uB4F1\uC744 \uC774\uD574\uD558\uACE0 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Typescript",icon:"./assets/icons/typeScript.svg",description:"\uAE30\uBCF8 \uD0C0\uC785\uACFC \uC778\uD130\uD398\uC774\uC2A4, \uC81C\uB124\uB9AD, \uD0C0\uC785 \uD569\uC131 \uB4F1 \uD0C0\uC785\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"React",icon:"./assets/icons/react.svg",description:"\uAE30\uBCF8 \uBB38\uBC95\uBD80\uD130 \uD6C5, \uB77C\uC6B0\uD130 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Next.js",icon:"./assets/icons/next.js.svg",description:"SSR, SSG, API Routes, Image \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Vue.js",icon:"./assets/icons/vue.js.svg",description:"2\uBC84\uC804\uC744 \uC774\uC6A9\uD558\uC5EC \uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC640 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Nuxt.js",icon:"./assets/icons/nuxt.js.svg",description:"Nuxt\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Flutter",icon:"./assets/icons/flutter.svg",description:"\uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C\uACFC \uC6F9\uBDF0 \uC571 \uAC1C\uBC1C \uACBD\uD5D8\uC774 \uC788\uACE0, Firebase\uC640 \uC5F0\uB3D9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Git",icon:"./assets/icons/git.svg",description:"\uAE30\uBCF8\uC801\uC778 \uBA85\uB839\uC5B4\uBD80\uD130 \uBE0C\uB80C\uCE58 \uC804\uB7B5, \uB9AC\uBCA0\uC774\uC2A4 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"GraphQL",icon:"./assets/icons/graphql.svg",description:"Schema\uB97C \uC815\uC758\uD558\uACE0, Query, Mutation\uC744 \uC791\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Apollo Client",icon:"./assets/icons/apollo.svg",description:"Link, Cache, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Relay",icon:"./assets/icons/relay.svg",description:"compiler \uC124\uC815, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Storybook",icon:"./assets/icons/storybook.svg",description:"UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uACC4\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8 \uBE4C\uB4DC \uBC0F \uBC30\uD3EC \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Jest",icon:"./assets/icons/jest.svg",description:"\uB85C\uC9C1\uC758 \uB2E8\uC704 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uACE0, \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"SCSS/SASS",icon:"./assets/icons/sass.svg",description:"scss \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uBAA8\uB4C8\uD654\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Styled Components",icon:"./assets/icons/styled-component.png",description:"\uC2A4\uD0C0\uC77C\uC744 \uCEF4\uD4E8\uB10C\uD2B8\uD654 \uD558\uACE0, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD569\uC131 \uBC0F \uC7AC\uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Tailwind CSS",icon:"./assets/icons/tailwind-css.png",description:"Utility-first CSS \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1}];class c extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("ShadowRoot is null");if(this.shadowRoot.appendChild(Ih.cloneNode(!0)),this.shadowRoot.appendChild(Gh.content.cloneNode(!0)),this.unOrderedList$el=this.shadowRoot.querySelector(".skills-list-unordered")??null,this.unOrderedList$el===null)return;this.unOrderedList$el.innerHTML=xh.map((h)=>{return`
          <li class="skills-list-list">
            <labeled-icon label="${h.name}" icon="${h.icon}" round="true"></labeled-icon>
            <p>${h.description}</p>
          </li>
        `}).join("")}unOrderedList$el=null;connectedCallback(){if(this.unOrderedList$el===null)return;const h=this.unOrderedList$el.animate([{transform:"translateX(0)"},{transform:"translateX(-50%)"}],{duration:xh.length*1500,iterations:Infinity,easing:"linear"});h.onfinish=()=>{if(this.unOrderedList$el===null)return;this.unOrderedList$el.style.transform="translateX(0)",this.unOrderedList$el.scrollLeft=0,N()};const N=()=>h.play(),f=()=>h.pause();this.unOrderedList$el.addEventListener("mouseover",f),this.unOrderedList$el.addEventListener("mouseout",N),this.unOrderedList$el.addEventListener("touchstart",f),this.unOrderedList$el.addEventListener("touchend",N),new IntersectionObserver((R)=>{R.forEach((d)=>{if(d.isIntersecting)N()})}).observe(this)}}var Ah=document.createElement("template"),Sh=document.createElement("style");Sh.innerHTML=`
  ul {
    list-style: none;
    padding-left: 0;
    height: 500px;
  }

  .section-title {
    padding-top: 100px;
    margin-top: 25vh;
    font-size: 3em;
    text-align: center;
  }
`;Ah.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Experience</h1>
      <experience-project-list-wrapper></experience-project-list-wrapper>
      <experience-activity-list-wrapper></experience-activity-list-wrapper>
    </section-wrapper>
`;class u extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Sh.cloneNode(!0)),this.shadowRoot?.appendChild(Ah.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((N)=>{N.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var ch=function(...h){if(h.length===1){const[N]=h;return(f)=>H(N,f,()=>{})}if(h.length===2){const[N,f]=h;return H(N,f,()=>{})}throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${h.length}.`)},J=function(h){return Object.assign(h,{optional:()=>a(h),and:(N)=>z(h,N),or:(N)=>gh(h,N),select:(N)=>N===void 0?S(h):S(N,h)})},n=function(h){return Object.assign(((N)=>Object.assign(N,{[Symbol.iterator](){let f=0;const C=[{value:Object.assign(N,{[Wh]:!0}),done:!1},{done:!0,value:void 0}];return{next:()=>{var R;return(R=C[f++])!=null?R:C.at(-1)}}}}))(h),{optional:()=>n(a(h)),select:(N)=>n(N===void 0?S(h):S(N,h))})},a=function(h){return J({[Q]:()=>({match:(N)=>{let f={};const C=(R,d)=>{f[R]=d};return N===void 0?(X(h).forEach((R)=>C(R,void 0)),{matched:!0,selections:f}):{matched:H(h,N,C),selections:f}},getSelectionKeys:()=>X(h),matcherType:"optional"})})},z=function(...h){return J({[Q]:()=>({match:(N)=>{let f={};const C=(R,d)=>{f[R]=d};return{matched:h.every((R)=>H(R,N,C)),selections:f}},getSelectionKeys:()=>A(h,X),matcherType:"and"})})},gh=function(...h){return J({[Q]:()=>({match:(N)=>{let f={};const C=(R,d)=>{f[R]=d};return A(h,X).forEach((R)=>C(R,void 0)),{matched:h.some((R)=>H(R,N,C)),selections:f}},getSelectionKeys:()=>A(h,X),matcherType:"or"})})},D=function(h){return{[Q]:()=>({match:(N)=>({matched:Boolean(h(N))})})}},S=function(...h){const N=typeof h[0]=="string"?h[0]:void 0,f=h.length===2?h[1]:typeof h[0]=="string"?void 0:h[0];return J({[Q]:()=>({match:(C)=>{let R={[N!=null?N:"@ts-pattern/anonymous-select-key"]:C};return{matched:f===void 0||H(f,C,(d,O)=>{R[d]=O}),selections:R}},getSelectionKeys:()=>[N!=null?N:"@ts-pattern/anonymous-select-key"].concat(f===void 0?[]:X(f))})})},Z=function(h){return typeof h=="number"},x=function(h){return typeof h=="string"},F=function(h){return typeof h=="bigint"},_=function(h){return new v(h,r)},Q=Symbol.for("@ts-pattern/matcher"),Wh=Symbol.for("@ts-pattern/isVariadic");var o=(h)=>Boolean(h&&typeof h=="object"),i=(h)=>h&&!!h[Q],H=(h,N,f)=>{if(i(h)){const C=h[Q](),{matched:R,selections:d}=C.match(N);return R&&d&&Object.keys(d).forEach((O)=>f(O,d[O])),R}if(o(h)){if(!o(N))return!1;if(Array.isArray(h)){if(!Array.isArray(N))return!1;let C=[],R=[],d=[];for(let O of h.keys()){const q=h[O];i(q)&&q[Wh]?d.push(q):d.length?R.push(q):C.push(q)}if(d.length){if(d.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(N.length<C.length+R.length)return!1;const O=N.slice(0,C.length),q=R.length===0?[]:N.slice(-R.length),U=N.slice(C.length,R.length===0?Infinity:-R.length);return C.every((M,I)=>H(M,O[I],f))&&R.every((M,I)=>H(M,q[I],f))&&(d.length===0||H(d[0],U,f))}return h.length===N.length&&h.every((O,q)=>H(O,N[q],f))}return Object.keys(h).every((C)=>{const R=h[C];return((C in N)||i(d=R)&&d[Q]().matcherType==="optional")&&H(R,N[C],f);var d})}return Object.is(N,h)},X=(h)=>{var N,f,C;return o(h)?i(h)?(N=(f=(C=h[Q]()).getSelectionKeys)==null?void 0:f.call(C))!=null?N:[]:Array.isArray(h)?A(h,X):A(Object.values(h),X):[]},A=(h,N)=>h.reduce((f,C)=>f.concat(N(C)),[]),uh=(h,N)=>{for(let f of h)if(!N(f))return!1;return!0},ih=(h,N)=>{for(let[f,C]of h.entries())if(!N(C,f))return!1;return!0},Kh=J(D(function(h){return!0})),vh=Kh,G=(h)=>Object.assign(J(h),{startsWith:(N)=>{return G(z(h,(f=N,D((C)=>x(C)&&C.startsWith(f)))));var f},endsWith:(N)=>{return G(z(h,(f=N,D((C)=>x(C)&&C.endsWith(f)))));var f},minLength:(N)=>G(z(h,((f)=>D((C)=>x(C)&&C.length>=f))(N))),maxLength:(N)=>G(z(h,((f)=>D((C)=>x(C)&&C.length<=f))(N))),includes:(N)=>{return G(z(h,(f=N,D((C)=>x(C)&&C.includes(f)))));var f},regex:(N)=>{return G(z(h,(f=N,D((C)=>x(C)&&Boolean(C.match(f))))));var f}}),mh=G(D(x)),B=(h)=>Object.assign(J(h),{between:(N,f)=>B(z(h,((C,R)=>D((d)=>Z(d)&&C<=d&&R>=d))(N,f))),lt:(N)=>B(z(h,((f)=>D((C)=>Z(C)&&C<f))(N))),gt:(N)=>B(z(h,((f)=>D((C)=>Z(C)&&C>f))(N))),lte:(N)=>B(z(h,((f)=>D((C)=>Z(C)&&C<=f))(N))),gte:(N)=>B(z(h,((f)=>D((C)=>Z(C)&&C>=f))(N))),int:()=>B(z(h,D((N)=>Z(N)&&Number.isInteger(N)))),finite:()=>B(z(h,D((N)=>Z(N)&&Number.isFinite(N)))),positive:()=>B(z(h,D((N)=>Z(N)&&N>0))),negative:()=>B(z(h,D((N)=>Z(N)&&N<0)))}),sh=B(D(Z)),T=(h)=>Object.assign(J(h),{between:(N,f)=>T(z(h,((C,R)=>D((d)=>F(d)&&C<=d&&R>=d))(N,f))),lt:(N)=>T(z(h,((f)=>D((C)=>F(C)&&C<f))(N))),gt:(N)=>T(z(h,((f)=>D((C)=>F(C)&&C>f))(N))),lte:(N)=>T(z(h,((f)=>D((C)=>F(C)&&C<=f))(N))),gte:(N)=>T(z(h,((f)=>D((C)=>F(C)&&C>=f))(N))),positive:()=>T(z(h,D((N)=>F(N)&&N>0))),negative:()=>T(z(h,D((N)=>F(N)&&N<0)))}),ph=T(D(F)),yh=J(D(function(h){return typeof h=="boolean"})),oh=J(D(function(h){return typeof h=="symbol"})),nh=J(D(function(h){return h==null})),Y={__proto__:null,matcher:Q,optional:a,array:function(...h){return n({[Q]:()=>({match:(N)=>{if(!Array.isArray(N))return{matched:!1};if(h.length===0)return{matched:!0};const f=h[0];let C={};if(N.length===0)return X(f).forEach((d)=>{C[d]=[]}),{matched:!0,selections:C};const R=(d,O)=>{C[d]=(C[d]||[]).concat([O])};return{matched:N.every((d)=>H(f,d,R)),selections:C}},getSelectionKeys:()=>h.length===0?[]:X(h[0])})})},set:function(...h){return J({[Q]:()=>({match:(N)=>{if(!(N instanceof Set))return{matched:!1};let f={};if(N.size===0)return{matched:!0,selections:f};if(h.length===0)return{matched:!0};const C=(d,O)=>{f[d]=(f[d]||[]).concat([O])},R=h[0];return{matched:uh(N,(d)=>H(R,d,C)),selections:f}},getSelectionKeys:()=>h.length===0?[]:X(h[0])})})},map:function(...h){return J({[Q]:()=>({match:(N)=>{if(!(N instanceof Map))return{matched:!1};let f={};if(N.size===0)return{matched:!0,selections:f};const C=(q,U)=>{f[q]=(f[q]||[]).concat([U])};if(h.length===0)return{matched:!0};var R;if(h.length===1)throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(R=h[0])==null?void 0:R.toString()}`);const[d,O]=h;return{matched:ih(N,(q,U)=>{const M=H(d,U,C),I=H(O,q,C);return M&&I}),selections:f}},getSelectionKeys:()=>h.length===0?[]:[...X(h[0]),...X(h[1])]})})},intersection:z,union:gh,not:function(h){return J({[Q]:()=>({match:(N)=>({matched:!H(h,N,()=>{})}),getSelectionKeys:()=>[],matcherType:"not"})})},when:D,select:S,any:Kh,_:vh,string:mh,number:sh,bigint:ph,boolean:yh,symbol:oh,nullish:nh,instanceOf:function(h){return J(D(function(N){return(f)=>f instanceof N}(h)))},shape:function(h){return J(D(ch(h)))}},r={matched:!1,value:void 0};class v{constructor(h,N){this.input=void 0,this.state=void 0,this.input=h,this.state=N}with(...h){if(this.state.matched)return this;const N=h[h.length-1],f=[h[0]];let C;h.length===3&&typeof h[1]=="function"?C=h[1]:h.length>2&&f.push(...h.slice(1,h.length-1));let R=!1,d={};const O=(U,M)=>{R=!0,d[U]=M},q=!f.some((U)=>H(U,this.input,O))||C&&!Boolean(C(this.input))?r:{matched:!0,value:N(R?"@ts-pattern/anonymous-select-key"in d?d["@ts-pattern/anonymous-select-key"]:d:this.input,this.input)};return new v(this.input,q)}when(h,N){if(this.state.matched)return this;const f=Boolean(h(this.input));return new v(this.input,f?{matched:!0,value:N(this.input,this.input)}:r)}otherwise(h){return this.state.matched?this.state.value:h(this.input)}exhaustive(){if(this.state.matched)return this.state.value;let h;try{h=JSON.stringify(this.input)}catch(N){h=this.input}throw new Error(`Pattern matching error: no pattern matches value ${h}`)}run(){return this.exhaustive()}returnType(){return this}}var Vh=document.createElement("template"),wh=document.createElement("style");wh.innerHTML=`
  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
    width: 80vw;
    height: 400px;
  }
`;Vh.innerHTML=`
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var rh=[{name:"\uACF5\uC9C0\uC0AC\uD56D \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uAC1C\uBC1C",period:{start:"2019.08",end:"2019.10"},description:"Google API\uB97C \uC774\uC6A9\uD558\uC5EC Google Workspace\uC5D0 \uC791\uC131\uD55C \uB0B4\uC6A9\uC744 \uC870\uD68C\uD558\uC5EC, \uC0AC\uB0B4 \uACF5\uC9C0\uC0AC\uD56D \uBC0F \uC77C\uC815\uC744 Digital Signage\uC758 \uD615\uD0DC\uB85C \uC81C\uACF5\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C.",tags:["Desktap"],link:"https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c"},{name:"\uC5C5\uBB34 \uD611\uC5C5 \uD504\uB85C\uADF8\uB7A8 \uAC1C\uBC1C",period:{start:"2019.10",end:"2020.10"},description:"\uBB38\uC11C \uACF5\uB3D9\uD3B8\uC9D1\uAE30\uB2A5\uC744 \uAE30\uBC18\uC73C\uB85C \uCC44\uD305, \uD560\uC77C \uAD00\uB9AC \uB4F1 \uAE30\uB2A5\uC758 \uD611\uC5C5\uD234\uC744 \uAC1C\uBC1C.",tags:["Web"],link:"https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6"},{name:"\uB9C8\uCF13\uBD04 \uD504\uB85C \uAC1C\uBC1C",period:{start:"2020.10",end:"2023.08"},description:"\uB9C8\uCF13\uBD04 \uD504\uB85C\uC758 PC, Mobile \uC6F9 \uADF8\uB9AC\uACE0 \uBC31\uC624\uD53C\uC2A4 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uCD08\uAE30 \uB2E8\uACC4\uBD80\uD130 \uAC1C\uBC1C \uBC0F \uC6B4\uC601\uC5C5\uBB34\uB97C \uB2F4\uB2F9.",tags:["Web","Mobile","B2B"],link:"https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6"},{name:"\uB9C8\uCF13\uBCF4\uB85C, \uACF5\uD1B5 \uC6F9\uBDF0 \uAC1C\uBC1C",period:{start:"2023.08",end:"2023.12"},description:"\uB9C8\uCF13\uBCF4\uB85C\uC5D0\uC11C \uC0AC\uC6A9\uC911\uC778 \uB124\uC774\uD2F0\uBE0C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uB4E4\uC744 Flutter\uB85C \uC7AC\uAC1C\uBC1C\uD558\uC5EC \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC6F9\uBDF0 \uC571 \uAC1C\uBC1C",tags:["App","Flutter","Web View"],link:"https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee"},{name:"\uC2DD\uBD04, Next.js\uB85C \uC804\uD658",period:{start:"2024.01",end:"2024.03"},description:"\uAE30\uC874 PHP/CodeIgniter \uAE30\uBC18\uC758 \uC2DD\uBD04 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uD604\uB300\uC801\uC778 \uAE30\uC220 \uC2A4\uD0DD\uC778 Next.js\uC640 Kotlin Spring\uC73C\uB85C \uC804\uD658\uD558\uC5EC \uC11C\uBE44\uC2A4 \uD488\uC9C8 \uBC0F \uC720\uC9C0\uBCF4\uC218 \uD6A8\uC728\uC744 \uAC1C\uC120",tags:["E-Commerce"],link:"https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5"}];class m extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(wh.cloneNode(!0)),this.shadowRoot.appendChild(Vh.content.cloneNode(!0)),_(this.shadowRoot.querySelector(".cards")).with(Y.not(Y.nullish),(h)=>{h.innerHTML=rh.map((N)=>{return`
            <experience-project-list
              link="${N.link}"
              name="${N.name}"
              start="${N.period.start}"
              end="${N.period.end}"
              description="${N.description}"
              tags="${N.tags.join(",")}"
            ></experience-project-list>
            `}).reverse().join("")}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector(".cards") is null')})}}var Ph=document.createElement("template"),$h=document.createElement("style");$h.innerHTML=`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    min-width: 200px;
    min-height: 150px;
    max-height: 300px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
    color: #fff;
    gap: 18px;
  }

  .card h3 {
    margin: 0;
  }

  .card:hover {
    border: 2px solid #2a89ff;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>\uD83D\uDC40</text></svg>") 16 0,auto; /*!emojicursor.app*/
  }

  .card:hover .card-content {
    height: auto;
    display: block;
  }

  .card-content {
    word-break: keep-all;
    margin: 0;
    height: 0;
    display: none;
    animation: fadeIn .7s;
  }

  .tags-warp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tag {
    color: #fff;
    text-decoration: none;
    border: 1px solid #E0EAF1;
    padding: 4px;
    border-radius: 4px;
    word-break: keep-all;
  }

  a {
    text-decoration: none;
  }

  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;Ph.innerHTML="<li></li>";class s extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild($h.cloneNode(!0)),this.shadowRoot.appendChild(Ph.content.cloneNode(!0));const h=this.shadowRoot.querySelector("li")??null;_(h).with(Y.not(Y.nullish),(N)=>{const f=document.createElement("a"),C=document.createElement("div"),R=document.createElement("h3"),d=document.createElement("span"),O=document.createElement("p"),q=document.createElement("div");f.setAttribute("href",this.link??""),C.setAttribute("class","card"),R.textContent=this.name??"",d.textContent=`${this.start??""} ~ ${this.end??""}`,O.textContent=this.description??"",O.setAttribute("class","card-content"),q.setAttribute("class","tags-warp"),q.innerHTML=(this.tags??[]).map((U)=>`<span class="tag">${U}</span>`).join(""),C.appendChild(R),C.appendChild(d),C.appendChild(O),C.appendChild(q),f.appendChild(C),N.appendChild(f)}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector("li") is null')})}static get observedAttributes(){return["name","start","end","description","tags","link"]}get name(){return this.getAttribute("name")}set name(h){this.setAttribute("name",h)}get start(){return this.getAttribute("start")}set start(h){this.setAttribute("start",h)}get end(){return this.getAttribute("end")}set end(h){this.setAttribute("end",h)}get description(){return this.getAttribute("description")}set description(h){this.setAttribute("description",h)}get tags(){return this.getAttribute("tags")?.split(",")??null}set tags(h){this.setAttribute("tags",h.join(","))}get link(){return this.getAttribute("link")}set link(h){this.setAttribute("link",h)}}var kh=document.createElement("template"),Lh=document.createElement("style");Lh.innerHTML=`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    min-width: 200px;
    max-height: 300px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
    color: #fff;
    gap: 18px;
  }

  .card h3 {
    margin: 0;
  }

  .card:hover {
    border: 2px solid #2a89ff;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>\uD83D\uDC40</text></svg>") 16 0,auto; /*!emojicursor.app*/
  }

  .card:hover .card-content {
    height: auto;
    display: block;
  }

  .card-content {
    word-break: keep-all;
    margin: 0;
    height: 0;
    display: none;
    animation: fadeIn .7s;
  }

  .tags-warp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
  }

  .tag {
    color: #fff;
    text-decoration: none;
    border: 1px solid #E0EAF1;
    padding: 4px;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
  }

  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;kh.innerHTML="<li></li>";class p extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Lh.cloneNode(!0)),this.shadowRoot.appendChild(kh.content.cloneNode(!0));const h=this.shadowRoot.querySelector("li")??null;_(h).with(Y.not(Y.nullish),(N)=>{const f=document.createElement("a"),C=document.createElement("div"),R=document.createElement("h3"),d=document.createElement("span"),O=document.createElement("p"),q=document.createElement("div");f.setAttribute("href",this.link??""),C.setAttribute("class","card"),R.textContent=this.name??"",d.textContent=`${this.start??""} ~ ${this.end??""}`,O.textContent=this.description??"",O.setAttribute("class","card-content"),q.setAttribute("class","tags-warp"),q.innerHTML=(this.tags??[]).map((U)=>`<span class="tag">${U}</span>`).join(""),C.appendChild(R),C.appendChild(d),C.appendChild(O),C.appendChild(q),f.appendChild(C),N.appendChild(f)}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector("li") is null')})}static get observedAttributes(){return["name","start","end","description","tags","link"]}get name(){return this.getAttribute("name")}set name(h){this.setAttribute("name",h)}get start(){return this.getAttribute("start")}set start(h){this.setAttribute("start",h)}get end(){return this.getAttribute("end")}set end(h){this.setAttribute("end",h)}get description(){return this.getAttribute("description")}set description(h){this.setAttribute("description",h)}get tags(){return this.getAttribute("tags")?.split(",")??null}set tags(h){this.setAttribute("tags",h.join(","))}get link(){return this.getAttribute("link")}set link(h){this.setAttribute("link",h)}}var bh=document.createElement("template"),jh=document.createElement("style");jh.innerHTML=`
  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
    width: 80vw;
    height: 300px;
  }
`;bh.innerHTML=`
  <h2>Activities</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var ah=[{name:"Khuthon",period:{start:"2018.11",end:"2018.11"},description:"\uACBD\uD76C\uB300\uD559\uAD50",tags:["\uD574\uCEE4\uD1A4"],link:"https://thon.khlug.org/"},{name:"\uC815\uC6D0\uC0AC\uB4E4 \uC2DC\uC98C 9",period:{start:"2023.08",end:"2023.11"},description:"Google I/O Extended 2023",tags:["Gathering"],link:"https://gitsunmin.github.io/blogs/garden9-2023/"}];class y extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(jh.cloneNode(!0)),this.shadowRoot.appendChild(bh.content.cloneNode(!0)),_(this.shadowRoot.querySelector(".cards")).with(Y.not(Y.nullish),(h)=>{h.innerHTML=ah.map((N)=>{return`
            <experience-activity-list
              link="${N.link}"
              name="${N.name}"
              start="${N.period.start}"
              end="${N.period.end}"
              description="${N.description}"
              tags="${N.tags.join(",")}"
            ></experience-activity-list>
            `}).reverse().join("")}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector(".cards") is null')})}}var Eh=()=>{customElements.define("profile-image",V),customElements.define("labeled-icon",w),customElements.define("about-me-section",b),customElements.define("about-me-profile",j),customElements.define("section-title",P),customElements.define("section-wrapper",$),customElements.define("layout-footer",W),customElements.define("layout-header",g),customElements.define("layout-main",K),customElements.define("hello-section",k),customElements.define("global-greetings",L),customElements.define("skills-section",E),customElements.define("skills-list",c),customElements.define("experience-section",u),customElements.define("experience-project-list-wrapper",m),customElements.define("experience-project-list",s),customElements.define("experience-activity-list",p),customElements.define("experience-activity-list-wrapper",y)};var lh=function(){console.log("Hello World"),Eh()};lh();
