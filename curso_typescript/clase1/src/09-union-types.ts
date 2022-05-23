(() =>{
    let userId: string | number;
    userId = 1212
    userId = 'asasa'
    function gretting(myText: string | number){
        if(typeof myText === 'string'){

            console.log(  myText.toLowerCase())
        }
        else{

            console.log(myText.toFixed(2))
        }
    }
    gretting('JolAa')
    gretting(1412.12312)

})();
