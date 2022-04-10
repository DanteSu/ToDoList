export default class cssStyle {
    static liStyle(_mask){
        return {
            display: "list-item",
            textAlign: "-webkit-match-parent",
            userDrag: "element",
            userSelect: "none",
            height: "32px",
            lineHeight: "32px",
            background: "#fff",
            position: "relative",
            marginBottom: "10px",
            padding: "0 45px",
            borderRadius: "3px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.07)",
            borderLeft:!_mask ? "5px solid #999" :"5px solid #629A9C",
            opacity:!_mask ? "0.5"  :  "1",
        }
    }
    static inputStyle(){
        return {
            position:'absolute',
            top:'2px',
            left:'10px',
            width:'22px',
            height:'22px',
            cursor:'pointer',
            backgroundColor:'initial',
            cursor:'default',
            appearance:'checkbox',
            boxSizing:'border-box',
            margin:'3px 3px 3px 4px',
            padding:'initial',
            border:'initial',
            WebkitWritingMode:'horizontal-tb !important',
            textRendering:'auto',
            color:'-internal-light-dark(black, white)',
            letterSpacing:'normal',
            wordSpacing:'normal',
            textTransform:'none',
            textIndent:'0px',
            textShadow:'none',
            display:'inline-block',
            textAlign:'start',
            font:'400 13.3333px Arial',
        }
    }
    static spanStyle(){
        return {
            display:"inline-block",
            width:"500px",
            overflow:"hidden"
        }
    }
    static aStyle(){
        return {
            position: "absolute",
            top: "2px",
            right: "5px",
            display: "inline-block",
            width: "14px",
            height: "12px",
            borderRadius: "14px",
            border: "6px double #FFF",
            background: "#CCC",
            lineHeight: "14px",
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            textDecoration: "underline",
        }
    }
    static ulStyle(){
        return {
            listStyle:"none",
            margin:"0px",
            padding:0,
            width:"600px",
        }
    }
    static divStyle1(){
       return {
            position:"absolute",
            width:"100%",
            left:0,
            top:0,
            right:0,
            bottom:0,
            backgroundColor:"#CFE2F3"
        }
    }
    static divStyle2(){
        return {
            position:"relative",
            left:0,
            right:0,
            height: "50px",
            backgroundColor:"rgba(47,47,47,0.98)",
            padding:"0 321px",
        }
    }
    static labelStyle(){
        return {
            float: "left",
            width: "200px",
            lineHeight: "50px",
            color: "#FFF",
            fontSize: "24px",
            cursor: "pointer",
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        }
    }
    static inputStyle1(){
        return {
            textRendering: "auto",
            color: "-internal-light-dark(black, white)",
            letterSpacing: "normal",
            wordSpacing: "normal",
            textTransform: "none",
            textShadow: "none",
            display: "inline-block",
            textAlign: "start",
            appearance: "textfield",
            backgroundColor: "-internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59))",
            cursor: "text",
            marginLeft: "100px",
            font: "400 13.3333px Arial",
            float: "left",
            width: "360px",
            height: "24px",
            marginTop: "12px",
            textIndent: "10px",
            borderRadius: "5px",
            boxShadow: "0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset",
            border: "none",
            padding: "1px 2px",
        }
    }
}
