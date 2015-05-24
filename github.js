module.exports = {
  'GitHub example testing': function (test) {
  test
    .open('https://github.com')
    .waitForElement('input[name=q]')
    .assert.title().is('GitHub · Build software better, together.', 'GitHub has the correct page title!')
    .type('input[name=q]', 'dalekjs')
    .submit('.js-site-search-form')
    .waitFor(function() {
      return $('li.repo-list-item:nth-child(1) > h3:nth-child(2) > a:nth-child(1)').text() === 'dalekjs/dalek'
    })
    .assert.text('.sort-bar > h3:nth-child(2)', 'We\'ve found 53 repository results')
    .done();
  }
};
