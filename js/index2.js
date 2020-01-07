const summaryList = document.querySelector('.summaries');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    //acc info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().bio}</div>
      `;
      accountDetails.innerHTML = html;
    })



    //toggle ui elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    //hide accinfo
    accountDetails.innerHTML = '';
    //toggle ui elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}
//setup summaries
const setupSummaries = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const summary = doc.data();
      const li = `
    <li>
      <div class="collapsible-header grey lighten-4">${summary.title}</div>
      <div class="collapsible-body white">${summary.content}</div>
    </li>
    `;
      html += li

    });

    summaryList.innerHTML = html;
  } else {
    summaryList.innerHTML = '<h5 class="center-align">Login to view summaries</h5>'
  }
}




// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
