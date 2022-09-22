 export enum Attribute {
       "photostory" = "photostory"
    }

    class MyStory extends HTMLElement{

        photostory?: string;
    
    
        static get observedAttributes() {
          const attrs: Record<Attribute,null> = {
           
            photostory: null,
         
        };
        return Object.keys(attrs);
    
    }
   
    constructor(){
        super();
        this.attachShadow({mode: "open"});
       
    }
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
    
            switch (propName) {
        
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render();
    }

    render(){
        if(this.shadowRoot){
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

