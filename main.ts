// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

let fetchGreeting = () => {
    return setTimeout(() => {
        console.log("Hello Ali");
    },2000)
}
fetchGreeting();


// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

let simulateTask = () => {
    console.log("Task started");
    return setTimeout(() => {
        console.log("Task completed");
    }, 1000)
}
simulateTask();

// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

let fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000)
    })
}
fetchData().then((message) => {
    console.log(message);
})


// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

let fetchWithError = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(Math.random() > 0.5){
                res("Data fetched successfully!");
            }else{
                rej("Data fetch failed!");
            }
        },1000)
    })
}
fetchWithError().then((response) => {
    console.log(response);
}).catch((rejection) => {
    console.log(rejection);
})


// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

let fetchData2 = new Promise((res) => {
    res("Data fetched successfully!");
})

let processData = new Promise((res) => {
    res("Data processed successfully!");
})
let executeSequentially = () => {
    fetchData2.then((response) => {
        console.log(response)
    });

    processData.then((response) => {
        console.log(response);
    });
}

executeSequentially();