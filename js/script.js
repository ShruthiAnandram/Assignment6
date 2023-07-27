/*eslint-env browser*/

function init() {
    "use strict";
    var btnAddEmployee = window.document.getElementById("btnAddEmployee");
    btnAddEmployee.addEventListener("click", function () {
        window.open("addEmployee.html", "123", "width=400,height=400");    
    });
}
window.addEventListener("load", init);