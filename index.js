function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0];
}

function increaseRankBy(n) {
  var rankedItems = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for ( var i = 0; i < rankedItems.length; i++) {
    rankedItems[i].innerHTML = parseInt(rankedItems[i].innerHTML) + n;
  }
}

function deepestChild() {
  var temp = document.getElementById('grand-node');
  
  while (tye)
}

