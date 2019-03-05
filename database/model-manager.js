'use strict'

module.exports = class ModelManager{
  constructor(model){
     this.model = model;
  }
  
 async all() {
   // console.log(this.model)
     return await this.model.findAll();
  }
  
  async byId(id){
   return await this.model.findById(id);
  }
}
