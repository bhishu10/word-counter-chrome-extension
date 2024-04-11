var menuItem={
    "id": "count",
    "title": "Bhishu says...",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);
chrome.contextMenus.onClicked.addListener(function(clickData)
{   
    if (clickData.menuItemId == "count" && clickData.selectionText)
    {
        let WC = 0;
        var data=clickData.selectionText;
        for(let i=0;i<data.length;i++)
        {
            if(data[i]===' ')
            {
                if (data[i + 1]!==' ')
                {
                    WC++;
                }
            }
        }
        WC=WC+1;
        alert("The total number of words here is "+WC);        
    }
});