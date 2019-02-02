const validateOjbect = (obj, ...keys) => {
    let errors = [];
    for(let i of keys) {
        if(typeof(obj[i]) === 'undefined') {
            errors.push(`${i} is required`);
        } else {
            if(obj[i].replace(/\s/g, "") === "") {
                errors.push(`${i} is required`);
            }
        }
    }
    return errors;
}

module.exports = {
    validateOjbect
}