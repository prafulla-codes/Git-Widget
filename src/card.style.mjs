export const css = 
`
    .card {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        width:var(--main-width,300px);;
        height:var(--main-height,500px);
        background-color:var(--main-bgcolor,#0D455D);
    }
    .card * {
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    .header{
        width:100%;
        height:wrap;
        padding:15px 10px;
        color:var(--header-color,#fff);
        font-weight:bold;
        background-color:var(--header-bgcolor,#EE585F);

    }
    h4{
        font-weight:800;
    }


`