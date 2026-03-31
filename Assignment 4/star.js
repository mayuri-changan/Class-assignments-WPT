function showPattern()
{
    for(var i = 3; i >= 1; i--)
    {
        var line = "";
        
        for(var j = 1; j <= i; j++)
        {
            line += "* ";
        }
        
        console.log(line);
    }
}

showPattern()