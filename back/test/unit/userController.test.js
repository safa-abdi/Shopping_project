const userController = require('../../controller/utilisateurController');
const utilisateur = require('../../models/utilisateur');
const httpMocks = require('node-mocks-http');

jest.mock('../../models/utilisateur');

describe('Tests unitaires pour userController', () => {
    it('should create a user successfully', async () => {
        const req = { 
            body: { 
                nom: 'John', 
                prenom: 'Doe', 
                email: 'john@example.com', 
                motDePasse: '12345',
                tel: '0123456789'
            } 
        };
    
        const res = { 
            status: jest.fn().mockReturnThis(), 
            send: jest.fn() 
        };
    
        utilisateur.prototype.save = jest.fn().mockResolvedValue(req.body);
    
        await userController.create(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            msg: 'enregistrer avec succes', 
        }));
    });
  
    it('should handle errors when creating a user', async () => {
        const req = { 
            body: { 
                nom: 'John', 
                prenom: 'Doe', 
                email: 'john@example.com', 
                motDePasse: '12345',
                tel: '0123456789'
            } 
        };
    
        const res = { 
            status: jest.fn().mockReturnThis(), 
            send: jest.fn() 
        };
    
        utilisateur.prototype.save = jest.fn().mockRejectedValue(new Error('Erreur de base de données'));
    
        await userController.create(req, res);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            message: expect.stringContaining('Erreur de base de données'),
        }));
    });

    describe('userController.find', () => {
        it('should find a user by ID successfully', async () => {
            const req = { query: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            utilisateur.findById = jest.fn().mockResolvedValue({ id: '12345', nom: 'John', prenom: 'Doe' });

            await userController.find(req, res);

            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ id: '12345', nom: 'John' }));
        });

        it('should return 404 if user is not found', async () => {
            const req = { query: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            utilisateur.findById = jest.fn().mockResolvedValue(null);

            await userController.find(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Utilisateur non trouvé') }));
        });

       
    });

    describe('userController.update', () => {
        it('should update a user successfully', async () => {
            const req = { params: { id: '12345' }, body: { nom: 'Updated Name' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            utilisateur.findByIdAndUpdate = jest.fn().mockResolvedValue({ id: '12345', nom: 'Updated Name' });

            await userController.update(req, res);

            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ nom: 'Updated Name' }));
        });

        it('should return 404 if user is not found', async () => {
            const req = { params: { id: '12345' }, body: { nom: 'Updated Name' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            utilisateur.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

            await userController.update(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('L\'utilisateur n\'a peut-être pas été trouvé') }));
        });

        it('should return 400 if no body is provided', async () => {
            const req = { params: { id: '12345' }, body: null };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

            await userController.update(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Les données à mettre à jour ne peuvent pas être vides') }));
        });
    });

    describe('Test de la fonction delete', () => {
  
        let req, res;
      
        beforeEach(() => {
          req = httpMocks.createRequest();
          res = httpMocks.createResponse();
        });
      
        it('doit supprimer un utilisateur avec succès', async () => {
          req.params.id = '12345';
      
          utilisateur.findByIdAndDelete.mockResolvedValue({
            _id: '12345',
            nom: 'Utilisateur à supprimer'
          });
      
          await userController.delete(req, res);
      
          expect(res.statusCode).toBe(200);
          expect(res._getData()).toEqual(expect.objectContaining({
            message: "L'utilisateur a été supprimé avec succès!"
          }));
        });
      
        it('doit retourner une erreur 404 si l\'utilisateur n\'existe pas', async () => {
          req.params.id = '12345';
      
          utilisateur.findByIdAndDelete.mockResolvedValue(null);
      
          await userController.delete(req, res);
      
          expect(res.statusCode).toBe(404);
          expect(res._getData()).toEqual(expect.objectContaining({
            message: "Impossible de supprimer l'utilisateur avec l'ID 12345. L'ID peut être incorrect"
          }));
        });
      
          
      });
      
      
});
