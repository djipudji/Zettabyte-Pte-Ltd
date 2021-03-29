async function getInParallel(apiCalls) { 
    // Write your code here 
    let data =[]
    for(let i = 0 ; i <apiCalls.length; i++){
        data.push(apiCalls[i]())
    }
    const result = Promise.all(data)
    return result
    } 
    let promise = getInParallel([() => Promise.resolve("First API call!"), 
    () => Promise.resolve("Second API call!")]); 
    if(promise) { 
    promise.then((result) => console.log(result)).catch((err) => console.log(err)); 
    } 
    module.exports.getInParallel = getInParallel; 
    