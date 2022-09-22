export var Attribute;
(function (Attribute) {
    Attribute["photostory"] = "photostory";
})(Attribute || (Attribute = {}));
class MyStory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            photostory: null,
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
            <link rel="stylesheet" href="./app/components/Story/style.css">
            
            <section>
        
            
            <div class="boxstory"></div>
            <img src="./images/storyb.png" alt="" class="boxstory"> 
            
         
            <div class="storyprofile"> </div>

             <img src= ${this.photostory} alt="" class="storyprofile">
          

          </section>
            `;
        }
    }
}
customElements.define("my-story", MyStory);
export default MyStory;
