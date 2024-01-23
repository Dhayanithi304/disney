async function sampleFunction() {
  const url = "https://api.disneyapi.dev/character";
  try {
    const response = await fetch(url);
    const res2 = await response.json();
    const data = res2.data;
    for (details of data) {
     console.log(details);
      const bodyDiv = document.getElementById("bodyDiv");
      const leftDiv = document.getElementById("leftDiv");
      const rightDiv = document.getElementById("rightDiv");
      rightDiv.classList.add("hidden");
      const btnDiv = document.createElement("div");
      const btn = document.createElement("buttton");
      btn.classList.add("btn", "btn-primary");
      btn.innerText = details.name;
      btnDiv.append(btn);
      leftDiv.append(btnDiv);
      
      const imgUrl = details.imageUrl;
      const filmName =  details.films;
      const tvshows = details.tvShows;
      const videoGames = details.videoGames; 
      const id = details._id;

      // button function for display details
      btn.addEventListener("click", displayDetails);
      function displayDetails() {
        const a = btn.innerText;
        const h1 = document.getElementById("h1");
        const img = document.getElementById("img");
        h1.innerText = a;
        img.setAttribute("src",imgUrl);
        const leftDiv = document.getElementById("leftDiv");
        const rightDiv = document.getElementById("rightDiv");
        leftDiv.classList.remove("leftDiv");
        leftDiv.classList.add("btnOpened");
        rightDiv.classList.add("rightDiv");
        rightDiv.classList.remove("hidden");
        const p1 = document.getElementById('p1');
        const p2 = document.getElementById('p2');
        const p3 = document.getElementById('p3');
      
        id.length  !== 0 ? p1.innerHTML =`ID: <span>${id}</span> ` : p1.innerHTML = ""; 
        filmName.length  !== 0 ? p2.innerHTML =`Films: <span>${filmName}</span> ` : p2.innerHTML = ""; 
        tvshows.length  !== 0 ? p3.innerHTML =`TV Shows: <span>${tvshows}</span> ` : p3.innerHTML = ""; 
        videoGames.length  !== 0 ? p4.innerHTML =`video Games: <span>${videoGames}</span> ` : p4.innerHTML = ""; 
        
      }
      document.getElementById("closebtn").addEventListener("click", closeSidebar);
      function closeSidebar(){
        leftDiv.classList.add("leftDiv");
        leftDiv.classList.remove("btnOpened");
        rightDiv.classList.remove("rightDiv");
        rightDiv.classList.add("hidden");
      }

    }
  } catch (err) {
    console.error("An Error Occured: ", err);
  }
}

sampleFunction();
