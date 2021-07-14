import express from 'express';

const app = express();

app.post('/profile', (req, res) => {
  const user = {
    name: 'Sally',
    hobby: 'soccer',
  };
  res.send(user);
});
app.listen(3000);
