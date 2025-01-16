const request = require('supertest');
const app = require('../../serve'); // Corrigé: nom correct du fichier serveur
const commentairedb = require('../../models/commentaires');
const utilisateurs = require('../../models/utilisateur');
const design = require('../../models/design');

jest.mock('../../models/commentaires');

describe('Tests unitaires pour les routes de commentaires', () => {


  describe('POST /api/ajoutCommentaire', () => {
    it('devrait créer un commentaire avec succès', async () => {
        // Mocker le modèle commentaire, utilisateur, et design
        const commentaireMock = {
            _id: '12345',
            comment: 'Commentaire test',
            produit: 'Produit test',
            emetteur: 'Emetteur test',
            date: new Date(),
            utilisateur: 'utilisateur_id_test',
            design: 'design_id_test'
        };

        // Mocker les méthodes
        commentairedb.prototype.save = jest.fn().mockResolvedValue(commentaireMock);
        utilisateurs.updateOne = jest.fn().mockResolvedValue({ nModified: 1 });
        design.updateOne = jest.fn().mockResolvedValue({ nModified: 1 });

        const response = await request(app)
            .post('/api/ajoutCommentaire')
            .send({
                comment: 'Commentaire test',
                produit: 'Produit test',
                emetteur: 'Emetteur test',
                date: new Date(),
                utilisateur: 'utilisateur_id_test',
                design: 'design_id_test'
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('Commentaire');
        expect(response.body.msg).toBe('Enregistré avec succès');
    });

    it('devrait retourner 400 si les données sont manquantes', async () => {
        const response = await request(app)
            .post('/api/ajoutCommentaire')
            .send({});  // Envoi de données vides

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Content can not be empty!');
    });

    it('devrait retourner 500 en cas d\'erreur lors de la création', async () => {
        // Mocker un échec de sauvegarde
        commentairedb.prototype.save = jest.fn().mockRejectedValue(new Error('Erreur de sauvegarde'));

        const response = await request(app)
            .post('/api/ajoutCommentaire')
            .send({
                comment: 'Commentaire test',
                produit: 'Produit test',
                emetteur: 'Emetteur test',
                date: new Date(),
                utilisateur: 'utilisateur_id_test',
                design: 'design_id_test'
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Erreur de sauvegarde');
    });

    it('devrait retourner 500 si l\'update de l\'utilisateur échoue', async () => {
        // Mocker un échec lors de la mise à jour de l'utilisateur
        utilisateurs.updateOne = jest.fn().mockRejectedValue(new Error('Erreur de mise à jour de l\'utilisateur'));

        const response = await request(app)
            .post('/api/ajoutCommentaire')
            .send({
                comment: 'Commentaire test',
                produit: 'Produit test',
                emetteur: 'Emetteur test',
                date: new Date(),
                utilisateur: 'utilisateur_id_test',
                design: 'design_id_test'
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe("Erreur de mise à jour de l'utilisateur");
    });


});


  describe('PUT /commentaires/:id', () => {
    it('devrait mettre à jour un commentaire avec succès', async () => {
        // Mettez à jour les données du commentaire
        const updatedComment = { comment: 'Commentaire mis à jour' };

        // Mock de `findByIdAndUpdate` renvoyant l'objet mis à jour
        commentairedb.findByIdAndUpdate = jest.fn().mockResolvedValue({
            _id: '12345', // L'ID du commentaire
            comment: 'Commentaire mis à jour', // Le commentaire mis à jour
        });

        // Envoi de la requête PUT
        const res = await request(app).put('/api/updateCommentaire/12345').send(updatedComment);

        // Vérifiez que le statut de la réponse est 200
        expect(res.status).toBe(200);

        // Vérifiez que la réponse contient le commentaire mis à jour
        expect(res.body.comment).toBe('Commentaire mis à jour');
    });

    it('devrait retourner 404 si le commentaire n\'est pas trouvé', async () => {
        commentairedb.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

        const res = await request(app)
            .put('/api/updateCommentaire/12345')
            .send({ comment: 'Commentaire mis à jour' });

        expect(res.status).toBe(404);
        expect(res.body.message).toBe('Cannot update comment with ID 12345. Maybe comment not found!');
    });
});


  describe('DELETE /commentaires/:id', () => {
    it('devrait supprimer un commentaire avec succès', async () => {
      commentairedb.findByIdAndDelete = jest.fn().mockResolvedValue({});

      const res = await request(app).delete('/api/deleteCommentaire/12345');

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('comment was deleted successfully!');
    });

    it('devrait retourner 404 si le commentaire n\'est pas trouvé', async () => {
      commentairedb.findByIdAndDelete = jest.fn().mockResolvedValue(null);

      const res = await request(app).delete('/api/deleteCommentaire/12345');

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('Cannot Delete with id 12345. Maybe id is wrong');
    });
  });


  describe('GET /getCommentByProduit/:produit', () => {
    it('devrait récupérer les commentaires par produit', async () => {
      commentairedb.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue([
          { _id: '12345', comment: 'Super produit!', produit: 'Produit 1' },
        ]),
      });
  
      const res = await request(app).get('/getCommentByProduit/Produit%201');
  
      // Vérifiez que le code de statut de la réponse est 200
      expect(res.status).toBe(200);
  
      // Vérifiez que la réponse contient le bon commentaire
      expect(res.body).toEqual([
        { _id: '12345', comment: 'Super produit!', produit: 'Produit 1' }
      ]);
    });
  
    it('devrait retourner une liste vide si aucun commentaire n\'est trouvé', async () => {
      commentairedb.find = jest.fn().mockReturnValue({
        populate: jest.fn().mockResolvedValue([]), // Simule une liste vide
      });
  
      const res = await request(app).get('/getCommentByProduit/Produit%201');
  
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]); // Vérifie que la réponse est une liste vide
    });
  });
  
  
});
