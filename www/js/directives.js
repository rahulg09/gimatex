angular.module('app.directives', [])

.directive('blankDirective', [function(){

}])

.directive('searchBar', [function () {
	return {
		scope: {
			ngModel: '='
		},
		require: ['^ionNavBar', '?ngModel'],
		restrict: 'E',
		replace: true,
		template: '<ion-nav-buttons side="right">'+
						'<div class="searchBar">'+
							'<div class="searchTxt" ng-show="ngModel.show">'+
						  		'<div class="bgdiv"></div>'+
						  		'<div class="bgtxt">'+
						  			'<input type="text" placeholder="Search..." ng-model="txt">'+
						  		'</div>'+
					  		'</div>'+
					  		'<label class="item item-input item-select prodcuts" ng-show="!ngModel.show"><select  ng-change="changeCat(category)" ng-init="category=\'products\'" ng-model="category"><option ng-if="userType==0" ng-selected="userType==0" value="products">Product</option><option value="agents" ng-selected="userType>0">Agents</option><option value="customers">Customers</option></select></label>' +
						  	'<button class="button button-icon button-clear ion-ios-search"  ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></button>'+
						'</div>'+
					'</ion-nav-buttons>',
		
		compile: function (element, attrs) {
			var icon=attrs.icon
					|| (ionic.Platform.isAndroid() && 'ion-android-search')
					|| (ionic.Platform.isIOS()     && 'ion-ios7-search')
					|| 'ion-search';
			angular.element(element[0].querySelector('.icon')).addClass(icon);
			
			return function($scope, $element, $attrs, ctrls) {
				var navBarCtrl = ctrls[0];
				$scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;
				
			};
		},
		controller: ['$scope','$ionicNavBarDelegate', function($scope,$ionicNavBarDelegate){
			var title, definedClass;
			$scope.$watch('ngModel.show', function(showing, oldVal, scope) {
				if(showing!==oldVal) {
					if(showing) {
						if(!definedClass) {
							var numicons=$scope.navElement.children().length;
							angular.element($scope.navElement[0].querySelector('.searchBar')).addClass('numicons'+numicons);
						}
						
						title = $ionicNavBarDelegate.getTitle();
						$ionicNavBarDelegate.setTitle('');
					} else {
						$ionicNavBarDelegate.setTitle(title);
					}
				} else if (!title) {
					title = $ionicNavBarDelegate.getTitle();
				}
			});
		}]
	};
}]);