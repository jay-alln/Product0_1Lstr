  let form = document.querySelector(".form");
  let itemlist = document.querySelector("#items");

  form.addEventListener('submit', addItems);

  function addItems(e) {
    e.preventDefault();
    
    let  newItem = document.querySelector('.form-control').value;
    //create new item
    let li = document.createElement('li');
    li.className = 'list-group-items';
    li.appendChild(document.createTextNode(newItem));
    //add delete bitton
    let deletebtn = document.createElement('button');
    deletebtn.className = 'btn';
    deletebtn.innerHTML = 'x';
    li.appendChild(deletebtn)
    //add to items
    itemlist.appendChild(li);

    if(newItem == '') {
      alert('Enter the product name');
      itemlist.removeChild(li);
    } 
  };

  
  itemlist.addEventListener('click', removeItem );

  function removeItem(e) {
    if(e.target.classList.contains('btn')){
      if(confirm('are you sure?')){
        let li = e.target.parentElement;
        itemlist.removeChild(li);
      }
    }
  }
  //filter items
  let filter = document.querySelector('#filter');
  filter.addEventListener('keyup', filterItems);
  
  function filterItems(e){
    //convert text to  lower case
    let text = e.target.value.toLowerCase();
    //get list
    let items = document.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
      let itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      }else {
        item.style.display = 'none';
      }
    });
  }



  












