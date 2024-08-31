import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Table = db.define("workorders", {
    date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    pic: DataTypes.STRING,
    work_giver: DataTypes.STRING,
    project: DataTypes.STRING,
    account: DataTypes.STRING,
    work_order: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    notes: DataTypes.TEXT
}, {
    freezeTableName: true
});

export default Table;

(async () => {
    try {
        await db.sync();
        console.log("Database synchronized");
    } catch (error) {
        console.error("Failed to sync database:", error);
    }
})();
