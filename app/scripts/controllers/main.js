'use strict';

angular.module('codeTutorialApp', ['propertiesEditor'])
  .controller('MainCtrl', function ($scope) {

    function _evaluate(modelName) {
        var model = $scope.codeForm[modelName];
        model.$setPristine();
        model.$setValidity('syntax', true);
        delete model.$error.evalResult;
        try {
          eval(model.$modelValue);
        } catch ( ex ) {
          model.$setValidity('syntax', false);
          model.$error.evalResult = ex.message;
        }
    }

    $scope.$watch('widgetCode', function() {
      _evaluate('widgetCode');
    });

    $scope.$watch('jsCode', function() {
      $('#display').empty();
      _evaluate('jsCode');
    });

    $scope.props = ['text', 'link'];

});
