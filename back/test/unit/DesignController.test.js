const designController = require('../../controller/DesignController');
const design = require('../../models/design');
const httpMocks = require('node-mocks-http');
const fs = require('fs');

jest.mock('../../models/design');

describe('Tests unitaires pour designController', () => {
    // Test pour récupérer un design par ID
    describe('designController.find', () => {
        it('should find a design by ID successfully', async () => {
            const req = { query: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            design.findById = jest.fn().mockResolvedValue({ id: '12345', nomDesign: 'Design 1' });

            await designController.find(req, res);

            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ id: '12345', nomDesign: 'Design 1' }));
        });

        it('should return 404 if design is not found', async () => {
            const req = { query: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            design.findById = jest.fn().mockResolvedValue(null);

            await designController.find(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Not found design with id') }));
        });

     
    });

    // Test pour la suppression d'un design
    describe('designController.delete', () => {
        it('should delete a design successfully', async () => {
            const req = { params: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            design.findByIdAndDelete = jest.fn().mockResolvedValue({ id: '12345', nomDesign: 'Design 1' });

            await designController.delete(req, res);

            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: 'design was deleted successfully!' }));
        });

        it('should return 404 if design is not found', async () => {
            const req = { params: { id: '12345' } };
            const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            design.findByIdAndDelete = jest.fn().mockResolvedValue(null);

            await designController.delete(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Cannot Delete design with id') }));
        });

      
    });
});
