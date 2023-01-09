
export const setAuthToken = (user) =>{

    const currentUser = {
        email:user.email,
    }
    
    //get jwt token
    fetch(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        

        // Local storage is the easiest but not the best way to store JWT token. More secure is HTTP only cookie.

        localStorage.setItem("Genius-Token", data.token);
        
      });
}