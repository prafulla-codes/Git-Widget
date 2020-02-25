export const css = 
`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    .card {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        background-color:var(--main-bgcolor,#F6F7F8);
        font-family:'Roboto',sans-serif;
    }
    .card * {
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    #logo {
        display:inline-block;
        width:40px;
        height:40px;
        vertical-align:'middle';

    }
    .icon{
        width:15px;
        height:15px;
    }
    .label{
        font-weight:bold;
        color:var(--label-color,#0D455D);
    }
    #header{
        width:100%;
        height:wrap;
        padding:20px 25px;
        color:var(--header-color,#fff);
        font-weight:bold;
        box-shadow: 0px 0px 5px 0px black;
        background-color:var(--header-bgcolor,#24292E);
    }
    #header-projectid{
        color:white;
        font-weight:bold;
        display:inline-block;
        vertical-align:top;
        margin-top:15px;
        margin-left:5px;
    }
    #header-description:{
        color:white;
        font-size:0.8rem;
    }
    #footer{
        width:100%;
        height:34px;
        background-color:var(--header-bgcolor,#24292E);
        font-weight:bold;
        padding-left:10px;
        vertical-align:bottom;
    }
    .footer-label{
        display:inline-block;
        color:white;
        vertical-align:top;
        margin-top:8px;
        font-size:15px;
    }
   
    .footer-icon{
        height:16px;
        width:16px;
        display:inline-block;
        margin-top:8px;
        margin-left:10px;
    }

    #content{
        max-height:90%;
        min-height:90%;
        overflow-y:scroll;
        padding:0;
        padding-top:13px;
        background-color:var(--content-bgcolor,#F6F7F8);
    }
    #content::-webkit-scrollbar {
        width: 3px;
    }
     
    #content::-webkit-scrollbar-track {
        background-color: var(--scroll-track,#F6F7F8);
    }
    #content::-webkit-scrollbar-thumb {
        background-color: var(--scroll-thumb,#000);
        border-radius: 5px;
      }
    a{
        text-decoration:none;
    }
  
    #footer-label{
        margin-top:5px;
        margin-right:15px;
        float:right;
    }
    #members_count{
        color: var(--footer-member-count,#fff);
    }
    .event{
        width:90%;
        padding:20px;
        margin-left:auto;
        margin-right:auto;
        background: var(--event-bgcolor,#FFFFFF);
        border: 1px solid #E8E8E8;
        border-radius: 10px;
        margin-bottom:13px;
    }
    .event_header{
        width:80%;
    }
    .event_user_icon{
        height:50px;
        width:50px;
        border-radius:50%;
        display:inline-block;
    }
    .event_username{
        color:#424242;  
        display:inline-block;  
    }
    .event_header{
        display:inline-block;
        vertical-align:top;
    }
    .event_type{
        background-color:#00e676;
        padding:5px;
        margin-top:20px;
        font-weight:bold;
        border-radius:10px;
        font-size:0.65rem;
    }
    .event_description{
        display:inline-block;
        vertical-align:top;
        height:wrap;
        width:100%;
        overflow:hidden;
        padding:5px;
    }
    .event_message{
        padding-top:5px;
        color:#616161;
    }
    .date {
        float:right;
        font-weight:bold;
        color:gray;
    }
    .release_tag{
        background-color:#01579b;
        color:white;   
        padding:5px;
        margin-left:5px;
        font-weight:bold;
        border-radius:10px;
        font-size:10px;
    }
    h4{
        font-weight:800;
    }


`