var removeClasses = ["list-item-chapter", "title-answer ng-binding", "title-answer2 ng-scope", "footer", "header", "menu", "navigator"];
var paddingClasses = ["title-box-contest ng-binding", "answer-box", "detail-box-contest", "box-contest"];
for (let k = 0; k <= 5; k++) {
   for (let i = 0; i < removeClasses.length; i++) {
      let els = document.getElementsByClassName(removeClasses[i]);
      for (let j = 0; j < els.length; j++) {
         els[j].remove();
      }
   }
   for (let i = 0; i < paddingClasses.length; i++) {
      let els = document.getElementsByClassName(paddingClasses[i]);
      for (let j = 0; j < els.length; j++) {
         els[j].style.padding = "0px";
      }
   }
}
