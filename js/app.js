const foodList = document.querySelector('#food-list');

//poc2: create element and render food
function renderFood(doc) {
  let li = document.createElement('li');
  let product = document.createElement('span');
  let merk = document.createElement('span');
  let kcal = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  product.textContent = doc.data().product;
  merk.textContent = doc.data().merk;
  kcal.textContent = doc.data().kcal;

  li.appendChild(product);
    li.appendChild(merk);
    li.appendChild(kcal);

    foodList.appendChild(li);
}

// //poc1: data opvragen uit firebase database
// db.collection('food').get().then((snapshot) => {
//   // console.log(snapshot.docs);
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
// });

db.collection('food').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderFood(doc);
  })
});
