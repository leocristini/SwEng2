function showForm(){
    
    var form = document.getElementById("add_form");
    form.style.display="block";

};

function setOrder(){
    
    var tabela = document.getElementById("main_table");
    var qty = document.getElementById("it_qty");
    var name = document.getElementById("it_name");
    
    tabela.insertRow(1);
    
}