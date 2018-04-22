import React, { Component } from 'react';
import logo from './logo.svg';
import brooke2 from './brooke2.PNG';
import kevin from './kevin.PNG';
import charly from './charly.PNG';
import pete from './pete.PNG';
import matt from './matt.PNG';

import './App.css';
import DailyEntryWrap from './components/DailyEntryWrap';
import EntryWrapPurple from './components/EntryWrapPurple';


//this my array
const feds = [
  'Kevin',
  'Charly',
  'Ahmet',
  'Matt',
  'Karol',
  'Brooke',
  'Pete',
  'Tomasz',
  'John',
  'James',
  'Sonal'
];

//callbacks (had to move this up outside of class App extends Component)
const myTestCallback = () => {
  alert('Hello this is my delayed callback. To get it to work was tricky, Charly helped me....we had to use a fat arrow function within the onClick inside the button!!!!! What??????!??! This is sooo complicated!');
};

class App extends Component {

  // function to out put my first and last name
  myName = (firstName, lastName) => (<strong>{firstName + lastName}</strong>);

  // a simple function
  myfunction = () => {
    return (<strong>Yey this is my very simpe function to output a string!</strong>);
  };


  // creating an object with keys and outptting items in a list
  onMyDesk() {
    const myObject = {
      drink: 'a very strong cup of coffee',
      phone: 'iphone',
      stationary: 'notebook',
      computer: 'windows laptop',
      misc: 'headphones',
    };
    const listOfItemsOnDesk = [myObject];
    return listOfItemsOnDesk.map((item) => (<li>{item.drink}, {item.phone}, {item.stationary}, {item.computer}, {item.misc},</li>));
  };

//calling my array with arrow function
//get all items in the array and display in a list
getAllFeds = () => feds.map((item) => (<li>{item}</li>));

//get the name of the team lead (i know that he is first in the array)  with arrow function
getFirstFed = () => feds[0];

//get the number of items in the array.
getNumOfFeds = () => feds.length;

// Find Brooke in the Array
getNameOfFed = () => feds[5];


//if else using an arrow function
// cakesForSale(cake) { this is the old way and the same as cakesForSale = (cake) => {
 cakesForSale = (cake) => {
    if (cake > 48) {
      return "cakes nave nearly sold out";
      // Executes if true
    } else {
      return "more cakes need to be sold";
      // Executes if false
    }
  };

  purpleHair = (target) => {
    if (target <10 && target >8 ) {
      return "just starting to fundraise";
    }

    if (target < 20) {
      return "my fundraising percentage is not going too well";
    }
   else if (target === 100) {
      return "reached the target so I will have to dye my hair purple!";

  } else if (target > 45) {
      return "my fundraising percentage is going well i'm nearly half way there";
    }
  }

  // if else with AND OR Not (3, 25, false)
   Umbrella = (chanceOfRain) => {
      if (chanceOfRain >1 && chanceOfRain < 5 ) {
        return "probably no umbrella needed today";
      }
      /*
      else if (chanceOfRain !== true) {
         return "no umbrella needed today!";
       }
      */
      //my code did not work as so charly showed me typeof and making sure the value is a boolean.
      else if (typeof chanceOfRain === 'boolean' && chanceOfRain !== true) {
         return "no umbrella needed today";
       }
      if (chanceOfRain > 20 || chanceOfRain < 30 ) {
            return "umbrella required!";
      }
    }

// below is the same as the umbrella if else function above but much harder to read
//Charly = () =>{
//  return chanceOfRain >1 && chanceOfRain < 5 && "probably no umbrella needed today" || "it will rain today";
//}

//querySelector works differently in REACT to vanilla JS.
componentDidMount() {
  console.log(document.querySelector("#jon"));
}

  render() {
    const brooke = this.purpleHair(50); //inside the class App extends Component


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Whoop my first React page!</h1>
        </header>
        <p className="App-intro"><strong className="App-copy"> Happy Monday! 5 March</strong> Hey, my name is{' '}
            {this.myName('Sonal ',  'Patel')} today i set up my first React Demo Page, and this is my first arrow function! Hooray.
        </p>
        <p>Thanks to Kevin, Tomasz and  Brooke for helping me set up the App.</p>

        <DailyEntryWrap
          title="Trying Tuesday"
        >
          <p>{this.myfunction()} </p>
          <p className="App-copy">So today I am learning about Objects, i got <strong>very confused</strong> here,
          <strong>luckily the lovely Pete helped me out....it was all about scope!</strong> So here are a few things which are on my desk;</p>
          <ul>
              {this.onMyDesk()}
          </ul>
        </DailyEntryWrap>
{'asd'.replace(/a/g, )}

        <DailyEntryWrap
          title="Wednesday wins with Arrays"
        >
          <p className="App-copy">It is all about Arrays today, I was aiming to return more than one piece of
            information from the Array I created and then display it in different mark-up. This caused an ERROR. </p>

          <p>With the help of <strong> fabulous Brooke</strong> I learned that <strong>my Array needed to be moved above the
            "App extends Component" line of code at the top of the page.</strong></p>

          <p><strong>Then go back and call the array information inside the  "App extends Component"</strong> using <strong>Arrow Functions.</strong></p>

          <h3>The Front End Team at JustGiving</h3>
          <p>There are several members in the Front End Team. let me output the names of who is in the team from my Array.</p>
          <ul>
            {this.getAllFeds()}
          </ul>
          <p>From the Array lets find the team lead and how many people are in the team. <strong>{this.getFirstFed()}</strong> is the team lead. He is always extremly busy. There are <strong>{this.getNumOfFeds()}</strong> people in the team right now.</p>
          <p>What else can I output? Oh, it was the one year JGanniversary for <strong> {this.getNameOfFed()}</strong> yesterday </p>
        </DailyEntryWrap>

        <DailyEntryWrap
          title="Thrilling Thurdsay"
          >
          <p className="App-copy">Started with learning If/else statements today. </p>
          <p>It/s International Womens Day today so I/m fundraising for the charity Solace who help women in need accross London</p>
          <p>To entice my colleuges to donate to my fundraising page I organised a bake sale with some very kind bakers.</p>
          <p>There are 50 cakes for sale, so I wonder how are we doing? I just fond out via the if/else statement that the <strong>
            {this.cakesForSale(50)}</strong> </p>
          <p className="App-copy">Moving on to if else statements more than once in this case 3 times and using comparison operators: </p>
          <p>How is the fundraising page doing today? Lets use <strong>thuthy and falsey combined with if else 3 times</strong> to find out.</p>
            <ul>
             <li>last night <strong>{this.purpleHair(9)}</strong> on my JustGiving page</li>
              <li>At 11am this morning <strong>{this.purpleHair(15)}</strong> on my JustGiving page</li>
              <li>At 3.30pm this afternoon <strong>{this.purpleHair(50)}</strong> </li>
              <li>At 6pm next Friday I would love the target on my page to be reached <strong>{this.purpleHair(100)}</strong></li>
            </ul>
            <h3>How to call functions inside content (or in a varibale)</h3>
            <p> example: this is using a variable: Brooke variable = {brooke}</p>
            <p>{`this is outputting info from inside a string and calling a function ${this.purpleHair(99)}`} </p>
            <p><strong>Note that you cannot have comments in jsx code </strong></p>
         </DailyEntryWrap>

         <DailyEntryWrap
           title="Finally Friday"
         >
           <p className="App-copy">Several things to learn about today.</p>
           <p>Looked into using the pre and code tags which didnt work. (example is in my notes). ****** Kevin and Charly tried to help too!</p>


           <p><strong>So lets look at logical operators</strong> got a bit confused here...</p>
           <ol>
            <li>AND: `&&` used to check if *all expressions that are truthy*.
              <ul>
                <li>`&&` returns the *last expression* if ALL expressions are truthy </li>
                <li>`&&` returns the *first falsey expression* if ANY expressions are falsey </li>
              </ul>
            </li>
            <li>OR: `||` used to check if *at least one expression is truthy*.
              <ul>
                <li>`||` returns the *first truthy expression* if ANY expressions are truthy </li>
                <li>`||` returns the *first truthy expression* if ANY expressions are truthy </li>
              </ul>
            </li>
            <li>NOT: `!` flips truthy and falsey values around. Truthy values becomes `false` while falsey values become `true`.
              <ul>
              <li> think of it as "is not" </li>
              </ul>
            </li>
          </ol>

           <h3>Using the 3 logical operators in an if/else function</h3>
           <p>The weather in England is so unpredictable, it rains so often. In fact I never know if I should take an umbrella with me each morning.</p>
           <p>What is the likelyhood of rain today? Will i need an umberella? </p>
           <ul>
              <li>According to the BBC, {this.Umbrella(3)} </li>
              <li>The Met office says it will rain so {this.Umbrella(25)}  </li>
              <li>But the weather app on my phone tells me, {this.Umbrella(false)} </li>
           </ul>
           <p>With the help of <strong>charming Charly</strong> this afternoon we managed to to output " no umbrella needed today!".
            This was not being executed in my if else (3) function because the previous values were evaluated as "true" and so the incorrect value was output (umbrella required!). </p>
           <p>Found this really confusing.......and spend quite alot of time on it trying to get my head around it. in the end we had to write the code in a way
            i would not have thought of writing it without help.</p>
           <p>{"Finally....this is how to write Apostraphe's in React"} the word needs to be surrounded by curly brackets and "" </p>

            <p><strong>I had a productive week this week after talking to Jas and Kevin about how much I was struggling.....on Monday it felt like I was overwhelmend and sinking on the verge or tears, today i Feel
          more confident and excited about learning JS and React. </strong> </p>
           <p></p>
        </DailyEntryWrap>

        <EntryWrapPurple
          title="Happy Monday 19 March,this is my first react component!"
        >
          <p>Whey hey learing how to create react components today with <strong> Brooke</strong> . This is what I did:</p>
            <ol>
              <li>Brooke explained the difference between components and containers.</li>
              <li>Containers are smart, they fetch and push data.</li>
              <li>Components can be thought of the display or view</li>
              <li>Props are used in components.  </li>
              <li>Props can be anything you pass from one component or container to another</li>
              <li>So here I created two new components:
                <ul>
                  <li>first within the src folder, i created a new folder named "components" </li>
                  <li>second within the components folder I created a new component called "DailyEntryWrap.js" </li>
                  <li>thirdly in DailyEntryWrap import react, import the css file, define your component name: {`class DailyEntryWrap extends Component `} and open and close curly brackets.</li>
                  <li>fourth, within the "render()"  return the markup that I want to duplicate in this case the div with its className:
                    {`render() {
                      return(
                        <div className="App-learning2">
                        </div>
                      );
                    } `}</li>
                  <li>{"then try it out in my .jsx page by adding the name of the component like an html tag (together with a closing tag) <DailyEntryWrap> any children {this.props.children} </<DailyEntryWrap>"} </li>
                  <li>now in order to make the h2 my title as it is a reoccuring pattern, in the DailyEntryWrap.js file  take my h2 markup
                    together with className add {"{this.props.title}"} inside the h2 element.</li>
                  <li>underneath this add {"{this.props.children}"} </li>
                  <li>now in my .jsx page replace the h2 mark with {`<DailyEntryWrap title="Trying Tuesday" >`}  </li>
                  <li>I then went on and created a new component called EntryWrapPurple and i have used EntryWrapPurple to display This
                  box and its content. </li>
                </ul>
              </li>
            </ol>

            <p>I also <strong>shadowed Pete</strong> today, he was working on testing the work he had done on the Thank You page after donating where
            he added a video, the new page was going to be A/B tested</p>

            <p><strong>Today has been a good day for learning React</strong>, I really enjoyed shadowing <strong>Cheeky Pete</strong> and <strong>Beautiful Brooke today</strong>, thank you to you both. </p>
        </EntryWrapPurple>

        <EntryWrapPurple
          title="Tackling Tuesday and Wacky wednesday"
        >
          <p>This morning, I retreived my laptop from Caleb and encountered several problems logging in and accessing my files and emails, unfortunately this wasted
            several hours. I still have probelems signing into onedrive. As Caleb is busy atm {"I'll"} focus getting some more learing in. </p>
            <ul>
              <li>When trying to view this page i found my local server was down.</li>
              <li>Charming Charly showed me how to re-start my server so to do this, in the cmd line go to my folder in the cmd line in this case my-app and
                type nmp run start (this starts the server and builds).</li>
              <li>I have used the component i created yesterday afternoon again today to match the purple hair.  I Think this week will be a purple week.</li>
              <li>ok looking at de-bugging and callbacks now: </li>
              <li>follow these steps:
                <ol>
                  <li>{"Don't panic!"} Regain your composure.</li>
                  <li>Read the error message,  See where the error occurred (look for the line number).</li>
                  <li>Console.log if" {"console.log(x)"}" necessary</li>
                  <li>Fix the errorS</li>
                </ol>
              </li>
            </ul>
          <p>There must be other ways to de-bug errors in JS <strong>Ask the fed team for tips.</strong> </p>
          <p> XXXX TO ADD INFO HERE XX </p>



          <h3>Callbacks</h3>
            <p><strong>Callback</strong>  is a <strong>{`function`}</strong>  that is passed into another <strong>{`function`}</strong>
             as an <strong>{`argument`}</strong>  to be <strong>{`executed later`}</strong></p>
             <p>Developers say you “call” a function when you execute a function, which is why callbacks are named callbacks. </p>

            <p>{`One example of a <strong>function</strong> that accepts a callback is <strong>{"setTimeout"}</strong>.`} </p>
            <p>{`setTimeout"} is a function that executes a function after a certain amount of time has elapsed.`}    </p>

            <p>JS can only do one thing at a time. (This behavior is called <strong>single-threaded</strong>. While doing that one thing,
              {"it can't"} do anything else, even if that one thing means waiting. (This behavior is called <strong>blocking</strong>.
               Other operations are blocked when you wait for something to complete).  </p>
            <p><strong>Asynchronous code</strong>is code that {"doesn't"} follow the top to bottom, left to right fashion. But, when JS sees a line of code that
              tells it to wait, it executes other code while waiting. So Asynchronous JS means that,
              if JS needs to wait for something to complete, it will execute the rest of the tasks given to it while waiting.</p>
              <p>With asynchronous callbacks, we can <strong>give JavaScript instructions in advance without stopping the entire operation</strong>. </p>
              <p>{"That's"} why we use callbacks.</p>

              <ul>
                  <li>{`setTimeout(function, milliseconds)`}</li>
                  <li>Executes a function, after waiting a specified number of milliseconds.</li>
                  <li>{`setInterval(function, milliseconds)`}</li>
                  <li>{`Same as setTimeout(), but repeats the execution of the function continuously.`}</li>
                  <li>{`setTimeout is a specific function of its own use this to trigger or change the state of your page to TRUE or FALSE and then do something...like open a modal, or an alert box etc.`}</li>
               </ul>

            <p>An example of {` setTimeout`}: </p>
            <p>Click "Try the callback". Wait 2 seconds, and the page will dispay an alert box.</p>
            <button onClick={() => { setTimeout(myTestCallback, 2000) }}>Try the callback</button>

            <p>I tried working this out on my own for hours, eventually <strong>charming Charly </strong> helped me....To get it to work was tricky, we had to use a
              fat arrow function within the onClick inside the button ALSO we had to move my actual js function up and outside of class App extends Component ( due to scope, so now this is globaly available to this file).
              I was using vanilla JS on the onClick and so getting error messages that the function was a string... rather than using code the way REACT would understand.</p>

              <p>I'm looking into <strong>adding images to my page</strong>, why does each image need to be imported on the page?</p>
              <p>Since Monday this week I am happy to say I have been helped by: </p>
              <ul className="fed-pic-wrap">
                <li><img src={pete} alt="Pete" /> </li>
                <li><img src={brooke2} alt="Brooke" /> </li>
                <li><img src={charly} alt="Charly" /> </li>
                <li>I am sure this list will grow by the end of the week!</li>
              </ul>

              <h3>Event Loops</h3>
              <p>There are actual <strong>keywords</strong> in the <strong>Event loop</strong></p>
              <ul>
                  <li>Todo-list -> Call stack</li>
                  <li>Waiting-list -> Web apis</li>
                  <li>Mental note -> Event queue</li>
                  <li>But the tutorial stops there and {"doesn't"} explain further.  Googling EventLoops I found that on
                    MDN web docs it was in the <strong>Advanced section</strong>, so I am skipping this.  </li>
               </ul>
        </EntryWrapPurple>

        <EntryWrapPurple
          title="Trying Thurdsay"
        >
          <p>Fistly I haad a quick catch up with Kevin this morning talking about callbacks and event loops.
            Getting back to the course , moving on to the next Module: <strong>The Dom.</strong></p>
          <h3>Selecting an Element</h3>
          <p>First find your ELEMENT, To select an Element in JavaScript, you can use a method called {"querySelector"}. </p>
          <p>Example: {`const element = Element.querySelector(selector)`} </p>
          <p>Element refers to any Element {"you've"} already selected. Selector refers to the id, class, tag or attribute you
            would like to select. These selectors are written the same way as you would write selectors in CSS.:</p>
          <p>or you can use {`document.querySelector('#myId')`} </p>

          <ul>
              <li>To select an element with an id, you prepend it with `#` eg. {`document.querySelector('#myId')`}</li>
              <li>To select an element with a class, you prepend it with `.` eg. {`document.querySelector('.my-class')`}</li>
              <li>To select an element with a tag, you write the tag name directly. eg. {`document.querySelector('p')`}</li>
              <li>To select an element with an attribute, you write the attribute in square (`[]`) brackets. eg. {`document.querySelector('[data-name]')`}</li>
           </ul>
           <p>One thing {"that's"} unique about `querySelector` is that it selects only one Element. This would be the first element that matches your selector.</p>

           <h3>Select an Element within another Element.</h3>
           <p>{`querySelector`} searches within an Element for an element that matches your given selector. If you use {`document.querySelector`},
           {"you'll"} search the entire HTML. If you use {`Element.querySelector`}, {"you'll"} only search elements that are present within your given Element. </p>
           <p>You can  get {`.inner-item`} by first performing a search for the outer Element, then search for the {`.inner-item`} through this outer Element.
              So if you had a nested DIV the class of the outer div is called container and  the class of nested div is called inner-item, you can wirite the following: </p>
           <p>{"{`const myVariable1 = document.querySelector('.container')`}"}</p>
           <p>{"{`const myVariable2 = myVariable1.querySelector('.inner-item')`}"} </p>
           <p>I completed the lesson and then spent <strong>several hours trying to create an example in React</strong>. However after getting error after error Cheeky Pete came and helped me,
            he explained that <strong>what i had learnt in vanilla JS is not the way you would work in REACT</strong>. So Pete advised me to keep away from React for the whole of the Dom chapter....
            as it would be too confusing and use js bin if need be.</p>
        </EntryWrapPurple>

        <EntryWrapPurple
          title="Freaky friday"
        >
          <p>Fistly I haad a quick one to one catch up with Kevin on what i have been learning, my progress etc.</p>
          <p>Then lost a fair amount of time as my laptop installed BB updates and now i have issues loggin into one drive etc.</p>
          <h3>Cont working on the dom chapter again in JS only</h3>
          <p>some notes on {`Array.forEach`}: The "forEach" method takes in a callback. This callback gives you three arguments:
            {`array.forEach((currentValue, index, array) => { Your loop here})`} </p>
          <ul>
            <li> "currentValue" refers to the current item in the array.</li>
            <li>"index" is the position of the item within the array. The first item has an index of 0; the second, an index of 1; and so on.</li>
            <li> "array" refers to the array that {"you're"} looping over. You {"don't"} need this argument most of the time.</li>
            <li>When {"you're"} looping over "arrays",  {"you're"}  mostly concerned only with the "currentValue". You can safely omit the other arguments if you {"don't"}  need them.</li>
          </ul>

          <p>{"Let's"} say you have a fruit basket that contains the following fruits. You can use the `forEach` method to loop over each item. </p>

          <ul>
              <li>The array eg. {`const fruitBasket = ['banana', 'pear', 'guava']`}</li>
              <li>The forEach loop. eg. {`fruitBasket.forEach(function(fruit) { console.log(fruit);})`} </li>
              <li>with arrow functions, you can reduce a `forEach` statement to a one-liner. eg. {`fruitBasket.forEach(fruit => console.log(fruit))`}</li>
           </ul>

           <h3>querySelectorAll</h3>
           <p>"querySelectorAll" lets you select multiple elements at the same time.
              The syntax is similar to "querySelector"  eg. {`const NodeList = Element.querySelectorAll(selector)`}</p>
           <p>So for example to select all 3 Paragraphs in your page (as per below) you would use  {`const paragraphs = document.querySelectorAll('p')`} </p>


           <p>Paragraph 1 example</p>
           <p>Paragraph 2 example</p>
           <p>Paragraph 3 example</p>
           <p>The only difference here is that "querySelectorAll" returns a "NodeList" instead of an "Element".
            A NodeList is a list of Nodes. An Element is a specific type of Node. So, you if you "querySelectorAll" , the returned Nodelist is a list of Elements.</p>


            <p>In the following example, if {"you've"} already selected ".list" with "querySelector", you can get all list items with "children".</p>
            <ul class="list">
             <li><a href="#">Link 1</a></li>
             <li><a href="#">Link 2</a></li>
             <li><a href="#">Link 3</a></li>
             <li><a href="#">Link 4</a></li>
             <li><a href="#">Link 5</a></li>
           </ul>

            <p>eg. the JS would be: </p>
            <p>{`const list = document.querySelector('.list')`}</p>
            <p>{`const listItems = list.children`}</p>
            <p>{`console.log(listItems)`}</p>

            <h3>Selecting a specific child</h3>
            <p>Both NodeList (from `querySelectorAll`) and HTML Collections (from `children`)
             are lists that behave similarly to arrays. You can select the nth-item in the list just like how you select the nth-item in arrays. </p>
            <p>eg. the JS for this in regards to the html list above with the class of .list: </p>
            <p>{`const listItems = document.querySelectorAll('li')`}</p>

            <p>{`const firstItem = listItems[0]`}</p>
            <p>{`const secondItem = listItems[1]`}</p>
            <p>{`const thirdItem = listItems[2]`}</p>
            <p>{`const fourthItem = listItems[3]`}</p>
            <p>{`const fifthItem = listItems[4]`}</p>

            <p>{`console.log(firstItem)`}</p>
            <p>{`console.log(secondItem)`}</p>
            <p>{`console.log(thirdItem)`}</p>
            <p>{`console.log(fourthItem)`}</p>
            <p>{`console.log(fifthItem)`}</p>


               <p><strong>Learned so much this week in JS and then managed to use React to demonstrate it.
               Had lots of help which made so much difference, I felt like this was a really good week for learning. </strong> </p>
        </EntryWrapPurple>

        <DailyEntryWrap
          title="Monday madness 26 March"
        >
          <p>Sunny Monday! Finally Feels like spring today.  <strong>Had a good one to one catch up with Kevin on Friday,
            received positive feedback which was great</strong>. Also Had a <strong>good quick catch up with Jas on</strong> what i have been working on. I Mentioned that the team have been really
            great in supporting me so far.
           </p>

           <p>Re-capped on thursday and Friday JS lessons today and tried out examples using console.log.  </p>

            <p>Tried to create a new component as per the React tutorial docs, which is different to thhe way Brooke showed me.</p>
              This caused a compile error.

             <p><strong>I was off work the rest of the week AL for 3 days then friday was bank holiday. Monday 2nd April was bank holiday, then 3rd  and 4th april AL. </strong> </p>

      </DailyEntryWrap>

      <DailyEntryWrap
        title="Thusday re-cap 5 April"
      >
        <p><strong>so...only two days this week</strong>, re-capping on work done before easter and AL then.. frontline meeting plus started next chapter in js.
        Aksed Pete to sanity check the chapter before starting it and he advised to learn the vanilla js but not to try to re-createdin react as it is completley different.</p>
      </DailyEntryWrap>

      <DailyEntryWrap
        title="Friday events 6, 9, 13, 16 April"
      >
        <p>Started EVENTS section in vanilla JS</p>

        <p>Each available event has an event handler, which is a block of code (usually a user-defined JavaScript function) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are registering an event handler. Note that event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening. for example, onClick, focus, blur, scroll, copy, paste, keypress, mouseover drag and drop, load,
        </p>

        <p><strong>10th and 11th April AL, 12th Sick.</strong>  then back to Events 13th and 16th April. (JS ONLY) found this section difficult and was advised by Brooke and Kevin to come back to it
        at a later stage. </p>
      </DailyEntryWrap>


      <DailyEntryWrap
        title="Tuesday 17th April"
      >
        <p><strong>Started module 5 - building real components in vanilla JS</strong></p>
          <p>Exciting, i have been working hard to get to start this module! </p>

          <p>Today Started learning how to think like a programmer....</p>
          <p>Also had to go back to Events as i cannot move on with the lessons without knowing it... </p>
          <p> </p>


      </DailyEntryWrap>

     <DailyEntryWrap
        title="wednesday with Pete 18th April"
      >
        <p><strong>worked with Pete today.  </strong></p>
         
          <p>We started by cloning the toolkit again, then trying to clone the version Pete has created....there were bugs and issues here, Pete had issues too.</p>
          <p>So after trying to work this out, we decided that i should start coding the js components, which i did, and ALSO re coded the js in the first and second example myself
            and made it simpleer to understand.  The examples are a bit confusing, adding in aspects that I haven't learnt yet. So googled and asked questions. </p>
            <p>Exciting, i have been working hard to get to start coding this module! </p>
          <p> </p>


      </DailyEntryWrap>



      </div>
    );
  }
}

export default App;
