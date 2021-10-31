// Invoke Functions Call on Document Load
// document.addEventListener('DOMContentLoaded', function () {
//  hljs.highlightAll();
// });

let alertWrapper = document.querySelector('.alert')
let alertClose = document.querySelector('.alert__close')

if (alertWrapper) {
  // console.log('Alert Wrapper Clicked')
  alertClose.addEventListener('click', () =>
    alertWrapper.style.display = 'none'
    )
}

console.log("Craig D Murray, SPHR");
