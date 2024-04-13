var members = [
    {memberId : 1,  parentId:null, name: 'Emma'},
    {memberId : 2,  parentId:1, name: 'Jacob'},
    {memberId : 3,  parentId:1, name: 'Sophia'},
    {memberId : 4,  parentId:3, name: 'Alexander'},
    {memberId : 6,  parentId:1, name: 'Michael'},
    {memberId : 9,  parentId:4, name: 'Olivia'},
    {memberId : 12,  parentId:2, name: 'Isabella'},
    {memberId : 5,  parentId:2, name: 'Elijah'},
    {memberId : 13,  parentId:2, name: 'William'},
    {memberId : 14,  parentId:2, name: 'Charlotte'},
    {memberId : 55,  parentId:2, name: 'James'},
    {memberId : 56,  parentId:3, name: 'Ava'},
    {memberId : 57,  parentId:3, name: 'Matthew'},
    {memberId : 58,  parentId:3, name: 'Harper'},
    {memberId : 59,  parentId:6, name: 'Benjamin'},
    {memberId : 54,  parentId:6, name: 'Mia'},
    {memberId : 53,  parentId:56, name: 'Evelyn'},
    {memberId : 52,  parentId:2, name: 'Amelia'},
    {memberId : 51,  parentId:6, name: 'Daniel'},
    {memberId : 50,  parentId:9, name: 'John'},
    {memberId : 22,  parentId:9, name: 'Sophia'},
    {memberId : 33,  parentId:12, name: 'Jacob'}
];

(function heya( parentId ){
    for(var i = 0; i < members.length; i++){
        var member = members[i];

        if(member.parentId === parentId){
            var parent = parentId ? $("#containerFor" + parentId) : $("#mainContainer"),
                memberId = member.memberId;
                let name = member.name;
                let is_member = (member.parentId ? 'is_member' : '');

                let has_childs =  members.some(function(member) {
                    return member.parentId === memberId;
                });

                has_childs = has_childs ? 'has_childs' : '';

                
                let image = "<img class='potrait_fallback' src ='potrait.jpg'> <br>";
                // image = "";
            parent.append(`<div class='container' id='containerFor${memberId}'><div class='member ${is_member} ${has_childs}'> ${image}  ${name}  </div></div>`);
            heya(memberId);
        } 
    }
 }( null ));


var pretty = function(){
    var self = $(this),
        children = self.children(".container"),
        width = (100/children.length) - 2;
        children .css("width", width + "%").each(pretty);
};
$("#mainContainer").each(pretty);
    