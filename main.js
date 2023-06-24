var checkbox = document.getElementById('bauble_check');
        var body = document.body;
        var logo = document.getElementById('icon');
        var content = document.getElementById('content');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                body.classList.add('checked');
                logo.classList.add('checked');
                content.classList.add('checked');
            } else {
                body.classList.remove('checked');
                logo.classList.remove('checked');
                content.classList.remove('checked');
            }
        });