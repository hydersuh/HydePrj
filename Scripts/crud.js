// crud - create, read, Updste, Delete
// global variables
var row = null
function subMit() {
    var dataEntered = retrieveData(); 
    var readData = readingDataFromLocalStorage(dataEntered);
    if(dataEntered == false) {
        msg.innerHTML = `<h3 style="color: red;">Plese Insert Data!</h3>`;
    } else{
        if(row == null) {
            insert(readData);
            msg.innerHTML = `<h3 style="color: yellow;">Data Inserted!</h3>`;
        } else{
            update();
            msg.innerHTML = `<h3 style="color: orange;">Data Updated!</h3>`;
         } 
    } 
     document.getElementById('form').onreset();      
  }
  
  //CREATE
  // receiving data from form
  function retrieveData() {
      var name1 = document.getElementById('name').value;
      var job = document.getElementById('job').value;
      var exp = document.getElementById('exp').value;
  
      var arr = [name1, job, exp];
      if (arr.includes('')) {
        return false;
      } else {
        return arr;
      }
  }
  
  
  // date in local storage
  function readingDataFromLocalStorage(dataEntered) {
      // storing data in local storage
      var n = localStorage.setItem('Name', dataEntered[0]);
      var j = localStorage.setItem('Job', dataEntered[1]);
      var e = localStorage.setItem('Experience', dataEntered[2]);
  
      // getting valus fro local to table
      var n1 = localStorage.getItem('Name', n);
      var j1 = localStorage.getItem('Job', j);
      var e1 = localStorage.getItem('Experience', e);
  
      var arr = [n1, j1, e1];
      return arr;
  }
  
  function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2]; 
    row.insertCell(3).innerHTML = `<button class="butn" onclick=edit(this)>Edit</button>
    <button class="butn"onclick=remove(this)>Delete</button>`;
  }
  
  //Edit 
    function edit(td) {
       row = td.parentElement.parentElement;
       document.getElementById("name").value = row.cells[0].innerHTML;
       document.getElementById("job").value = row.cells[1].innerHTML;
       document.getElementById("exp").value = row.cells[2].innerHTML;
    }
  //Update
    function update(td) {
        row.cells[0].innerHTML = document.getElementById("name").value;
        row.cells[1].innerHTML = document.getElementById("job").value;
        row.cells[2].innerHTML = document.getElementById("exp").value;
        row = null;
    }
  //Delete
  function remove(td) {
    var ans = confirm('Are you sure u want to delete this record')
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    }
    
  }
