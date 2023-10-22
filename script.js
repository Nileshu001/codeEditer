function initialize() {
    //make variable for each work
    var html = document.getElementById('html');
    var css = document.getElementById('css');
    var js = document.getElementById('js');
    var code = document.getElementById('code').contentWindow.document;
    var copyButton = document.getElementById('copyButton');
    var lockUnlockButton = document.getElementById('lockUnlockButton');
    var isLocked = false;

    // Function to copy the code to the code
    copyButton.addEventListener('click', function () {
        var codeToCopy = html.value + '<style>' + css.value + '</style>' + '<script>' + js.value + '</script>';
        copyToClipboard(codeToCopy);
    });

    // Function to toggle the lock/unlock button
    lockUnlockButton.addEventListener('click', function () {
        if (isLocked) {
            lockUnlockButton.textContent = 'Unlock';
            html.removeAttribute('readonly');
            css.removeAttribute('readonly');
            js.removeAttribute('readonly');
        } else {
            lockUnlockButton.textContent = 'Lock';
            html.setAttribute('readonly', true);
            css.setAttribute('readonly', true);
            js.setAttribute('readonly', true);
        }
        isLocked = !isLocked;
    });

    // Function to copy code to clipboard
    function copyToClipboard(text) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Code copied to clipboard');
    }
// code for our html css and js text to work
    document.body.onkeyup = function () {
        code.open();
        code.writeln(
            html.value +
            '<style>' +
            css.value +
            '</style>' +
            '<script>' +
            js.value +
            '</script>'
        );
        code.close();
    };
}

initialize();
