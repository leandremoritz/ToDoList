// Add Function
let today = new Date().toLocaleString(undefined, {
    month: "numeric",
    day: "numeric",
  });
// Adding array
let items =JSON.parse(localStorage.getItem('records')) ? JSON.parse(localStorage.getItem('records')): [{
    id:1,
    item:'Complete task',
    createdDate: today,
}
    

                ];
  
  // Original Loop
  function showItems(items) {
    document.querySelector("#list").innerHTML = " "; // This function is so that the loop doesn't repeat itself everytime there is new information put in
    items.forEach((items) => {
      document.querySelector("#list").innerHTML += //Displays the loop
        `
        <li> <input type='checkbox'> ${items.item}             
</li> 

<button id='delBtn' onclick='deleteItem()'><i class="fa-solid fa-trash-can"></i></button>

      `; //Displays the loop as a list
    });
  }
//   Sort by Function
// function sortby(){
//     items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
//     showItems(items);
// }


    showItems(items); //Executes the loop
//   Add Function
  function add() {
    let id = items.length + 1;
    let item = document.getElementById("Input1").value;
    let createdDate = today
    addText = {id,item,createdDate};
    items.push(addText);
    localStorage.setItem("records", JSON.stringify(items));
    showItems(items);
  }


function Search() {
    SearchText = document.getElementById("Input2").value;
   const FindText = items.find((msg) => msg.includes(SearchText));
      document.getElementById("list").innerHTML = `
        <li>${FindText ? FindText : "No Matches"}
        </li>
        `;
     console.log(items);
   }

function deleteItem(){
    const itemId = items.indexOf(items.item);
    const removeTask = items.splice(itemId, 1);
    localStorage.setItem('records', JSON.stringify(items) );
    showItems(items);
}   

function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("sortby");
    switching = true;
    while (switching) {
      switching = false;
      b = list.getElementsByTagName("LI");
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }