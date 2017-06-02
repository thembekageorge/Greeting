function storeToLocalStorage(currentCounter) {

  var whatsthere = localStorage.getItem('counter');

  // check if theere is any counter value stored in LocalStorage
  if (whatsthere) {
    localStorage.setItem('counter', whatsthere);
    //counter = whatsthere;
  }

}
