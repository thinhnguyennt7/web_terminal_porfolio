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
    'Hi! I am software engineer with background in web development and mobile application. I am currently junior student at Georgia Insitute of Technology, majoring in Computer Science and specializing in threads devices and info internetworks.</a><br/><br/>' +
    'I am really passionate about computer science and technology and want to contribute myself to this great technology age!</a><br/><br/>' + 
    'For developers, please press ' + '<span ' + this.green + '>~</span>' + ' on this page to use the terminal to navigate this website.<br/><br/>' +
    '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> ^*_*^___^*_*^<br/><br/>';
    
    this.test = '<strong><ins>Hobbies</ins></strong>: I enjoy programming, math, soccer, travelling, and to explore a new thing around the world<br/><br/>'
    '<strong><ins>Technical Languagues</ins></strong>: Java; Swift; Python; Javascript; Typescipt, Shell<br/><br/>' +
    '<strong><ins>Technologies</ins></strong>: Git, Node.js, OracleDB, Flask, Angular <br/><br/>' +
    'Find my resume here <a href="/data/thinhnguyen.pdf">Resume</a><br/><br/>' +
    'Contact me at <a href="mailto:tnntech@gatech.edu">tnntech@gatech.edu</a>!<br/>' +
    '<span id="a">thinhnguyen@ubuntu</span>:<span id="b">/</span><span id="c">~</span>';
  }

  ngOnInit() {

    this.typedIt = new Typed('#console_log', {
        strings: [this.text],
        typeSpeed: 1,
        startDelay: 300
    });
  }
}
