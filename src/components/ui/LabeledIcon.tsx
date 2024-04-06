// const template = document.createElement('template');
// const style = document.createElement('style');

// style.innerHTML = /* css */ `
//     .labeled-icon {
//         display: flex;
//         align-items: center;
//         flex-direction: column;
//     }

//     .icon {
//         border-radius: 12%;
//         box-shadow: 0 0 5px 0 white:
//     }

//     .label {
//         margin-top: 10px;
//         font-size: 1.2em;
//     }
// `;

// template.innerHTML = /* html */ `
//     <figure class="labeled-icon">
//         <img class="icon" width="50px" />
//         <figcaption class="label"></figcaption>
//     </figure>
// `;

// export default class LabeledIcon extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

//     this.shadowRoot?.appendChild(style.cloneNode(true));
//     this.shadowRoot?.appendChild(template.content.cloneNode(true));
//   }

//   static get observedAttributes() {
//     return ['icon', 'label'];
//   }

//   get icon(): string | null {
//     return this.getAttribute('icon');
//   }
//   set icon(value: string) {
//     this.setAttribute('icon', value);
//   }

//   get label(): string | null {
//     return this.getAttribute('label');
//   }
//   set label(value: string) {
//     this.setAttribute('label', value);
//   }

//   attributeChangedCallback(name: string, _: any, newValue: string) {
//     const icon$el = this.shadowRoot?.querySelector('.icon') ?? null;
//     const label$el = this.shadowRoot?.querySelector('.label') ?? null;

//     if (icon$el === null || label$el === null) {
//       return;
//     }

//     switch (name) {
//       case 'icon':
//         icon$el.setAttribute('src', newValue);
//         icon$el.setAttribute('alt', newValue);
//         break;
//       case 'label':
//         label$el.setAttribute('src', newValue);
//         break;
//       default:
//         throw new Error('Unexpected attribute');
//     }
//   }
// }

type Props = {
  icon: string;
  label: string;
};

export default (props: Props) => {
  return (
    <figure className="flex items-center flex-col">
      <img className="rounded shadow-white" width="50px" src={props.icon} />
      <figcaption className="mt-[10px] text-[1.2em]">{props.label}</figcaption>
    </figure>
  );
};
