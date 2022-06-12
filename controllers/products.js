const products = [];

exports.getAddProduct = (req, res, next) => {
    
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        formsCss: true, 
        productCss: true,  
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop',{
        prods:products, 
        pageTitle:'Shop', 
        path:'/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true,
        
    });
};