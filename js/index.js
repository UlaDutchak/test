jQuery(document).ready(function () {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  jQuery('#Date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
  jQuery('#update_date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());
});