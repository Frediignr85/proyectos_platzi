(() =>{
    let productTitle = 'My amazing product'
    productTitle = "My amazing product"
    console.log('productTitle ',productTitle)
    const productDescription = "bla bla bla bla bla i'm fredy"
    console.log(productDescription)
    let productPrice = 100
    let isNew: boolean = false
    const sumary = `
      title: ${productTitle},
      description: ${productDescription},
      productPrice = ${productPrice},
      isNew = ${isNew}
    `
    console.log(sumary)
})();
