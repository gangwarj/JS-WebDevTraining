function Course(id, title, image, duration, likes){
    this.id = id || 'no-id-associated';
    this.title = title || 'Untitled';
    this.image = image || 'NoImage';
    this.duration = duration || 0;
    this.likes = likes || 0;

    this.likeIt = function(){
        this.likes = +this.likes + 1;
    }
}

var courses = [];
course = new Course(1, 'Angular', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F1200px-Angular_full_color_logo.svg.png&f=1', '5', '100');
courses.push(course);
course = new Course(2, 'Node', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd9%2FNode.js_logo.svg%2F1200px-Node.js_logo.svg.png&f=1', '3', '130');
courses.push(course);
course = new Course(3, 'Redux', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freactjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1', '2', '300');
courses.push(course);
course = new Course(4, '.NET', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fadexin.com%2Fwp-content%2Fuploads%2F2016%2F08%2Fnet-logo.png&f=1', '2', '100');
courses.push(course);
course = new Course(5, 'Java', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ophtek.com%2Fwp-content%2Fuploads%2F2014%2F08%2Fjava_tech.jpg&f=1', '8', '400');
courses.push(course);
console.log(JSON.stringify(courses));

var parentDiv = document.getElementById('coursesContainer');

var xmlHttpObj = new XMLHttpRequest();
        // This temp link may not work sometimes, try getting a new API for the data
        xmlHttpObj.open("GET", "https://api.myjson.com/bins/hw8ci"); // configuring the AJAX call
        xmlHttpObj.send(); //make an AJAX call
        xmlHttpObj.onreadystatechange = function(){
            if(xmlHttpObj.readyState == 4 && xmlHttpObj.status == 200){
                //update the UI
                var coursesR = JSON.parse(xmlHttpObj.responseText);
                console.log(coursesR);
                createUIForCourses(courses);
            }
        }


function createUIForCourses(courses, parentDiv){
    parentDiv = document.getElementById('coursesContainer');
    for(var index of Object.keys(courses)){
        var course = courses[index];
        var title = course.title;
        var image = course.image;
        var duration = course.duration;
        var likes = course.likes;

        var courseDiv = document.createElement('div');
        courseDiv.classList.add('col-md-3');
        courseDiv.classList.add('courseDiv');

        var tiltePara = document.createElement('p');
        tiltePara.innerHTML = "<b>" + title + "</b>";
        courseDiv.append(tiltePara);

        var img = document.createElement('img');
        img.src = image;
        img.width = "200";
        img.height = "200";
        courseDiv.append(img);

        var durationPara = document.createElement('p');
        durationPara.innerHTML = "<b>Duration: " + duration + " Days</b>";
        courseDiv.append(durationPara);

        var likeBtn = document.createElement('button');
        likeBtn.className = 'btn btn-primary likeBtn';

        var likeBtns = document.createElement('span');
        likeBtns.className = "glyphicon glyphicon-thumbs-up";
        likeBtn.appendChild(likeBtns);

        var likeBtnp = document.createElement('span');
        likeBtnp.id = "likesCount";
        likeBtnp.innerHTML = likes;
        likeBtn.appendChild(likeBtnp);
        
        courseDiv.append(likeBtn)
        likeBtn.addEventListener('click', likeCourse.bind(null, course));

        var deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn btn-danger';
        var deleteBtns = document.createElement('span');
        deleteBtns.className = "glyphicon glyphicon-trash";
        deleteBtn.append(deleteBtns);

        courseDiv.append(deleteBtn)
        deleteBtn.addEventListener('click', deleteCourse);           

        parentDiv.appendChild(courseDiv);
    }
}
// createUIForCourses(courses);

function deleteCourse(){
    var consent = confirm('ARE YOU SURE ?');
    if(consent){        
        if(event.target.nodeName == "SPAN"){        
            event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement)
        } else if( event.target.nodeName == "BUTTON" ){
            event.target.parentElement.parentElement.removeChild(event.target.parentElement)
        }
    }
}

function likeCourse(course){
    // console.log(event.target);
    
    if(event.target.id == "likesCount"){
        course.likeIt();
        event.target.textContent = parseInt(event.target.textContent) + 1
    }
}