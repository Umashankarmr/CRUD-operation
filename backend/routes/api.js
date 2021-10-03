const express = require('express')
const router = new express.Router();
const Drink = require('../model/schema')

//creating
router.post('/drinks', async(req, res) => { 
    try{
        const customer = new Drink(req.body)
        console.log(customer)
     const createCustomer = await customer.save();
     res.status(201).send(createCustomer)
    }
    catch(e){ res.status(400).send(e);}
 })
//reading
 router.get('/drinks', async(req, res) => {
    try{
      const customerData =  await Drink.find()
      console.log(customerData)
      res.status(201).send(customerData)
    }
    catch(e){ res.status(400).send(e);}
})
//update
router.patch('/drinks/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const customerUpdate = await Drink.findByIdAndUpdate(_id, req.body)
        console.log('updated customer',customerUpdate)
        res.send(customerUpdate)
    }catch(e){ res.status(400).send(e);}
})

//delete
router.delete('/drinks/:id', async(req, res) =>{
    try{
        const _id = req.params.id;
        const customerDelete = await Drink.findByIdAndDelete(_id)
        console.log('deleted customer', customerDelete)
        if(!_id){
            return res.status(404).send();
        }else{
        res.send(customerDelete)
        }
    }catch(e){ res.status(400).send(e);}
})


 module.exports = router;
