var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'H stands in HTML',
                options: ['hyper', 'text', 'model', 'hipo'],
                answer:1
            },
            {
                q:'C stands in CSS',
                options: ['cascading', 'coil', 'Corona', 'count'],
                answer:1
            }, 
            {
                q:'Extention of HTML',
                options: ['.html', '.js', '.css', '.c'],
                answer:1
            },
            {
                q:'Extention of C',
                options: ['.c', '.cpp', '.htm', '.java'],
                answer:1
            },
            {
                q:'Extention of java',
                options: ['.c', '.cpp', '.htm', '.java'],
                answer:4
            },
            {
                q:'Extention of c++',
                options: ['.c', '.cpp', '.htm', '.java'],
                answer:2
            }, 
            {
                q:'Extention of php',
                options: ['.c', '.php', '.htm', '.java'],
                answer:2
            },
            {
                q:'MMMUT-Gorakhpur is',
                options: ['University', 'school', 'gardeen', 'park'],
                answer:1
            },  
            {
                q:'Indias one Month Festival',
                options: ['Diwali', 'Eid', 'Dushahra', 'IPL'],
                answer:4
            },
            {
                q:'RCB Captain',
                options: ['Virat Kohli', 'ABD', 'Rohit', 'Dhoni'],
                answer:1
            }                           
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}