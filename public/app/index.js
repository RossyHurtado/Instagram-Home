import data from "./data.js";
import "./components/index.js";
import { Attribute3 } from "./components/Sugerencias/Sugerencias.js";
import { Attribute } from "./components/Story/Story.js";
import { Attribute1 } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.sugeren = [];
        this.stories = [];
        this.navegations = [];
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((storyp) => {
            const stor = this.ownerDocument.createElement("my-story");
            stor.setAttribute(Attribute.photostory, storyp.photostory);
            this.stories.push(stor);
        });
        data.forEach((user) => {
            const postInsta = this.ownerDocument.createElement("my-profile");
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
        const nave = this.ownerDocument.createElement("my-navegation");
        this.navegations.push(nave);
        data.forEach((sugep) => {
            const suge = this.ownerDocument.createElement("my-sugerencias");
            suge.setAttribute(Attribute3.photosug, sugep.photosug);
            this.sugeren.push(suge);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.stories.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.navegations.forEach((navegation) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navegation);
            });
            this.sugeren.forEach((sugerencias) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugerencias);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
