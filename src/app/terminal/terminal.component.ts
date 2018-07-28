import { Component, OnInit, OnDestroy } from '@angular/core';
import { TerminalService } from 'primeng/components/terminal/terminalservice';
import { Subscription } from 'rxjs';
import { TerminalInterface } from './terminal';

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
	AboutMe: string[] = ['Thinh_Nguyen-Resume.pdf', 'contact.txt', 'resume.txt', 'summary.txt'];
	Projects: string[];
	Welcome: string;
	Experience: string;
	folder: any[] = ['AboutMe', 'Projects', 'Welcome.txt'];
	mainPath: string = 'thinhnguyen@ubuntu:/~ ';
	currentDir: string = 'thinhnguyen@ubuntu/';

	constructor(private terminalService: TerminalService) {
		this.terminalService.commandHandler.subscribe(command => {
				
				console.log("Current using command: ", command);
				if (command.includes('cd ')) {
					let path = command.substring(3, command.length).toUpperCase();
					console.log("The File name: ", path);
					for (var element in this.folder) {
						console.log(this.folder[element]);
						if (path === this.folder[element].toUpperCase()) {
							this.mainPath = 'thinhnguyen@ubuntu:/~' + this.folder[element] + '/';
							console.log(this.mainPath);
							break;
						} else {
							 console.log(command + ": No such directory");
							 break;
						}
					}
				}
				
				switch (command) {
					case 'date': {
						this.response = new Date().toDateString();
						break;
					}
					case 'ls': {
						this.response = this.folder[0] + '\n';
						for (var ele = 1; ele < this.folder.length; ele++) {
							console.log(this.folder[ele])
							this.response += this.folder[ele] + '\n';
						}
						break;
					}
					case 'cd ..': {
						
					}
					case 'cd': {
						this.response = "";
						break;
					}
					case 'cd ~': {
						this.mainPath = 'thinhnguyen@ubuntu:/~ ';
						break;
					}
					case 'pwd': {
						this.response = this.currentDir;
						break;
					}
					default: {
						this.response = 'Command not found: ' + command;
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