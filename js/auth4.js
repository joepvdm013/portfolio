//listen auth changes
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('summaries').get().then(snapshot => {
      setupSummaries(snapshot.docs);
      setupUI(user);
    });
  } else {
    setupUI();
    setupSummaries([]);
  }
});

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //signup the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  let cfirm = confirm("You will be logged out. Click on OK to continue or Cancel to cancel the request");
  if (cfirm == true) {
    e.preventDefault();
    auth.signOut();
  }

});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close login and reset
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  })
})
