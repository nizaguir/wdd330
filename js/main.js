const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
    label: "Week2 notes",
    url: "week2/index.html",
    label: "Week3 notes",
    url: "week3/index.html"
  }
]
        

let data = ["Ram", "Shyam", "Sita", "Gita"];
  
      let list = document.getElementById("myList");
  
      data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });