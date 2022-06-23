// Add Function
let today = new Date().toLocaleString(undefined, {
    month: "numeric",
    day: "numeric",
  });
// Adding array
const items = [{
    id:1,
    item:'Complete task',
    createdDate: today,
    
   },
   {
    id:2,
    item:'Study Javascript',
    createdDate: today,
   
   },
   {
    id:3,
    item:'ants',
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
function sortby(){
    items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    showItems(items);
}


    showItems(items); //Executes the loop
  // Add Function
  function add() {
    let id = items.length + 1;
    let item = document.getElementById("Input1").value;
    let createdDate = today
    addText = {id,item,createdDate};

    items.push(addText);
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
    const itemId = items.indexOf(items);
    const removeTask = items.splice(itemId, 1);
    showItems(items);
}   