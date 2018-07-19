import { Component, OnInit, OnDestroy } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { Subscription } from 'rxjs';
import { TerminalInterface } from './terminal';
import { CommandName } from 'selenium-webdriver';
// import { ca }

@Component({
	selector: 'app-terminal',
	templateUrl: './terminal.component.html',
	styleUrls: ['./terminal.component.css'],
	providers: [TerminalService]
})
export class TerminalComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	ifFail: boolean;
	response: any;
	Resume: string;
	AboutMe: string[] = [
		'Thinh_Nguyen-Resume.pdf',
		'Contact.txt',
		'Resume.txt',
		'Summary.txt'
	];
	Projects: string[] = [
		'Lets Kicks Chatbot.txt',
		'NailSpa Chatbot.txt',
		'Schedule Generator.txt',
		'Messager Schedule.txt',
		'Todo List.txt',
		'iOS Calculator.txt',
		'Final_Exam Grade Prediction.txt'
	];
	Welcome: string = "";
	Experience: string;
	folder: any[] = ['AboutMe', 'Projects', 'Welcome.txt'];
	currFolder: any[];
	Path: string = 'thinhnguyen@ubuntu:/~ ';

// 	My name is Thinh Nguyen, I'm a Computer Science and Statistics major with an Economics Minor at University of Waterloo
 
// I'm experienced in C++/Linux development from my internships writing clean and scalable code producing high performant applications. My expertise lies in distributed systems, especially in in-memory storage systems or databases.
//  In terms of software, I am interested in developing and scaling infrastructure.My specialties and interest include:
// Distributed Systems, Unix Network Programming, Concurrency, Data Structure (C++ STL)
// When not at work, I enjoy Web Development creating unique user experiences like the one you are seeing now. I love tapping into my creativity and create unorthodox design. I pride myself in finding unique ways of representing information
//  and media.
// I have experience in finance and I am interested in statistics. I have a good understanding in Equity Derivatives and their valuation models. I was also exposed to Option Market Making, but I am more interested in learning quantitative a
// pproaches to capturing Alpha.
// Finally, I want to improve my leadership and managerial skills, hence I am seeking PM opportunities and data science roles relating to growth, retention, and user behaviour.




// ********************************************************************************
//                                   Thinh Nguyen
// tnntech@gatech.edu                                          678-817-2100
 
// 3B Honours Mathematics - Computer Science Major
// ********************************************************************************
 
//    Technical Skills: Python, Unix/Linux, Bash, Swift, Java, Javascript
//    Web & Design    : HTML/CSS, Flask, MySQL, Adobe Photoshop, Sketch
//	  Frameworks	  : Nodejs, Angular
 
 
// ***************
// Work Experience
// ***************
//    ___________________________________________________________________________
//    LinkedIn
//    Software Engineer Intern - Graph Team
//       - Implemented features in a new generation in memory distributed graph 
//         database in C++ 
//    ___________________________________________________________________________
//    Macy's System of Technology
//    Financial Technology Summer Associate - Software Engineer
//       - Designed and developed a high performant multithreaded WebSocket/Web 
//         server in C++ and its web interface in Javascript serving multiple 
//         browser clients 
//    ___________________________________________________________________________
//    Vngs
//    Hardware repair - Technician Repair
//       - Developed and improved option modelling tools for equity
//         derivatives traders in C++ and VBA
 
// ********
// Research
// ********
 
//     VIP: (Virtual Integrate Pr)
 
// *********
// Education
// *********
 
//    Georgia Insitute of Technology
//       - Threads: Info Network and Devices


// E-mail: tnntech@gatech.edu
 
// LinkedIn: https://www.linkedin.com/in/thinhnguyennt9/
 
// Facebook: https://www.facebook.com/ThinhNguyenryan
 
// GitHub: https://github.com/thinhnguyennt7

	constructor(private terminalService: TerminalService) {
		this.terminalService.commandHandler.subscribe(command => {

				// console.log(this.terminalService.commandHandler);
				
				console.log("Current using command: ", command);

				// Detemine which current path are and get the current folder items
				switch (this.Path) {
					case ('thinhnguyen@ubuntu:/~ '): {
						this.currFolder = this.folder;
					}
					case ('thinhnguyen@ubuntu:/~AboutMe/ '): {
						this.currFolder = this.AboutMe;
					}
					case ('thinhnguyen@ubuntu:/~Projects/ '): {
						this.currFolder = this.Projects;
					}
				}

				// Commands line methods
				if (command) {

					// Reset everytime
					this.response = '';

					// cd Command
					if (command.includes('cd')) {
						if (command === 'cd') {
							this.response = '';
						} 

						else if (command === 'cd ..') {
							if (this.Path !== 'thinhnguyen@ubuntu:/~ ') {
								// TODO
							}
						}

						else if (command === 'cd ~') {
							if (this.Path !== 'thinhnguyen@ubuntu:/~ ') {
								this.Path = 'thinhnguyen@ubuntu:/~ ';
							}
						}

						else {
							let path = command.substring(3, command.length).toUpperCase();
							console.log("The File name: ", path);
							for (var element in this.folder) {
								if (path === this.folder[element].toUpperCase()) {
									this.Path = 'thinhnguyen@ubuntu:/~' + this.folder[element] + '/';
									console.log(this.Path);
									break;
								} else {
									this.response = command + ": No such directory";
									break;
								}
							}
						}	
					}

					// date command
					else if (command === 'date') {
						this.response = new Date().toDateString();
					}

					// ls command
					else if (command === 'ls') {
						if (this.Path === 'thinhnguyen@ubuntu:/~ ') {
							this.response = this.folder[0] + '\n';
							for (var ele = 1; ele < this.folder.length; ele++) {
								console.log(this.folder[ele])
								this.response += this.folder[ele] + '\n';
							}
						}

						else if (this.Path === 'thinhnguyen@ubuntu:/~AboutMe/ ') {
							this.response = this.AboutMe[0] + '\n';
							for (var ele = 1; ele < this.AboutMe.length; ele ++) {
								console.log(this.AboutMe[ele]);
								this.response += this.AboutMe[ele] + '\n';
							}
						}

						else if (this.Path === 'thinhnguyen@ubuntu:/~Projects/ ') {
							this.response = this.Projects[0] + '\n';
							for (var ele = 1; ele < this.Projects.length; ele ++) {
								console.log(this.Projects[ele]);
								this.response += this.Projects[ele] + '\n';
							}
						}
					}

					// cat command
					else if (command.includes('cat')) {
						// Extention with txt
						if (command.includes(".txt")) {
							let fileTXT = command.substring(4, command.length);
							for (var element in this.currFolder) {
								if (fileTXT === element) {

									// TODO
									break;
								} else {
									this.response = command + ": No such file";
								}
							}
						} else {
							this.response = command + " : No such file";
						}
					}

					// help command
					else if (command === 'help') {
						this.response = "The following command able to use are: " + "cd, " + "ls, " + "open, " + "cat, " + "clear, " + "pwd, " + "date.";
					}

					// open command
					else if (command.includes('open')) {
						// Extension with pdf
						if (command.includes('.pdf')) {
							let filePDF = command.substring(5, command.length);
							for (var idx in this.currFolder) {
								if (filePDF === idx) {

									// TODO
									break;
								} else {
									this.response = command + " : No such file";
								}
							}
						} else {
							this.response = command + " : No such file";
						}
					}

					// pwd command
					else if (command === 'pwd') {
						this.response = this.Path;
					}

					// command not found
					else {
						this.response = 'Command not found: ' + command;
					}
				}

				// Send respone to console
				this.terminalService.sendResponse(this.response);
		});
	}

	ngOnDestroy() {
		if(this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	ngOnInit() {}
}