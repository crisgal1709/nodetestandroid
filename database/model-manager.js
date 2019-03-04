'use strict'

module.exports = class ModelManager{
  constructor(model){
     this.model = model;
  }
  
  all() {
   // console.log(this.model)
     return this.model.findAll()
	  .then(users => {
	    return users;
	  })
	  .catch(err => {
	    console.log(err)
	    return [];
	  })
  }
}
