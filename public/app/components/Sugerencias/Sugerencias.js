export var Attribute3;
(function (Attribute3) {
    Attribute3["photosug"] = "photosug";
})(Attribute3 || (Attribute3 = {}));
class MySugerencias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            photosug: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="./app/components/Sugerencias/style.css">
         
         <section>

         
         <div class="sug"> </div>
         <img src= ${this.photosug} alt="" class="sug">

       </section>
         `;
        }
    }
}
customElements.define("my-sugerencias", MySugerencias);
export default MySugerencias;
