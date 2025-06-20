const product = require('../modals/product.modal')

// create product 

exports.createProduct = async (req, res) => {
    try {
        const {
            name,
            des,
            img,
            category
        } = req.body

        // console.log(req.body)
        if (!name || !des || !img || !category) {
            return res.status(400).json({
                sucess: false,
                message: "please provide all fields"
            })
        }

        const newproduct = new product({
            name,
            des,
            img,
            category
        })

        await newproduct.save()

        res.status(201).json({
            success: true,
            message: 'new product is added',
            data: newproduct
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            sucess: false,
            message: 'Internal Error'
        })
    }
}

// get all product 

exports.getallproduct = async (req, res) => {
    try {
        const allproduct = await product.find()
        res.status(200).json({
            sucess: true,
            message: "All product Found",
            data: allproduct
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal error"
        })
    }
}

// delete product 

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await product.deleteOne({ _id: productId });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No Product found with the given ID!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product has been deleted!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// delete all product 

exports.deleteallproduct = async () => {
    try {
        const deleteData = product
        if (!deleteData) {
            return res.status(404).json({
                success: false,
                message: "No Product found"
            })
        }

        deleteData.remove()

        res.status(200).json({
            success: true,
            message: "Product has been deleted!",
        })
        
    } catch (error) {
        console.log(error)
    }
}

// single page product 

exports.singleProduct = async (req, res) => {
    try {
        const productID = req.params.id
        const productData = await product.findById(productID)
        if (!productData) {
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Here is your product data",
            data: productData
        })
    } catch (error) {
        console.log(error)
    }
}