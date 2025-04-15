document.getElementById('form-examen').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const form = new FormData(e.target);
    const data = {
      titre: form.get('titre'),
      description: form.get('description'),
      public: form.get('public')
    };
  
    try {
      const res = await fetch('http://localhost:5000/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      if (!res.ok) throw new Error("Échec lors de l'enregistrement.");
  
      const result = await res.json();
      document.getElementById('generated-link').textContent = `/exam/${result._id}`;
      document.getElementById('lien-examen').style.display = 'block';
  
      document.getElementById('ajout-questions').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création de l'examen.");
    }
  });
  
  document.getElementById('type-question').addEventListener('change', function () {
    const type = this.value;
    document.getElementById('directe-fields').style.display = (type === 'directe') ? 'block' : 'none';
    document.getElementById('qcm-fields').style.display = (type === 'qcm') ? 'block' : 'none';
  });
  