const foodList = document.querySelector('#food-list');
const form = document.querySelector('#add-food-form');

//poc2: create element and render food
function renderFood(doc) {
  let li = document.createElement('li');
  let product = document.createElement('span');
  let merk = document.createElement('span');
  let kcal = document.createElement('span');
  let cross = document.createElement('div');
  let pen = document.createElement('button');

pen.setAttribute("type", "button")
pen.setAttribute("class", "btn btn-info btn-lg")
pen.setAttribute("data-toggle", "modal")
pen.setAttribute("data-target", "#myModal")

// pen.setAttribute("id", "test")
// pen.setAttribute("data-target", "modal1")
//   pen.setAttribute("class", "waves-effect waves-light btn modal-trigger");
// pen.setAttribute("href", "#modal1");
// //pen.setAttribute("data-idClient", "{{$client->id}}" data-nom="MON" data-prenom="{{$client->prenom}}"
//     //data-adresse="{{$client->adresse}}" data-tel1="{{$client->tel1}}" data-tel2="{{$client->tel2}}")


  li.setAttribute('data-id', doc.id);
  product.textContent = doc.data().product;
  merk.textContent = doc.data().merk;
  kcal.textContent = doc.data().kcal;
  cross.textContent = 'x';
  pen.textContent = 'edit';

  li.appendChild(product);
  li.appendChild(merk);
  li.appendChild(kcal);
  li.appendChild(cross);
  li.appendChild(pen);

  foodList.appendChild(li);


// edit data

pen.addEventListener('click',(e) =>{
  e.stopPropagation();
   let id = e.target.parentElement.getAttribute('data-id');
console.log(id);
  // db.collection('food').doc(id).update({
  //   product: form.product.value,
  //   merk: form.merk.value,
  //   kcal: form.kcal.value
  // })

});
  // deleting data
  cross.addEventListener('click', (e) => {
    let cfirm = confirm("Klik op OK om het product te verwijderen of op cancel om de actie te annuleren");
    if (cfirm == true) {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id');
      db.collection('food').doc(id).delete();
    }
  })
}

// //getting data
// db.collection('food').orderBy('product').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     renderFood(doc);
//   })
// });

//saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('food').add({
    product: form.product.value,
    merk: form.merk.value,
    kcal: form.kcal.value
  });
  form.product.value = '';
  form.merk.value = '';
  form.kcal.value = '';
})

// real-time listener
db.collection('food').orderBy('product').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderFood(change.doc)
    } else if (change.type == 'removed') {
      let li = foodList.querySelector('[data-id=' + change.doc.id + ']');
      foodList.removeChild(li);
    }
  })
})

//materialize initial

  $(document).ready(function(){
    $('.modal').modal({
      ready: function(modal, trigger){
        modal.find('input[name="nom"]').val(trigger.data('nom'))
      }
    });
  });


// // setup materialize components
// document.addEventListener('DOMContentLoaded', function() {
//
//   var modals = document.querySelectorAll('.modal');
//   M.Modal.init(modals);
//
//
//
// });
