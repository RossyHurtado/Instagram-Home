export enum Attribute3 {
    "photosug" = "photosug"
 }

 class MySugerencias extends HTMLElement{

     photosug?: string;
 
 
     static get observedAttributes() {
       const attrs: Record<Attribute3,null> = {
        
         photosug: null,
      
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
     propName: Attribute3, 
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

