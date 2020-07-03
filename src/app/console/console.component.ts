import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  // styleUrls: ['./console.component.css'],
  styles: [
    '#console_log { font-family: courier, monospace; font-size: 18px; color: #fff; width: 900px; }',
  ],
})

export class ConsoleComponent implements OnInit {
    typedIt: any;
    executing: string;
    text: string;
    green: string = 'style="color: #0f0;"';
    red: string = 'style="color: #FF0000;"';
    blue: string = 'style="color: #0bc;"';
    schoolNameStyle: string = 'style="color: yellow; text-transform: uppercase;"';
    nameStyle: string = `
      style="font-size: 2em; text-transform: uppercase;";
    `;
    workStyle: string = `
      style="font-size: 18px;";
    `;
    yellow: string = 'style="color: yellow;"';
    center: string = 'style="text-align: center"';

  constructor() {

    this.executing = `
      <span ${this.green}>thinh@ubuntu </span><span ${this.blue}>~</span><span ${this.red}> chmod execute</span><br/><br/>
      <span ${this.green}>thinh@ubuntu </span><span ${this.blue}>~</span><span ${this.red}> ./execute</span><br/><br/>^500
      <div ${this.center}>
        <span>Processing </span>^1000
        <span style="color: red">. </span>^1000
        <span style="color: green">. </span>^1000
        <span style="color: yellow">. </span>^100
        ^1500
      </div>
    `;

    this.text = `
      <p ${this.nameStyle}>Thinh N Nguyen</p><strong><span ${this.workStyle}>Software Engineer @ <strong ${this.yellow}>Amazon</strong></span></strong></br></br><hr>
      HELLO WORLD! I graduated from<span ${this.schoolNameStyle}> Georgia Institute of Technology</span> with Bachelor of Science in Computer Science. I am really passionate about computer science, technologies and want to contribute myself into this great technology century.</a><br/><br/>
      <strong><span ${this.green}>Back-end</span></strong>: Python, Node/Express, Java, Typescripts, Swift, C#, Go, Bash/Shell<br/><br/>
      <strong><span ${this.green}>Front-end</span></strong>: Angular4-8, Redux/React, React-Native, HTML5, CSS/SCSS, Flask, D3.js, Charts.js<br/><br/>
      <strong><span ${this.green}>Devops</span></strong>: Heroku, Github/Gitlab/BitBucket, Docker, Jenkins, Redis, Apigee, AWS, GCP, Kubernetes/K3s, Istio<br/><br/>
      <strong><span ${this.green}>Database</span></strong>: MySQL, MongoDB, PostgreSQL, Firebase, AuroraDB, DynamoDB, Sequelize<br/><br/>
      <strong><span ${this.green}>Unit Test</span></strong>: Junit, Supertest, Karma, Protractor<br/><br/>
      <strong><span ${this.green}>Concepts</span></strong>: Algorithms, Data Structures, Systems, Problems Solving, Web/Mobile Development, Chatbot<br/><br/>
      Resume: <a ${this.blue} href="https://drive.google.com/open?id=1_YAfSfdQ9NHRpxSGqTuJN4tspmvH-oSE" target="_blank">View</a><br/><br/>
      Github: <a ${this.blue} href="https://github.com/thinhnguyennt7" target="_blank">Profile</a><br/><br/>
      LinkedIn: <a ${this.blue} href="https://www.linkedin.com/in/thinhnguyennt9/" target="_blank">Profile</a><br/><br/>
      Email: <a ${this.blue} href="mailto:thinhnguyennt9@gmail.com">thinhnguyennt9@gmail.com</a><br/><br/>
      <span ${this.green}>thinh@ubuntu </span><span ${this.blue}>~</span><span ${this.red}>  THE END!</span>
    `;
  }

  ngOnInit() {
    this.typedIt = new Typed('#console_log', {
        strings: [
          this.executing,
          this.text
        ],
        typeSpeed: 3,
        backSpeed: 0,
        startDelay: 350,
        showCursor: true,
        smartBackspace: true,
    });
  }
}
