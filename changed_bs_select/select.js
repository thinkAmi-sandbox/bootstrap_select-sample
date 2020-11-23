$(document).ready(function() {
  $('#ringo').on('changed.bs.select', (event, clickedIndex, isSelected, previousValue) => {
    console.log(previousValue);
  });

  $('#auto').on('click', () => {
    $('#ringo').selectpicker('val', 3);
  })
});

