(() =>{
    type UserId = string | number | boolean;
    let userID:  string | number | boolean;
    function agretting(userID: UserId){
      if(typeof userID === 'string'){
        console.log(`string ${userID.toLocaleLowerCase()}`)
      }
    }

    let shirtSize : 'M' | 'X' | 'L' | 'S';
    shirtSize = 'X';
    shirtSize = 'L';
    shirtSize = 'S';
})
