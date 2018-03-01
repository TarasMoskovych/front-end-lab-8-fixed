var rootNode = document.getElementById("root");
var treeNode = createElement("div", "container");
var level = 1;

appendElement(treeNode, structure, level);

function appendElement(parent, arr, level) {
    for(var i = 0; i < arr.length; i++) {
        var divParent = createElement("div");
        var pElement = createElement("p", "paragraph bg-color level"+level, arr[i].title);
        var iElement;
        
        if(level === 1){
            divParent.className = "shown";
        } else{
           divParent.className = "hidden"; 
        }
        
        if(arr[i].folder){
            iElement = createElement("i", "image folder material-icons", "folder"); 
            pElement.addEventListener("click", display);
        } else {
            iElement = createElement("i", "image file material-icons", "insert_drive_file"); 
        }
        
        pElement.appendChild(iElement);
        divParent.appendChild(pElement);
        
        if(arr[i].children) {
            appendElement(divParent, arr[i].children, level+1);
        }
        
        if(arr[i].children === null || !arr[i].children) {
            var divElement = createElement("div", "hidden"); 
            var pElement = createElement("p", "paragraph text level"+level, "Folder is empty");
            divElement.appendChild(pElement);
            divParent.appendChild(divElement); 
        }
        parent.appendChild(divParent);
    }
}

function createElement(name, className, text){
    var element = document.createElement(name);
    if(text !== undefined){
       element.textContent = text; 
    }
    if(className !== undefined){
       element.className = className; 
    }
    return element;
}

function display(){
    var children = this.parentElement.childNodes;
    var folderIcon = this.getElementsByTagName("i")[0];
    
    for(var i = 1; i < children.length; i++){
        if(children[i].classList.contains("shown")) {
            folderIcon.textContent = "folder";
        } else {
            folderIcon.textContent = "folder_open";
        }
        children[i].classList.toggle("shown");
        children[i].classList.toggle("hidden");
    }
}

rootNode.appendChild(treeNode);