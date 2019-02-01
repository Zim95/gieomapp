export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const sortData = (arr,param,technique) => {
    if(arr.length == 1){
        return arr;
    }

    if(technique == "desc"){
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                if(parseFloat(arr[j][param]) > parseFloat(arr[i][param])){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }else{
                    continue;
                }
            }
        }
    }else{
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                if(parseFloat(arr[j][param]) < parseFloat(arr[i][param])){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }else{
                    continue;
                }
            }
        }
    }
    

    return arr;
}

export const checkValidity = (value,rules) => {
    let isValid = true;

    if(!rules){
        return true;
    }

    if(rules.required){
        isValid = value.trim() !== '' && isValid; 
    }

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid; 
    }

    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid; 
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    
    return isValid;
}