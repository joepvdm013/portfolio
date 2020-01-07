const foodList = document.querySelector('#food-list');
const form = document.querySelector('#add-food-form');

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

//getting data
db.collection('food').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderFood(doc);
  })
});

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
