Post from stackoverflow: https://stackoverflow.com/questions/1841916/how-to-avoid-global-variables-in-javascript

The easiest way is to wrap your code in a closure and manually expose only those variables you need globally to the global scope:
```javascript
    (function() {
        // Your code here

        // Expose to global
        window['varName'] = varName;
    })();
```
To address Crescent Fresh's comment: in order to remove global variables from the scenario entirely, the developer would need to change a number of things assumed in the question. It would look a lot more like this:

Javascript:
```javascript
    (function() {
        var addEvent = function(element, type, method) {
            if('addEventListener' in element) {
                element.addEventListener(type, method, false);
            } else if('attachEvent' in element) {
                element.attachEvent('on' + type, method);

            // If addEventListener and attachEvent are both unavailable,
            // use inline events. This should never happen.
            } else if('on' + type in element) {
                // If a previous inline event exists, preserve it. This isn't
                // tested, it may eat your baby
                var oldMethod = element['on' + type],
                    newMethod = function(e) {
                        oldMethod(e);
                        newMethod(e);
                    };
            } else {
                element['on' + type] = method;
            }
        },
            uploadCount = 0,
            startUpload = function() {
                var fil = document.getElementById("FileUpload" + uploadCount);

                if(!fil || fil.value.length == 0) {    
                    alert("Finished!");
                    document.forms[0].reset();
                    return;
                }

                disableAllFileInputs();
                fil.disabled = false;
                alert("Uploading file " + uploadCount);
                document.forms[0].submit();
            };

        addEvent(window, 'load', function() {
            var frm = document.forms[0];

            frm.target = "postMe";
            addEvent(frm, 'submit', function() {
                startUpload();
                return false;
            });
        });

        var iframe = document.getElementById('postHere');
        addEvent(iframe, 'load', function() {
            uploadCount++;
            if(uploadCount > 1) {
                startUpload();
            }
        });

    })();
```
HTML:
```html
    <iframe src="test.htm" name="postHere" id="postHere"></iframe>
```
You don't **need** an inline event handler on the `<iframe>`, it will still fire on each load with this code.

**Regarding the load event**

Here is a test case demonstrating that you don't need an inline `onload` event. This depends on referencing a file (/emptypage.php) on the same server, otherwise you should be able to just paste this into a page and run it.
```html
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>untitled</title>
    </head>
    <body>
        <script type="text/javascript" charset="utf-8">
            (function() {
                var addEvent = function(element, type, method) {
                    if('addEventListener' in element) {
                        element.addEventListener(type, method, false);
                    } else if('attachEvent' in element) {
                        element.attachEvent('on' + type, method);

                        // If addEventListener and attachEvent are both unavailable,
                        // use inline events. This should never happen.
                    } else if('on' + type in element) {
                        // If a previous inline event exists, preserve it. This isn't
                        // tested, it may eat your baby
                        var oldMethod = element['on' + type],
                        newMethod = function(e) {
                            oldMethod(e);
                            newMethod(e);
                        };
                    } else {
                        element['on' + type] = method;
                    }
                };

                // Work around IE 6/7 bug where form submission targets
                // a new window instead of the iframe. SO suggestion here:
                // http://stackoverflow.com/q/875650
                var iframe;
                try {
                    iframe = document.createElement('<iframe name="postHere">');
                } catch (e) {
                    iframe = document.createElement('iframe');
                    iframe.name = 'postHere';
                }

                iframe.name = 'postHere';
                iframe.id = 'postHere';
                iframe.src = '/emptypage.php';
                addEvent(iframe, 'load', function() {
                    alert('iframe load');
                });

                document.body.appendChild(iframe);

                var form = document.createElement('form');
                form.target = 'postHere';
                form.action = '/emptypage.php';
                var submit = document.createElement('input');
                submit.type = 'submit';
                submit.value = 'Submit';

                form.appendChild(submit);

                document.body.appendChild(form);
            })();
        </script>
    </body>
    </html>
```
The alert fires every time I click the submit button in Safari, Firefox, IE 6, 7 and 8.
