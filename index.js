const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const task=localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")):[];

showAllTask();


function showAllTask(){
    task.forEach((value,index)=>{
        const div= document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);
         const p=document.createElement("p");
         p.innerText=value.title;
         innerDiv.append(p);


         const span=document.createElement("span");
         span.innerText=value.description;
         innerDiv.append(span);

         const btn=document.createElement("button");
         btn.setAttribute("class","delete");
         btn.innerText="-";

         btn.addEventListener("click",()=>{
            removeTask();
            task.splice(index,1);

            //for remove from local storage after delete item
            localStorage.setItem("task", JSON.stringify(task));

            showAllTask();
         });

         div.append(btn);

         container.append(div);

    });
}

//remove Task
function removeTask(){
    task.forEach((value)=>{
        const div=document.querySelector(".task");
        div.remove();
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    removeTask();

    task.push({
        title:title.value,
        description:description.value,
    });

    //for storage
    localStorage.setItem("task", JSON.stringify(task));
    showAllTask();
});

