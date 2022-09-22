import data from "./data.js";

import "./components/index.js";
import MySugerencias, {Attribute3} from "./components/Sugerencias/Sugerencias.js";
import MyStory, {Attribute} from "./components/Story/Story.js";
import MyNavegation from "./components/Navegation/Navegation.js";
import MyProfile, {Attribute1} from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement{


    sugeren: MySugerencias [] = [];
    stories: MyStory[] = [];
    navegations: MyNavegation[] = [];
    profiles: MyProfile[] = [];
   

    constructor(){

        super();
        this.attachShadow({mode: "open"});

        data.forEach((storyp)=>{
            const stor = this.ownerDocument.createElement ("my-story") as MyStory;
            stor.setAttribute(Attribute.photostory, storyp.photostory);
            
            this.stories.push(stor);
    
        });
    
        data.forEach((user)=>{

            const postInsta = this.ownerDocument.createElement("my-profile") as MyProfile;
            
            postInsta.setAttribute(Attribute1.photopost, user.photopost);
            postInsta.setAttribute(Attribute1.username1, user.username1);
            postInsta.setAttribute(Attribute1.username2, user.username2);
            postInsta.setAttribute(Attribute1.location, user.info.location);
            postInsta.setAttribute(Attribute1.caption, user.info.caption);
            postInsta.setAttribute(Attribute1.days, user.info.days);
            postInsta.setAttribute(Attribute1.datai, user.info.datai);
            postInsta.setAttribute(Attribute1.views, user.info.views);
            

            this.profiles.push(postInsta);
        });

        
        
        const nave = this.ownerDocument.createElement ("my-navegation") as MyNavegation;
        this.navegations.push(nave);

        data.forEach((sugep)=>{

            const suge = this.ownerDocument.createElement ("my-sugerencias") as MySugerencias;
            suge.setAttribute(Attribute3.photosug, sugep.photosug);
            this.sugeren.push(suge);
    
        });
    
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = "";

            this.stories.forEach((story)=>{
                this.shadowRoot?.appendChild(story);
            });


            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
        
            });
            
            
            this.navegations.forEach((navegation)=>{
                this.shadowRoot?.appendChild(navegation);
            });

            this.sugeren.forEach((sugerencias)=>{
                this.shadowRoot?.appendChild(sugerencias);
            });


        }
    }
}

customElements.define("app-container",AppContainer);