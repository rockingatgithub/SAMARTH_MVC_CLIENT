const express = require('express')
const ItemDetails = require('../../model/Item')
const router = express.Router()

router.post('/add', async (req, res) => {

    try{

        console.log("the body", req.body)
        const item = await ItemDetails.create(req.body)
    
        return res.status(200).json({
            data: item,
            message: "Item created successfully!"
        })

    } catch(error) {
        console.log("the error", error)
        return res.status(500).json({
            data: null,
            message: "Error while creating item!"
        })
    }

   

})

router.get('/get', async (req, res) => {
    try {

        const items = await ItemDetails.find()
        return res.status(200).json({
            data: items,
            message: "Items fetched successfully!"
        })

    } catch (error) {

    }
})

module.exports = router