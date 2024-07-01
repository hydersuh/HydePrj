// crud - create, read, Updste, Delete
// global variables

function subMit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    insert(readData);
  }
  
  //CREATE
  // receiving data from form
  function retrieveData() {
      var name1 = document.getElementById('name').value;
      var job = document.getElementById('job').value;
      var exp = document.getElementById('exp').value;
  
      var arr = [name1, job, exp];
      return arr;
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
    row.insertCell(3).innerHTML = `<button onclick=edit(this)>Edit</button>
    <button>Delete</button>`;
  }
  