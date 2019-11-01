/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios
    .get("https://api.github.com/users/oofiksoo")
    .then(response => {
        const devcrd = response.data;
        crdloc.appendChild(devcard(devcrd));
    })
    .catch(errmsg => {
        console.log(errmsg)
    });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
    'https://api.github.com/users/lyndsiWilliams',
    'https://api.github.com/users/squashgray',
    'https://api.github.com/users/bseverino',
    'https://api.github.com/users/phil-mac',
    'https://api.github.com/users/leachcoding'
];



followersArray.forEach(item => {
    axios
        .get(item)
        .then(response => {
            const newProfile = devcard(response.data)
            crdloc.appendChild(newProfile)

        })
        .catch(errmsg => {
            console.log(errmsg);
        })

})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

          
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const crdloc = document.querySelector(".cards");

function devcard(prfl) {
    //create needed elements
    const newDev = document.createElement('div'), //Developers "Card" div/container
        devImg = document.createElement('img'), //Developers "Image"
        devInfo = document.createElement('div'), //Developer detail div/container
        devName = document.createElement('h3'), //Developer "Given" Name
        devAlias = document.createElement('p'), //Developer Username
        devLoc = document.createElement('p'), //Developer "Physical" Location
        devPrfl = document.createElement('p'), //developer profile box
        devUrl = document.createElement('a'), //Developer "internet" Location/URL
        devFlwr = document.createElement('p'), //Developer's Followers
        devFlwg = document.createElement('p'), //Developer is Following
        devBio = document.createElement('p'); //Developer Bio
    //append children elements
    newDev.appendChild(devImg); //First "child" image
    newDev.appendChild(devInfo); //second "Child" - profile container/div
    //append sub-childern
    devInfo.appendChild(devName); //Child of devInfo Container/div - Given Name
    devInfo.appendChild(devAlias); //child of devInfo container/div - Username
    devInfo.appendChild(devLoc); //child of devInfo  container/div - phisical location
    devInfo.appendChild(devPrfl); //child of devInfo
    devPrfl.appendChild(devUrl); //child of devPrfl container/div - URL Location
    devInfo.appendChild(devFlwr); //child of devInfo container/div - Followers
    devInfo.appendChild(devFlwg); //child of devInfo container/div - Following
    devInfo.appendChild(devBio); //child of devInfo container/div - Bio
    //set class names
    newDev.classList.add('card');
    devInfo.classList.add('card-info');
    devName.classList.add('name');
    devAlias.classList.add('username');
    //set content
    devImg.src = prfl.avatar_url;
    devName.textContent = prfl.name;
    devAlias.textContent = prfl.login;
    devLoc.textContent = prfl.location;
    devUrl.textContent = prfl.url;
    devFlwr.textContent = prfl.followers;
    devFlwg.textContent = prfl.following;
    devBio.textContent = prfl.bio;
    //return built card
    return newDev

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/