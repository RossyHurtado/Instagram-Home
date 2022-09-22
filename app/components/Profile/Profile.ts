export enum Attribute1 {
    "username1" = "username1",
    "username2" = "username2",
    "location" = "location",
    "caption" = "caption",
    "days" = "days",
    "datai" = "datai",
    "views" = "views",
    "photopost" = "photopost",
    "photouser" = "photouser"
}
class MyProfile extends HTMLElement {
    username1?: string;
    username2?: string;
    location?: string;
    caption?: string;
    days?: string;
    datai?: string;
    views?: string;
    photopost?: string;
    photouser?: string;

    static get observedAttributes() {
      const attrs: Record<Attribute1,null> = {
        username1: null,
        username2: null,
        location: null,
        caption: null,
        days: null,
        datai: null,
        views: null,
        photopost: null,
        photouser: null
     
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
        propName: Attribute1, 
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
            <link rel="stylesheet" href="./app/components/Profile/style.css">
           
        
            <section>


            <div class="post"> </div>

             <img src= ${this.photopost} alt="" class="users">
        
             <img src= ${this.photouser} alt="" class="pp">

        
        
            
             <div class="info">

             <h1> ${this.views}</h1>
             <h1>${this.username1} ${this.caption}</h1>
             <h1> ${this.datai}</h1>
             <h1> ${this.days}</h1>


             <div class="iconsp">

              <img src="./images/heart.png" alt="" class="iconsp"> 
              <img src="./images/comment.png" alt="" class="iconsp">
              <img src="./images/share.png" alt="" class="iconsp"> 

                <img src="./images/bookmark.png" alt="" class="guardarp"> 

            
                <div class="local">
                <h2> ${this.location}</h2>
    
                <div class="user1"
                <h1>${this.username1} </h1>
    
                <div class="rightp">
                <img src="./images/rossy.jpg" class="rightp" alt="">

           
        
            </div>
              </div>
              </div>
              </div>
             
          
                </div>
            </div>
            </div>


            
            </section>
            `;
        }
    }

}


  customElements.define("my-profile", MyProfile);
  export default MyProfile;