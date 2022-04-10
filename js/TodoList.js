import Utils from "../Utils/Untils.js";
import List from "./List.js";
import cssStyle from "./cssStyle.js"

export default class TodoList{
    arr = [];
    todoArr = []; //存放todo列表内容
    doneArr = []; //存放done列表内容

    constructor(){
        //如果localStorage存有数据，取出对应数据赋值给对应数组
        if(localStorage.todoArr) this.todoArr=JSON.parse(localStorage.todoArr);
        if(localStorage.doneArr) this.doneArr=JSON.parse(localStorage.doneArr);

        this.elem=this.createElem();

        // 监听TODO_LIST_CHANGE与TODO_LIST_REMOVE事件
        document.addEventListener(List.TODO_LIST_CHANGE,e=>this.todoListChange(e));
        document.addEventListener(List.TODO_LIST_REMOVE,e=>this.todoListChange(e));

        //监听keyup事件
        document.addEventListener("keyup",e=>this.keyHandler(e));
    }

    //创建容器和元素
    createElem(){
        if(this.elem) return this.elem;

        //创建外部容器
        this.div = Utils.ce('div',cssStyle.divStyle1());

        //创建头部标签
        let head = this.createHeadElem();
        this.div.appendChild(head);

        //创建todoList列表容器
        this.createListCon("正在进行");

        //创建doneList列表容器
        this.createListCon("已经完成");

        return this.div;

    }

    appendTo(parent){
        if(typeof parent === "string") parent=document.querySelector(parent);
        parent.appendChild(this.elem);
    }

    createHeadElem(){
        let head=Utils.ce("div",cssStyle.divStyle2());
        //创建logo
        let label = Utils.ce('label',cssStyle.labelStyle());
        label.textContent="DanteSu";

        //创建输入文本框
        this.input=Utils.ce("input",cssStyle.inputStyle1());

        //给输入文本框添加默认文字
        this.input.setAttribute("placeholder","请在此添加一个事件，回车键确认");
        head.appendChild(label);
        head.appendChild(this.input);
        return head;
    }

    //创建列表函数
    createListCon(title){
        let div0=Utils.ce("div",{
            width: "600px",
            margin: "auto",
        });

        //创建h2标签
        let h2=Utils.ce("h2");
        h2.textContent=title;
        //判断todolist or donelist
        let list = new List(title=="正在进行");
        //将创建的列表放入数组
        this.arr.push(list);
        if(title==="正在进行") list.setData(this.todoArr);
        else list.setData(this.doneArr);
        div0.appendChild(h2);
        list.appendTo(div0);
        this.div.appendChild(div0);
    
    }

    // 当点击回车时执行的函数
    keyHandler(e){
        //如果案件不为回车，跳出
        if(e.keyCode!==13) return;

        //没有输入内容则直接返回
        if(this.input.value.trim().length === 0) return;
        //回车,将内容添加到todoArr
        this.todoArr.push(this.input.value);
        //将input内容重置
        this.input.value="";
        //arr[0] 为dotoList根据最近todoArr重新生成dotoList
        this.arr[0].setData(this.todoArr);
        //将todolist存入localstorage
        this.saveData();
    }

 
 //监听事件执行函数  添加与check
 todoListChange(e){
    //被checked选中
    if(e.checked){
        //删除todoArr里对应的index,todolist里删除该li
        let arr = this.todoArr.splice(e.index,1);
        //将删除的那一项添加到doneArr里
        if(e.type===List.TODO_LIST_CHANGE) this.doneArr.push(arr[0]);
    }
    else
    {
        //checked没被选中
        let arr=this.doneArr.splice(e.index,1);
        //如果是删除就不会再推入done里面
        if(e.type===List.TODO_LIST_CHANGE) this.todoArr.push(arr[0]);
    }

    //根据新数组重建创建列表
    this.arr[0].setData(this.todoArr);
    this.arr[1].setData(this.doneArr);

    //将新数组加入到localStorage中
    this.saveData();
}

    
    //将todoArr与doneArr两个数组转为json存入
    saveData(){
    localStorage.todoArr=JSON.stringify(this.todoArr);
    localStorage.doneArr=JSON.stringify(this.doneArr);
    }
   
}


