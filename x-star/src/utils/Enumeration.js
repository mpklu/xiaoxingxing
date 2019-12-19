/*
 * File: Enumeration.js
 * Project: x-star
 * 
 * Created by kunlu on 11/09/2019
 * 
 * Description: 
 */
export default class Enumeration {
    constructor(obj) {
      for (const key in obj) {
        this[key] = obj[key];
      }
      return Object.freeze(this);
    }
    has(key) {
      return this.hasOwnProperty(key);
    }
  }