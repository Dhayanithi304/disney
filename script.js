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
      
      let b = details.imageUrl;

      // button function for display details
      btn.addEventListener("click", displayDetails);
      function displayDetails() {
        const a = btn.innerText;
        const bodyDiv = document.getElementById("bodyDiv");
        const leftDiv = document.getElementById("leftDiv");
        const rightDiv = document.getElementById("rightDiv");

        leftDiv.classList.remove("leftDiv");
        leftDiv.classList.add("btnOpened");
       // rightDiv.style.display= "inlne-block";

       // document.getElementById("container").style.display = "none";
        
        const subDiv = `
              <div>
                <h1 id="head-text">${a}</h1>
                <img src="${b}">
                <p></p>
              </div>
        `;
        // const div_a = document.createElement("div");
        // div_a.classList.add("container");
        rightDiv.insertAdjacentHTML("beforeend", subDiv);

        // const div_b = document.createElement("div");
        // const h1 = document.createElement("h1");
        // h1.innerText = a;
        // div_b.append(h1);
        // div_a.append(div_b);
        // const img = document.createElement('img');

        // img.setAttribute("herf")
      }
    }
  } catch (err) {
    console.error("An Error Occured: ", err);
  }
}

sampleFunction();
