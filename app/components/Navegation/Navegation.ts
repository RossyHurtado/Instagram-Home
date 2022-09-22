class MyNavegation extends HTMLElement{
   
    constructor(){
        super();
        this.attachShadow({mode: "open"});
       
    }
    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Navegation/style.css">
            
            <section>
            <nav class="navbar">
            <div class="nav-wrapper">
             <img src="./images/logo.png" class="logo" alt="">
            
             <input type="text" class="search-box" placeholder="Buscar"> 


             <div class="nav-items">
             <img src="./images/chat.png" class="icono" alt="">
             <img src="./images/np.png" class="icono" alt="">
             <img src="./images/finder.png" class="icono" alt="">
             <img src="./images/heart2.png" class="icono" alt="">
        
             <div class="nav-user">
             <img src="./images/rossy.jpg" class="nav-user" alt="">

             <div class="casa">
             <img src="./images/house.png" class="icono" alt="">

             
             </div>
             </div>
               </div>
             </div>
            
          </nav>
         
            </section>
            `;
        }
    }
}

customElements.define("my-navegation", MyNavegation);
export default MyNavegation;

