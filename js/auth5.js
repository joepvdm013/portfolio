//listen auth changes.
auth.onAuthStateChanged(user => {
  console.log(user);
  if (user) {
    db.collection('summaries').onSnapshot(snapshot => {
      setupSummaries(snapshot.docs);
      setupUI(user);
    }, err =>{
      console.log(err.message);
    });
  } else {
    setupUI();
    setupSummaries([]);
  }
});

// edit summary
const editForm = document.querySelector('#edit-form');
editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let id = e.target.parentElement.getAttribute('data-id');
  db.collection('summaries').doc(id).update({
    title: editForm['title2'].value,
    content: editForm['content2'].value
  // db.collection('summaries').add({
  //   title: createForm['title'].value,
  //   content: createForm['content'].value
  }).then(()=>{
    //close modal and reset form
    const modal = document.querySelector('#modal-edit');
    M.Modal.getInstance(modal).close();
    editForm.reset();
  }).catch(err =>{
    console.log(err.message);
  })
})

// create new summary
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('summaries').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(()=>{
    //close modal and reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err =>{
    console.log(err.message);
  })

})


//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //signup the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
       bio:signupForm['signup-bio'].value
    });
  }).then(()=>{
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
