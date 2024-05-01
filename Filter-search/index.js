function myFunction() {
  var input, filter, ul, li, a, textValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  if (!filter) {
    alert("Enter a value");
  }
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
const orders = [
  {
    id: "714-69-5617",
    customerName: "Sally Whebell",
    orderDate: "07-Aug-2020",
    orderTime: "2:29 AM",
    amount: 634.2,
    orderStatus: "Delivered",
  },
  {
    id: "752-42-3160",
    customerName: "Emmery Grizard",
    orderDate: "11-Mar-2020",
    orderTime: "3:14 PM",
    amount: 518.23,
    orderStatus: "New",
  },
  {
    id: "671-99-4274",
    customerName: "Alano Carnaman",
    orderDate: "09-Oct-2020",
    orderTime: "11:41 AM",
    amount: 400.34,
    orderStatus: "New",
  },
  {
    id: "359-13-4724",
    customerName: "Huey Coombes",
    orderDate: "16-Nov-2020",
    orderTime: "6:35 PM",
    amount: 559.06,
    orderStatus: "Delivered",
  },
  {
    id: "302-50-0415",
    customerName: "Rex Pilsworth",
    orderDate: "26-Feb-2020",
    orderTime: "2:02 PM",
    amount: 347.03,
    orderStatus: "Delivered",
  },
  {
    id: "332-24-5988",
    customerName: "Lou Udale",
    orderDate: "25-Jun-2020",
    orderTime: "11:41 PM",
    amount: 645.82,
    orderStatus: "InTransit",
  },
  {
    id: "239-32-6080",
    customerName: "Penni Blight",
    orderDate: "30-May-2020",
    orderTime: "8:15 PM",
    amount: 472.53,
    orderStatus: "Packed",
  },
  {
    id: "579-80-0751",
    customerName: "Elberta Farress",
    orderDate: "25-Jun-2020",
    orderTime: "4:42 PM",
    amount: 774.63,
    orderStatus: "InTransit",
  },
  {
    id: "494-62-5297",
    customerName: "Danya Regan",
    orderDate: "27-May-2020",
    orderTime: "6:33 AM",
    amount: 785.02,
    orderStatus: "New",
  },
  {
    id: "373-65-1146",
    customerName: "Alexandros Fiddyment",
    orderDate: "15-Mar-2020",
    orderTime: "12:42 AM",
    amount: 461.99,
    orderStatus: "Packed",
  },
  {
    id: "649-95-4216",
    customerName: "Nissy Dalglish",
    orderDate: "22-Dec-2019",
    orderTime: "5:08 AM",
    amount: 252.63,
    orderStatus: "InTransit",
  },
];
// const filterDiv = document.getElementById("filter");
// const a = orders.filter((order) => (order.orderStatus = "New"));

// a.forEach((value) => {
//   var orderDiv = document.createElement("div");
//   orderDiv.textContent = `OrderId: ${value.id},Status: ${value.orderStatus}`;
//   filterDiv.appendChild(orderDiv);
// });

// function check(event) {
//   if (event.target.checked) {
//     a.forEach((value) => {
//       var orderDiv = document.createElement("div");
//       orderDiv.innerHTML = "";
//       orderDiv.textContent = `OrderId: ${value.id},Status: ${value.orderStatus}`;
//       filterDiv.appendChild(orderDiv);
//     });
//   } else {
//     filterDiv.innerHTML = "";
//   } else if (event.target.value === "2") {
//     console.log("Delivered");
//   } else if (event.target.value === "3") {
//     console.log("InTransit");
//   } else {
//     console.log("Packed");
//   }
// }
// function check(event) {
//   if (event.target.checked) {
//     a.forEach((value) => {
//       var orderDiv = document.createElement("div");
//       if (event.target.value === "New") {
//         orderDiv.textContent = `OrderId: ${value.id}, Status: ${value.orderStatus}`;
//         filterDiv.appendChild(orderDiv);
//       } else if (
//         event.target.value === "Delivered" &&
//         value.orderStatus === "Delivered"
//       ) {
//         console.log(`OrderId: ${value.id}, Status: ${value.orderStatus}`);
//       } else if (
//         event.target.value === "InTransit" &&
//         value.orderStatus === "InTransit"
//       ) {
//         console.log(`OrderId: ${value.id}, Status: ${value.orderStatus}`);
//       } else if (
//         event.target.value === "Packed" &&
//         value.orderStatus === "Packed"
//       ) {
//         console.log(`OrderId: ${value.id}, Status: ${value.orderStatus}`);
//       }
//     });
//   } else {
//     filterDiv.innerHTML = "";
//   }
// }
function filtering() {
  const checkBox = Array.from(
    document.querySelectorAll('input[type="checkBox"]:checked')
  ).map((cb) => cb.value);
  if (checkBox.length < 0) {
    console.log(checkBox.length);
  } else {
    const filterOrders = orders.filter((order) =>
      checkBox.includes(order.orderStatus)
    );
    displayItem(filterOrders);
  }
}
function displayItem(filterOrders) {
  const filteredOrdersDiv = document.getElementById("filteredOrders");
  filteredOrdersDiv.innerHTML = "";
  filterOrders.forEach((order) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<table >
    <tr>
      <th>ID</th>
      <th>customerName</th>
      <th>orderStatus}</th>
    </tr>
    <tr>
      <td>${order.id}</td>
      <td>${order.customerName}</td>
      <td>${order.orderStatus}</td>
    </tr>
  </table>`;
    filteredOrdersDiv.appendChild(listItem);
  });
}
