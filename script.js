var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.4.1.min.js";document.getElementsByTagName('head')[0].appendChild(script);

$('label').each(
    function(k){ 
        curr = $ (this)
        id = curr.attr('id')
        f = curr.attr('for')
        label = curr.text()
        info = new Map([
            ['First Name', 'Raj'],
            ['Last Name', 'Patel'],
            ['Address Line 1', '12345 NE 16th St'],
            ['Address Line 2', 'Apt 35'],
            ['City', 'Seattle'],
            ['State', 'Washington'],
            ['Postal Code', '0000'],
            ['Phone Number','00000']
        ])
        if (id != undefined )
        {
            if (info.has(label)) {
                document.getElementById(f).value = info.get(label)
            }
        }
    
    });

