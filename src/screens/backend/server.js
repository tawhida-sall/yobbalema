const express = require('express');
const app = express();
const PDFDocument = require('pdfkit');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/acheter-ticket', (req, res) => {
  // Récupération des données du formulaire
  const { nom, telephone } = req.body;

  // Création d'un nouveau document PDF
  const doc = new PDFDocument();

  // Génération du contenu du reçu
  doc.text('Reçu de ticket de TER');
  doc.text(`Nom: ${nom}`);
  doc.text(`Numéro de téléphone: ${telephone}`);
  // Ajoutez les autres informations du ticket

  // Envoie du reçu au client
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=reçu.pdf');
  doc.pipe(res);
  doc.end();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
