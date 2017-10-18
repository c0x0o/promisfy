module.exports = function(fn) {
    return function() {
        let args = arguments;
        let that = this;

        return new Promise(function(resolve, reject) {
            function callback(e, result) {
                if (e) {
                    reject(e);
                } else {
                    resolve(result);
                }
            }

            let fnArgs = [];
            for (let i of args) {
                fnArgs.push(i);
            }
            fnArgs.push(callback);

            fn.apply(that, fnArgs);
        });
    }
}
