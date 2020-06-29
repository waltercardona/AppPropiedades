const { Router } = require('express')
const router = Router();

const {  
    createNewPropiedad, 
    renderPropiedadesAdministrador, 
    renderAllPropiedades,
    renderPropiedad,
    renderPropiedadAdministrador, 
    updatePropiedad,
    deletePropiedad

} = require('../controllers/apto.controller');

// New Apartamento
router.post('/Propiedad/new-Apto', createNewPropiedad);

// Get all propiedades
router.get('/Propiedad/todas', renderAllPropiedades);

// Get all propiedades administrador
router.get('/Propiedad/administrador', renderPropiedadesAdministrador);

router.get('/Propiedad/:id', renderPropiedad);

router.get('/Propiedad/:id/administrador/:idAdministrador', renderPropiedadAdministrador);

// Edit Propiedad
router.put('/Propiedad/edit/:id', updatePropiedad);

// Delete Propiedad
router.delete('/Propiedad/delete/:id', deletePropiedad);

module.exports = router;