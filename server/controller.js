module.exports={
    getInventory: (req,res) => {
        const db = req.app.get('db')
        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    },
    addInventory: (req, res) => {
        const db = req.app.get('db')
        const {name, price, imgUrl} = req.body
        db.create_product([name, price, imgUrl]).then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    deleteInventory: (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_from_inventory(id)
        .then(()=>res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'whoops!'})
            console.log(err)
        })
    },
    updateInventory: (req,res)=> {
        const db = req.app.get('db')
        const{id}=req.params
        const {name, price, imgUrl}=req.body
        db.update_inventory([id, name, price, imgUrl])
        .then(products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: 'well crap!'})
            console.log(err)
        })
    }
}







