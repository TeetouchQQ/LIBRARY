
function Addbook(Name,Author,Page,status,key){
    var table = document.getElementById('Book_list');

    var row = table.insertRow(-1);

    var cell_Name = row.insertCell(0);
    var cell_Author = row.insertCell(1);
    var cell_Page = row.insertCell(2);
    var cell_Status = row.insertCell(3);
    var cell_option = row.insertCell(4);


    var btn = document.createElement("BUTTON");
    btn.innerHTML = status;
    btn.addEventListener("click",function(){
        const Book = {
            name:Name,
            Author:Author,
            Page:Page,
            status:'not Read'
        }
        if(btn.innerHTML == 'Read'){
            Book.status = 'not Read'
            btn.innerHTML = 'not Read'
            localStorage.setItem(key,JSON.stringify(Book));
  
            
        }else{
            Book.status = 'Read'
            btn.innerHTML = 'Read'
            localStorage.setItem(key,JSON.stringify(Book));
            
        }
    })


    var del_btn = document.createElement("BUTTON");
    del_btn.innerHTML = 'DELETE';
    del_btn.addEventListener('click',function(){
        localStorage.removeItem(key);
        location.reload();
    })

    cell_Name.innerHTML = Name;
    cell_Author.innerHTML = Author;
    cell_Page.innerHTML = Page;
    cell_Status.appendChild(btn);
    cell_option.appendChild(del_btn);
}

function GetForm(){
    var Form = document.getElementById('bookForm');

    var Book_name = Form.elements[0].value;
    var Book_Author = Form.elements[1].value;
    var Book_Page = Form.elements[2].value;
    var Book_Status = Form.elements[3].value;

    console.log(Book_name)

    const Book = {
        name:Book_name,
        Author:Book_Author,
        Page:Book_Page,
        status:Book_Status

    }
    saveBook(Book);
}

function saveBook(book){
    if(localStorage.length == 0){
        localStorage.setItem('0', JSON.stringify(book));


    }else{
        var Key = localStorage.length+1;
        localStorage.setItem(Key, JSON.stringify(book));
    }

}
function showBook(){
    let keys  = Object.keys(localStorage);
    for(let key of keys){
        console.log(`${key}: ${localStorage.getItem(key)}`);
        Book_obj = JSON.parse(window.localStorage.getItem(key));
        Addbook(Book_obj['name'],
        Book_obj['Author'],
        Book_obj['Page'],
        Book_obj['status'],
        key)
    }

}
showBook();