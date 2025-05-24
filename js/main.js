document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("spendenForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.checkValidity()) {
        const daten = {
          name: form.name.value,
          email: form.email.value,
          art: form.art.value,
          region: form.region.value,
          adresse: form.adresse.value,
          abholung: form.abholung.checked,
          zeitstempel: new Date().toLocaleString("de-DE")
        };
        let spendenListe = JSON.parse(localStorage.getItem("spendenListe")) || [];
        spendenListe.push(daten);
        localStorage.setItem("spendenListe", JSON.stringify(spendenListe));
        document.getElementById("erfolgMsg").innerText = "Danke, Ihre Spende wurde registriert!";
        form.reset();
      } else {
        form.reportValidity();
      }
    });
  }
});
