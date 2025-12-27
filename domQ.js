// DAY 3 ----- 27 Dec 

// 1  Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
// 2 Write code to get 1st H1 element from a webpage using DOM
// 3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// 4 Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
// 5  Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text



//q1
function change_text(){
    let ele= document.getElementsByClassName("chnge");
    ele[0].innerText = "Mern Stack";
}


//q2
function first_h1() {
    let ele= document.getElementsByTagName("h1")[0];
    ele.style.color ="pink";
}
first_h1();


//q3
function clock(){
    let date = new Date();
    let h= date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";

      if(h >= 12){
        ampm = "PM";
        if(h > 12) h = h - 12;
    }

    if(h === 0) h = 12;
    let time = h + ":" + m  + " : " + s + " " + ampm;;
    setTimeout(()=>{
        clock();
    },1000 );
    let ele = document.getElementById("clock");
    ele.innerText = time;
}
clock();

//q4
function change() {
    let ele = document.getElementsByTagName("h2");
    ele[0].innerText ="Welcome to Elevation academy"
}


//q5
function hide(){
    let ele = document.getElementsByClassName("q5");
    if(ele[0].style.visibility==="hidden"){
       ele[0].style.visibility = "visible";
    }
    else{
        ele[0].style.visibility ="hidden";
    }
}