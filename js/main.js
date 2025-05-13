document.getElementById('spendenForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const daten = {
    name: form.name.value,
    email: form.email.value,
    art: form.art.value,
    region: form.region.value,
    abholung: form.abholung.checked,
    adresse: form.adresse.value
  };

  let spendenListe = JSON.parse(localStorage.getItem('spendenListe')) || [];
  spendenListe.push(daten);
  localStorage.setItem('spendenListe', JSON.stringify(spendenListe));

  document.getElementById('erfolgMsg').innerText = "Danke, Ihre Spende wurde registriert!";
  form.reset();
});
