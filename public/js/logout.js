const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);

  // document.querySelector('.card').addEventListener('click', ()=>{
  //   var detail = document.querySelector('.is-hidden')
  //   detail.classList.remove('is-hidden')
  //   console.log('logging')
  // })