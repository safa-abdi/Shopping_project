const productController = require('../../controller/ProduitController');
const produitdb = require('../../models/produit');
const httpMocks = require('node-mocks-http');

jest.mock('../../models/produit');

describe('Tests unitaires pour productController', () => {

  describe('productController.find', () => {
    it('should find a product by ID successfully', async () => {
      const req = { query: { id: '12345' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      produitdb.findById = jest.fn().mockResolvedValue({ id: '12345', nom: 'Produit A' });

      await productController.find(req, res);

      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ id: '12345', nom: 'Produit A' }));
    });

    it('should return 404 if product is not found', async () => {
      const req = { query: { id: '12345' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      produitdb.findById = jest.fn().mockResolvedValue(null);

      await productController.find(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Not found comment with id') }));
    });

   
  });

  // Test pour la suppression d'un produit
  describe('productController.delete', () => {
    let req, res;

    beforeEach(() => {
      req = httpMocks.createRequest();
      res = httpMocks.createResponse();
    });

    it('should delete a product successfully', async () => {
      req.params.id = '12345';

      produitdb.findByIdAndDelete = jest.fn().mockResolvedValue({ id: '12345', nom: 'Produit A' });

      await productController.delete(req, res);

      expect(res.statusCode).toBe(200);
      expect(res._getData()).toEqual(expect.objectContaining({
        message: "product was deleted successfully!"
      }));
    });

    it('should return 404 if product is not found', async () => {
      req.params.id = '12345';

      produitdb.findByIdAndDelete = jest.fn().mockResolvedValue(null);

      await productController.delete(req, res);

      expect(res.statusCode).toBe(404);
      expect(res._getData()).toEqual(expect.objectContaining({
        message: "Cannot Delete with id 12345. Maybe id is wrong"
      }));
    });
  });

  // Test pour la mise à jour d'un produit
  describe('productController.update', () => {
    it('should update a product successfully', async () => {
      const req = { params: { id: '12345' }, body: { nom: 'Produit A Updated' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      produitdb.findByIdAndUpdate = jest.fn().mockResolvedValue({ id: '12345', nom: 'Produit A Updated' });

      await productController.update(req, res);

      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ nom: 'Produit A Updated' }));
    });

    it('should return 404 if product is not found', async () => {
      const req = { params: { id: '12345' }, body: { nom: 'Produit A Updated' } };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
      produitdb.findByIdAndUpdate = jest.fn().mockResolvedValue(null);

      await productController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Cannot Update user with') }));
    });

    it('should return 400 if no body is provided', async () => {
      const req = { params: { id: '12345' }, body: null };
      const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

      await productController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Data to update can not be empty') }));
    });
  });
});
