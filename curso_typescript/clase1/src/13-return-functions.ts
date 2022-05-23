(() =>{
    const calcTotal = (prices: number[]):number =>{
      let total = 0;
      prices.forEach((item) =>{
          total+=item;
      })
      return total;
    }
    const prinTotal = (prices: number[]):void =>{
      const rta = calcTotal(prices)
      console.log(`El total es ${rta}`);
    }

    const rta = calcTotal([1,2,3,5,1])
    console.log(rta)
    prinTotal([1,2,3,5,1])


})();
