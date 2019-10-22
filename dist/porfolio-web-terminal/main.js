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

module.exports = "\n.logsize {\n    /* width: 800px; */\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 100px;\n    font-size: 17px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col\">\n        <div class=\"logsize\">\n            <app-console></app-console>\n            <div *ngIf=\"openTerminal\" autofocus>\n                <app-terminal></app-terminal>\n            </div>\n        </div>\n    </div>\n</div>"

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
                primeng_terminal__WEBPACK_IMPORTED_MODULE_7__["TerminalModule"]
                // TerminalService
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

module.exports = "\n#console_log {\n    font-family: courier, monospace;\n    font-size: 17px;\n    color: #fff;\n    width: 900px;\n}\n"

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
            'Hello world! I am rising fourth year student and studying computer science at Georgia Insitute of Technology. I am specializing in threads media and info internetworks.</a><br/><br/>' +
            'I am really passionate about computer science, technologies and want to contribute myself into this great technology century.</a><br/><br/>' +
            // '<strong>' + '<span ' + this.green + '>Technical Languagues</span></strong>: Python, JavaScript, Java, HTML, CSS/SCSS, Swift, Typescipt, C#, Shell, SQL, NoSQL<br/><br/>' +
            '<strong>' + '<span ' + this.green + '>Back-end</span></strong>: Python, Node/Express, Java, Typescripts, REST API, Swift, C#<br/><br/>' +
            '<strong>' + '<span ' + this.green + '>Front-end</span></strong>: Angular4-7, Redux, React, React-Native, HTML/HTML5, CSS/SCSS, Flask, D3.js<br/><br/>' +
            '<strong>' + '<span ' + this.green + '>Devops</span></strong>: Heroku, Github/Gitlab/BitBucket, Docker, Jenkins, Redis, Shell, Apigee, GCP<br/><br/>' +
            '<strong>' + '<span ' + this.green + '>Database</span></strong>: MySQL, MongoDB, PostgreSQL, Firebase<br/><br/>' +
            '<strong>' + '<span ' + this.green + '>Unit Test</span></strong>: Junit, Supertest, Karma, Protractor<br/><br/>' +
            // '<strong>' + '<span ' + this.green + '>Technologies</span></strong>: Git, Node/Express, Angular, Redux, React, React-Native, Express.js, Flask, MongoDB, OracleDB, Firebase, Heroku, Dialogflow, Jenkins, Docker, GCP, Apigee, Redis <br/><br/>' +
            '<strong> ' + '<span ' + this.green + '>Concepts</span></strong>: Algorithmns, Data Strucuturs, Problems Solving, Web Development, Mobile Development<br/><br/>' +
            'Want my resume: <a href="https://drive.google.com/open?id=1hoVFoSXYYPfT_wksdntdqPPfQTYTdUQc" target="_blank">Resume</a><br/><br/>' +
            'Github: <a href="https://github.com/thinhnguyennt7" target="_blank">Profile</a><br/><br/>' +
            'Linkedin: <a href="https://www.linkedin.com/in/thinhnguyennt9/" target="_blank">Profile</a><br/><br/>' +
            'Contact me at: <a href="mailto:thinhnguyennt9@gmail.com">thinhnguyennt9@gmail.com</a><br/><br/>' +
            '<span id="a" ' + this.green + '>thinhnguyen@ubuntu</span>:<span id="b" ' + this.red + '>/</span><span id="c" ' + this.blue + '>~</span>' +
            ' For developers, please press ' + '<span ' + this.green + '>~</span>' + ' on this page to use the terminal to navigate this website.<br/><br/>' +
            '<span ' + this.green + '>thinhnguyen@ubuntu</span>:<span ' + this.red + '>/</span><span ' + this.blue + '>~</span><br/><br/>';
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

module.exports = "<div style=\"color: white; left:0%; font-family: courier, monospace;\">\n    <p-terminal\n        prompt={{mainPath}}>\n    </p-terminal>\n</div>"

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


var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.Resume = '';
        this.AboutMe = 'Hello world! I am currently pursing my undergraduate at Georgia Tech, I am third years of computer science and my concentration and threads are Information networking and media. I am really passionate about computer science, technologies and want to contribute myself into this great technology century. I will be graduating on May 2020 which is next summer.';
        // project1: string = '+----------------+' + '\n'+ 'APPOINTMENTS GO\n+----------------+\n + Integrated an iOS app under model­view­controller pattern, that supports clients to make any reservations with their favorite stores within an app. Maintained the calendar on top of Google calendar to allow real­time schedule data to share between admin and client.';
        // project2: string = '';
        // project3: string = '';
        // project4: string = '';
        // Projects: string = '' + this.project1 + '\n+----------------+' + this.project2 + this.project3 + this.project4;
        this.Experience = 'On summer 2018, I had a chance to intern at Macy’s System and Technology where I worked under infrastructure team. At Macy’s our infrastructure team split into 2 smaller team one is for Devops and I worked for the other one which is web team. I worked on both backend and frontend during my internship. I was helping my team to built an internal tool that allow other teams inside Macy’s could submit servers request to build whenever needed by using IBM soft layer Cloud. One of the task that I has done was to write python scripts that query out all the servers that has been built from out database to analyze and determine which servers was successfully built and still valid to use and which one not. \n' + ' Furthermore, I am currently working on a research project at Georgia Tech. The project that I am working on is to analyze the data set from our GT server machine and return back a queue follow with the hostserver name that has the least jobs in the queue. There are many aspect factors in my algorithms because each servers has different max runtime and wall time and number of nodes allow therefore the one has the least jobs will be the one has the faster performance.';
        this.folder = ['AboutMe.txt', 'Projects.txt', 'Experiences.txt', 'Resume.txt'];
        this.helpCommand = 'cat _filename_: View the txt file. \n';
        this.mainPath = 'thinhnguyen@ubuntu:/~ ';
        this.currentDir = 'thinhnguyen@ubuntu/';
        this.terminalService.commandHandler.subscribe(function (command) {
            console.log("Current using command: ", command);
            // if (command.includes('cd ')) {
            // 	let path = command.substring(3, command.length).toUpperCase();
            // 	console.log("The File name: ", path);
            // 	for (var element in this.folder) {
            // 		console.log(this.folder[element]);
            // 		if (path === this.folder[element].toUpperCase()) {
            // 			this.mainPath = 'thinhnguyen@ubuntu:/~' + this.folder[element] + '/';
            // 			console.log(this.mainPath);
            // 			break;
            // 		} else {
            // 			 console.log(command + ": No such directory");
            // 			 break;
            // 		}
            // 	}
            // }
            switch (command) {
                case 'ls': {
                    _this.response = _this.folder[0] + '\n';
                    for (var ele = 1; ele < _this.folder.length; ele++) {
                        console.log(_this.folder[ele]);
                        _this.response += _this.folder[ele] + '\n';
                    }
                    break;
                }
                case 'help': {
                    _this.response = _this.helpCommand;
                }
                case 'cat Welcome.txt' || 'cat welcome.txt': {
                    _this.response = 'To view the txt file, we can use the command line `cat _filename.txt_`. Or hit help for more detail!';
                    break;
                }
                case 'cat AboutMe.txt' || 'cat aboutme.txt': {
                    _this.response = _this.AboutMe;
                    break;
                }
                case 'cat Experiences.txt' || 'cat experiences.txt': {
                    _this.response = _this.Experience;
                    break;
                }
                case 'cat Projects.txt' || 'cat projects.txt': {
                    _this.response = '';
                    break;
                }
                case 'cat resume.txt' || 'cat Resume.txt': {
                    _this.response = '';
                    break;
                }
                default: {
                    _this.response = 'This ' + command + ' does not exist in our database. Please check back for later update. Thank you!';
                    break;
                }
            }
            // Send respone to console
            _this.terminalService.sendResponse(_this.response);
            // }
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

module.exports = __webpack_require__(/*! /Users/thinhnguyen/Desktop/Hobbies/Projects/web_terminal_porfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map