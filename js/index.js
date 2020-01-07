const summaryList = document.querySelector('.summaries');

//setup summaries
const setupSummaries = (data) =>{

let html = '';
data.forEach(doc => {
  const summary = doc.data();
  const li = `
  <li>
    <div class="collapsible-header grey lighten-4">${summary.title}</div>
    <div class="collapsible-body white">${summary.title}</div>
  </li>
  `;
  html += li

});

summaryList.innerHTML = html;
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
