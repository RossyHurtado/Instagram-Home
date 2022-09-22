export var Attribute1;
(function (Attribute1) {
    Attribute1["username1"] = "username1";
    Attribute1["username2"] = "username2";
    Attribute1["location"] = "location";
    Attribute1["caption"] = "caption";
    Attribute1["days"] = "days";
    Attribute1["datai"] = "datai";
    Attribute1["views"] = "views";
    Attribute1["photopost"] = "photopost";
    Attribute1["photouser"] = "photouser";
})(Attribute1 || (Attribute1 = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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
