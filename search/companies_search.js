var display = {
  title: 'What company do you work for?',
  //need to boldify
  subtitle: 'Why do we want to know? If you company offers 401K options, ' +
    'your company might be helping Pfizer and GSK stocks indirectly by offering funds with their stocks to you.',
  searchTitle: 'If your company offers 401K, enter your company here',
  checkboxLabel: 'My company doesn\'t offer 401K',
  onsubmit: searchCompany,
  searchPlaceholder: 'e.g. Goldman Sachs'
}

var companies;
loadCompanies(); //dropdown!!!!!!!!
//callback?? async?
console.log('loaded companies data')

var submitInput;
loadDisplayText();
console.log('loaded companies search view')

var company;

function loadDisplayText () {
  $('.header').val('STEP 1')
  $('.title').val(display.title);
  $('.subtitle').val(display.subtitle);
  $('.search_title').val(display.searchTitle); 
  $('.checkbox_label').val(display.checkboxLabel); 
  $('.next_button').val(display.nextButton); 

  submitInput = function () {
    event.preventDefault(); 
    display.onsubmit()
  }
  placeholder = display.searchPlaceholder //fixme
}

function searchCompany () {
  var input = $('.form-control').val()
  console.log('companies search arg', input)
  company = input
}

function loadCompanies () {
  companies = [
   'Round Stones Inc.', 
  'Factoring Inc.',
  '5PSolutions',
  'Abt Associates',
  'Goldman Sachs '
  ]
}