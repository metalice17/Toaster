// Toaster is a user-friendly open-source Toast Notification Template Class for web-based applications.

// You can link and use the class in any website by included the stylesheet file and class file. Please carefully read Prerequisites before execution.

// Currently, the class supports and was tested on the following versions: jQuery 3.5.1 I have included an example html file to test the functionality of the class. You can edit the css file as needed to change the location of the toast notification as well as the color scheme as needed. You can set the delay speed in the post to delay the notification display period as needed. A typical slice (new toast notification) will look as follows: messageID = Toaster.newSlice(document, { 'header':'Ajax Data', 'description': 'Fetching some remote data', 'message': 'Response expected in json format', 'left':'Start: ' + new Date().toLocaleString(), 'right':'' });

// Prerequisites The minimum requirements for the class are as follows:

// jQuery 3.5.1
// GNU GENERAL PUBLIC LICENSE

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.Notifications = {}));
}(this, function (exports) {
    'use strict';

    class Toaster {
        constructor() {
            this.ToastEvents = [];

            this.initSlice = function (doc, data) {
                try {
                    var id = Math.random().toString(16).slice(2);
                    var div = document.createElement('div');
                    div.innerHTML = "<table class='toaster'><tr><td colspan='2' class='top' id='" + id + "top'><h3 id='" + id + "header'></h3></td></tr><tr><td class='content'><p id='" + id + "description'></p><p id='" + id + "message'></p></td><td class='right' id='" + id + "right' id='right'></td></tr></table>";
                    div.setAttribute('class', 'slider close');
                    div.setAttribute('id', id);
                    doc.body.appendChild(div);
                    this.updateSlice(id, doc, data);
                    return id;
                }
                catch (error) { console.log(error); }
            };

            this.updateSlice = function (id, document, data) {
                if (data != null && id != null) {
                    try {
                        var predelay = 0;
                        if (data != null) {
                            if (data.predelay != undefined)
                                predelay = data.predelay;
                        }
                        setTimeout(function () {
                            try {
                                if (data.header != undefined)
                                    document.getElementById(id + 'header').innerHTML = data.header;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.description != undefined)
                                    document.getElementById(id + 'description').innerHTML = data.description;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.message != undefined)
                                    document.getElementById(id + 'message').innerHTML = data.message;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.left != undefined)
                                    document.getElementById(id + 'left').innerHTML = data.left;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.right != undefined && data.right != null) {
                                    if (data.right == 'loading')
                                        document.getElementById(id + 'right').innerHTML = "<img width='20' src='./images/loading-spinner.gif'>";
                                    else if (data.right == 'complete')
                                        document.getElementById(id + 'right').innerHTML = "<img width='30' src='./images/complete.gif'>";
                                    else if (data.right == 'error')
                                        document.getElementById(id + 'right').innerHTML = "<img width='20' src='./images/error.png'>";
                                    else
                                        document.getElementById(id + 'right').innerHTML = "";
                                }
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.bgcolor != undefined) {
                                    document.getElementById(id).style.backgroundColor = data.bgcolor;
                                }
                                else {
                                    document.getElementById(id).style.backgroundColor = "rgba(0,0,0,0.7)";
                                }
                            }
                            catch (error) { console.log(error); }
                        }, predelay);
                    }
                    catch (error) { console.log(error); }
                };
            };

            this.newSlice = function (document, data) {
                var id = this.initSlice(document, data);
                try {
                    this.ToastEvents.push(id);
                    setTimeout(function () {
                        $('#' + id).toggleClass('close');
                    }, 20);
                }
                catch (error) { console.log(error); }
                return id;
            };
            this.removeSlice = function (id, document, data) {
                if (data != null && id != null) {
                    try {
                        var predelay = 0;
                        if (data != null) {
                            if (data.predelay != undefined)
                                predelay = data.predelay;
                        }
                        setTimeout(function () {
                            try {
                                if (data.header != undefined && document.getElementById(id + 'header') != null)
                                    document.getElementById(id + 'header').innerHTML = data.header;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.description != undefined && document.getElementById(id + 'description') != null)
                                    document.getElementById(id + 'description').innerHTML = data.description;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.message != undefined && document.getElementById(id + 'message') != null)
                                    document.getElementById(id + 'message').innerHTML = data.message;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.left != undefined && document.getElementById(id + 'left') != null)
                                    document.getElementById(id + 'left').innerHTML = data.left;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.right != undefined && document.getElementById(id + 'right') != null) {
                                    if (data.right == 'loading')
                                        document.getElementById(id + 'right').innerHTML = "<img width='20' src='./images/loading-spinner.gif'>";
                                    else if (data.right == 'complete')
                                        document.getElementById(id + 'right').innerHTML = "<img width='30' src='./images/complete.gif'>";
                                    else if (data.right == 'error')
                                        document.getElementById(id + 'right').innerHTML = "<img width='20' src='./images/error.png'>";
                                    else
                                        document.getElementById(id + 'right').innerHTML = "";
                                }
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.bgcolor != undefined)
                                    document.getElementById(id).style.backgroundColor = data.bgcolor;
                            }
                            catch (error) { console.log(error); }
                            try {
                                $('#' + id).toggleClass('complete');
                                var delay = 2000;
                                if (data != null) {
                                    if (data.delay != undefined)
                                        delay = data.delay;
                                }
                                setTimeout(function () {
                                    $('#' + id).toggleClass('close');
                                }, delay);
                                setTimeout(function () {
                                    if (document.getElementById(id) != null)
                                        document.body.removeChild(document.getElementById(id));
                                }, delay + 3000);
                            }
                            catch (error) { console.log(error); }
                        }, predelay);
                        this.ToastEvents.pop(this.ToastEvents[id]);
                    } catch (error) { console.log(error); }
                };
            };

        }
    }
    ;
    exports.Toaster = Toaster;

}));