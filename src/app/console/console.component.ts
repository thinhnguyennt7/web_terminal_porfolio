import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
    typedIt: any;
    text: string;
    test: any;
    green: string = 'style="color: #0f0;"';
    red: string = 'style="color: #ff0096;"';
    blue: string = 'style="color: #0bc;"';

  constructor() {

    this.text = '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> chmod u+x execute<br/><br/>' +
    '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> ./execute<br/><br/>' +
    '<p style="font-size: 2em">Thinh N Nguyen</p><br/>' +
    'Hello world! I am third year student and studying computer science at Georgia Insitute of Technology. I am specializing in threads media and info internetworks.</a><br/><br/>' +
    'I am really passionate about computer science, technologies and want to contribute myself into this great technology century.</a><br/><br/>' +
    '<strong>' + '<span ' + this.green + '>Technical Languagues</span></strong>: Python, JavaScript, Java, HTML, CSS, Swift, Typescipt, Shell, SQL, NoSQL<br/><br/>' +
    '<strong>' + '<span ' + this.green + '>Technologies</span></strong>: Git, Node.js, Angular, EmberJS, Express.js, Flask, MongoDB, OracleDB, Firebase, Heroku, Dialogflow, Jenkins, Docker <br/><br/>' +
    '<strong> ' + '<span ' + this.green + '>Concepts</span></strong>: Algorithmns, Data Strucuturs, Problems Solving, Web Development, Mobile Development<br/><br/>' +
    'Want my resume:<a href="https://drive.google.com/open?id=1YSuEg21i5_p5hfiMVQJ3zzyrqf7mBubv" target="_blank">Resume</a><br/><br/>' +
    'Github: <a href="https://github.com/thinhnguyennt7" target="_blank">Visit here!!!</a><br/><br/>' +
    'Contact me at:<a href="mailto:thinhnguyennt9@gmail.com">thinhnguyennt9@gmail.com</a><br/><br/>' +
    '<span id="a" '+ this.green + '>thinhnguyen@ubuntu</span>:<span id="b" ' + this.red + '>/</span><span id="c" ' + this.blue + '>~</span>' +
    ' For developers, please press ' + '<span ' + this.green + '>~</span>' + ' on this page to use the terminal to navigate this website.<br/><br/>' +
    '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span><br/><br/>';
  }

  ngOnInit() {

    this.typedIt = new Typed('#console_log', {
        strings: [this.text],
        typeSpeed: 1,
        startDelay: 300
    });
  }
}
