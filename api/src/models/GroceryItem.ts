import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../utility/sqlConnection";

interface GroceryItemAttributes {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description?: string;
}

class GroceryItem extends Model<GroceryItemAttributes> implements GroceryItemAttributes {
  public id!: number;
  public name!: string;
  public category!: string;
  public price!: number;
  public quantity!: number;
  public description?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the GroceryItem model with attributes and options
GroceryItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize, 
    modelName: "GroceryItem", 
    tableName: "grocery_items",
  }
);

export default GroceryItem;
