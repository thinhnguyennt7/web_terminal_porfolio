(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.logsize {\n    width: 800px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n    font-size: 17px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logsize\">\n    <app-console></app-console> -->\n    <div *ngIf=\"openTerminal\" autofocus>\n        <app-terminal></app-terminal>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: KEY_CODE, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Keycode
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["BACK_QUOTE"] = 96] = "BACK_QUOTE";
})(KEY_CODE || (KEY_CODE = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.openTerminal = false;
    }
    AppComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.BACK_QUOTE) {
            if (this.openTerminal) {
                this.openTerminal = false;
            }
            else {
                this.openTerminal = true;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
/* harmony import */ var _console_console_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./console/console.component */ "./src/app/console/console.component.ts");
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/terminal */ "./node_modules/primeng/terminal.js");
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_terminal__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { SharedModule } from './shared/service/shared.module';








// import { TerminalService } from '@node_modules/primeng/components/terminal/terminalservice';
// import { TerminalService } from 'primeng/components/terminal/terminalservice';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_5__["TerminalComponent"],
                _console_console_component__WEBPACK_IMPORTED_MODULE_6__["ConsoleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production }),
                primeng_terminal__WEBPACK_IMPORTED_MODULE_7__["TerminalModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/console/console.component.css":
/*!***********************************************!*\
  !*** ./src/app/console/console.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#console_log {\n    font-family: courier, monospace;\n    color: #fff;\n    width: 800px;\n}\n"

/***/ }),

/***/ "./src/app/console/console.component.html":
/*!************************************************!*\
  !*** ./src/app/console/console.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Terminal Console -->\n<div class=\"logsize\">\n    <span id=\"console_log\"></span>\n</div>"

/***/ }),

/***/ "./src/app/console/console.component.ts":
/*!**********************************************!*\
  !*** ./src/app/console/console.component.ts ***!
  \**********************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent() {
        this.green = 'style="color: #0f0;"';
        this.red = 'style="color: #ff0096;"';
        this.blue = 'style="color: #0bc;"';
        this.text = '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> chmod u+x execute<br/><br/>' +
            '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> ./execute<br/><br/>' +
            '<p style="font-size: 2em">Thinh N Nguyen</p><br/>' +
            'Hi! I am software engineer with background in web development and mobile application. I am currently junior student at Georgia Insitute of Technology, majoring in Computer Science and specializing in threads devices and info internetworks.</a><br/><br/>' +
            'I am really passionate about computer science and technology and want to contribute myself to this great technology age!</a><br/><br/>' +
            'For developers, please press ' + '<span ' + this.green + '>~</span>' + ' on this page to use the terminal to navigate this website.<br/><br/>' +
            '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span> ^*_*^___^*_*^<br/><br/>';
        this.test = '<strong><ins>Hobbies</ins></strong>: I enjoy programming, math, soccer, travelling, and to explore a new thing around the world<br/><br/>';
        '<strong><ins>Technical Languagues</ins></strong>: Java; Swift; Python; Javascript; Typescipt, Shell<br/><br/>' +
            '<strong><ins>Technologies</ins></strong>: Git, Node.js, OracleDB, Flask, Angular <br/><br/>' +
            'Find my resume here <a href="/data/thinhnguyen.pdf">Resume</a><br/><br/>' +
            'Contact me at <a href="mailto:tnntech@gatech.edu">tnntech@gatech.edu</a>!<br/>' +
            '<span id="a">thinhnguyen@ubuntu</span>:<span id="b">/</span><span id="c">~</span>';
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        this.typedIt = new typed_js__WEBPACK_IMPORTED_MODULE_1__('#console_log', {
            strings: [this.text],
            typeSpeed: 1,
            startDelay: 300
        });
    };
    ConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-console',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/console/console.component.html"),
            styles: [__webpack_require__(/*! ./console.component.css */ "./src/app/console/console.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "./src/app/terminal/terminal.component.css":
/*!*************************************************!*\
  !*** ./src/app/terminal/terminal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-terminal {\n    height: 18em;\n    overflow: auto;\n    padding: .25em;\n}\n\n.ui-terminal-input {\n    border: 0 none;\n    background-color: transparent;\n    color: inherit;\n    padding: 0;\n    margin: 0 0 0 .125em;\n    width: 75%;\n    outline: none;\n    vertical-align: baseline;\n}\n\n.ui-terminal-command {\n    margin-left: .125em;\n    -moz-margin-start: .125em;\n}\n\n.ui-terminal-input::-ms-clear {\n    display: none;\n}"

/***/ }),

/***/ "./src/app/terminal/terminal.component.html":
/*!**************************************************!*\
  !*** ./src/app/terminal/terminal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: white; left:0%; font-family: courier, monospace;\">\n    <p-terminal\n        welcomeMessage=\"Welcome to my porfolio web terminal. Press ~ to minimize the terminal. Available commands are:\n            cd, ls, cat, clear, pwd, open, (opens file like pdf)\"\n        prompt={{Path}}>\n    </p-terminal>\n</div>"

/***/ }),

/***/ "./src/app/terminal/terminal.component.ts":
/*!************************************************!*\
  !*** ./src/app/terminal/terminal.component.ts ***!
  \************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/terminal/terminalservice */ "./node_modules/primeng/components/terminal/terminalservice.js");
/* harmony import */ var primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ca }
var TerminalComponent = /** @class */ (function () {
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
    function TerminalComponent(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.AboutMe = [
            'Thinh_Nguyen-Resume.pdf',
            'Contact.txt',
            'Resume.txt',
            'Summary.txt'
        ];
        this.Projects = [
            'Lets Kicks Chatbot.txt',
            'NailSpa Chatbot.txt',
            'Schedule Generator.txt',
            'Messager Schedule.txt',
            'Todo List.txt',
            'iOS Calculator.txt',
            'Final_Exam Grade Prediction.txt'
        ];
        this.Welcome = "";
        this.folder = ['AboutMe', 'Projects', 'Welcome.txt'];
        this.Path = 'thinhnguyen@ubuntu:/~ ';
        this.terminalService.commandHandler.subscribe(function (command) {
            // console.log(this.terminalService.commandHandler);
            console.log("Current using command: ", command);
            // Detemine which current path are and get the current folder items
            switch (_this.Path) {
                case ('thinhnguyen@ubuntu:/~ '): {
                    _this.currFolder = _this.folder;
                }
                case ('thinhnguyen@ubuntu:/~AboutMe/ '): {
                    _this.currFolder = _this.AboutMe;
                }
                case ('thinhnguyen@ubuntu:/~Projects/ '): {
                    _this.currFolder = _this.Projects;
                }
            }
            // Commands line methods
            if (command) {
                // Reset everytime
                _this.response = '';
                // cd Command
                if (command.includes('cd')) {
                    if (command === 'cd') {
                        _this.response = '';
                    }
                    else if (command === 'cd ..') {
                        if (_this.Path !== 'thinhnguyen@ubuntu:/~ ') {
                            // TODO
                        }
                    }
                    else if (command === 'cd ~') {
                        if (_this.Path !== 'thinhnguyen@ubuntu:/~ ') {
                            _this.Path = 'thinhnguyen@ubuntu:/~ ';
                        }
                    }
                    else {
                        var path = command.substring(3, command.length).toUpperCase();
                        console.log("The File name: ", path);
                        for (var element in _this.folder) {
                            if (path === _this.folder[element].toUpperCase()) {
                                _this.Path = 'thinhnguyen@ubuntu:/~' + _this.folder[element] + '/';
                                console.log(_this.Path);
                                break;
                            }
                            else {
                                _this.response = command + ": No such directory";
                                break;
                            }
                        }
                    }
                }
                else if (command === 'date') {
                    _this.response = new Date().toDateString();
                }
                else if (command === 'ls') {
                    if (_this.Path === 'thinhnguyen@ubuntu:/~ ') {
                        _this.response = _this.folder[0] + '\n';
                        for (var ele = 1; ele < _this.folder.length; ele++) {
                            console.log(_this.folder[ele]);
                            _this.response += _this.folder[ele] + '\n';
                        }
                    }
                    else if (_this.Path === 'thinhnguyen@ubuntu:/~AboutMe/ ') {
                        _this.response = _this.AboutMe[0] + '\n';
                        for (var ele = 1; ele < _this.AboutMe.length; ele++) {
                            console.log(_this.AboutMe[ele]);
                            _this.response += _this.AboutMe[ele] + '\n';
                        }
                    }
                    else if (_this.Path === 'thinhnguyen@ubuntu:/~Projects/ ') {
                        _this.response = _this.Projects[0] + '\n';
                        for (var ele = 1; ele < _this.Projects.length; ele++) {
                            console.log(_this.Projects[ele]);
                            _this.response += _this.Projects[ele] + '\n';
                        }
                    }
                }
                else if (command.includes('cat')) {
                    // Extention with txt
                    if (command.includes(".txt")) {
                        var fileTXT = command.substring(4, command.length);
                        for (var element in _this.currFolder) {
                            if (fileTXT === element) {
                                // TODO
                                break;
                            }
                            else {
                                _this.response = command + ": No such file";
                            }
                        }
                    }
                    else {
                        _this.response = command + " : No such file";
                    }
                }
                else if (command === 'help') {
                    _this.response = "The following command able to use are: " + "cd, " + "ls, " + "open, " + "cat, " + "clear, " + "pwd, " + "date.";
                }
                else if (command.includes('open')) {
                    // Extension with pdf
                    if (command.includes('.pdf')) {
                        var filePDF = command.substring(5, command.length);
                        for (var idx in _this.currFolder) {
                            if (filePDF === idx) {
                                // TODO
                                break;
                            }
                            else {
                                _this.response = command + " : No such file";
                            }
                        }
                    }
                    else {
                        _this.response = command + " : No such file";
                    }
                }
                else if (command === 'pwd') {
                    _this.response = _this.Path;
                }
                else {
                    _this.response = 'Command not found: ' + command;
                }
            }
            // Send respone to console
            _this.terminalService.sendResponse(_this.response);
        });
    }
    TerminalComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    TerminalComponent.prototype.ngOnInit = function () { };
    TerminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminal',
            template: __webpack_require__(/*! ./terminal.component.html */ "./src/app/terminal/terminal.component.html"),
            styles: [__webpack_require__(/*! ./terminal.component.css */ "./src/app/terminal/terminal.component.css")],
            providers: [primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]]
        }),
        __metadata("design:paramtypes", [primeng_components_terminal_terminalservice__WEBPACK_IMPORTED_MODULE_1__["TerminalService"]])
    ], TerminalComponent);
    return TerminalComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thinhnguyen/Dropbox/Projects/thinhnguyennt7.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map