1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :  
getElementById means selecting an element by its id. Here id should be unique and we can select only one element by its unique id.

getElementsByClassName means selecting an element by its class name. Here the common class name contains multiple elements.

querySelector means it selects a matching element which returns that element and querySelectorAll means it selects the all matching element and returns it .

2. How do you create and insert a new element into the DOM?
Ans :
At first,by using createElement we can create a tag like p tag or div tag. Then, add their content using innertext or innerhtml.At last append it with its parentnode.

4. What is Event Bubbling? And how does it work?
Ans : 
Event bubbling is a method where an event starts from its target element and backtracks to its parent element.
Using addevent listener when we click a button which is the target element, it first go to the button parent element which is div section, then go to the div parent element which is body section, then go to the body parent element which is html section, then go to the html parent element which is document section. In this way event bubbling works.

5. What is Event Delegation in JavaScript? Why is it useful? 
Ans : 
Event delegation is a method where a parent element handles events for its child element using event bubbling.
It is useful for dynamically adding elements, making clean code, and improving performance.

6. What is the difference between preventDefault() and stopPropagation() methods?
Ans : 
preventDefault() method is used to prevent the default behavior of the browser. At this moment it does not stop event bubbling to its parent element, whereas stopPropagation() method stops the event bubbling to its parent element and does not prevent the default behavior of the browser.



