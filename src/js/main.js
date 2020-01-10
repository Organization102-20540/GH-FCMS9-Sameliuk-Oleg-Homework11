let allTasks;
let allList = document.querySelector('ul')
function saveLocal () {
  allTasks = allList.innerHTML
  localStorage.setItem('allTasks', allTasks)
}

$('#enter-task').on('submit', function (event) {
  event.preventDefault()
  let task = $('#text').val()
  $('#text').val('')
  if (task.length > 0) {
    $('#list').append('<li class="list-item">' +
      '<span>'+task+'</span>' +
      '<a href="#" class="button del-btn">Del</a>' +
      '<a href="#" class="button edit-btn">Edit</a>' +
      '</li>')

  }
  return
})

$('#list').on('click', '.del-btn', function (event) {

  $('.del-selected').removeClass('del-selected')
  $(this).closest('.list-item').addClass('del-selected')
  $('.del-selected').remove()

})

$('#list').on('click', '.edit-btn', function (event) {

  $('.edit-selected').removeClass('edit-selected')
  $(this).closest('.list-item').addClass('edit-selected')
  let editTask = $('.edit-selected > span').text()
  $('.edit-selected').html('<input type="text" class="enter-field" name="ed" autofocus value='+editTask+'>' +
    '<a href="#" class="button upd-btn">Update</a>')
  $('.edit-selected').removeClass('edit-selected')

})

$('#list').on('click', '.upd-btn', function (event) {

  $('.update-selected').removeClass('update-selected')
  $(this).closest('.list-item').addClass('update-selected')
  let up = $('.update-selected > input[type=text][name=ed]').val()
  $('.update-selected').html('<span>'+up+'</span>')

})




if (localStorage.getItem('allTasks')) {
  allList.innerHTML = localStorage.getItem('allTasks')
}