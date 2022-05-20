(() =>{
    let myDynamicVar: any;
    myDynamicVar = "Hooa"
    console.log(myDynamicVar)
    myDynamicVar = 100;
    console.log(myDynamicVar)

    myDynamicVar = 'hola'
    const rta = (myDynamicVar as string).toLowerCase();
    console.log(rta)

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log(rta2)
})();
