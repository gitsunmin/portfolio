var a=document.createElement("template"),n=document.createElement("style");n.innerHTML=`
  @import "/index.css";

  .footer {
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;a.innerHTML=`
  <footer class="footer">
    Gitsunmin's Portfolio \xA9 2024
  </footer>
`;class P extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(n.cloneNode(!0)),this.shadowRoot?.appendChild(a.content.cloneNode(!0))}}var l=document.createElement("template"),t=document.createElement("style");t.innerHTML=`
  @import "/index.css";

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
`;l.innerHTML=`
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
`;class W extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(t.cloneNode(!0)),this.shadowRoot?.appendChild(l.content.cloneNode(!0))}}var e=document.createElement("template"),hh=document.createElement("style");hh.innerHTML=`
  @import "/index.css";

  .header-case {
    margin-top: 90px;
  }
`;e.innerHTML=`
  <div class="header-case"></div> 
  <main class="main">
    <slot></slot>
  </main>
`;class A extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(hh.cloneNode(!0)),this.shadowRoot?.appendChild(e.content.cloneNode(!0))}}var dh=document.createElement("template"),fh=document.createElement("style");fh.innerHTML=`
  @import "/index.css";
  .profile-image {
    box-shadow: 0 0 10px 0 white;
    isolation: isolate;
  }
`;dh.innerHTML=`
    <img class="profile-image" src="./assets/me.jpeg" width="200px" sync/>
`;class L extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(fh.cloneNode(!0)),this.shadowRoot?.appendChild(dh.content.cloneNode(!0)),this.profileImage$el=this.shadowRoot?.querySelector(".profile-image")??null}profileImage$el=null;static get observedAttributes(){return["width","height","round"]}get width(){return this.getAttribute("width")??"200px"}set width(h){this.setAttribute("width",h)}get height(){return this.getAttribute("height")??"200px"}set height(h){this.setAttribute("height",h)}get round(){return this.getAttribute("round")??"200px"}set round(h){this.setAttribute("round",h)}attributeChangedCallback(h,d,f){const q=this.shadowRoot?.querySelector(".profile-image")??null;switch(h){case"width":q?.setAttribute("width",f);break;case"height":q?.setAttribute("height",f);break;case"round":q?.setAttribute("style",`border-radius: ${f?"50%":"10%"}`);break;default:throw new Error("Unexpected attribute")}}}var qh=document.createElement("template"),Oh=document.createElement("style");Oh.innerHTML=`
  @import "/index.css";

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
`;qh.innerHTML=`
    <figure class="labeled-icon">
        <img class="icon" width="50px" />
        <figcaption class="label"></figcaption>
    </figure>
`;class S extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Oh.cloneNode(!0)),this.shadowRoot?.appendChild(qh.content.cloneNode(!0))}static get observedAttributes(){return["icon","label"]}get icon(){return this.getAttribute("icon")}set icon(h){this.setAttribute("icon",h)}get label(){return this.getAttribute("label")}set label(h){this.setAttribute("label",h)}attributeChangedCallback(h,d,f){const q=this.shadowRoot?.querySelector(".icon")??null,O=this.shadowRoot?.querySelector(".label")??null;if(q===null||O===null)return;switch(h){case"icon":q.setAttribute("src",f),q.setAttribute("alt",f);break;case"label":O.setAttribute("src",f);break;default:throw new Error("Unexpected attribute")}}}var Rh=document.createElement("template"),Xh=document.createElement("style");Xh.innerHTML=`
  @import "/index.css";

  .section-title {
    text-align: center;
  }
`;Rh.innerHTML=`
    <h2 class="section-title">
        <slot></slot>
    </h2>
`;class $ extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Xh.cloneNode(!0)),this.shadowRoot?.appendChild(Rh.content.cloneNode(!0))}}var gh=document.createElement("template"),zh=document.createElement("style");zh.innerHTML=`
  @import "/index.css";
`;gh.innerHTML=`
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;class K extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(zh.cloneNode(!0)),this.shadowRoot?.appendChild(gh.content.cloneNode(!0))}static get observedAttributes(){return["align"]}get align(){return this.getAttribute("align")??"200px"}set align(h){this.setAttribute("align",h)}connectedCallback(){this.shadowRoot?.querySelector(".section-wrapper")?.setAttribute("style",`text-align: ${this.getAttribute("align")};`)}}var Ch=document.createElement("template"),Dh=document.createElement("style");Dh.innerHTML=`
  @import "/index.css";

  .hello-section {
    height: 75vh;
  }

  .hello-animation {
    position: relative;
    font-size: 2.5em;
    height: 30px; /* \uD14D\uC2A4\uD2B8 \uB192\uC774\uC5D0 \uB9DE\uAC8C \uC870\uC815 */
    margin-top: 25vh;
  }
  
  .hello {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: helloAnimation 12s infinite;
  }

  .description {
    text-align: center;
    font-size: 1.5em;
  }

  .scroll-btn-wrapper {
    text-align: center;
  }
  
  @keyframes helloAnimation {
    0%, 100% { opacity: 0; }
    10% { opacity: 1; }
    20% { opacity: 0; }
  }

  .hello:nth-child(1) { animation-delay: 0s; }
  .hello:nth-child(2) { animation-delay: 2s; }
  .hello:nth-child(3) { animation-delay: 4s; }
  .hello:nth-child(4) { animation-delay: 6s; }
  .hello:nth-child(5) { animation-delay: 8s; }
  .hello:nth-child(6) { animation-delay: 10s; }

  .description {
    margin-top: 25vh;
    font-size: 1em;
    padding: 20px;
  }

`;Ch.innerHTML=`
    <section class="hello-section">
      <div class="hello-animation">
        <span class="hello">Hello</span>
        <span class="hello">\uC548\uB155\uD558\uC138\uC694</span>
        <span class="hello">\u3053\u3093\u306B\u3061\u306F</span>
        <span class="hello">Hallo</span>
        <span class="hello">Bonjour</span>
        <span class="hello">Hola</span>
      </div>

      <p class="description">
        \uC2A4\uD06C\uB864\uC744 \uB0B4\uB9AC\uBA74\uC11C, <br />
        \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uD655\uC778\uD574\uBCF4\uC138\uC694.
      </p>

      <div class="scroll-btn-wrapper">
        <button class="show-about-me">Scroll Down</button>
      </div>
    </section>
`;class k extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Dh.cloneNode(!0)),this.shadowRoot?.appendChild(Ch.content.cloneNode(!0))}connectedCallback(){this.shadowRoot?.querySelector(".show-about-me")?.addEventListener("click",()=>{document?.querySelector("#about-me")?.scrollIntoView({behavior:"smooth",block:"start"})})}}var Gh=document.createElement("template"),Hh=document.createElement("style");Hh.innerHTML=`
  @import "/index.css";

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

  li:not(:first-child) {
    margin-top: 100vh;
  }
`;Gh.innerHTML=`
    <section-wrapper align="center">
      <ul>
          <li>
            <about-me-scene1></about-me-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class V extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Hh.cloneNode(!0)),this.shadowRoot?.appendChild(Gh.content.cloneNode(!0))}}var Jh=document.createElement("template"),Mh=document.createElement("style");Mh.innerHTML=`
  @import "/index.css";

  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
  }
`;Jh.innerHTML=`
  <div class="about-me-scene1">
    <div class="abount-me-scene1-profile">
      <profile-image round="true"></profile-image>
    </div>
    <p class="abount-me-scene1-description">
      \uC800\uB294 2019\uB144\uBD80\uD130 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uC2DC\uC791\uD558\uC600\uC73C\uBA70, <br />
      Mobile, Desktop, \uADF8\uB9AC\uACE0 Web \uB4F1 \uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC\uC5D0\uC11C <br />
      \uAC1C\uBC1C\uC744 \uD574\uC654\uC2B5\uB2C8\uB2E4. <br />
    </p>
  </div>
`;class w extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Mh.cloneNode(!0)),this.shadowRoot?.appendChild(Jh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".abount-me-scene1-profile")?.animate({opacity:[0,1],transform:["translateX(200px)","translateX(-20px)","translateX(0)"]},{duration:1200,iterations:1,easing:"ease-in-out"});this.shadowRoot?.querySelector(".abount-me-scene1-description")?.animate({opacity:[0,1]},{duration:2000,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Nh=document.createElement("template"),Qh=document.createElement("style");Qh.innerHTML=`
  @import "/index.css";

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
`;Nh.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Skills</h1>
      <ul>
          <li>
            <skills-scene1></skills-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class j extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Qh.cloneNode(!0)),this.shadowRoot?.appendChild(Nh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Uh=document.createElement("template"),Yh=document.createElement("style");Yh.innerHTML=`
  @import "/index.css";

  .skills-scene1 {
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

  .skills-scene1-unordered {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 12px;
  }

  .skills-scene1-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    white-space: normal;
  }
`;Uh.innerHTML=`
  <div class="skills-scene1">
    <ul class="skills-scene1-unordered">
    </ul>
  </div>
`;var m=[{name:"HTML5",icon:"./assets/icons/html5.svg",description:"\uC2DC\uBA58\uD2F1, \uC6F9 \uD45C\uC900, \uC6F9 \uC811\uADFC\uC131, SEO \uB4F1 \uAE30\uBCF8\uC801\uC778 \uC6F9 \uAE30\uC220\uC5D0 \uB300\uD55C \uC774\uD574\uC640 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"CSS3",icon:"./assets/icons/css3.svg",description:"Box Model, Flexbox, Grid, Animation, Media Query \uB4F1\uC744 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Javascript",icon:"./assets/icons/javascript.svg",description:"ES6+ \uBB38\uBC95, \uBE44\uB3D9\uAE30 \uCC98\uB9AC, \uD638\uC774\uC2A4\uD305, \uB3D9\uC791 \uC6D0\uB9AC \uB4F1\uC744 \uC774\uD574\uD558\uACE0 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Typescript",icon:"./assets/icons/typeScript.svg",description:"\uAE30\uBCF8 \uD0C0\uC785\uACFC \uC778\uD130\uD398\uC774\uC2A4, \uC81C\uB124\uB9AD, \uD0C0\uC785 \uD569\uC131 \uB4F1 \uD0C0\uC785\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"React",icon:"./assets/icons/react.svg",description:"\uAE30\uBCF8 \uBB38\uBC95\uBD80\uD130 \uD6C5, \uB77C\uC6B0\uD130 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Next.js",icon:"./assets/icons/next.js.svg",description:"SSR, SSG, API Routes, Image \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Vue.js",icon:"./assets/icons/vue.js.svg",description:"2\uBC84\uC804\uC744 \uC774\uC6A9\uD558\uC5EC \uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC640 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Nuxt.js",icon:"./assets/icons/nuxt.js.svg",description:"Nuxt\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Flutter",icon:"./assets/icons/flutter.svg",description:"\uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C\uACFC \uC6F9\uBDF0 \uC571 \uAC1C\uBC1C \uACBD\uD5D8\uC774 \uC788\uACE0, Firebase\uC640 \uC5F0\uB3D9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Git",icon:"./assets/icons/git.svg",description:"\uAE30\uBCF8\uC801\uC778 \uBA85\uB839\uC5B4\uBD80\uD130 \uBE0C\uB80C\uCE58 \uC804\uB7B5, \uB9AC\uBCA0\uC774\uC2A4 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"GraphQL",icon:"./assets/icons/graphql.svg",description:"Schema\uB97C \uC815\uC758\uD558\uACE0, Query, Mutation\uC744 \uC791\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Apollo Client",icon:"./assets/icons/apollo.svg",description:"Link, Cache, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Relay",icon:"./assets/icons/relay.svg",description:"compiler \uC124\uC815, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Storybook",icon:"./assets/icons/storybook.svg",description:"UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uACC4\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8 \uBE4C\uB4DC \uBC0F \uBC30\uD3EC \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Jest",icon:"./assets/icons/jest.svg",description:"\uB85C\uC9C1\uC758 \uB2E8\uC704 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uACE0, \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"SCSS/SASS",icon:"./assets/icons/sass.svg",description:"scss \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uBAA8\uB4C8\uD654\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Styled Components",icon:"./assets/icons/styled-component.png",description:"\uC2A4\uD0C0\uC77C\uC744 \uCEF4\uD4E8\uB10C\uD2B8\uD654 \uD558\uACE0, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD569\uC131 \uBC0F \uC7AC\uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1}];class E extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Yh.cloneNode(!0)),this.shadowRoot?.appendChild(Uh.content.cloneNode(!0)),this.unOrderedList$el=this.shadowRoot?.querySelector(".skills-scene1-unordered")??null,this.unOrderedList$el===null)return;this.unOrderedList$el.innerHTML=m.concat(m).map((h)=>{return`
              <li class="skills-scene1-list">
                <labeled-icon label="${h.name}" icon="${h.icon}" round="true"></labeled-icon>
                <p>${h.description}</p>
              </li>
          `}).join("")}unOrderedList$el=null;connectedCallback(){if(this.unOrderedList$el===null)return;const h=this.unOrderedList$el.animate([{transform:"translateX(0)"},{transform:"translateX(-50%)"}],{duration:m.length*3000,iterations:Infinity,easing:"linear"}),d=()=>h.play(),f=()=>h.pause();this.unOrderedList$el.addEventListener("mouseover",f),this.unOrderedList$el.addEventListener("mouseout",d),this.unOrderedList$el.addEventListener("touchstart",f),this.unOrderedList$el.addEventListener("touchend",d),new IntersectionObserver((O)=>{O.forEach((R)=>{if(R.isIntersecting)d()})}).observe(this)}}var Zh=document.createElement("template"),xh=document.createElement("style");xh.innerHTML=`
  @import "/index.css";

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
`;Zh.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Experience</h1>
      <experience-list-wrapper></experience-list-wrapper>
    </section-wrapper>
`;class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(xh.cloneNode(!0)),this.shadowRoot?.appendChild(Zh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((f)=>{if(f.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Lh=function(...h){if(h.length===1){const[d]=h;return(f)=>D(d,f,()=>{})}if(h.length===2){const[d,f]=h;return D(d,f,()=>{})}throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${h.length}.`)},G=function(h){return Object.assign(h,{optional:()=>r(h),and:(d)=>g(h,d),or:(d)=>Fh(h,d),select:(d)=>d===void 0?I(h):I(d,h)})},s=function(h){return Object.assign(((d)=>Object.assign(d,{[Symbol.iterator](){let f=0;const q=[{value:Object.assign(d,{[Bh]:!0}),done:!1},{done:!0,value:void 0}];return{next:()=>{var O;return(O=q[f++])!=null?O:q.at(-1)}}}}))(h),{optional:()=>s(r(h)),select:(d)=>s(d===void 0?I(h):I(d,h))})},r=function(h){return G({[H]:()=>({match:(d)=>{let f={};const q=(O,R)=>{f[O]=R};return d===void 0?(J(h).forEach((O)=>q(O,void 0)),{matched:!0,selections:f}):{matched:D(h,d,q),selections:f}},getSelectionKeys:()=>J(h),matcherType:"optional"})})},g=function(...h){return G({[H]:()=>({match:(d)=>{let f={};const q=(O,R)=>{f[O]=R};return{matched:h.every((O)=>D(O,d,q)),selections:f}},getSelectionKeys:()=>_(h,J),matcherType:"and"})})},Fh=function(...h){return G({[H]:()=>({match:(d)=>{let f={};const q=(O,R)=>{f[O]=R};return _(h,J).forEach((O)=>q(O,void 0)),{matched:h.some((O)=>D(O,d,q)),selections:f}},getSelectionKeys:()=>_(h,J),matcherType:"or"})})},X=function(h){return{[H]:()=>({match:(d)=>({matched:Boolean(h(d))})})}},I=function(...h){const d=typeof h[0]=="string"?h[0]:void 0,f=h.length===2?h[1]:typeof h[0]=="string"?void 0:h[0];return G({[H]:()=>({match:(q)=>{let O={[d!=null?d:"@ts-pattern/anonymous-select-key"]:q};return{matched:f===void 0||D(f,q,(R,z)=>{O[R]=z}),selections:O}},getSelectionKeys:()=>[d!=null?d:"@ts-pattern/anonymous-select-key"].concat(f===void 0?[]:J(f))})})},N=function(h){return typeof h=="number"},x=function(h){return typeof h=="string"},U=function(h){return typeof h=="bigint"},v=function(h){return new i(h,o)},H=Symbol.for("@ts-pattern/matcher"),Bh=Symbol.for("@ts-pattern/isVariadic");var y=(h)=>Boolean(h&&typeof h=="object"),c=(h)=>h&&!!h[H],D=(h,d,f)=>{if(c(h)){const q=h[H](),{matched:O,selections:R}=q.match(d);return O&&R&&Object.keys(R).forEach((z)=>f(z,R[z])),O}if(y(h)){if(!y(d))return!1;if(Array.isArray(h)){if(!Array.isArray(d))return!1;let q=[],O=[],R=[];for(let z of h.keys()){const C=h[z];c(C)&&C[Bh]?R.push(C):R.length?O.push(C):q.push(C)}if(R.length){if(R.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(d.length<q.length+O.length)return!1;const z=d.slice(0,q.length),C=O.length===0?[]:d.slice(-O.length),M=d.slice(q.length,O.length===0?Infinity:-O.length);return q.every((Z,T)=>D(Z,z[T],f))&&O.every((Z,T)=>D(Z,C[T],f))&&(R.length===0||D(R[0],M,f))}return h.length===d.length&&h.every((z,C)=>D(z,d[C],f))}return Object.keys(h).every((q)=>{const O=h[q];return((q in d)||c(R=O)&&R[H]().matcherType==="optional")&&D(O,d[q],f);var R})}return Object.is(d,h)},J=(h)=>{var d,f,q;return y(h)?c(h)?(d=(f=(q=h[H]()).getSelectionKeys)==null?void 0:f.call(q))!=null?d:[]:Array.isArray(h)?_(h,J):_(Object.values(h),J):[]},_=(h,d)=>h.reduce((f,q)=>f.concat(d(q)),[]),Sh=(h,d)=>{for(let f of h)if(!d(f))return!1;return!0},$h=(h,d)=>{for(let[f,q]of h.entries())if(!d(q,f))return!1;return!0},Th=G(X(function(h){return!0})),Kh=Th,B=(h)=>Object.assign(G(h),{startsWith:(d)=>{return B(g(h,(f=d,X((q)=>x(q)&&q.startsWith(f)))));var f},endsWith:(d)=>{return B(g(h,(f=d,X((q)=>x(q)&&q.endsWith(f)))));var f},minLength:(d)=>B(g(h,((f)=>X((q)=>x(q)&&q.length>=f))(d))),maxLength:(d)=>B(g(h,((f)=>X((q)=>x(q)&&q.length<=f))(d))),includes:(d)=>{return B(g(h,(f=d,X((q)=>x(q)&&q.includes(f)))));var f},regex:(d)=>{return B(g(h,(f=d,X((q)=>x(q)&&Boolean(q.match(f))))));var f}}),kh=B(X(x)),Q=(h)=>Object.assign(G(h),{between:(d,f)=>Q(g(h,((q,O)=>X((R)=>N(R)&&q<=R&&O>=R))(d,f))),lt:(d)=>Q(g(h,((f)=>X((q)=>N(q)&&q<f))(d))),gt:(d)=>Q(g(h,((f)=>X((q)=>N(q)&&q>f))(d))),lte:(d)=>Q(g(h,((f)=>X((q)=>N(q)&&q<=f))(d))),gte:(d)=>Q(g(h,((f)=>X((q)=>N(q)&&q>=f))(d))),int:()=>Q(g(h,X((d)=>N(d)&&Number.isInteger(d)))),finite:()=>Q(g(h,X((d)=>N(d)&&Number.isFinite(d)))),positive:()=>Q(g(h,X((d)=>N(d)&&d>0))),negative:()=>Q(g(h,X((d)=>N(d)&&d<0)))}),Vh=Q(X(N)),Y=(h)=>Object.assign(G(h),{between:(d,f)=>Y(g(h,((q,O)=>X((R)=>U(R)&&q<=R&&O>=R))(d,f))),lt:(d)=>Y(g(h,((f)=>X((q)=>U(q)&&q<f))(d))),gt:(d)=>Y(g(h,((f)=>X((q)=>U(q)&&q>f))(d))),lte:(d)=>Y(g(h,((f)=>X((q)=>U(q)&&q<=f))(d))),gte:(d)=>Y(g(h,((f)=>X((q)=>U(q)&&q>=f))(d))),positive:()=>Y(g(h,X((d)=>U(d)&&d>0))),negative:()=>Y(g(h,X((d)=>U(d)&&d<0)))}),wh=Y(X(U)),jh=G(X(function(h){return typeof h=="boolean"})),Eh=G(X(function(h){return typeof h=="symbol"})),bh=G(X(function(h){return h==null})),F={__proto__:null,matcher:H,optional:r,array:function(...h){return s({[H]:()=>({match:(d)=>{if(!Array.isArray(d))return{matched:!1};if(h.length===0)return{matched:!0};const f=h[0];let q={};if(d.length===0)return J(f).forEach((R)=>{q[R]=[]}),{matched:!0,selections:q};const O=(R,z)=>{q[R]=(q[R]||[]).concat([z])};return{matched:d.every((R)=>D(f,R,O)),selections:q}},getSelectionKeys:()=>h.length===0?[]:J(h[0])})})},set:function(...h){return G({[H]:()=>({match:(d)=>{if(!(d instanceof Set))return{matched:!1};let f={};if(d.size===0)return{matched:!0,selections:f};if(h.length===0)return{matched:!0};const q=(R,z)=>{f[R]=(f[R]||[]).concat([z])},O=h[0];return{matched:Sh(d,(R)=>D(O,R,q)),selections:f}},getSelectionKeys:()=>h.length===0?[]:J(h[0])})})},map:function(...h){return G({[H]:()=>({match:(d)=>{if(!(d instanceof Map))return{matched:!1};let f={};if(d.size===0)return{matched:!0,selections:f};const q=(C,M)=>{f[C]=(f[C]||[]).concat([M])};if(h.length===0)return{matched:!0};var O;if(h.length===1)throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(O=h[0])==null?void 0:O.toString()}`);const[R,z]=h;return{matched:$h(d,(C,M)=>{const Z=D(R,M,q),T=D(z,C,q);return Z&&T}),selections:f}},getSelectionKeys:()=>h.length===0?[]:[...J(h[0]),...J(h[1])]})})},intersection:g,union:Fh,not:function(h){return G({[H]:()=>({match:(d)=>({matched:!D(h,d,()=>{})}),getSelectionKeys:()=>[],matcherType:"not"})})},when:X,select:I,any:Th,_:Kh,string:kh,number:Vh,bigint:wh,boolean:jh,symbol:Eh,nullish:bh,instanceOf:function(h){return G(X(function(d){return(f)=>f instanceof d}(h)))},shape:function(h){return G(X(Lh(h)))}},o={matched:!1,value:void 0};class i{constructor(h,d){this.input=void 0,this.state=void 0,this.input=h,this.state=d}with(...h){if(this.state.matched)return this;const d=h[h.length-1],f=[h[0]];let q;h.length===3&&typeof h[1]=="function"?q=h[1]:h.length>2&&f.push(...h.slice(1,h.length-1));let O=!1,R={};const z=(M,Z)=>{O=!0,R[M]=Z},C=!f.some((M)=>D(M,this.input,z))||q&&!Boolean(q(this.input))?o:{matched:!0,value:d(O?"@ts-pattern/anonymous-select-key"in R?R["@ts-pattern/anonymous-select-key"]:R:this.input,this.input)};return new i(this.input,C)}when(h,d){if(this.state.matched)return this;const f=Boolean(h(this.input));return new i(this.input,f?{matched:!0,value:d(this.input,this.input)}:o)}otherwise(h){return this.state.matched?this.state.value:h(this.input)}exhaustive(){if(this.state.matched)return this.state.value;let h;try{h=JSON.stringify(this.input)}catch(d){h=this.input}throw new Error(`Pattern matching error: no pattern matches value ${h}`)}run(){return this.exhaustive()}returnType(){return this}}var _h=document.createElement("template"),Ih=document.createElement("style");Ih.innerHTML=`
  @import "/index.css";

  .scene {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
  }

  .cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 80vw;
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
  }

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
`;_h.innerHTML=`
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var ch=[{name:"\uACF5\uC9C0\uC0AC\uD56D \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uAC1C\uBC1C",period:{start:"2019.08",end:"2019.10"},description:"Google API\uB97C \uC774\uC6A9\uD558\uC5EC Google Workspace\uC5D0 \uC791\uC131\uD55C \uB0B4\uC6A9\uC744 \uC870\uD68C\uD558\uC5EC, \uC0AC\uB0B4 \uACF5\uC9C0\uC0AC\uD56D \uBC0F \uC77C\uC815\uC744 \uB300\uC2DC\uBCF4\uB4DC\uC758 \uD615\uD0DC\uB85C \uC81C\uACF5\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Desktap"],link:"https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c"},{name:"\uC5C5\uBB34 \uD611\uC5C5 \uD504\uB85C\uADF8\uB7A8 \uAC1C\uBC1C",period:{start:"2019.10",end:"2020.10"},description:"\uBB38\uC11C \uACF5\uB3D9\uD3B8\uC9D1\uAE30\uB2A5\uC744 \uAE30\uBC18\uC73C\uB85C \uCC44\uD305, \uD560\uC77C \uAD00\uB9AC \uB4F1 \uAE30\uB2A5\uC758 \uD611\uC5C5\uD234\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web"],link:"https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6"},{name:"\uB9C8\uCF13\uBD04 \uD504\uB85C \uAC1C\uBC1C",period:{start:"2020.10",end:"2023.08"},description:"\uB9C8\uCF13\uBD04 \uD504\uB85C\uC758 PC, Mobile \uC6F9 \uADF8\uB9AC\uACE0 \uBC31\uC624\uD53C\uC2A4 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uCD08\uAE30 \uB2E8\uACC4\uBD80\uD130 \uAC1C\uBC1C \uBC0F \uC6B4\uC601\uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web","Mobile","B2B"],link:"https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6"},{name:"\uB9C8\uCF13\uBCF4\uB85C, \uACF5\uD1B5 \uC6F9\uBDF0 \uAC1C\uBC1C",period:{start:"2023.08",end:"2023.12"},description:"\uB9C8\uCF13\uBCF4\uB85C\uC5D0\uC11C \uC0AC\uC6A9\uC911\uC778 \uB124\uC774\uD2F0\uBE0C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uB4E4\uC744 Flutter\uB85C \uC7AC\uAC1C\uBC1C\uD558\uC5EC \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC6F9\uBDF0 \uC571\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["App","Flutter","Web View"],link:"https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee"},{name:"\uC2DD\uBD04, Next.js\uB85C \uC804\uD658",period:{start:"2024.01",end:"2024.03"},description:"\uC0AC\uC5C5\uC790 \uB300\uC0C1 \uC2DD\uC790\uC7AC E-Commerce \uC11C\uBE44\uC2A4\uC778 \uC2DD\uBD04\uC758 \uC720\uC9C0\uBCF4\uC218 \uBC0F Next.js\uB85C \uC804\uD658\uD558\uB294 \uC791\uC5C5\uC744 \uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["E-Commerce"],link:"https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5"}];class p extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Ih.cloneNode(!0)),this.shadowRoot.appendChild(_h.content.cloneNode(!0)),v(this.shadowRoot.querySelector(".cards")).with(F.not(F.nullish),(h)=>{h.innerHTML=ch.map((d)=>{return`
            <experience-list
              link="${d.link}"
              name="${d.name}"
              start="${d.period.start}"
              end="${d.period.end}"
              description="${d.description}"
              tags="${d.tags.join(",")}"
            ></experience-list>
            `}).reverse().join("")}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector(".cards") is null')})}}var Ph=document.createElement("template"),Wh=document.createElement("style");Wh.innerHTML=`
  @import "/index.css";

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
`;Ph.innerHTML="<li></li>";class u extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Wh.cloneNode(!0)),this.shadowRoot.appendChild(Ph.content.cloneNode(!0));const h=this.shadowRoot.querySelector("li")??null;v(h).with(F.not(F.nullish),(d)=>{const f=document.createElement("a"),q=document.createElement("div"),O=document.createElement("h3"),R=document.createElement("span"),z=document.createElement("p"),C=document.createElement("div");f.setAttribute("href",this.link??""),q.setAttribute("class","card"),O.textContent=this.name??"",R.textContent=`${this.start??""} ~ ${this.end??""}`,z.textContent=this.description??"",z.setAttribute("class","card-content"),C.setAttribute("class","tags-warp"),C.innerHTML=(this.tags??[]).map((M)=>`<span class="tag">${M}</span>`).join(""),q.appendChild(O),q.appendChild(R),q.appendChild(z),q.appendChild(C),f.appendChild(q),d.appendChild(f)}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector("li") is null')})}static get observedAttributes(){return["name","start","end","description","tags","link"]}get name(){return this.getAttribute("name")}set name(h){this.setAttribute("name",h)}get start(){return this.getAttribute("start")}set start(h){this.setAttribute("start",h)}get end(){return this.getAttribute("end")}set end(h){this.setAttribute("end",h)}get description(){return this.getAttribute("description")}set description(h){this.setAttribute("description",h)}get tags(){return this.getAttribute("tags")?.split(",")??null}set tags(h){this.setAttribute("tags",h.join(","))}get link(){return this.getAttribute("link")}set link(h){this.setAttribute("link",h)}}var Ah=()=>{customElements.define("profile-image",L),customElements.define("labeled-icon",S),customElements.define("about-me-section",V),customElements.define("about-me-scene1",w),customElements.define("section-title",$),customElements.define("section-wrapper",K),customElements.define("layout-footer",P),customElements.define("layout-header",W),customElements.define("layout-main",A),customElements.define("hello-section",k),customElements.define("skills-section",j),customElements.define("skills-scene1",E),customElements.define("experience-section",b),customElements.define("experience-list-wrapper",p),customElements.define("experience-list",u)};var ih=function(){console.log("Hello World"),Ah()};ih();
