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
    red: string = 'style="color: #FF0000;"';
    blue: string = 'style="color: #0bc;"';
    schoolNameStyle: string = 'style="color: #FFEA00; text-transform: uppercase;"';
    nameStyle: string = 'style="font-size: 2em; text-transform: uppercase;"';

  constructor() {
    this.text = `
      <span ${this.green}>thinhnguyen@ubuntu:</span><span ${this.blue}>~</span><span ${this.red}> chmod u+x execute</span><br/><br/>
      <span ${this.green}>thinhnguyen@ubuntu:</span><span ${this.blue}>~</span><span ${this.red}> ./execute</span><br/><br/>
      <p ${this.nameStyle}>Thinh N Nguyen</p>
      Hello world! I am graduating this semester with Bachelor of Science in Computer Science from<span ${this.schoolNameStyle}> Georgia Institute of Technology</span>. I am specializing in threads media and info inter-networks.</a><br/><br/>
      I am really passionate about computer science, technologies and want to contribute myself into this great technology century.</a><br/><br/>
      <strong><span ${this.green}>Back-end</span></strong>: Python, Node/Express, Java, Typescripts, Swift, C#, Bash/Shell<br/><br/>
      <strong><span ${this.green}>Front-end</span></strong>: Angular4-8, Redux/React, React-Native, HTML5, CSS/SCSS, Flask, D3.js, Charts.js<br/><br/>
      <strong><span ${this.green}>Devops</span></strong>: Heroku, Github/Gitlab/BitBucket, Docker, Jenkins, Redis, Apigee, AWS, GCP, Kubernetes/K3s, Istio<br/><br/>
      <strong><span ${this.green}>Database</span></strong>: MySQL, MongoDB, PostgreSQL, Firebase, AuroraDB, DynamoDB, Sequelize<br/><br/>
      <strong><span ${this.green}>Unit Test</span></strong>: Junit, Supertest, Karma, Protractor<br/><br/>
      <strong><span ${this.green}>Concepts</span></strong>: Algorithms, Data Structures, Problems Solving, Web Development, Mobile Development, Chatbot<br/><br/>
      Want my resume: <a ${this.blue} href="https://drive.google.com/open?id=1_YAfSfdQ9NHRpxSGqTuJN4tspmvH-oSE" target="_blank">Resume</a><br/><br/>
      Github: <a ${this.blue} href="https://github.com/thinhnguyennt7" target="_blank">Profile</a><br/><br/>
      Linkedin: <a ${this.blue} href="https://www.linkedin.com/in/thinhnguyennt9/" target="_blank">Profile</a><br/><br/>
      Contact me at: <a ${this.blue} href="mailto:thinhnguyennt9@gmail.com">thinhnguyennt9@gmail.com</a><br/><br/>
      <span ${this.green}>thinhnguyen@ubuntu:</span><span ${this.blue}>~</span><span ${this.red}>  THE END!</span>
    `;
  }

  ngOnInit() {
    this.typedIt = new Typed('#console_log', {
        strings: [this.text],
        typeSpeed: 1,
        startDelay: 300
    });
  }
}
