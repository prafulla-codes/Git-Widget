export const css = 
`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    .card {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        width:var(--main-width,350px);;
        height:var(--main-height,500px);
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
        background-color:var(--header-bgcolor,#EE585F);
    }
    #footer{
        width:100%;
        height:30px;
        background-color:var(--header-bgcolor,#EE585F);
        font-weight:bold;
        vertical-align:bottom;
    }
    #header-group-name{
        display:inline-block;
        vertical-align:top;
        margin-top:15px;
        margin-left:5px;
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
        background-color: var(--scroll-track,#fff);
    }
    #content::-webkit-scrollbar-thumb {
        background-color: var(--scroll-thumb,#EE585F);
        border-radius: 5px;
      }
    a{
        text-decoration:none;
        color:black;
    }
    a:hover{
       --event-bgcolor:black;
       color:#fff;
       --label-color:#EE585F;
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
    h4{
        font-weight:800;
    }


`