const Joi = require('joi');
const express = require('express');
const app = express();

const Cors = require('cors');

app.use(express.json());

app.use(Cors());

const services = [
  { id: 1, name: 'Compute Engine' },  
  { id: 2, name: 'App Engine' },  
  { id: 3, name: 'Container Engine ' },
  { id: 4, name: 'Container Registry' },
  { id: 5, name: 'Cloud Functions' },
  { id: 6, name: 'Cloud Pub/Sub' },
  { id: 7, name: 'Cloud Storage' },
  { id: 8, name: 'Cloud SQL' },
  { id: 9, name: 'Bigtable' },
  { id: 10, name: 'Cloud Datastore' },
  { id: 11, name: 'Cloud Spanner' },
  { id: 12, name: 'Persistent Disk' },
  { id: 13, name: 'Cloud Source Repositories' }
];

app.get('/api/services', (req, res) => {
  res.send(services);
});

app.post('/api/services', (req, res) => {
  const { error } = validateService(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const service = {
    id: services.length + 1,
    name: req.body.name
  };
  services.push(service);
  res.send(service);
});

app.put('/api/services/:id', (req, res) => {
  const service = services.find(c => c.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('The service with the given ID was not found.');

  const { error } = validateService(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  service.name = req.body.name; 
  res.send(service);
});

app.delete('/api/services/:id', (req, res) => {
  const service = services.find(c => c.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('The service with the given ID was not found.');

  const index = services.indexOf(service);
  services.splice(index, 1);

  res.send(service);
});

app.get('/api/services/:id', (req, res) => {
  const service = services.find(c => c.id === parseInt(req.params.id));
  if (!service) return res.status(404).send('The service with the given ID was not found.');
  res.send(service);
});

function validateService(service) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(service, schema);
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));