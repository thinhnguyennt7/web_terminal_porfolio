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
	AboutMe: string = 'I am currently pursing my undergraduate at Georgia Tech, I am third years of computer science and my concentration and threads are Information networking and media. I will be graduating on May 2020 which is next summer.';
	Projects: string[];
	Welcome: string;
	Experience: string;
	folder: any[] = ['AboutMe.txt', 'Projects.txt', 'Experiences.txt', 'Resume.txt'];
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
					case 'ls': {
						this.response = this.folder[0] + '\n';
						for (var ele = 1; ele < this.folder.length; ele++) {
							console.log(this.folder[ele])
							this.response += this.folder[ele] + '\n';
						}
						break;
					}
					case 'cat Welcome.txt' || 'cat welcome.txt': {
						this.response = 'Hello world! I am third year student and studying computer science at Georgia Insitute of Technology. I am specializing in threads media and info internetworks.' + ' I am really passionate about computer science, technologies and want to contribute myself into this great technology century.';
						break;
					}
					case 'cat AboutMe.txt' || 'cat aboutme.txt': {
						this.response = this.AboutMe;
						break;
					}
					default: {
						this.response = 'This ' + command + ' command is currenly working on. Please check back for later update. Thank you!';
						break;
					}
				}
				// Send respone to console
				this.terminalService.sendResponse(this.response);
				// }
		});
	}

	ngOnDestroy() {
		if(this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	ngOnInit() {}
}