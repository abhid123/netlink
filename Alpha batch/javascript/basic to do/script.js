let todo =[];
let req = prompt("enter your Req");
 while(true){
    if(req == "quite"){
        console.log("you are closing the app")
        break;
    }
    if(req == "list"){
        console.log("____________");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("____________");
    }
    else if(req == "add"){
        let task = prompt("Enter your task");
        todo.push(task);
        
    } else if(req == "delete"){
        let idx = prompt("Enter your task index which you have to delete");
        todo.splice(idx ,1);
        console.log(`task is deleted `);
    }

    req = prompt("enter your Req");
 }
 console.log("app is closed")