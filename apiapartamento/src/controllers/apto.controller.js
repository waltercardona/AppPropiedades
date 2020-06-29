const PropiedadCtrl = {};

const Propiedad = require('../models/Propiedad');

PropiedadCtrl.createNewPropiedad = (req, res) => {
    const {
        title,
        type,
        address,
        rooms,
        price,
        image,
        userId
    } = req.body;
    const newPropiedad = new Propiedad({
        title,
        type,
        address,
        rooms,
        price,
        image
    });
    newPropiedad.user = userId;
    newPropiedad.save((err)=>{
        if(err)
        {
            res.status(404).send({message:"No se pudo crear la Propiedades", detail: err.errmsg});
        }
        else
        {
            res.status(200).send({message:"Propiedad creada correctamente"});
        }
    });
};

PropiedadCtrl.renderPropiedadesAdministrador = (req, res) => {
    const userId = req.query.userId;
    // Sólo muestra las Propiedades creadas por el usuario que inició sesión y las organiza por fecha de creación descendente.
    Propiedad.find({
        user: userId
    }, (err, Propiedades) => {
        if (err) {
            err.status(500).send({
                message: 'Error en la peticion', detail: err.errmsg
            });
        } else {
            res.status(200).send({
                Propiedades
            });
        }
    }).sort({
        createdAt: 'desc'
    });
};

// Retorna todas las propiedades
PropiedadCtrl.renderAllPropiedades = (req, res) => {
    Propiedad.find({}, function(err, props) {
        if (err) {
            err.status(500).send({
                message: 'Error en la peticion', detail: err.errmsg
            });
        } else {
            res.status(200).send({
                "Propiedades" : props
            });
        }
      }).sort({
        createdAt: 'desc'
    });;
};

PropiedadCtrl.renderPropiedad = (req, res) => {
    Propiedad.findById(req.params.id, (err, Propiedad) => {
        if(err)
        {
            err.status(500).send({
                message: 'Error en la peticion', detail: err.errmsg
            });
        }
        else
        {
            if (Propiedad) { // Para evitar que otro usuario edite una Propiedades que no le pertenece.
                res.status(200).send({
                    Propiedad
                });
            } else {
                res.status(404).send({
                    message: "Propiedad no encontrada"
                });
            }
        }
    });
};

PropiedadCtrl.renderPropiedadAdministrador = (req, res) => {
    const userId = req.params.idAdministrador;
    const PropiedadId = req.params.id;
    Propiedad.findById(PropiedadId, (err, Propiedades) => {
        if (Propiedades.user != userId) { // Para evitar que otro usuario edite una Propiedades que no le pertenece.
            res.status(404).send({
                message: "Propiedad no encontrado"
            });
        } else {
            res.status(200).send({
                Propiedades: Propiedades
            });
        }
    });
};

PropiedadCtrl.updatePropiedad = (req, res) => {
    const {
        title,
        type,
        address,
        rooms,
        price,
        image,
        userId
    } = req.body;
    Propiedad.findById(req.params.id, (err, Propiedades) => {
        // Para evitar que otro usuario edite una Propiedades que no le pertenece.
        if (Propiedades.user != userId) {
            res.status(404).send({
                message: "Propiedad no autorizada"
            })
        } else {
            Propiedad.findByIdAndUpdate(req.params.id, {
                title,
                type,
                address,
                rooms,
                price,
                image
                
            }, (err, Propiedades) => {
                if (err) {
                    res.status(404).send({
                        message: "Ocurrio un error al actualizar la Propiedades", detail: err.errmsg
                    });

                } else {
                    res.status(201).send({
                        message: "Propiedad actualizada correctamente"
                    });
                }
            });
        }
    });
};

PropiedadCtrl.deletePropiedad = (req, res) => {
    const userId = req.query.userId;
    Propiedad.findById(req.params.id, (err, Propiedades) => {
        if (Propiedades.user != userId) {
            // Para evitar que otro usuario elimine una Propiedades que no le pertenece.
            res.status(404).send({
                message: "No autorizado"
            });
        } else {
            Propiedad.findByIdAndDelete(req.params.id, (err, Propiedades) => {
                if (err) {
                    res.status(404).send({
                        message: "No se pudo borrar la Propiedades", detail: err.errmsg
                    });
                } else {
                    res.status(201).send({
                        message: "Propiedad borrada correctamente"
                    });
                }
            });
        }
    });
};

module.exports = PropiedadCtrl;