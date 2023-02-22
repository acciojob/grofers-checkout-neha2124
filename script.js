const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table")
	const price = document.querySelectorAll('.price')
	const td = document.createElement("tr")
const getSum = () => {
//Add your code here
	
	let tp = Array.from(price);
	let sum = 0;
	tp.forEach((item)=>{
         let a =parseInt(item.innerText)
		sum += a
	})
	td.innerHTML = `<td>total value</td>
 <td>${sum}</td>`
	table.append(td)
	// console.log(sum)
  
};

getSumBtn.addEventListener("click", getSum);

