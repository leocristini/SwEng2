function showForm(){
    
    var form = document.getElementById("add_form");
    form.style.display="block";

};

function setOrder(){
            
    var tmp_it = document.getElementById("it_list").insertCell(0);
    tmp_it.innerHTML = document.getElementById("it_name").value;
    var tmp_qty = document.getElementById("qty_list").insertCell(0);
    tmp_qty.innerHTML = document.getElementById("it_qty").value;    
    
    var form = document.getElementById("add_form");
    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }
};