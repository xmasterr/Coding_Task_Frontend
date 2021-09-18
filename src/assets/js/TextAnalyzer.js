function myTest() {
  console.log('Welcome to custom js');
  alert("javascript run")
}

var textAnalyzerScript = (function() {

  return {
    analyse: function() {
      alert('function 1 called');
    }
  }

})(textAnalyzerScript||{})

