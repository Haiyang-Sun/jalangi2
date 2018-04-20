if (typeof J$ === 'undefined') {
  J$ = {};
}

(function (sandbox) {
  var jalangiAdapter = undefined;

  try{
    Java;
    try {
      jalangiAdapter = __jalangiAdapter;
    }catch (e){
      console.log("cannot load nodeprof jalangi adapter");
    }
  }catch (e) {
    //not in graal.js, ignore
  }

  sandbox.adapter = jalangiAdapter;
}(J$));
