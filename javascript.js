function showForm(){
    
    var form = document.getElementById("add_form");
    if(form.style.display=="block"){
        form.style.display = "none";
        form.reset();
    }else
        form.style.display="block";

};

function setOrder(){
    
    namelist = document.getElementById("main_table").rows[0].cells;
    qtàlist = document.getElementById("main_table").rows[1].cells;
    var count = 0;
    for(var i=0; i < namelist.length; i++){
        if(namelist[i].innerHTML == document.getElementById("it_name").value){
            qtàlist[i].innerHTML += document.getElementById("it_qty").value;
            alert("name ="+namelist[i]+" qtà= "+qtàlist[i]);
            count++;
        }
    }
    if(count == 0){
        var tmp_it = document.getElementById("it_list").insertCell(0);
        tmp_it.innerHTML = document.getElementById("it_name").value;
        var tmp_qty = document.getElementById("qty_list").insertCell(0);
        tmp_qty.innerHTML = document.getElementById("it_qty").value;    
    }
    
};