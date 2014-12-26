
jQuery(document).ready(function(){

  var $progress = $('.progress-bar');

  var $next = $('button.next');
  var $previous = $('button.previous');
  var $finish = $('button.finish');

  var $activeStep = $('ul .active');
  var $activeTab = $('.tab-content .active');
  var $tabFinish = $('.tab-finish');

  $next.on('click', function(event) {
    $activeStep = $('ul .active');
    $activeTab = $('.tab-content .active');

    $activeStep.removeClass('active');
    $activeStep.next().addClass('active');
    $activeTab.removeClass('active');
    $activeTab.next().addClass('active');

    var $index = $activeStep.index() + 1;
    $progress.width(($index+1)*20+'%')
    if ($index < 4 && $index >= 0) {
      $previous.removeClass('disabled');
    } else {
      $next.addClass('disabled');
      $next.hide();
      renderRecipt();
      $finish.show();
      $finish.removeAttr('disabled');
    }
  })

  $previous.on('click', function(event) {
    $activeStep = $('ul .active');
    $activeTab = $('.tab-content .active');

    $activeStep.removeClass('active');
    $activeStep.prev().addClass('active');
    $activeTab.removeClass('active');
    $activeTab.prev().addClass('active');

    var $index = $activeStep.index();
    $progress.width(($index)*20+'%')
    if ($index > 1) {
      $next.removeClass('disabled');
    } else {
      $previous.addClass('disabled');
    }

    if ($index == 4) {
      $next.show();
      $finish.hide();
      $finish.attr('disabled', '');
    }
  })

  var receiptTemplate = $('#receipt-template').html();
  $('#receipt-template').remove();

  function renderRecipt() {
    var date = new Date();
    var receiptInfo = {
      "borrower-name" : $('input[name="borrower-name"]')[0].value,
      "borrower-identification" : $('input[name="borrower-identification"]')[0].value,
      "borrower-reason" : $('input[name="borrower-reason"]')[0].value,
      "borrower-date" : $('input[name="borrower-date"]')[0].value,
      "lender-name" : $('input[name="lender-name"]')[0].value,
      "lender-property" : $('input[name="lender-property"]')[0].value,
      "lender-interest" : $('input[name="lender-interest"]')[0].value,
      "lender-month" : $('input[name="lender-month"]')[0].value,
      "today" : [date.getYear()+1900,date.getMonth()+1, date.getDate()].join('.')
    }
    var renderedReceipt = Mustache.render(receiptTemplate, receiptInfo);
    console.log(renderedReceipt)
  }

});