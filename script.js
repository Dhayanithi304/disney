async function sampleFunction() {
  const url = "https://api.disneyapi.dev/character";
  try {
    const response = await fetch(url);
    const res2 = await response.json();
    const data = res2.data;
    for (details of data) {
     // console.log(details);
      const bodyDiv = document.getElementById("bodyDiv");
      const leftDiv = document.getElementById("leftDiv");
      const rightDiv = document.getElementById("rightDiv");
      //rightDiv.classList.add("hidden");
     // rightDiv.style.display= "none";
      const btnDiv = document.createElement("div");
      const btn = document.createElement("buttton");
      btn.classList.add("btn", "btn-primary");
      btn.innerText = details.name;
      btnDiv.append(btn);
      leftDiv.append(btnDiv);
      
      const imgUrl = details.imageUrl;

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
       // rightDiv.style.display= "inlne-block";
        
        
      }
    }
  } catch (err) {
    console.error("An Error Occured: ", err);
  }
}

sampleFunction();
