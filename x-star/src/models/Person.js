/*
 * File: Person.js
 * Project: x-star
 * 
 * Created by kunlu on 11/09/2019
 * 
 * Description: 
 */
import { types } from "mobx-state-tree";

const Person = types.model({
    id: types.string,
    first: types.string,
    last: types.string,
    middle: types.maybeNull(types.string),
    sex: types.
}).actions(

).views (

);
export default Person;