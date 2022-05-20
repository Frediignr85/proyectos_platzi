(() =>{
    let isEnable = true
    isEnable = false
    console.log("isEnable ",isEnable)
    isEnable = true
    console.log("isEnable ",isEnable)
    const random = Math.random()
    console.log('random ',random)
    let isNew: boolean = false
    isNew = random >= 0.5 ? true : false
    console.log('isNew ',isNew)
})();
