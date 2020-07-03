import { Component, OnInit, OnDestroy } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { Subscription } from 'rxjs';
// import { TerminalInterface } from './terminal';

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
	Resume: string = '';
	AboutMe: string = 'Hello world! I am currently pursing my undergraduate at Georgia Tech, I am third years of computer science and my concentration and threads are Information networking and media. I am really passionate about computer science, technologies and want to contribute myself into this great technology century. I will be graduating on May 2020 which is next summer.';
	Experience: string = 'On summer 2018, I had a chance to intern at Macy’s System and Technology where I worked under infrastructure team. At Macy’s our infrastructure team split into 2 smaller team one is for Devops and I worked for the other one which is web team. I worked on both backend and frontend during my internship. I was helping my team to built an internal tool that allow other teams inside Macy’s could submit servers request to build whenever needed by using IBM soft layer Cloud. One of the task that I has done was to write python scripts that query out all the servers that has been built from out database to analyze and determine which servers was successfully built and still valid to use and which one not. \n'  + ' Furthermore, I am currently working on a research project at Georgia Tech. The project that I am working on is to analyze the data set from our GT server machine and return back a queue follow with the hostserver name that has the least jobs in the queue. There are many aspect factors in my algorithms because each servers has different max runtime and wall time and number of nodes allow therefore the one has the least jobs will be the one has the faster performance.';
	folder: any[] = ['AboutMe.txt', 'Projects.txt', 'Experiences.txt', 'Resume.txt'];
	helpCommand: string = 'cat _filename_: View the txt file. \n';
	mainPath: string = 'thinhnguyen@ubuntu:/~ ';
	currentDir: string = 'thinhnguyen@ubuntu/';

	constructor(private terminalService: TerminalService) {
		this.terminalService.commandHandler.subscribe(command => {
				// console.log("Current using command: ", command);
				switch (command) {
					case 'ls': {
						this.response = this.folder[0] + '\n';
						for (var ele = 1; ele < this.folder.length; ele++) {
							console.log(this.folder[ele])
							this.response += this.folder[ele] + '\n';
						}
						break;
					}
					case 'help': {
						this.response = this.helpCommand;
					}
					case 'cat Welcome.txt' || 'cat welcome.txt': {
						this.response = 'To view the txt file, we can use the command line `cat _filename.txt_`. Or hit help for more detail!';
						break;
					}
					case 'cat AboutMe.txt' || 'cat aboutme.txt': {
						this.response = this.AboutMe;
						break;
					}
					case 'cat Experiences.txt' || 'cat experiences.txt': {
						this.response = this.Experience;
						break
					}
					case 'cat Projects.txt' || 'cat projects.txt': {
						this.response = '';
						break;
					}
					case 'cat resume.txt' || 'cat Resume.txt': {
						this.response = '';
						break;
					}
					default: {
						this.response = 'This ' + command + ' does not exist in our database. Please check back for later update. Thank you!';
						break;
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