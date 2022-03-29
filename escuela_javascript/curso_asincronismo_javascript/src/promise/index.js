const somethingWillHappend = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject("Whoooops!");
        }
    });
}


somethingWillHappend()
    .then(response => console.log(response))
    .catch(error => console.error(error));

const somethingWillHappend2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(function() {
                resolve('True');
            }, 3000);
        } else {
            const error = new Error("Whoops!");
            reject(error);
        }
    });
}

somethingWillHappend2()
    .then(response => console.log(response))
    .catch(error => console.error(error));


Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response => {
        console.log("Array of promise", response);
    })
    .catch(err => {
        console.error(err);
    })