const messages = [{
    id: 1,
    shortMessage: 'Java',
    message: 'Java is a High Level Programming Language. Developed by Sun MicroSystems'


}, {
    id: 2,
    shortMessage: 'C++',
    message: 'C++ is a general-purpose programming language created by Bjarne Stroustrup'


}, {
    id: 3,
    shortMessage: 'C',
    message: 'C is a general-purpose, procedural computer programming language '


}, {
    id: 4,
    shortMessage: 'Python',
    message: 'Python is an interpreted, high-level and general-purpose programming language.'


}];

// display all the messages

for (var i = 0; i < messages.length; i++) {
    $('<div ' + 'class="msg' + '"' + 'id="msg' + messages[i].id + '"' + '></div>').text(messages[i].shortMessage).appendTo('.subcontent');
}


// show brief message



const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const msg3 = document.getElementById('msg3');
const msg4 = document.getElementById('msg4');

const back = document.getElementById('menu-left');
const msg = document.getElementById('fa-msg');

msg1.addEventListener('click', () => {
    let i = '0';
    loadMessages(i);

})
msg2.addEventListener('click', () => {
    let i = '1';
    loadMessages(i);

})
msg3.addEventListener('click', () => {
    let i = '2';
    loadMessages(i);

})
msg4.addEventListener('click', () => {
    let i = '3';
    loadMessages(i);


})

function loadMessages(i) {
    $('<div class="message"' + '"id=' + "message" + i + '"' + ' >').text(messages[i].message).replaceWith('.subcontent');
    $('.subcontent').replaceWith('<div class="message">' +
        
        '<span>' + `${messages[i].message}` + '</span>' + '</div>');
    msg.classList.replace("fa-comments" , "fa-chevron-left");

    // $('<div class="message"' + '"id=' + "message" + i + '"' + ' >').text(messages[i].message).replaceWith('.subcontent');
    // $('.subcontent').replaceWith('<div class="message">' +
    //     '<img src="./back-button.svg" height=30px; width=30px; id="back" />' +
    //     '<span>' + `${messages[i].message}` + '</span>' + '</div>');
}


back.addEventListener('click', () => {

    window.location.reload();
    // console.log("clicked");
    // $('.message').replaceWith(() => {
    //     for (var i = 0; i < messages.length; i++) {
    //         $('<div class="subcontent" id="subcontent" >' +
    //                 ' <div ' + 'class="msg' + '"' + 'id="msg' + messages[i].id + '"' +
    //                 '></div>' +
    //                 ' </div>')
    //             .text(messages[i].shortMessage).appendTo('.content');
    //         console.log(i);
    //     }
    // });
})

//todo

/*
//replace with single function 
improve naming
//
//backbutton

*/