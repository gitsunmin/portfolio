var l=document.createElement("template"),t=document.createElement("style");t.innerHTML=`
  @import "/index.css";

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
`;class S extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(t.cloneNode(!0)),this.shadowRoot?.appendChild(l.content.cloneNode(!0))}}var e=document.createElement("template"),hh=document.createElement("style");hh.innerHTML=`
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
`;e.innerHTML=`
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
`;class A extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(hh.cloneNode(!0)),this.shadowRoot?.appendChild(e.content.cloneNode(!0))}}var dh=document.createElement("template"),qh=document.createElement("style");qh.innerHTML=`
  @import "/index.css";

  .header-case {
    margin-top: 90px;
  }
`;dh.innerHTML=`
  <div class="header-case"></div> 
  <main class="main">
    <slot></slot>
  </main>
`;class K extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(qh.cloneNode(!0)),this.shadowRoot?.appendChild(dh.content.cloneNode(!0))}}var Ch=document.createElement("template"),Gh=document.createElement("style");Gh.innerHTML=`
  @import "/index.css";
  .profile-image {
    box-shadow: 0 0 10px 0 white;
    isolation: isolate;
  }
`;Ch.innerHTML=`
    <img class="profile-image" src="./assets/me.jpeg" width="200px" sync/>
`;class $ extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Gh.cloneNode(!0)),this.shadowRoot?.appendChild(Ch.content.cloneNode(!0)),this.profileImage$el=this.shadowRoot?.querySelector(".profile-image")??null}profileImage$el=null;static get observedAttributes(){return["width","height","round"]}get width(){return this.getAttribute("width")??"200px"}set width(h){this.setAttribute("width",h)}get height(){return this.getAttribute("height")??"200px"}set height(h){this.setAttribute("height",h)}get round(){return this.getAttribute("round")??"200px"}set round(h){this.setAttribute("round",h)}attributeChangedCallback(h,d,q){const C=this.shadowRoot?.querySelector(".profile-image")??null;switch(h){case"width":C?.setAttribute("width",q);break;case"height":C?.setAttribute("height",q);break;case"round":C?.setAttribute("style",`border-radius: ${q?"50%":"10%"}`);break;default:throw new Error("Unexpected attribute")}}}var Oh=document.createElement("template"),Rh=document.createElement("style");Rh.innerHTML=`
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
`;Oh.innerHTML=`
    <figure class="labeled-icon">
        <img class="icon" width="50px" />
        <figcaption class="label"></figcaption>
    </figure>
`;class L extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Rh.cloneNode(!0)),this.shadowRoot?.appendChild(Oh.content.cloneNode(!0))}static get observedAttributes(){return["icon","label"]}get icon(){return this.getAttribute("icon")}set icon(h){this.setAttribute("icon",h)}get label(){return this.getAttribute("label")}set label(h){this.setAttribute("label",h)}attributeChangedCallback(h,d,q){const C=this.shadowRoot?.querySelector(".icon")??null,G=this.shadowRoot?.querySelector(".label")??null;if(C===null||G===null)return;switch(h){case"icon":C.setAttribute("src",q),C.setAttribute("alt",q);break;case"label":G.setAttribute("src",q);break;default:throw new Error("Unexpected attribute")}}}var Xh=document.createElement("template"),fh=document.createElement("style");fh.innerHTML=`
  @import "/index.css";

  .section-title {
    text-align: center;
  }
`;Xh.innerHTML=`
    <h2 class="section-title">
        <slot></slot>
    </h2>
`;class P extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(fh.cloneNode(!0)),this.shadowRoot?.appendChild(Xh.content.cloneNode(!0))}}var zh=document.createElement("template"),Dh=document.createElement("style");Dh.innerHTML=`
  @import "/index.css";
`;zh.innerHTML=`
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;class V extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Dh.cloneNode(!0)),this.shadowRoot?.appendChild(zh.content.cloneNode(!0))}static get observedAttributes(){return["align"]}get align(){return this.getAttribute("align")??"200px"}set align(h){this.setAttribute("align",h)}connectedCallback(){this.shadowRoot?.querySelector(".section-wrapper")?.setAttribute("style",`text-align: ${this.getAttribute("align")};`)}}var Hh=document.createElement("template"),Jh=document.createElement("style");Jh.innerHTML=`
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

`;Hh.innerHTML=`
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
`;class w extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Jh.cloneNode(!0)),this.shadowRoot?.appendChild(Hh.content.cloneNode(!0))}connectedCallback(){this.shadowRoot?.querySelector(".show-about-me")?.addEventListener("click",()=>{document?.querySelector("#about-me")?.scrollIntoView({behavior:"smooth",block:"start"})})}}var Mh=document.createElement("template"),Nh=document.createElement("style");Nh.innerHTML=`
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
`;Mh.innerHTML=`
    <section-wrapper align="center">
      <ul>
          <li>
            <about-me-scene1></about-me-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class k extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Nh.cloneNode(!0)),this.shadowRoot?.appendChild(Mh.content.cloneNode(!0))}}var Qh=document.createElement("template"),Uh=document.createElement("style");Uh.innerHTML=`
  @import "/index.css";

  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
  }
`;Qh.innerHTML=`
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
`;class b extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Uh.cloneNode(!0)),this.shadowRoot?.appendChild(Qh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((q)=>{if(q.isIntersecting)this.shadowRoot?.querySelector(".abount-me-scene1-profile")?.animate({opacity:[0,1],transform:["translateX(200px)","translateX(-20px)","translateX(0)"]},{duration:1200,iterations:1,easing:"ease-in-out"});this.shadowRoot?.querySelector(".abount-me-scene1-description")?.animate({opacity:[0,1]},{duration:2000,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Yh=document.createElement("template"),Zh=document.createElement("style");Zh.innerHTML=`
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
`;Yh.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Skills</h1>
      <ul>
          <li>
            <skills-scene1></skills-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class j extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Zh.cloneNode(!0)),this.shadowRoot?.appendChild(Yh.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((q)=>{if(q.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var Bh=document.createElement("template"),Fh=document.createElement("style");Fh.innerHTML=`
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
`;Bh.innerHTML=`
  <div class="skills-scene1">
    <ul class="skills-scene1-unordered">
    </ul>
  </div>
`;var y=[{name:"HTML5",icon:"./assets/icons/html5.svg",description:"\uC2DC\uBA58\uD2F1, \uC6F9 \uD45C\uC900, \uC6F9 \uC811\uADFC\uC131, SEO \uB4F1 \uAE30\uBCF8\uC801\uC778 \uC6F9 \uAE30\uC220\uC5D0 \uB300\uD55C \uC774\uD574\uC640 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"CSS3",icon:"./assets/icons/css3.svg",description:"Box Model, Flexbox, Grid, Animation, Media Query \uB4F1\uC744 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Javascript",icon:"./assets/icons/javascript.svg",description:"ES6+ \uBB38\uBC95, \uBE44\uB3D9\uAE30 \uCC98\uB9AC, \uD638\uC774\uC2A4\uD305, \uB3D9\uC791 \uC6D0\uB9AC \uB4F1\uC744 \uC774\uD574\uD558\uACE0 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Typescript",icon:"./assets/icons/typeScript.svg",description:"\uAE30\uBCF8 \uD0C0\uC785\uACFC \uC778\uD130\uD398\uC774\uC2A4, \uC81C\uB124\uB9AD, \uD0C0\uC785 \uD569\uC131 \uB4F1 \uD0C0\uC785\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"React",icon:"./assets/icons/react.svg",description:"\uAE30\uBCF8 \uBB38\uBC95\uBD80\uD130 \uD6C5, \uB77C\uC6B0\uD130 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Next.js",icon:"./assets/icons/next.js.svg",description:"SSR, SSG, API Routes, Image \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Vue.js",icon:"./assets/icons/vue.js.svg",description:"2\uBC84\uC804\uC744 \uC774\uC6A9\uD558\uC5EC \uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC640 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Nuxt.js",icon:"./assets/icons/nuxt.js.svg",description:"Nuxt\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Flutter",icon:"./assets/icons/flutter.svg",description:"\uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C\uACFC \uC6F9\uBDF0 \uC571 \uAC1C\uBC1C \uACBD\uD5D8\uC774 \uC788\uACE0, Firebase\uC640 \uC5F0\uB3D9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Git",icon:"./assets/icons/git.svg",description:"\uAE30\uBCF8\uC801\uC778 \uBA85\uB839\uC5B4\uBD80\uD130 \uBE0C\uB80C\uCE58 \uC804\uB7B5, \uB9AC\uBCA0\uC774\uC2A4 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"GraphQL",icon:"./assets/icons/graphql.svg",description:"Schema\uB97C \uC815\uC758\uD558\uACE0, Query, Mutation\uC744 \uC791\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Apollo Client",icon:"./assets/icons/apollo.svg",description:"Link, Cache, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Relay",icon:"./assets/icons/relay.svg",description:"compiler \uC124\uC815, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Storybook",icon:"./assets/icons/storybook.svg",description:"UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uACC4\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8 \uBE4C\uB4DC \uBC0F \uBC30\uD3EC \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Jest",icon:"./assets/icons/jest.svg",description:"\uB85C\uC9C1\uC758 \uB2E8\uC704 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uACE0, \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"SCSS/SASS",icon:"./assets/icons/sass.svg",description:"scss \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uBAA8\uB4C8\uD654\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Styled Components",icon:"./assets/icons/styled-component.png",description:"\uC2A4\uD0C0\uC77C\uC744 \uCEF4\uD4E8\uB10C\uD2B8\uD654 \uD558\uACE0, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD569\uC131 \uBC0F \uC7AC\uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Tailwind CSS",icon:"./assets/icons/tailwind-css.png",description:"Utility-first CSS \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1}];class E extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Fh.cloneNode(!0)),this.shadowRoot?.appendChild(Bh.content.cloneNode(!0)),this.unOrderedList$el=this.shadowRoot?.querySelector(".skills-scene1-unordered")??null,this.unOrderedList$el===null)return;this.unOrderedList$el.innerHTML=y.concat(y).map((h)=>{return`
              <li class="skills-scene1-list">
                <labeled-icon label="${h.name}" icon="${h.icon}" round="true"></labeled-icon>
                <p>${h.description}</p>
              </li>
          `}).join("")}unOrderedList$el=null;connectedCallback(){if(this.unOrderedList$el===null)return;const h=this.unOrderedList$el.animate([{transform:"translateX(0)"},{transform:"translateX(-50%)"}],{duration:y.length*3000,iterations:Infinity,easing:"linear"}),d=()=>h.play(),q=()=>h.pause();this.unOrderedList$el.addEventListener("mouseover",q),this.unOrderedList$el.addEventListener("mouseout",d),this.unOrderedList$el.addEventListener("touchstart",q),this.unOrderedList$el.addEventListener("touchend",d),new IntersectionObserver((G)=>{G.forEach((O)=>{if(O.isIntersecting)d()})}).observe(this)}}var Th=document.createElement("template"),_h=document.createElement("style");_h.innerHTML=`
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
`;Th.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Experience</h1>
      <experience-project-list-wrapper></experience-project-list-wrapper>
      <experience-activity-list-wrapper></experience-activity-list-wrapper>
    </section-wrapper>
`;class i extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(_h.cloneNode(!0)),this.shadowRoot?.appendChild(Th.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((d)=>{d.forEach((q)=>{if(q.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var kh=function(...h){if(h.length===1){const[d]=h;return(q)=>D(d,q,()=>{})}if(h.length===2){const[d,q]=h;return D(d,q,()=>{})}throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${h.length}.`)},H=function(h){return Object.assign(h,{optional:()=>a(h),and:(d)=>z(h,d),or:(d)=>gh(h,d),select:(d)=>d===void 0?W(h):W(d,h)})},n=function(h){return Object.assign(((d)=>Object.assign(d,{[Symbol.iterator](){let q=0;const C=[{value:Object.assign(d,{[xh]:!0}),done:!1},{done:!0,value:void 0}];return{next:()=>{var G;return(G=C[q++])!=null?G:C.at(-1)}}}}))(h),{optional:()=>n(a(h)),select:(d)=>n(d===void 0?W(h):W(d,h))})},a=function(h){return H({[J]:()=>({match:(d)=>{let q={};const C=(G,O)=>{q[G]=O};return d===void 0?(N(h).forEach((G)=>C(G,void 0)),{matched:!0,selections:q}):{matched:D(h,d,C),selections:q}},getSelectionKeys:()=>N(h),matcherType:"optional"})})},z=function(...h){return H({[J]:()=>({match:(d)=>{let q={};const C=(G,O)=>{q[G]=O};return{matched:h.every((G)=>D(G,d,C)),selections:q}},getSelectionKeys:()=>I(h,N),matcherType:"and"})})},gh=function(...h){return H({[J]:()=>({match:(d)=>{let q={};const C=(G,O)=>{q[G]=O};return I(h,N).forEach((G)=>C(G,void 0)),{matched:h.some((G)=>D(G,d,C)),selections:q}},getSelectionKeys:()=>I(h,N),matcherType:"or"})})},R=function(h){return{[J]:()=>({match:(d)=>({matched:Boolean(h(d))})})}},W=function(...h){const d=typeof h[0]=="string"?h[0]:void 0,q=h.length===2?h[1]:typeof h[0]=="string"?void 0:h[0];return H({[J]:()=>({match:(C)=>{let G={[d!=null?d:"@ts-pattern/anonymous-select-key"]:C};return{matched:q===void 0||D(q,C,(O,X)=>{G[O]=X}),selections:G}},getSelectionKeys:()=>[d!=null?d:"@ts-pattern/anonymous-select-key"].concat(q===void 0?[]:N(q))})})},U=function(h){return typeof h=="number"},_=function(h){return typeof h=="string"},Z=function(h){return typeof h=="bigint"},F=function(h){return new v(h,r)},J=Symbol.for("@ts-pattern/matcher"),xh=Symbol.for("@ts-pattern/isVariadic");var o=(h)=>Boolean(h&&typeof h=="object"),u=(h)=>h&&!!h[J],D=(h,d,q)=>{if(u(h)){const C=h[J](),{matched:G,selections:O}=C.match(d);return G&&O&&Object.keys(O).forEach((X)=>q(X,O[X])),G}if(o(h)){if(!o(d))return!1;if(Array.isArray(h)){if(!Array.isArray(d))return!1;let C=[],G=[],O=[];for(let X of h.keys()){const f=h[X];u(f)&&f[xh]?O.push(f):O.length?G.push(f):C.push(f)}if(O.length){if(O.length>1)throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(d.length<C.length+G.length)return!1;const X=d.slice(0,C.length),f=G.length===0?[]:d.slice(-G.length),M=d.slice(C.length,G.length===0?Infinity:-G.length);return C.every((T,g)=>D(T,X[g],q))&&G.every((T,g)=>D(T,f[g],q))&&(O.length===0||D(O[0],M,q))}return h.length===d.length&&h.every((X,f)=>D(X,d[f],q))}return Object.keys(h).every((C)=>{const G=h[C];return((C in d)||u(O=G)&&O[J]().matcherType==="optional")&&D(G,d[C],q);var O})}return Object.is(d,h)},N=(h)=>{var d,q,C;return o(h)?u(h)?(d=(q=(C=h[J]()).getSelectionKeys)==null?void 0:q.call(C))!=null?d:[]:Array.isArray(h)?I(h,N):I(Object.values(h),N):[]},I=(h,d)=>h.reduce((q,C)=>q.concat(d(C)),[]),bh=(h,d)=>{for(let q of h)if(!d(q))return!1;return!0},jh=(h,d)=>{for(let[q,C]of h.entries())if(!d(C,q))return!1;return!0},Ih=H(R(function(h){return!0})),Eh=Ih,x=(h)=>Object.assign(H(h),{startsWith:(d)=>{return x(z(h,(q=d,R((C)=>_(C)&&C.startsWith(q)))));var q},endsWith:(d)=>{return x(z(h,(q=d,R((C)=>_(C)&&C.endsWith(q)))));var q},minLength:(d)=>x(z(h,((q)=>R((C)=>_(C)&&C.length>=q))(d))),maxLength:(d)=>x(z(h,((q)=>R((C)=>_(C)&&C.length<=q))(d))),includes:(d)=>{return x(z(h,(q=d,R((C)=>_(C)&&C.includes(q)))));var q},regex:(d)=>{return x(z(h,(q=d,R((C)=>_(C)&&Boolean(C.match(q))))));var q}}),ih=x(R(_)),Y=(h)=>Object.assign(H(h),{between:(d,q)=>Y(z(h,((C,G)=>R((O)=>U(O)&&C<=O&&G>=O))(d,q))),lt:(d)=>Y(z(h,((q)=>R((C)=>U(C)&&C<q))(d))),gt:(d)=>Y(z(h,((q)=>R((C)=>U(C)&&C>q))(d))),lte:(d)=>Y(z(h,((q)=>R((C)=>U(C)&&C<=q))(d))),gte:(d)=>Y(z(h,((q)=>R((C)=>U(C)&&C>=q))(d))),int:()=>Y(z(h,R((d)=>U(d)&&Number.isInteger(d)))),finite:()=>Y(z(h,R((d)=>U(d)&&Number.isFinite(d)))),positive:()=>Y(z(h,R((d)=>U(d)&&d>0))),negative:()=>Y(z(h,R((d)=>U(d)&&d<0)))}),uh=Y(R(U)),B=(h)=>Object.assign(H(h),{between:(d,q)=>B(z(h,((C,G)=>R((O)=>Z(O)&&C<=O&&G>=O))(d,q))),lt:(d)=>B(z(h,((q)=>R((C)=>Z(C)&&C<q))(d))),gt:(d)=>B(z(h,((q)=>R((C)=>Z(C)&&C>q))(d))),lte:(d)=>B(z(h,((q)=>R((C)=>Z(C)&&C<=q))(d))),gte:(d)=>B(z(h,((q)=>R((C)=>Z(C)&&C>=q))(d))),positive:()=>B(z(h,R((d)=>Z(d)&&d>0))),negative:()=>B(z(h,R((d)=>Z(d)&&d<0)))}),vh=B(R(Z)),ch=H(R(function(h){return typeof h=="boolean"})),mh=H(R(function(h){return typeof h=="symbol"})),ph=H(R(function(h){return h==null})),Q={__proto__:null,matcher:J,optional:a,array:function(...h){return n({[J]:()=>({match:(d)=>{if(!Array.isArray(d))return{matched:!1};if(h.length===0)return{matched:!0};const q=h[0];let C={};if(d.length===0)return N(q).forEach((O)=>{C[O]=[]}),{matched:!0,selections:C};const G=(O,X)=>{C[O]=(C[O]||[]).concat([X])};return{matched:d.every((O)=>D(q,O,G)),selections:C}},getSelectionKeys:()=>h.length===0?[]:N(h[0])})})},set:function(...h){return H({[J]:()=>({match:(d)=>{if(!(d instanceof Set))return{matched:!1};let q={};if(d.size===0)return{matched:!0,selections:q};if(h.length===0)return{matched:!0};const C=(O,X)=>{q[O]=(q[O]||[]).concat([X])},G=h[0];return{matched:bh(d,(O)=>D(G,O,C)),selections:q}},getSelectionKeys:()=>h.length===0?[]:N(h[0])})})},map:function(...h){return H({[J]:()=>({match:(d)=>{if(!(d instanceof Map))return{matched:!1};let q={};if(d.size===0)return{matched:!0,selections:q};const C=(f,M)=>{q[f]=(q[f]||[]).concat([M])};if(h.length===0)return{matched:!0};var G;if(h.length===1)throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${(G=h[0])==null?void 0:G.toString()}`);const[O,X]=h;return{matched:jh(d,(f,M)=>{const T=D(O,M,C),g=D(X,f,C);return T&&g}),selections:q}},getSelectionKeys:()=>h.length===0?[]:[...N(h[0]),...N(h[1])]})})},intersection:z,union:gh,not:function(h){return H({[J]:()=>({match:(d)=>({matched:!D(h,d,()=>{})}),getSelectionKeys:()=>[],matcherType:"not"})})},when:R,select:W,any:Ih,_:Eh,string:ih,number:uh,bigint:vh,boolean:ch,symbol:mh,nullish:ph,instanceOf:function(h){return H(R(function(d){return(q)=>q instanceof d}(h)))},shape:function(h){return H(R(kh(h)))}},r={matched:!1,value:void 0};class v{constructor(h,d){this.input=void 0,this.state=void 0,this.input=h,this.state=d}with(...h){if(this.state.matched)return this;const d=h[h.length-1],q=[h[0]];let C;h.length===3&&typeof h[1]=="function"?C=h[1]:h.length>2&&q.push(...h.slice(1,h.length-1));let G=!1,O={};const X=(M,T)=>{G=!0,O[M]=T},f=!q.some((M)=>D(M,this.input,X))||C&&!Boolean(C(this.input))?r:{matched:!0,value:d(G?"@ts-pattern/anonymous-select-key"in O?O["@ts-pattern/anonymous-select-key"]:O:this.input,this.input)};return new v(this.input,f)}when(h,d){if(this.state.matched)return this;const q=Boolean(h(this.input));return new v(this.input,q?{matched:!0,value:d(this.input,this.input)}:r)}otherwise(h){return this.state.matched?this.state.value:h(this.input)}exhaustive(){if(this.state.matched)return this.state.value;let h;try{h=JSON.stringify(this.input)}catch(d){h=this.input}throw new Error(`Pattern matching error: no pattern matches value ${h}`)}run(){return this.exhaustive()}returnType(){return this}}var Wh=document.createElement("template"),Sh=document.createElement("style");Sh.innerHTML=`
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
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
    width: 80vw;
    height: 400px;
  }
`;Wh.innerHTML=`
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var sh=[{name:"\uACF5\uC9C0\uC0AC\uD56D \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uAC1C\uBC1C",period:{start:"2019.08",end:"2019.10"},description:"Google API\uB97C \uC774\uC6A9\uD558\uC5EC Google Workspace\uC5D0 \uC791\uC131\uD55C \uB0B4\uC6A9\uC744 \uC870\uD68C\uD558\uC5EC, \uC0AC\uB0B4 \uACF5\uC9C0\uC0AC\uD56D \uBC0F \uC77C\uC815\uC744 \uB300\uC2DC\uBCF4\uB4DC\uC758 \uD615\uD0DC\uB85C \uC81C\uACF5\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Desktap"],link:"https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c"},{name:"\uC5C5\uBB34 \uD611\uC5C5 \uD504\uB85C\uADF8\uB7A8 \uAC1C\uBC1C",period:{start:"2019.10",end:"2020.10"},description:"\uBB38\uC11C \uACF5\uB3D9\uD3B8\uC9D1\uAE30\uB2A5\uC744 \uAE30\uBC18\uC73C\uB85C \uCC44\uD305, \uD560\uC77C \uAD00\uB9AC \uB4F1 \uAE30\uB2A5\uC758 \uD611\uC5C5\uD234\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web"],link:"https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6"},{name:"\uB9C8\uCF13\uBD04 \uD504\uB85C \uAC1C\uBC1C",period:{start:"2020.10",end:"2023.08"},description:"\uB9C8\uCF13\uBD04 \uD504\uB85C\uC758 PC, Mobile \uC6F9 \uADF8\uB9AC\uACE0 \uBC31\uC624\uD53C\uC2A4 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uCD08\uAE30 \uB2E8\uACC4\uBD80\uD130 \uAC1C\uBC1C \uBC0F \uC6B4\uC601\uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web","Mobile","B2B"],link:"https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6"},{name:"\uB9C8\uCF13\uBCF4\uB85C, \uACF5\uD1B5 \uC6F9\uBDF0 \uAC1C\uBC1C",period:{start:"2023.08",end:"2023.12"},description:"\uB9C8\uCF13\uBCF4\uB85C\uC5D0\uC11C \uC0AC\uC6A9\uC911\uC778 \uB124\uC774\uD2F0\uBE0C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uB4E4\uC744 Flutter\uB85C \uC7AC\uAC1C\uBC1C\uD558\uC5EC \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC6F9\uBDF0 \uC571\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["App","Flutter","Web View"],link:"https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee"},{name:"\uC2DD\uBD04, Next.js\uB85C \uC804\uD658",period:{start:"2024.01",end:"2024.03"},description:"\uC0AC\uC5C5\uC790 \uB300\uC0C1 \uC2DD\uC790\uC7AC E-Commerce \uC11C\uBE44\uC2A4\uC778 \uC2DD\uBD04\uC758 \uC720\uC9C0\uBCF4\uC218 \uBC0F Next.js\uB85C \uC804\uD658\uD558\uB294 \uC791\uC5C5\uC744 \uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["E-Commerce"],link:"https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5"}];class c extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Sh.cloneNode(!0)),this.shadowRoot.appendChild(Wh.content.cloneNode(!0)),F(this.shadowRoot.querySelector(".cards")).with(Q.not(Q.nullish),(h)=>{h.innerHTML=sh.map((d)=>{return`
            <experience-project-list
              link="${d.link}"
              name="${d.name}"
              start="${d.period.start}"
              end="${d.period.end}"
              description="${d.description}"
              tags="${d.tags.join(",")}"
            ></experience-project-list>
            `}).reverse().join("")}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector(".cards") is null')})}}var Ah=document.createElement("template"),Kh=document.createElement("style");Kh.innerHTML=`
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
`;Ah.innerHTML="<li></li>";class m extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Kh.cloneNode(!0)),this.shadowRoot.appendChild(Ah.content.cloneNode(!0));const h=this.shadowRoot.querySelector("li")??null;F(h).with(Q.not(Q.nullish),(d)=>{const q=document.createElement("a"),C=document.createElement("div"),G=document.createElement("h3"),O=document.createElement("span"),X=document.createElement("p"),f=document.createElement("div");q.setAttribute("href",this.link??""),C.setAttribute("class","card"),G.textContent=this.name??"",O.textContent=`${this.start??""} ~ ${this.end??""}`,X.textContent=this.description??"",X.setAttribute("class","card-content"),f.setAttribute("class","tags-warp"),f.innerHTML=(this.tags??[]).map((M)=>`<span class="tag">${M}</span>`).join(""),C.appendChild(G),C.appendChild(O),C.appendChild(X),C.appendChild(f),q.appendChild(C),d.appendChild(q)}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector("li") is null')})}static get observedAttributes(){return["name","start","end","description","tags","link"]}get name(){return this.getAttribute("name")}set name(h){this.setAttribute("name",h)}get start(){return this.getAttribute("start")}set start(h){this.setAttribute("start",h)}get end(){return this.getAttribute("end")}set end(h){this.setAttribute("end",h)}get description(){return this.getAttribute("description")}set description(h){this.setAttribute("description",h)}get tags(){return this.getAttribute("tags")?.split(",")??null}set tags(h){this.setAttribute("tags",h.join(","))}get link(){return this.getAttribute("link")}set link(h){this.setAttribute("link",h)}}var $h=document.createElement("template"),Lh=document.createElement("style");Lh.innerHTML=`
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
`;$h.innerHTML="<li></li>";class p extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Lh.cloneNode(!0)),this.shadowRoot.appendChild($h.content.cloneNode(!0));const h=this.shadowRoot.querySelector("li")??null;F(h).with(Q.not(Q.nullish),(d)=>{const q=document.createElement("a"),C=document.createElement("div"),G=document.createElement("h3"),O=document.createElement("span"),X=document.createElement("p"),f=document.createElement("div");q.setAttribute("href",this.link??""),C.setAttribute("class","card"),G.textContent=this.name??"",O.textContent=`${this.start??""} ~ ${this.end??""}`,X.textContent=this.description??"",X.setAttribute("class","card-content"),f.setAttribute("class","tags-warp"),f.innerHTML=(this.tags??[]).map((M)=>`<span class="tag">${M}</span>`).join(""),C.appendChild(G),C.appendChild(O),C.appendChild(X),C.appendChild(f),q.appendChild(C),d.appendChild(q)}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector("li") is null')})}static get observedAttributes(){return["name","start","end","description","tags","link"]}get name(){return this.getAttribute("name")}set name(h){this.setAttribute("name",h)}get start(){return this.getAttribute("start")}set start(h){this.setAttribute("start",h)}get end(){return this.getAttribute("end")}set end(h){this.setAttribute("end",h)}get description(){return this.getAttribute("description")}set description(h){this.setAttribute("description",h)}get tags(){return this.getAttribute("tags")?.split(",")??null}set tags(h){this.setAttribute("tags",h.join(","))}get link(){return this.getAttribute("link")}set link(h){this.setAttribute("link",h)}}var Ph=document.createElement("template"),Vh=document.createElement("style");Vh.innerHTML=`
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
    overflow-x: scroll;
    gap: 24px;
    padding: 0;
    width: 80vw;
    height: 300px;
  }
`;Ph.innerHTML=`
  <h2>Activities</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var yh=[{name:"Khuthon",period:{start:"2018.11",end:"2018.11"},description:"\uACBD\uD76C\uB300\uD559\uAD50",tags:["\uD574\uCEE4\uD1A4"],link:"https://thon.khlug.org/"},{name:"\uC815\uC6D0\uC0AC\uB4E4 \uC2DC\uC98C 9",period:{start:"2023.08",end:"2023.11"},description:"Google I/O Extended 2023",tags:["Gathering"],link:"https://gitsunmin.github.io/blogs/garden9-2023/"}];class s extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot===null)throw new Error("this.shadowRoot is null");this.shadowRoot.appendChild(Vh.cloneNode(!0)),this.shadowRoot.appendChild(Ph.content.cloneNode(!0)),F(this.shadowRoot.querySelector(".cards")).with(Q.not(Q.nullish),(h)=>{h.innerHTML=yh.map((d)=>{return`
            <experience-activity-list
              link="${d.link}"
              name="${d.name}"
              start="${d.period.start}"
              end="${d.period.end}"
              description="${d.description}"
              tags="${d.tags.join(",")}"
            ></experience-activity-list>
            `}).reverse().join("")}).otherwise(()=>{throw new Error('this.shadowRoot.querySelector(".cards") is null')})}}var wh=()=>{customElements.define("profile-image",$),customElements.define("labeled-icon",L),customElements.define("about-me-section",k),customElements.define("about-me-scene1",b),customElements.define("section-title",P),customElements.define("section-wrapper",V),customElements.define("layout-footer",S),customElements.define("layout-header",A),customElements.define("layout-main",K),customElements.define("hello-section",w),customElements.define("skills-section",j),customElements.define("skills-scene1",E),customElements.define("experience-section",i),customElements.define("experience-project-list-wrapper",c),customElements.define("experience-project-list",m),customElements.define("experience-activity-list",p),customElements.define("experience-activity-list-wrapper",s)};var oh=function(){console.log("Hello World"),wh()};oh();
