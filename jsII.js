/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.*/

function getUSA() {
    const spanEle = document.getElementsByTagName('span');
    let foundEle = '';
    for (const key in spanEle) {
        if (spanEle[key].innerText === 'USA') {
            foundEle = spanEle[key];
        }
    } return foundEle.innerText;
} 
console.log(getUSA());
  
/*2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
*/

function getPeopleInSales() {
    const tdEle = document.getElementsByTagName('td');
    let names = [];
    for (const key in tdEle) {
        if(tdEle[key].innerText === 'Sales') {
            const prev = tdEle[key].previousElementSibling;
            names.push(prev.innerText);
        }
    }
    return names;
}
console.log(getPeopleInSales());

/*
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>*/

	function getAnchorChildren() {
	    const anchorEle = document.getElementsByTagName('a');
	    let spanChildren = [];
	    let spanChildren2 = [];

	    for (const key in anchorEle) {
	        if (anchorEle[key].hasChildNodes) {
	           if (anchorEle[key].firstChild !== null) {
	               spanChildren.push(anchorEle[key].getElementsByTagName('span'));
	           }
	        }
	    }

	    for (const key in spanChildren) {
	       if (spanChildren[key].length === 1) {
	           spanChildren2.push(spanChildren[key].item(0).innerText);
	       }
	    } return spanChildren2;
	} console.log(getAnchorChildren());
	  
/*4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.*/

function getHobbies() {
    const array = [];
    let temphold, selectArr = document.getElementsByTagName('select');
    for (let i = 0; i < selectArr.length; i++) {
        if (selectArr[i].name === 'hobbies') {
            temphold = selectArr[i];
        }
    }

    for (let i = 0; i< temphold.children.length; i++) {
        if (temphold.children.item(i).getAttribute('selected')) {
            array.push(temphold.children.item(i).innerText);
        }
    } return array;
} console.log(getHobbies());


/* 5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
*/

function getCustomAttribute() {
    let array = [];
    array = document.querySelectorAll('[data-customAttr]');
    array.forEach((value) => {
        console.log(value, value.innerText);
    })
} getCustomAttribute();


/*
6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
*/

function onChange() {
    const input1 = document.querySelector('#num1');
    const input2 = document.querySelector('#num2');
    const sumVal = document.querySelector('#sum');

    let num1 = input1.value, num2 = input2.value, sum;
   if (isNaN(num1) || isNaN(num2)) {
       sumVal.innerText = 'Cannot Add';
   } else if (num1 === '' || num2 === '') {
       sumVal.innerText = 'Cannot Add';
   } else {
       num1 = parseFloat(num1);
       num2 = parseFloat(num2);
       sum = num1 + num2;
       sumVal.innerText = sum;
   }
} document.addEventListener("change", this.onChange);



/*
7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.
*/

function skillsEvent() {
    const skill = document.getElementsByName('skills')[0];
    skill.addEventListener('change', function() {
        alert(`Are you sure ${skill.value} is one of your skills?`);
    });
}
skillsEvent();


/*
8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
*/

function favoriteColor() {
    const color = document.getElementsByName('favoriteColor');
    let oldColor = 'white', newColor;
    color.forEach((element) => {
        element.addEventListener('change', function() {
            alert(`So you like ${element.value} more than ${oldColor} now?`);
            oldColor = element.value
            newColor = element.value;
            document.getElementsByTagName('body').item(0).style.backgroundColor = newColor;
        });
    });
} favoriteColor();

/*
9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.
*/



/*
10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.
*/




/*
11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.
*/




/*
12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).
*/