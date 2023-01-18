const products = [
    { 
        id: '1', 
        name: 'Monstera Deliciosa', 
        price: '$15.000', 
        category: 'interior', 
        img:'https://b2566599.smushcdn.com/2566599/wp-content/uploads/2022/08/monstera-fondo-blanco.jpg?lossy=0&strip=0&webp=0', 
        stock: 25, 
        description:'Es una planta de interior trepadora sencilla de cuidar. Conocida por sus grandes hojas perforadas, es un infaltable para todos los amantes de las plantas.'
    },
    { id: '2', name: 'Ficus Benjamina', price: '$20.000', category: 'interior', img:'https://cdn.shopify.com/s/files/1/0504/4859/7149/products/image_1c05bcf0-7cbf-42fc-9f7e-5637f69c2f9a_1024x1024@2x.png?v=1648585942', stock:20,description:'Es de las plantas más populares de interior, un clásico del hogar. Es un tipo de árbol que llena cualquier espacio al interior del hogar. No incluye macetero. '},
    { id: '3', name: 'Ficus Lyrata', price: '$50.000', category: 'interior', img:'https://cdn.shopify.com/s/files/1/0424/5294/3002/products/Ficus_Lyrata_autorregante_negro_860x.jpg?v=1614114735', stock: 10, description:'El Ficus lyrata impresiona con sus hojas grandes y de verde intenso. Es la planta de INTERIOR que todos quieren en sus casas, ideal para entregar un toque moderno y lleno de vida a tus espacios.'},
    { id: '4', name: 'Sansevieria', price: '$12.000', category: 'interior', img:'https://cdnx.jumpseller.com/camelia-y-lavanda/image/6769174/resize/1000/1100?1654561929', stock: 16, description:' Es una planta de interior muy resistente y de fácil cuidado, lo que la hace perfecta para todos.'},
    { id: '5', name: 'Philodendro', price: '$15.000', category: 'interior', img:'https://quintralchile.cl/wp-content/uploads/2022/04/longofolio-1.jpg', stock: 10, description:'Planta de interior caracterizada por su fortaleza, es resistente y versátil en sus requerimientos de luz y riego. '},
    { id: '6', name: 'Cala Blanca', price: '$5.000', category: 'flores', img:'https://cdn.shopify.com/s/files/1/0554/4434/0906/products/15tSkY3iZ_X6JtaieJl72f9MckYIB9iFj_1200x.jpg?v=1625150644', stock: 16, description:'La cala es una planta semiacuática, por lo que puede ser cultivada en maceta, manteniéndola parcialmente sumergida en agua.'},
    { id: '7', name: 'Hortensia', price: '$5.000', category: 'flores', img:'https://i0.wp.com/www.florestore.com/flores-a-domicilio/wp-content/uploads/2018/04/cuidados-de-las-hortensias-florestore-portada.jpg?fit=846%2C635&ssl=1', stock: 10, description:'Es una especie que florece en verano produciendo inflorescencias en corimbos planos, con flores fértiles de color lila y flores estériles de color blanco.'},
    { id: '8', name: 'Regadera plástica', price: '$4.000', category: 'herramientas', img:'https://images.lider.cl/wmtcl?source=url[file:/productos/877675a.jpg]&sink', stock: 16, description:'Regadera plástica en color verde'},
    { id: '9', name: 'Regadera metal', price: '$10.000', category: 'herramientas', img:'https://aukinkochile.com/web/wp-content/uploads/2022/06/06-7767_REGADERA.jpg', stock: 10, description:'Regadera jardín acero inoxidable'}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsByCategory = products.filter( (product) => product.category === category)
            resolve(productsByCategory)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productById = products.filter( (product) => product.id === id)
            resolve(productById)
        }, 500)
    })
}