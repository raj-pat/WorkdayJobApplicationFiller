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
            ['Address Line 1', '15220 NE 16th PL'],
            ['Address Line 2', 'Apt 35'],
            ['City', 'Bellevue'],
            ['State', 'Washington'],
            ['Postal Code', '98007'],
            ['Phone Number','3864666667']
        ])
        if (id != undefined )
        {
            if (info.has(label)) {
                document.getElementById(f).value = info.get(label)
            }
        }
    
    });

