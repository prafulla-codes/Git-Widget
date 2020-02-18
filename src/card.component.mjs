import {css} from './card.style.mjs';

const template = document.createElement('template');
template.innerHTML=`
<style>
${css}
</style>

<div class="card">
    <a id="group_link" target="_blank">
    <div id="header">
    <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582036248/meetup-brands_oq9g8h.svg" id='logo'>
    <h4 id="header-group-name"> </h4> 
    </div>
    </a>
    <div id="content">
    </div>
    <div id="footer">
    <span id="footer-label"> <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582036248/user-solid_pjpskl.svg" class="icon"> <span id="members_count"> </span> </span>
    </div>
</div>   
`

export class MeetupWidget extends HTMLElement {
    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode:"open"});
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    }

    static get observedAttributes() { 
        return ['data-width', 'data-height']; 
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'data-width' && oldValue != newValue) {
            this[attr] = newValue;
            this.setWidth();
        }

        if(attr == 'data-height' && oldValue != newValue && 'data-height' > '300px'){
            this[attr] = newValue;
            this.setHeight(newValue);
        }
    }

    setWidth(){
        this._shadowRoot.querySelector(`.card`).style.width = this.dataset.width || '350px';
    }

    setHeight(){
        this._shadowRoot.querySelector(`.card`).style.height = this.dataset.width || '500px';

    }

    connectedCallback(){
        
        // Mounted
        this.render();
        this._shadowRoot.querySelector(`.card`).style.width = this.dataset.width || '350px';
        this._shadowRoot.querySelector(`.card`).style.height = this.dataset.height || '500px';

    }
    


   async fetchEvents(){

   
       
        let events = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.dataset.groupurl}/events?status=past`,{
            method:"GET",
            headers:{
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            }
        })
       
        let event_data = await events.json();
        event_data = event_data.sort(function(a,b){
            return new Date(b.local_date) - new Date(a.local_date);
        })
        console.log(event_data)
        // Render The Events
        this.renderEvents(event_data);
    }

    renderEvents(events_data){
        events_data.forEach(event=>{

            let a = document.createElement('a');
            a.setAttribute('href',event.link);
            a.setAttribute('target','_blank')
            a.innerHTML=`
            <div class="event">
            <h4 style="text-align:left"> ${event.name} </h4>
            <br>
            <img src="https://res.cloudinary.com/prafulla98/image/upload/v1582036234/calendar-alt-regular_iq3e0b.svg" class="icon">&nbsp<span class="label">${this.reformatDate(event.local_date)}</span> <span class="label" style="float:right"><img src="https://res.cloudinary.com/prafulla98/image/upload/v1582036248/user-check-solid_homxcf.svg" class="icon"> ${event.yes_rsvp_count}+</span>
            <div>
            `
            this._shadowRoot.querySelector(`#content`).appendChild(a);

        })
    }

    reformatDate(dateStr)
    {
      let dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0] //ex out: "18/01/10"
    }
    async render(){
        console.log("Rendering the meetup widget");
        let group = await fetch(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/${this.dataset.groupurl}`,{
        method:"GET",
        headers:{
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'application/json',
        }
        })
        let group_data = await group.json();
        console.log(group_data)
        this._shadowRoot.querySelector(`#header-group-name`).innerHTML=group_data.name;
        this._shadowRoot.querySelector(`#group_link`).setAttribute('href',group_data.link);
        this.fetchEvents();
        this._shadowRoot.querySelector(`#members_count`).innerHTML=group_data.members;

    }
} 




customElements.define('meetup-widget',MeetupWidget);

