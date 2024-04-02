import { P, match } from 'ts-pattern';

const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    min-width: 200px;
    max-height: 300px;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px 30px;
    color: #fff;
    gap: 18px;
  }

  .card h3 {
    margin: 0;
  }

  .card:hover {
    border: 2px solid #2a89ff;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👀</text></svg>") 16 0,auto; /*!emojicursor.app*/
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
`;

template.innerHTML = /* html */ `<li></li>`;

export default class ExperienceActivityList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    if (this.shadowRoot === null) throw new Error('this.shadowRoot is null');

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const liEl = this.shadowRoot.querySelector('li') ?? null;

    match(liEl)
      .with(P.not(P.nullish), (listEl) => {
        const linkEl = document.createElement('a');
        const cardEl = document.createElement('div');
        const titleEl = document.createElement('h3');
        const periodEl = document.createElement('span');
        const contentEl = document.createElement('p');
        const tagsEl = document.createElement('div');

        linkEl.setAttribute('href', this.link ?? '');
        cardEl.setAttribute('class', 'card');
        titleEl.textContent = this.name ?? '';
        periodEl.textContent = `${this.start ?? ''} ~ ${this.end ?? ''}`;
        contentEl.textContent = this.description ?? '';
        contentEl.setAttribute('class', 'card-content');
        tagsEl.setAttribute('class', 'tags-warp');
        tagsEl.innerHTML = (this.tags ?? [])
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join('');

        cardEl.appendChild(titleEl);
        cardEl.appendChild(periodEl);
        cardEl.appendChild(contentEl);
        cardEl.appendChild(tagsEl);
        linkEl.appendChild(cardEl);
        listEl.appendChild(linkEl);
      })
      .otherwise(() => {
        throw new Error('this.shadowRoot.querySelector("li") is null');
      });
  }

  static get observedAttributes() {
    return ['name', 'start', 'end', 'description', 'tags', 'link'];
  }

  get name(): string | null {
    return this.getAttribute('name');
  }
  set name(value: string) {
    this.setAttribute('name', value);
  }

  get start(): string | null {
    return this.getAttribute('start');
  }
  set start(value: string) {
    this.setAttribute('start', value);
  }

  get end(): string | null {
    return this.getAttribute('end');
  }
  set end(value: string) {
    this.setAttribute('end', value);
  }

  get description(): string | null {
    return this.getAttribute('description');
  }
  set description(value: string) {
    this.setAttribute('description', value);
  }

  get tags(): Array<string> | null {
    return this.getAttribute('tags')?.split(',') ?? null;
  }
  set tags(value: Array<string>) {
    this.setAttribute('tags', value.join(','));
  }

  get link(): string | null {
    return this.getAttribute('link');
  }
  set link(value: string) {
    this.setAttribute('link', value);
  }
}
