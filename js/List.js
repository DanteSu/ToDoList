import Utils from "../Utils/Untils.js";
import cssStyle from "./cssStyle.js"

export default class List{
    mask;

    //静态属性，怕发时间
    static TODO_LIST_CHANGE="todo_list_change";
    static TODO_LIST_REMOVE="todo_list_remove";

    constructor(_mask=false){
        this.mask=_mask;
        this.elem = this.createElem();
        //给ul设置委托事件监听
        this.elem.addEventListener("click",e=>this.clickHandler(e));
    }

    // 创建List
    createElem(){
        if(this.elem) return this.elem;
        return Utils.ce("ul",cssStyle.ulStyle());
    }

    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }

    // 根据参数传入list列表，创建内部元素
    setData(list){
        // 情况list内元素，用于每次更新数据
        this.elem.innerHTML = '';

        for(var i=0;i<list.length;i++){
            //根据传入列表长度，创建li个数
            let li = Utils.ce("li",cssStyle.liStyle(this.mask));
            //创建li内的选择框
            let ck = Utils.ce("input",cssStyle.inputStyle());
            ck.type = "checkbox";
            //给选择框增加index属性
            ck.index = i;
            //给选择框增加checked属性
            ck.checked =  !this.mask;
            li.appendChild(ck);
            //创建文本显示区域
            let span = Utils.ce("span",cssStyle.spanStyle());
            //将列表内的第i条数据，在第i个li内显示
            span.textContent = list[i];
            li.appendChild(span);
            //创建删除按钮
            let a=Utils.ce("a",cssStyle.aStyle());
            a.textContent="-";
            //删除按钮添加index属性，记录哪个li点击的删除
            a.index = i;
            //阐述按钮添加checked属性
            a.checked=this.mask;
            li.appendChild(a);
            this.elem.appendChild(li);
        }
    }

    //点击ul，执行的函数 删除
    clickHandler(e){
        //先判断点击的元素是不是 选择框或者删除按钮
        if(e.target.constructor!==HTMLInputElement && e.target.constructor!==HTMLAnchorElement) return;

        //点击选择框时，抛发todo_list_change事件
        if(e.target.constructor===HTMLInputElement){
            var evt = new Event(List.TODO_LIST_CHANGE);
            evt.index=e.target.index;
            evt.checked = e.target.checked;
            document.dispatchEvent(evt);
            return;
        }

        //当点击删除，抛发todo_list_remove事件
        var evt = new Event(List.TODO_LIST_REMOVE);
            evt.index=e.target.index;
            evt.checked=e.target.checked;
            document.dispatchEvent(evt);

    }
    

        



}

