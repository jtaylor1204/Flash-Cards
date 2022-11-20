$(document).ready(() =>{
    $('.hint-box').on('click', ()=>{
      $('.hint').slideToggle(400);
    })
    $('.wrong-answer-one').on('click', ()=>{
      $('.wrong-text-one').fadeOut(400);
      $('.frown').show();
    })
    $('.wrong-answer-two').on('click', ()=>{
      $('.wrong-text-two').fadeOut(400);
      $('.frown').show();
    })
    $('.wrong-answer-three').on('click', ()=>{
      $('.wrong-text-three').fadeOut(400);
      $('.frown').show();
    })
    $('.correct-answer').on('click', ()=>{
       $('.frown').hide();
       $('.smiley').show();
       $('.wrong-answer-three').fadeOut(400);
       $('.wrong-answer-two').fadeOut(400);
       $('.wrong-answer-one').fadeOut(400);
    })
    });