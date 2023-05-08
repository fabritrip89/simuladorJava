const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/* ===================================================== */

/*==================ACA Se escirbne las variables =========================================================*/

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//Lista de todos los contenedores de productos
const prouctsList = document.querySelector('.container-items')

// Variable de arreglos de productos

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')




prouctsList.addEventListener('click', e => {

    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement; // Paretn utilizado para que solo muestre en el Log los elementos de añadir al carrito

        const infoProduct = { // Objetos traidos de html
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exist = allProducts.some(
            product => product.title === infoProduct.title); // Recorre el objeto y verifica en info prod title existe.

        if (exist) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }

            });

            allProducts = [...products] //    console.log(allProducts);//visulizacion del array con todos los producots (Objetos)

        } else {

            allProducts = [...allProducts, infoProduct];   //    console.log(allProducts);//visulizacion del array con todos los producots (Objetos)

        }

        // console.log(infoProduct); // vistualizacion en consola del objeto

        //utilizando operador spread, si all producst tiene 1,2,3 elementos, 
        //el spread lo esparce en el nuevo arreglo y le añade el info producto. Añadir el array sin cambiar su contenido.

        showHtml();



    }

});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts=allProducts.filter(
            product => product.title !== title);

            console.log(allProducts);
            showHtml();

    }

})


// Funcion para traer todos los productos del Html

const showHtml = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <p class="cart-empty"> El carrito está vacio </p>
        `
    }



    rowProduct.innerHTML = '';//Limpiar elementos de carrito en html

    let total = 0;
    let totaloffProducts = 0;


    allProducts.forEach(product => {
        const containerProduct = document.createElement('div'); //Creamos el container product 
        containerProduct.classList.add('cart-product'); // añadimos la clase

        containerProduct.innerHTML = `
        <div class="cart-product">
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>`;  // Añadimos info con innerHtml

        //Insertamos el elemento ya creado con toda la info

        rowProduct.append(containerProduct);

        // operacion de que se actualice el valor y contador de productos

        total = total + parseInt(product.quantity * product.price.slice(1))
        totaloffProducts = totaloffProducts + product.quantity;

    });


    valorTotal.innerText = `$${total}`
    countProducts.innerText = totaloffProducts;



};



