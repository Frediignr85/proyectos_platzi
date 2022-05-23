(() =>{
    type Sizes = 'S' | 'M' | 'L'  | 'XL'
    console.log("JOLA")
    function createProductToJson(
      title: string,
      createAt: Date,
      stock: number,
      size: Sizes
      ){
        return{
          title,
          createAt,
          stock,
          size
        }
    }
    const createProductToJsonV2 = (title: string,
      createAt: Date,
      stock: number,
      size?: Sizes) =>{
        return{
          title,
          createAt,
          stock,
          size
        }
      }
    const producto1 = createProductToJson('P1',new Date(),12,'S')
    console.log(producto1)
    const producto2 = createProductToJsonV2('P1',new Date(),12)
    console.log(producto2)
})();
