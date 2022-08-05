const Club = require('../models/clubModel')
const asyncHandler = require('../middleware/async');

const getclubs = async (req, res, next) =>{
    try {
        const club = await Club.find()
        res.status(200).json({
            success:true,
            data:club
        })
    } catch (error) {
        next(error)
    }
    
}
const createclub = async (req, res, next) =>{
    try {
        const club = new Club(req.body)
        const Addclub = await club.save()
        res.status(200).json({
        success:true,
        data:Addclub
    })
    } catch (error) {
       next(error) 
    }
    
}

const getOneclub = async (req, res, next) =>{
    try {
        const clubFound = await Club.findById(req.params._id)
        if(!clubFound) res.status(400).json({"message":"club not found"})
        else{
        const club = await Club.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:club
        })}
    } catch (error) {
        next(error)
    }
}
const deleteOneclub = async (req, res, next) =>{
    try {
        const clubFound = await Club.findById(req.params._id)
        if(!clubFound) res.status(400).json({"message":"club not found"})
        else{
        const club = await Club.deleteOne({_id:req.params._id})
        res.status(200).json({
            success:true
        })}
    } catch (error) {
        next(error)
    }
}
const updateclub = async (req, res, next) =>{
    try {
        const clubFound = await Club.findById(req.params._id)
        if(!clubFound) res.status(400).json({"message":"club not found"})
        const club = await Club.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:club
        })
    } catch (error) {
        next(error)
    }
}
module.exports = {getclubs, createclub, getOneclub, deleteOneclub, updateclub}