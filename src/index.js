import $ from 'jquery'
$('#getBtn').click(() => {
  $.get(
    'https://www.easy-mock.com/mock/5c219b2dbc4bac06b6fda0fa/getSpaceDetails', {},
    (data) => {
      $('.getText').html(JSON.stringify(data))
    })
})
$('#postBtn').click(() => {
  $.post(
    'https://www.easy-mock.com/mock/5c219b2dbc4bac06b6fda0fa/users/1', {},
    (data) => {
      $('.postText').html(JSON.stringify(data))
    })
})
// 进阶练习
// $.ajax({
//   type: "GET",
//   url: "test.js",
//   dataType: "script"
// });
// $.ajax({
//   type: "POST",
//   url: "some.php",
//   data: "name=John&location=Boston",
//   success: function(msg){
//     alert( "Data Saved: " + msg );
//   }
// });
