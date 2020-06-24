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
                    div.innerHTML = "<table class='toaster'><tr><td class='left' id='" + id + "left'></td><td class='content'><h3 id='" + id + "header'></h3><p id='" + id + "description'></p><p id='" + id + "message'></p></td><td class='right' id='" + id + "right' id='right'></td></tr></table>";
                    div.setAttribute('class', 'slider close');
                    div.setAttribute('id', id);
                    doc.body.appendChild(div);
                    this.updateSlice(id, doc, data);
                    return id;
                }
                catch (error) { console.log(error); }
            };

            this.updateSlice = function (id, document, data) {
                if (data != null) {
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
                                if (data.right != undefined && data.right != null)
                                    document.getElementById(id + 'right').innerHTML = data.right;
                            }
                            catch (error) { console.log(error); }
                            try {
                                if (data.bgcolor != undefined)
                                    document.getElementById(id).style.backgroundColor = data.bgcolor;
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
                if (data != null) {
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
                                if (data.right != undefined)
                                    document.getElementById(id + 'right').innerHTML = data.right;
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