import Table from "../models/TableModel.js";

export const getTables = async(req, res) => {
    try {
        const response = await Table.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getTableById = async(req, res) => {
    try {
        const response = await Table.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const createTable = async(req, res) => {
    try {
        await Table.create(req.body);
        res.status(201).json({msg: "Table Created"});
    } catch (error) {
        console.log(error.message);
    }
}
export const updateTable = async(req, res) => {
    try {
        await Table.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Table Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteTable = async(req, res) => {
    try {
        await Table.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Table Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}