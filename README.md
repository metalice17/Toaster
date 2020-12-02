# Toaster
Toaster is a user-friendly open-source Toast Notification Template Class for web-based applications. 
<br><br>
<img src="https://snipboard.io/KPWvGl.jpg" alt="ScreenShot"><br>
<img src="https://snipboard.io/ZdST2o.jpg" alt="ScreenShot2"><br>

You can link and use the class in any website by included the stylesheet file and class file. Please carefully read Prerequisites before execution.

Currently, the class supports and was tested on the following versions:
jQuery 3.5.1
I have included an example html file to test the functionality of the class. You can edit the css file as needed to change the location of the toast notification as well as the color scheme as needed.
You can set the delay speed in the post to delay the notification display period as needed.
A typical slice (new toast notification) will look as follows:
messageID = Toaster.newSlice(document, 
            {
                'header':'Ajax Data',
                'description': 'Fetching some remote data',
                'message': 'Response expected in json format',
                'left':'Start: ' + new Date().toLocaleString(),
                'right':'loading'
            });


Prerequisites
The minimum requirements for the class are as follows:

jQuery 3.5.1

About the DONATION
If you like what we have done and would like to donate anything to say thank you, or further the project:
ETH Donation Address: 0x715cef27f25040091da96ed76b83a7d5323012c7


