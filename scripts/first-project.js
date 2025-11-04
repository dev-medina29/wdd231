const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const current_year= document.querySelector('.current-time');
current_year.textContent= `Last modification ${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`;

// ############################ Display functinnality ####################
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


// ########################  Clicks  ######################################
let click1=document.querySelector("#click1");
let click2=document.querySelector("#click2");
let click3=document.querySelector("#click3");
let text=document.querySelector(".unique");
click1.addEventListener('click',()=>{
    if (document.querySelector("#final-section")==null){
        let credit= courses.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        courses.forEach(course =>{
        let my_try=document.createElement("a");
        if (course.completed==true){
            my_try.setAttribute("id","completed");
            my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo); 
        }
        else{
            my_try.innerHTML=`${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo);

        }
        })
    }
    else{
        document.querySelector("#final-section").remove();
        const pouf=document.querySelector(".unique");
        pouf.remove();
        let credit= courses.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        courses.forEach(course =>{
        let my_try=document.createElement("a");
        if (course.completed==true){
            my_try.setAttribute("id","completed");
            my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo); 
        }
        else{
            my_try.innerHTML=`${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo);

        }
        })
    }
    
})

click2.addEventListener('click', ()=>{
    let cse=courses.filter(course=> course.subject=="CSE");
    // let list2=document.getElementById("section2").children;
    if (document.querySelector("#final-section")==null){
        let credit= cse.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        cse.forEach(course =>{
            let my_try=document.createElement("a");
            if (course.completed==true){
                my_try.setAttribute("id","completed");
                my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
                yo.appendChild(my_try);
                it.appendChild(yo); 
            }
            else{
                my_try.innerHTML=`${course.subject} ${course.number}`;
                yo.appendChild(my_try);
                it.appendChild(yo);

            }
            })
    }
    else{
        document.querySelector("#final-section").remove();
        const pouf=document.querySelector(".unique");
        pouf.remove();
        let credit= cse.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        cse.forEach(course =>{
        let my_try=document.createElement("a");
        if (course.completed==true){
            my_try.setAttribute("id","completed");
            my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo); 
        }
        else{
            my_try.innerHTML=`${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo);

        }
        })
    }
    
})

click3.addEventListener('click', ()=>{
    let wdd=courses.filter(course=> course.subject=="WDD");
    // let list2=document.getElementById("section2").children;
    if (document.querySelector("#final-section")==null){
        let credit= wdd.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        wdd.forEach(course =>{
        let my_try=document.createElement("a");
        if (course.completed==true){
            my_try.setAttribute("id","completed");
            my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo); 
        }
        else{
            my_try.innerHTML=`${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo);

        }
        })
    }
    else{
        document.querySelector("#final-section").remove();
        const pouf=document.querySelector(".unique");
        pouf.remove();
        let credit= wdd.reduce((sum,currentValue)=>sum+currentValue.credits,0);
        let text=document.createElement("p");
        text.setAttribute("class", "unique");
        text.innerHTML=`The total credit for the course above is ${credit} `;
        const it=document.querySelector("#lala");
        it.appendChild(text);
        let yo=document.createElement("div");
        yo.setAttribute("id", "final-section");
        wdd.forEach(course =>{
        let my_try=document.createElement("a");
        if (course.completed==true){
            my_try.setAttribute("id","completed");
            my_try.innerHTML=`\u2713 ${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo); 
        }
        else{
            my_try.innerHTML=`${course.subject} ${course.number}`;
            yo.appendChild(my_try);
            it.appendChild(yo);
        }
        })
    }
})
// ################# HAMBURGER ###################
let menu = document.querySelector('#ham');
let navigation = document.querySelector('.navigation');
menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    navigation.classList.toggle('open');
});