import {UnitType} from "./UnitType";

export class Ingredient {
  name: string;
  amount: number;
  unit: UnitType;
  casual_ingredient: boolean;


  constructor(name: string, amount: number, unit: UnitType, casual_ingredient: boolean) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
    this.casual_ingredient = casual_ingredient;
  }
}
