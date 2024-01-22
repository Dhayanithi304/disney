async function sampleFunction() {
  const url = "https://api.disneyapi.dev/character";
  try {
    const response = await fetch(url);
    const res2 = await response.json();
    const data = res2.data;
    for (details of data) {
      console.log(details);
      const div1 = document.getElementById("div1");
      const div2 = document.createElement("div");
      const btn = document.createElement("buttton");
      btn.classList.add("btn", "btn-primary", "btn");
      btn.innerText = details.name;
      div2.append(btn);
      div1.append(div2);
      let b = details.imageUrl;

      // button function for display details
      btn.addEventListener("click", displayDetails);
      function displayDetails() {
        const a = btn.innerText;

        div1.classList.add("hidden");
        document.getElementById("container").style.display = "none";

        const div_a = `
          <div class="container">
            <div class="divclass">
              <h1 id="head-text">${a}</h1>
              <img src="${b}">
              <p></p>
            </div>
          </div>
        `;
        // const div_a = document.createElement("div");
        // div_a.classList.add("container");
        document.body.insertAdjacentHTML("beforeend", div_a);

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
