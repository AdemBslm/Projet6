const Sauce = require('../models/sauce');
const { cpuUsage } = require('process');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    console.log(req.body)
    sauce.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneSauce = (req,res,next) => {
    Sauce.findOne({
        _id: req.params._id
    }).then(
        (sauce) => {
            res.status(200).json(sauce);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        } 
    );
}

exports.modifySauce = (req, res,next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    Sauce.updateOne({_id: req.params._id}, sauce).then(
        () => {
            res.status(201).json({
                message: "Sauce updated successfully !"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        } 
    );
}

exports.deleteSauce = (req, res,next) => {
    Sauce.deleteOne({_id: req.params._id}).then(
        () => {
            res.status(200).json({
                message: "Deleted !"
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        } 
    );
}

exports.getAllSauce = (req, res, next) => {
    Sauce.find().then(
        (sauces) => {
            res.status(200).json(sauces);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        } 
    );
};


