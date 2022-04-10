// 封装dom元素创建方法

export default class Utils{
    static ce(type,style,parent){
        var elem = document.createElement(type);
        if(style){
            for(var prop in style){
                elem.style[prop] = style[prop]
            }
        }
        if(typeof parent==="string") parent=document.querySelector(parent);
        if(parent) parent.appendChild(elem);
        return elem;
    }
}