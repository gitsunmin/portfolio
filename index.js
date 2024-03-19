var X=document.createElement("template"),Y=document.createElement("style");Y.innerHTML=`
  @import "/index.css";

  .footer {
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;X.innerHTML=`
  <footer class="footer">
    Gitsunmin's Portfolio \xA9 2024
  </footer>
`;class M extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(Y.cloneNode(!0)),this.shadowRoot?.appendChild(X.content.cloneNode(!0))}}var Z=document.createElement("template"),x=document.createElement("style");x.innerHTML=`
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
`;Z.innerHTML=`
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
`;class N extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(x.cloneNode(!0)),this.shadowRoot?.appendChild(Z.content.cloneNode(!0))}}var F=document.createElement("template"),T=document.createElement("style");T.innerHTML=`
  @import "/index.css";

  .header-case {
    margin-top: 90px;
  }
`;F.innerHTML=`
  <div class="header-case"></div> 
  <main class="main">
    <slot></slot>
  </main>
`;class g extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(T.cloneNode(!0)),this.shadowRoot?.appendChild(F.content.cloneNode(!0))}}var W=document.createElement("template"),A=document.createElement("style");A.innerHTML=`
  @import "/index.css";
  .profile-image {
    box-shadow: 0 0 10px 0 white;
    isolation: isolate;
  }
`;W.innerHTML=`
    <img class="profile-image" src="./assets/me.jpeg" width="200px" sync/>
`;class z extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(A.cloneNode(!0)),this.shadowRoot?.appendChild(W.content.cloneNode(!0)),this.profileImage$el=this.shadowRoot?.querySelector(".profile-image")??null}profileImage$el=null;static get observedAttributes(){return["width","height","round"]}get width(){return this.getAttribute("width")??"200px"}set width(h){this.setAttribute("width",h)}get height(){return this.getAttribute("height")??"200px"}set height(h){this.setAttribute("height",h)}get round(){return this.getAttribute("round")??"200px"}set round(h){this.setAttribute("round",h)}attributeChangedCallback(h,E,d){const f=this.shadowRoot?.querySelector(".profile-image")??null;switch(h){case"width":f?.setAttribute("width",d);break;case"height":f?.setAttribute("height",d);break;case"round":f?.setAttribute("style",`border-radius: ${d?"50%":"10%"}`);break;default:throw new Error("Unexpected attribute")}}}var P=document.createElement("template"),_=document.createElement("style");_.innerHTML=`
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
`;P.innerHTML=`
    <figure class="labeled-icon">
        <img class="icon" width="50px" />
        <figcaption class="label"></figcaption>
    </figure>
`;class B extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(_.cloneNode(!0)),this.shadowRoot?.appendChild(P.content.cloneNode(!0))}static get observedAttributes(){return["icon","label"]}get icon(){return this.getAttribute("icon")}set icon(h){this.setAttribute("icon",h)}get label(){return this.getAttribute("label")}set label(h){this.setAttribute("label",h)}attributeChangedCallback(h,E,d){const f=this.shadowRoot?.querySelector(".icon")??null,q=this.shadowRoot?.querySelector(".label")??null;if(f===null||q===null)return;switch(h){case"icon":f.setAttribute("src",d),f.setAttribute("alt",d);break;case"label":q.setAttribute("src",d);break;default:throw new Error("Unexpected attribute")}}}var I=document.createElement("template"),L=document.createElement("style");L.innerHTML=`
  @import "/index.css";

  .section-title {
    text-align: center;
  }
`;I.innerHTML=`
    <h2 class="section-title">
        <slot></slot>
    </h2>
`;class C extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(L.cloneNode(!0)),this.shadowRoot?.appendChild(I.content.cloneNode(!0))}}var S=document.createElement("template"),$=document.createElement("style");$.innerHTML=`
  @import "/index.css";
`;S.innerHTML=`
    <section class="section-wrapper">
        <slot></slot>
    </section>
`;class D extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild($.cloneNode(!0)),this.shadowRoot?.appendChild(S.content.cloneNode(!0))}static get observedAttributes(){return["align"]}get align(){return this.getAttribute("align")??"200px"}set align(h){this.setAttribute("align",h)}connectedCallback(){this.shadowRoot?.querySelector(".section-wrapper")?.setAttribute("style",`text-align: ${this.getAttribute("align")};`)}}var k=document.createElement("template"),w=document.createElement("style");w.innerHTML=`
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

`;k.innerHTML=`
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
`;class G extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(w.cloneNode(!0)),this.shadowRoot?.appendChild(k.content.cloneNode(!0))}connectedCallback(){this.shadowRoot?.querySelector(".show-about-me")?.addEventListener("click",()=>{document?.querySelector("#about-me")?.scrollIntoView({behavior:"smooth",block:"start"})})}}var j=document.createElement("template"),V=document.createElement("style");V.innerHTML=`
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
`;j.innerHTML=`
    <section-wrapper align="center">
      <ul>
          <li>
            <about-me-scene1></about-me-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class H extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(V.cloneNode(!0)),this.shadowRoot?.appendChild(j.content.cloneNode(!0))}}var b=document.createElement("template"),c=document.createElement("style");c.innerHTML=`
  @import "/index.css";

  .about-me-scene1 {
    font-size: 1rem;
  }

  .abount-me-scene1-description {
    padding: 20px;
  }
`;b.innerHTML=`
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
`;class J extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(c.cloneNode(!0)),this.shadowRoot?.appendChild(b.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((E)=>{E.forEach((d)=>{if(d.isIntersecting)this.shadowRoot?.querySelector(".abount-me-scene1-profile")?.animate({opacity:[0,1],transform:["translateX(200px)","translateX(-20px)","translateX(0)"]},{duration:1200,iterations:1,easing:"ease-in-out"});this.shadowRoot?.querySelector(".abount-me-scene1-description")?.animate({opacity:[0,1]},{duration:2000,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var v=document.createElement("template"),u=document.createElement("style");u.innerHTML=`
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
`;v.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Skills</h1>
      <ul>
          <li>
            <skills-scene1></skills-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class K extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(u.cloneNode(!0)),this.shadowRoot?.appendChild(v.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((E)=>{E.forEach((d)=>{if(d.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var y=document.createElement("template"),m=document.createElement("style");m.innerHTML=`
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
`;y.innerHTML=`
  <div class="skills-scene1">
    <ul class="skills-scene1-unordered">
    </ul>
  </div>
`;var U=[{name:"HTML5",icon:"./assets/icons/html5.svg",description:"\uC2DC\uBA58\uD2F1, \uC6F9 \uD45C\uC900, \uC6F9 \uC811\uADFC\uC131, SEO \uB4F1 \uAE30\uBCF8\uC801\uC778 \uC6F9 \uAE30\uC220\uC5D0 \uB300\uD55C \uC774\uD574\uC640 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"CSS3",icon:"./assets/icons/css3.svg",description:"Box Model, Flexbox, Grid, Animation, Media Query \uB4F1\uC744 \uD65C\uC6A9\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Javascript",icon:"./assets/icons/javascript.svg",description:"ES6+ \uBB38\uBC95, \uBE44\uB3D9\uAE30 \uCC98\uB9AC, \uD638\uC774\uC2A4\uD305, \uB3D9\uC791 \uC6D0\uB9AC \uB4F1\uC744 \uC774\uD574\uD558\uACE0 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Typescript",icon:"./assets/icons/typeScript.svg",description:"\uAE30\uBCF8 \uD0C0\uC785\uACFC \uC778\uD130\uD398\uC774\uC2A4, \uC81C\uB124\uB9AD, \uD0C0\uC785 \uD569\uC131 \uB4F1 \uD0C0\uC785\uC744 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"React",icon:"./assets/icons/react.svg",description:"\uAE30\uBCF8 \uBB38\uBC95\uBD80\uD130 \uD6C5, \uB77C\uC6B0\uD130 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Next.js",icon:"./assets/icons/next.js.svg",description:"SSR, SSG, API Routes, Image \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Vue.js",icon:"./assets/icons/vue.js.svg",description:"2\uBC84\uC804\uC744 \uC774\uC6A9\uD558\uC5EC \uB300\uADDC\uBAA8 \uD504\uB85C\uC81D\uD2B8\uC640 \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Nuxt.js",icon:"./assets/icons/nuxt.js.svg",description:"Nuxt\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC744 \uD65C\uC6A9\uD558\uC5EC \uB2E4\uC591\uD55C \uD504\uB85C\uC81D\uD2B8 \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Flutter",icon:"./assets/icons/flutter.svg",description:"\uBAA8\uBC14\uC77C \uC571 \uAC1C\uBC1C\uACFC \uC6F9\uBDF0 \uC571 \uAC1C\uBC1C \uACBD\uD5D8\uC774 \uC788\uACE0, Firebase\uC640 \uC5F0\uB3D9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Git",icon:"./assets/icons/git.svg",description:"\uAE30\uBCF8\uC801\uC778 \uBA85\uB839\uC5B4\uBD80\uD130 \uBE0C\uB80C\uCE58 \uC804\uB7B5, \uB9AC\uBCA0\uC774\uC2A4 \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8\uC758 \uBC84\uC804\uC744 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"GraphQL",icon:"./assets/icons/graphql.svg",description:"Schema\uB97C \uC815\uC758\uD558\uACE0, Query, Mutation\uC744 \uC791\uC131\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Apollo Client",icon:"./assets/icons/apollo.svg",description:"Link, Cache, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Relay",icon:"./assets/icons/relay.svg",description:"compiler \uC124\uC815, Query, Mutation \uB4F1\uC744 \uD65C\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Storybook",icon:"./assets/icons/storybook.svg",description:"UI \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC124\uACC4\uD558\uACE0 \uD504\uB85C\uC81D\uD2B8 \uBE4C\uB4DC \uBC0F \uBC30\uD3EC \uACBD\uD5D8\uC774 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Jest",icon:"./assets/icons/jest.svg",description:"\uB85C\uC9C1\uC758 \uB2E8\uC704 \uD14C\uC2A4\uD2B8\uB97C \uC791\uC131\uD558\uACE0, \uD14C\uC2A4\uD2B8 \uCEE4\uBC84\uB9AC\uC9C0\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"SCSS/SASS",icon:"./assets/icons/sass.svg",description:"scss \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC \uC2A4\uD0C0\uC77C\uC744 \uBAA8\uB4C8\uD654\uD558\uC5EC \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1},{name:"Styled Components",icon:"./assets/icons/styled-component.png",description:"\uC2A4\uD0C0\uC77C\uC744 \uCEF4\uD4E8\uB10C\uD2B8\uD654 \uD558\uACE0, \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uD569\uC131 \uBC0F \uC7AC\uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",highlight:!1}];class O extends HTMLElement{constructor(){super();if(this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(m.cloneNode(!0)),this.shadowRoot?.appendChild(y.content.cloneNode(!0)),this.unOrderedList$el=this.shadowRoot?.querySelector(".skills-scene1-unordered")??null,this.unOrderedList$el===null)return;this.unOrderedList$el.innerHTML=U.concat(U).map((h)=>{return`
              <li class="skills-scene1-list">
                <labeled-icon label="${h.name}" icon="${h.icon}" round="true"></labeled-icon>
                <p>${h.description}</p>
              </li>
          `}).join("")}unOrderedList$el=null;connectedCallback(){if(this.unOrderedList$el===null)return;const h=this.unOrderedList$el.animate([{transform:"translateX(0)"},{transform:"translateX(-50%)"}],{duration:U.length*3000,iterations:Infinity,easing:"linear"}),E=()=>h.play(),d=()=>h.pause();this.unOrderedList$el.addEventListener("mouseover",d),this.unOrderedList$el.addEventListener("mouseout",E),this.unOrderedList$el.addEventListener("touchstart",d),this.unOrderedList$el.addEventListener("touchend",E),new IntersectionObserver((q)=>{q.forEach((a)=>{if(a.isIntersecting)E()})}).observe(this)}}var i=document.createElement("template"),n=document.createElement("style");n.innerHTML=`
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
`;i.innerHTML=`
    <section-wrapper align="center">
      <h1 class="section-title">Experience</h1>
      <ul>
          <li>
            <experience-scene1></experience-scene1>
          </li>
      </ul>
    </section-wrapper>
`;class Q extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(n.cloneNode(!0)),this.shadowRoot?.appendChild(i.content.cloneNode(!0))}connectedCallback(){new IntersectionObserver((E)=>{E.forEach((d)=>{if(d.isIntersecting)this.shadowRoot?.querySelector(".section-title")?.animate({opacity:[0,1],transform:["translateX(-100px)","translateX(20px)","translateX(0)"]},{duration:900,iterations:1,easing:"ease-in-out"})})}).observe(this)}}var p=document.createElement("template"),r=document.createElement("style");r.innerHTML=`
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
    min-height: 300px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
    color: #fff;
  }

  .card:hover {
    border: 2px solid #2a89ff;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>\uD83D\uDC40</text></svg>") 16 0,auto; /*!emojicursor.app*/
  }
  
  .card-content {
    word-break: keep-all;
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

  .more-link:hover, .more-link:focus {
    animation-duration: 3s;
    animation-name: rainbowLink;
    animation-iteration-count: infinite;
  } 

  @keyframes rainbowLink {     
    0% { color: #ff2a2a; }
    15% { color: #ff7a2a; }
    30% { color: #ffc52a; }
    45% { color: #43ff2a; }
    60% { color: #2a89ff; }
    75% { color: #202082; }
    90% { color: #6b2aff; } 
    100% { color: #e82aff; }
  }
`;p.innerHTML=`
  <h2>Projects</h2>
  <div class="scene">
    <section>
      <ul class="cards"></ul>
    </section>
  </div>
`;var s=[{name:"\uACF5\uC9C0\uC0AC\uD56D \uAD00\uB9AC \uC2DC\uC2A4\uD15C \uAC1C\uBC1C",period:{start:"2019.08",end:"2019.10"},description:"Google API\uB97C \uC774\uC6A9\uD558\uC5EC Google Workspace\uC5D0 \uC791\uC131\uD55C \uB0B4\uC6A9\uC744 \uC870\uD68C\uD558\uC5EC, \uC0AC\uB0B4 \uACF5\uC9C0\uC0AC\uD56D \uBC0F \uC77C\uC815\uC744 \uB300\uC2DC\uBCF4\uB4DC\uC758 \uD615\uD0DC\uB85C \uC81C\uACF5\uD558\uB294 \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Desktap"],link:"https://gitsunmin.notion.site/dca6ba6ff38042ddadad31b67f3bad1c"},{name:"\uC5C5\uBB34 \uD611\uC5C5 \uD504\uB85C\uADF8\uB7A8 \uAC1C\uBC1C",period:{start:"2019.10",end:"2020.10"},description:"\uBB38\uC11C \uACF5\uB3D9\uD3B8\uC9D1\uAE30\uB2A5\uC744 \uAE30\uBC18\uC73C\uB85C \uCC44\uD305, \uD560\uC77C \uAD00\uB9AC \uB4F1 \uAE30\uB2A5\uC758 \uD611\uC5C5\uD234\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web"],link:"https://gitsunmin.notion.site/179c4f41db6d4e51b132738a439e5aa6"},{name:"\uB9C8\uCF13\uBD04 \uD504\uB85C \uAC1C\uBC1C",period:{start:"2020.10",end:"2023.08"},description:"\uB9C8\uCF13\uBD04 \uD504\uB85C\uC758 PC, Mobile \uC6F9 \uADF8\uB9AC\uACE0 \uBC31\uC624\uD53C\uC2A4 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uCD08\uAE30 \uB2E8\uACC4\uBD80\uD130 \uAC1C\uBC1C \uBC0F \uC6B4\uC601\uC5C5\uBB34\uB97C \uB2F4\uB2F9\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["Web","Mobile","B2B"],link:"https://gitsunmin.notion.site/9c437384d105421aafb89ef21ea673a6"},{name:"\uB9C8\uCF13\uBCF4\uB85C, \uACF5\uD1B5 \uC6F9\uBDF0 \uAC1C\uBC1C",period:{start:"2023.08",end:"2023.12"},description:"\uB9C8\uCF13\uBCF4\uB85C\uC5D0\uC11C \uC0AC\uC6A9\uC911\uC778 \uB124\uC774\uD2F0\uBE0C \uD558\uC774\uBE0C\uB9AC\uB4DC \uC571\uB4E4\uC744 Flutter\uB85C \uC7AC\uAC1C\uBC1C\uD558\uC5EC \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC6F9\uBDF0 \uC571\uC744 \uAC1C\uBC1C\uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["App","Flutter","Web View"],link:"https://gitsunmin.notion.site/f098322d80274c32b621e78d1a2588ee"},{name:"\uC2DD\uBD04, Next.js\uB85C \uC804\uD658",period:{start:"2024.01",end:"2024.03"},description:"\uC0AC\uC5C5\uC790 \uB300\uC0C1 \uC2DD\uC790\uC7AC E-Commerce \uC11C\uBE44\uC2A4\uC778 \uC2DD\uBD04\uC758 \uC720\uC9C0\uBCF4\uC218 \uBC0F Next.js\uB85C \uC804\uD658\uD558\uB294 \uC791\uC5C5\uC744 \uD558\uC600\uC2B5\uB2C8\uB2E4.",tags:["E-Commerce"],link:"https://gitsunmin.notion.site/Next-js-72cf7aca6d73402cbdd8b80556887aa5"}];class R extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.shadowRoot?.appendChild(r.cloneNode(!0)),this.shadowRoot?.appendChild(p.content.cloneNode(!0));const h=this.shadowRoot?.querySelector(".cards")??null;if(h===null)return;h.innerHTML=s.map((E)=>{return`
        <li>
          <a href="${E.link}">
            <div class="card">
              <h3>${E.name}</h3>
              <span>${E.period.start} ~ ${E.period.end}</span>
              <p class="card-content">${E.description}</p>
              <div class="tags-warp">
                ${E.tags.map((d)=>`<span class="tag">${d}</span>`).join("")}
              </div>
            </div>
          </a>
        </li>
      `}).reverse().join("")}}var o=()=>{customElements.define("profile-image",z),customElements.define("labeled-icon",B),customElements.define("about-me-section",H),customElements.define("about-me-scene1",J),customElements.define("section-title",C),customElements.define("section-wrapper",D),customElements.define("layout-footer",M),customElements.define("layout-header",N),customElements.define("layout-main",g),customElements.define("hello-section",G),customElements.define("skills-section",K),customElements.define("skills-scene1",O),customElements.define("experience-section",Q),customElements.define("experience-scene1",R)};var t=function(){console.log("Hello World"),o()};t();
