angular.module('ngRilian')
  .factory('rilianFactory', function($http){

    var escaping = [
      {
        "genre": "90's Alt Rock, Space Rock",
        "label": "Kenobi Records"
      }
    ];

    var fail = [
      {
        "song": "Failure",
        "genre": "90's Alt Rock, Space Rock",
        "label": "Kenobi Records"
      }
    ];

    var losingMyself = [
      {
        "song": "Losing Myself",
        "genre": "90's Alt Rock, Space Rock",
        "label": "Kenobi Records"
      }
    ];

    function getEsc(){
      return escaping;
    }
    function getFail(){
      return fail;
    }
    function getLM(){
      return losingMyself;
    }

    return {
      getEsc: getEsc,
      getFail: getFail,
      getLM: getLM
    };

  });
