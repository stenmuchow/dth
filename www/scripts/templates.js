angular.module('WB.Templates', ['widgets/crud/crud-add.tpl.html', 'widgets/crud/crud-delete.tpl.html', 'widgets/crud/crud-edit.tpl.html', 'widgets/login/login.tpl.html', 'widgets/nav-bar/nav-bar.tpl.html', 'widgets/profile/profile.tpl.html', 'widgets/rating/rating.tpl.html', 'widgets/results/show-wines.tpl.html', 'widgets/search/search-form.tpl.html', 'views/main-content.tpl.html']);

angular.module('widgets/crud/crud-add.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/crud/crud-add.tpl.html',
    '<ion-content><article class="crud"><header class="header"><h3>Add a new wine to the brain.</h3></header><form ng-submit="crudCtrl.addNewWine(crudCtrl.wine)"><label for="name"></label><input id="name" type="text" placeholder="Name" ng-model="crudCtrl.wine.name"><label for="origin"></label><input id="origin" type="text" placeholder="Origin" ng-model="crudCtrl.wine.origin"><label for="year"></label><input id="year" type="text" placeholder="Year" ng-model="crudCtrl.wine.year"><label for="price"></label><input id="price" type="text" placeholder="Price" ng-model="crudCtrl.wine.price"><label for="taste"></label><input id="taste" type="text" placeholder="Taste" ng-model="crudCtrl.wine.taste"><label for="alcohol"></label><input id="alcohol" type="text" placeholder="Alcohol" ng-model="crudCtrl.wine.alcohol"><textarea id="comment" placeholder="Comments" ng-model="crudCtrl.wine.comments"></textarea><label for="rating">Rating: <span ng-bind="crudCtrl.wine.rating"></span></label><input id="rating" type="range" min="1" max="5" ng-model="crudCtrl.wine.rating"><label for="headache">Headache: <span ng-bind="crudCtrl.wine.headache"></span></label><input id="headache" type="range" min="0" max="5" placeholder="" ng-model="crudCtrl.wine.headache"> <img ng-show="crudCtrl.wine.base64Img" ng-src="{{crudCtrl.wine.base64Img}}" alt="wine label"> <button class="btn btn--round add" type="submit"><i class="icon ion-archive"></i></button></form></article></ion-content><footer><button class="camera btn btn--round btn--shadow" ng-click="crudCtrl.getImage()"><i class="icon ion-android-camera"></i></button><div class="switch"><button class="btn btn--shadow btn--round__fixed" ng-click="$state.go(\'home.crud.edit\')"><i class="icon ion-edit"></i></button></div></footer>');
}]);

angular.module('widgets/crud/crud-delete.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/crud/crud-delete.tpl.html',
    '<ion-content><article class="crud"><header class="header"><h3>Delete a wine.</h3></header><div class="list"><label class="item item-input item-select"><div class="input-label">Wines</div><select ng-options="wine as wine.name for wine in crudCtrl.wines" ng-model="crudCtrl.wine"></select></label></div><form><img ng-if="crudCtrl.base64Img" ng-src="{{crudCtrl.base64Img}}" alt="wine label"></form><button ng-click="crudCtrl.removeWine(crudCtrl.wine)" class="btn btn--round delete" type="submit"><i class="icon ion-android-delete"></i></button></article></ion-content><footer><div class="switch"><button ng-if="!crudCtrl.view.add" class="btn btn--shadow btn--round__fixed" ng-click="crudCtrl.toggleView()"><i class="icon ion-plus"></i></button></div></footer>');
}]);

angular.module('widgets/crud/crud-edit.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/crud/crud-edit.tpl.html',
    '<ion-content><article class="crud"><header class="header"><h3>Edit a wine in the brain.</h3></header><div class="list"><label class="item item-input item-select"><span class="input-label">Wines</span><select ng-options="wine.id as wine.name for wine in crudCtrl.wines" ng-model="crudCtrl.wineId" ng-change="crudCtrl.findById(crudCtrl.wineId)"></select></label></div><form ng-submit="crudCtrl.submitEditedWine(crudCtrl.wine)"><label for="editName"></label><input id="editName" type="text" placeholder="Name" ng-model="crudCtrl.wine.name"><label for="editOrigin"></label><input id="editOrigin" type="text" placeholder="Origin" ng-model="crudCtrl.wine.origin"><label for="editYear"></label><input id="editYear" type="text" placeholder="Year" ng-model="crudCtrl.wine.year"><label for="editPrice"></label><input id="editPrice" type="text" placeholder="Price" ng-model="crudCtrl.wine.price"><label for="editTaste"></label><input id="editTaste" type="text" placeholder="Taste" ng-model="crudCtrl.wine.taste"><label for="editAlcohol"></label><input id="editAlcohol" type="text" placeholder="Alcohol" ng-model="crudCtrl.wine.alcohol"><textarea id="editComment" placeholder="Comments" ng-model="crudCtrl.wine.comments"></textarea><label for="editRating">Rating: <span ng-bind="crudCtrl.wine.rating"></span></label><input id="editRating" type="range" min="1" max="5" ng-model="crudCtrl.wine.rating"><label for="editHeadache">Headache: <span ng-bind="crudCtrl.wine.headache"></span></label><input id="editHeadache" type="range" min="0" max="5" placeholder="" ng-model="crudCtrl.wine.headache"> <img ng-show="crudCtrl.wine.base64Img" ng-src="{{crudCtrl.wine.base64Img}}" alt="wine label"><br><button class="btn btn--round edit" type="submit"><i class="icon ion-archive"></i></button></form></article></ion-content><footer><button class="camera btn btn--round btn--shadow" ng-click="crudCtrl.getImage()"><i class="icon ion-android-camera"></i></button><div class="switch"><button class="btn btn--shadow btn--round__fixed" ng-click="$state.go(\'home.crud.add\')"><i class="icon ion-plus"></i></button></div></footer>');
}]);

angular.module('widgets/login/login.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/login/login.tpl.html',
    '<section class="search"><article><header class="header"><h3 class="h1">Login.</h3></header><form class="form" ng-submit="loginCtrl.login()"><button class="btn btn--round--fb" type="submit"><i class="icon ion-social-facebook"></i></button></form></article></section><section><button class="btn btn--round__fixed btn--shadow" ng-click="$state.go(\'home.crud.add\')"><i class="icon ion-plus"></i></button></section>');
}]);

angular.module('widgets/nav-bar/nav-bar.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/nav-bar/nav-bar.tpl.html',
    '<nav class="nav-bar"><article class="logo"><a ui-sref="home.search">DtH.</a></article><article class="links"><button wb-nav-menu class="hamburger link"><a><span></span></a></button><ul id="dropdown-menu"><li class="link"><a ui-sref="home.search">Search.</a></li><li class="link"><a ui-sref="home.crud.add">Add.</a></li><li class="link"><a ui-sref="home.crud.edit">Edit.</a></li><li class="link"><a ui-sref="home.crud.delete">Delete.</a></li><li class="link"><a ui-sref="home.login">Login.</a></li></ul></article></nav>');
}]);

angular.module('widgets/profile/profile.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/profile/profile.tpl.html',
    '<section class="search profile"><article><header class="header"><h3 class="h1">Hi <span ng-bind="profileCtrl.user.firstName"></span>.</h3></header><h1>Favorites</h1><ion-list><ion-item ng-repeat="fav in profileCtrl.user.favorites"><h2 ng-bind="fav.name"></h2><ion-option-button class="button-positive icon ion-android-share" ng-click="share(item)"></ion-option-button><wb-favorite wine="fav"></wb-favorite></ion-item></ion-list></article></section>');
}]);

angular.module('widgets/rating/rating.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/rating/rating.tpl.html',
    '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" class="rating-star"><i ng-repeat="r in range track by $index" class="icon" ng-if="$index < value" ng-class="$index < value && (r.stateOn || \'ion-android-star\') || (r.stateOff || \'hidden\')"><span class="sr-only" ng-bind="star($index, value)"></span></i></span>');
}]);

angular.module('widgets/results/show-wines.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/results/show-wines.tpl.html',
    '<ion-content xmlns="http://www.w3.org/1999/html"><section class="show-wines"><ion-list><ion-item class="card results" ng-repeat="wine in showWinesCtrl.wines track by $index"><div class="item"><h2 class="country"><span>Product of Portugal</span><br><rating ng-model="wine.rating" readonly></rating><wb-favorite wine="wine"></wb-favorite></h2></div><div class="item item-avatar"><span class="img"><i class="icon ion-wineglass"></i></span><h2><span class="name" ng-bind="wine.name"></span> <span class="year" ng-bind="wine.year"></span></h2><span class="origin" ng-bind="wine.origin"></span></div><div class="item item-body"><div ng-if="wine.base64Img" class="item item-image"><img class="full-image" ng-src="{{wine.base64Img}}" alt=""></div><p class="taste" ng-bind="wine.taste"></p><p class="comments" ng-bind="wine.comments"></p><div class="bottom"><span class="alcohol" ng-bind="wine.alcohol"></span> <span class="headache" ng-bind="wine.headache"></span> <span class="headache-icon"></span></div><div class="item tabs tabs-secondary tabs-icon-left"><a class="tab-item" href="#"><i class="icon ion-thumbsup"></i> Like</a> <a class="tab-item" href="#"><i class="icon ion-chatbox"></i> Comment</a> <a class="tab-item" href="#"><i class="icon ion-share"></i> Share</a></div></div></ion-item></ion-list></section></ion-content>');
}]);

angular.module('widgets/search/search-form.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('widgets/search/search-form.tpl.html',
    '<section class="search"><article><header class="header"><h3 class="h1">Pick Yer Poison.</h3></header><form class="form" ng-submit="getSearchTerm()"><label for="search"></label><input id="search" awesomplete class="awesomplete" type="text" ng-model="searchCtrl.searchTerm" data-autofirst="true" list-of="searchCtrl.names"> <button class="btn btn--round--comp6" type="submit"><i class="icon ion-search"></i></button></form></article></section><section><button class="btn btn--round__fixed btn--shadow" ng-click="$state.go(\'home.crud.add\')"><i class="icon ion-plus"></i></button></section>');
}]);

angular.module('views/main-content.tpl.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/main-content.tpl.html',
    '<div><div ui-view="nav-bar" autoscroll="false"></div><div ui-view="header" autoscroll="false"></div></div><div ui-view="content" autoscroll="false"></div><div ui-view="footer" autoscroll="false"></div>');
}]);
