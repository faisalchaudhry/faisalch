angular.module('FirstCoo.controllers', []).controller('SplashCtlr', function($scope, $rootScope, $timeout, $state,$ionicHistory) {
	$timeout(function() {
		$state.go('Menu.Dashboard');
	}, 2000);
}).controller('LoginCtlr', function($scope, $timeout, $state) {
	$scope.doLogin = function() {
		$state.go("Menu.Dashboard");
	};
}).controller('MenuCtlr', function($scope, $rootScope, $state, $ionicHistory) {
	$scope.activity = [];
	$scope.shopCategory = [];
	$scope.babyFashion = [];
	$scope.kidsFashion = [];
	$scope.toysBooks = [];
	$scope.babyGear = [];
	$scope.diaperingFeeding = [];
	$scope.momMaternity = [];
	$scope.birthdayGifts = [];
	$scope.cPremium = [];
	/*--------- Activity ---------*/
	$scope.toggleactivity = function(activity) {
		if ($scope.isActivityShown(activity)) {
			$scope.shownActivity = null;
		} else {
			$scope.shownActivity = activity;
		}
	};
	$scope.isActivityShown = function(activity) {
		return $scope.shownActivity === activity;
	};
	/*--------- Activity ---------*/

	/*--------- Shop Category ---------*/
	$scope.shownCaterory = $scope.shopCategory;
	$scope.toggleCategory = function(shopCategory) {
		if ($scope.isCategoryShown(shopCategory)) {
			$scope.shownCaterory = null;
		} else {
			$scope.shownCaterory = shopCategory;
		}
	};
	$scope.isCategoryShown = function(shopCategory) {
		return $scope.shownCaterory === shopCategory;
	};
	/*--------- Shop Category ---------*/

	/*--------- baby fashion ---------*/
	$scope.toggleBabyFashion = function(babyFashion) {
		if ($scope.isBabyCategoryShown(babyFashion)) {
			$scope.shownBabyCategory = null;
		} else {
			$scope.shownBabyCategory = babyFashion;
		}
	};
	$scope.isBabyCategoryShown = function(babyFashion) {
		return $scope.shownBabyCategory === babyFashion;
	};
	/*--------- baby fashion ---------*/

	/*--------- kids fashion ---------*/
	$scope.toggleKidsFashion = function(kidsFashion) {
		if ($scope.iskidsFashionShown(kidsFashion)) {
			$scope.shownkidsFashion = null;
		} else {
			$scope.shownkidsFashion = kidsFashion;
		}
	};
	$scope.iskidsFashionShown = function(kidsFashion) {
		return $scope.shownkidsFashion === kidsFashion;
	};
	/*--------- kids fashion ---------*/

	/*--------- Toys, Books & School Supplis ---------*/
	$scope.toggleToysBooks = function(toysBooks) {
		if ($scope.istoysBooksShown(toysBooks)) {
			$scope.showntoysBooks = null;
		} else {
			$scope.showntoysBooks = toysBooks;
		}
	};
	$scope.istoysBooksShown = function(toysBooks) {
		return $scope.showntoysBooks === toysBooks;
	};
	/*--------- Toys, Books & School Supplis ---------*/

	/*--------- Baby Gear & Nursery ---------*/
	$scope.toggleBabyGear = function(babyGear) {
		if ($scope.isBabyGearShown(babyGear)) {
			$scope.shownbabyGear = null;
		} else {
			$scope.shownbabyGear = babyGear;
		}
	};
	$scope.isBabyGearShown = function(babyGear) {
		return $scope.shownbabyGear === babyGear;
	};
	/*--------- Baby Gear & Nursery ---------*/

	/*--------- Diapering Care & Feeding ---------*/
	$scope.toggleDiaperingFeeding = function(diaperingFeeding) {
		if ($scope.isDiaperingFeedingShown(diaperingFeeding)) {
			$scope.showndiaperingFeeding = null;
		} else {
			$scope.showndiaperingFeeding = diaperingFeeding;
		}
	};
	$scope.isDiaperingFeedingShown = function(diaperingFeeding) {
		return $scope.showndiaperingFeeding === diaperingFeeding;
	};
	/*--------- Diapering Care & Feeding ---------*/

	/*--------- Mom & Maternity ---------*/
	$scope.toggleMomMaternity = function(momMaternity) {
		if ($scope.isMomMaternityShown(momMaternity)) {
			$scope.shownmomMaternity = null;
		} else {
			$scope.shownmomMaternity = momMaternity;
		}
	};
	$scope.isMomMaternityShown = function(momMaternity) {
		return $scope.shownmomMaternity === momMaternity;
	};
	/*--------- Mom & Maternity ---------*/

	/*--------- Birthday & Gifts ---------*/
	$scope.toggleBirthdayGifts = function(birthdayGifts) {
		if ($scope.isBirthdayGiftsShown(birthdayGifts)) {
			$scope.shownbirthdayGifts = null;
		} else {
			$scope.shownbirthdayGifts = birthdayGifts;
		}
	};
	$scope.isBirthdayGiftsShown = function(birthdayGifts) {
		return $scope.shownbirthdayGifts === birthdayGifts;
	};
	/*--------- Birthday & Gifts ---------*/

	/*--------- Premium ---------*/
	$scope.togglePremium = function(cPremium) {
		if ($scope.isPremiumShown(cPremium)) {
			$scope.showncPremium = null;
		} else {
			$scope.showncPremium = cPremium;
		}
	};
	$scope.isPremiumShown = function(cPremium) {
		return $scope.showncPremium === cPremium;
	};
	/*--------- Premium ---------*/

	/*-------------- Menu Links --------------*/
	$scope.goToMenuPages = function(index) {
		if (index == 0) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.Notifications');
		} else if (index == 1) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.OfferZone');
		} else if (index == 2) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.RecentlyViewed');
		} else if (index == 3) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.ShortList');
		} else if (index == 4) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.QuickReorder');
		} else if (index == 5) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 6) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 7) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 8) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 9) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 10) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 11) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 12) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 13) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 14) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 15) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,

				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 16) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 17) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 18) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 19) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 20) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 21) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 22) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 23) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 24) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 25) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.BabyClothes');
		} else if (index == 26) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go("Menu.Premium", { id: '0' });
			//$state.go('Menu.Premium/1');
		} else if (index == 27) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go("Menu.Premium", { id: '1' });
			//$state.go('Menu.Premium/2');
		} else if (index == 28) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			//$state.go('Menu.Premium/3');
			$state.go("Menu.Premium", { id: '2' });
		} else if (index == 29) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go("Menu.Premium", { id: '3' });
			//$state.go('Menu.Premium/4');
		} else if (index == 30) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			 $state.go("Menu.Premium", { id: '4' });
			//$state.go('Menu.Premium/5');
		} else if (index == 31) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('Menu.OfferZone');
		} else if (index == 32) {
			$ionicHistory.nextViewOptions({
				historyRoot : true,
				disableAnimate : true,
			});
			$ionicHistory.clearCache();
			$ionicHistory.clearHistory();
			$state.go('');
		} else {

		}
	};
	/*-------------- Menu Links --------------*/

}).controller('DashboardCtlr', function($scope, $rootScope, $state, $ionicPopover, $ionicHistory) {
	
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$scope.goToDetails = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.BabyClothes');
	};
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('NotificationsCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('OfferZoneCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.OffersTab1Class = "tab-item active";
	$scope.OffersTab2Class = "tab-item";
	$scope.OffersTab3Class = "tab-item";
	$scope.template = 'templates/offerzone-pages/offers-todays-deal.html';
	$scope.changeTab = function(index) {
		if (index == 1) {
			$scope.OffersTab1Class = "tab-item active";
			$scope.OffersTab2Class = "tab-item";
			$scope.OffersTab3Class = "tab-item";
			$scope.template = 'templates/offerzone-pages/offers-todays-deal.html';
		} else if (index == 2) {
			$scope.OffersTab1Class = "tab-item";
			$scope.OffersTab2Class = "tab-item active";
			$scope.OffersTab3Class = "tab-item";
			$scope.template = 'templates/offerzone-pages/offers-fashion-corner.html';
		} else {
			$scope.OffersTab1Class = "tab-item";
			$scope.OffersTab2Class = "tab-item";
			$scope.OffersTab3Class = "tab-item active";
			$scope.template = 'templates/offerzone-pages/offers-daily-deals.html';
		}
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('RecentlyViewedCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('ShortListCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicActionSheet, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.ShareShortList = function() {
		$ionicActionSheet.show({
			buttons : [{
				text : 'Share'
			}, {
				text : 'Details'
			}],
			cancelText : 'Cancel'
		});
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('QuickReorderCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('LoginRegisterCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.LoginRegisterTab1Class = "tab-item active";
	$scope.LoginRegisterTab2Class = "tab-item";
	$scope.headerValue = 'LOGIN';
	$scope.template = 'templates/login-register/login.html';
	$scope.changeTab = function(index) {
		if (index == 1) {
			$scope.LoginRegisterTab1Class = "tab-item active";
			$scope.LoginRegisterTab2Class = "tab-item";
			$scope.headerValue = 'LOGIN';
			$scope.template = 'templates/login-register/login.html';
		} else if (index == 2) {
			$scope.LoginRegisterTab1Class = "tab-item";
			$scope.LoginRegisterTab2Class = "tab-item active";
			$scope.headerValue = 'REGISTER';
			$scope.template = 'templates/login-register/register.html';
		}
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('BabyClothesCtlr', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/search.html', {
		scope : $scope,
	}).then(function(search) {
		$scope.search = search;
	});
	
	$scope.babyClothes = [];
	$scope.babyClothesCat = [];
	$scope.babyClothesAge = [];

	$scope.babyFootwear = [];
	$scope.babyFootwearCat = [];
	$scope.babyFootwearColor = [];
	/*--------- Baby Clothes ---------*/
	$scope.togglebabyClothes = function(babyClothes) {
		if ($scope.isbabyClothesShown(babyClothes)) {
			$scope.shownbabyClothes = null;
		} else {
			$scope.shownbabyClothes = babyClothes;
		}
	};
	$scope.isbabyClothesShown = function(babyClothes) {
		return $scope.shownbabyClothes === babyClothes;
	};
	/*--------- Baby Clothes ---------*/
	/*--------- Baby Clothes Cat ---------*/
	$scope.toggleBabyClothesCat = function(babyClothesCat) {
		if ($scope.isBabyClothesCategoryShown(babyClothesCat)) {
			$scope.shownBabyCategory = null;
		} else {
			$scope.shownBabyCategory = babyClothesCat;
		}
	};
	$scope.isBabyClothesAgeShown = function(babyClothesCat) {
		return $scope.shownBabyCategory === babyClothesCat;
	};
	/*--------- Baby Clothes Cat ---------*/
	/*--------- Baby Clothes Age ---------*/
	$scope.toggleBabyClothesAge = function(babyClothesAge) {
		if ($scope.isBabyClothesAgeShown(babyClothesAge)) {
			$scope.shownBabyCategory = null;
		} else {
			$scope.shownBabyCategory = babyClothesAge;
		}
	};
	$scope.isBabyClothesCategoryShown = function(babyClothesAge) {
		return $scope.shownBabyCategory === babyClothesAge;
	};
	/*--------- Baby Clothes Age ---------*/

	/*--------- Baby Footwear ---------*/
	$scope.togglebabyFootwear = function(babyFootwear) {
		if ($scope.isbabyFootwearShown(babyFootwear)) {
			$scope.shownbabyClothes = null;
		} else {
			$scope.shownbabyClothes = babyFootwear;
		}
	};
	$scope.isbabyFootwearShown = function(babyFootwear) {
		return $scope.shownbabyClothes === babyFootwear;
	};
	/*--------- Baby Footwear ---------*/
	/*--------- Baby Footwear Cat ---------*/
	$scope.toggleBabyFootwearCat = function(babyFootwearCat) {
		if ($scope.isBabyClothesCategoryShown(babyFootwearCat)) {
			$scope.shownBabyCategory = null;
		} else {
			$scope.shownBabyCategory = babyFootwearCat;
		}
	};
	$scope.isBabyClothesAgeShown = function(babyFootwearCat) {
		return $scope.shownBabyCategory === babyFootwearCat;
	};
	/*--------- Baby Footwear Cat ---------*/
	/*--------- Baby Footwear Color ---------*/
	$scope.toggleBabyFootwearColor = function(babyFootwearColor) {
		if ($scope.isBabyClothesAgeShown(babyFootwearColor)) {
			$scope.shownBabyCategory = null;
		} else {
			$scope.shownBabyCategory = babyFootwearColor;
		}
	};
	$scope.isBabyClothesCategoryShown = function(babyFootwearColor) {
		return $scope.shownBabyCategory === babyFootwearColor;
	};
	/*--------- Baby Footwear Color ---------*/
	$scope.goToCategoryList = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.ShopByCategory');
	};
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('ShopByCategoryCtlr', function($scope, $ionicModal, $rootScope, $ionicPopup, $state, $ionicHistory, $ionicActionSheet, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	
	
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};

	
	
	$scope.CategroyTab1Class = "tab-item";
	$scope.CategroyTab2Class = "tab-item";
	$scope.CategroyTab3Class = "tab-item active";
	$scope.CategroyTab4Class = "tab-item";
	$scope.template0 = 'templates/baby-fashion/category-list-two-rows-image.html';
	$scope.template1 = 'templates/baby-fashion/category-list-single-row-with-big-image.html';
	$scope.template2 = 'templates/baby-fashion/category-list-single-row.html';
	
	$scope.template = 'templates/baby-fashion/category-list-two-rows-image.html';
	$scope.templatestatus=0;
	$scope.icon_class='fa fa-list';
	$scope.changeTab = function(index) {
		if (index == 1) {
			$scope.CategroyTab1Class = "tab-item active";
			$scope.CategroyTab2Class = "tab-item";
			$scope.CategroyTab3Class = "tab-item";
			$scope.CategroyTab4Class = "tab-item";
			//$scope.template = 'templates/';
		} else if (index == 2) {
			$scope.CategroyTab1Class = "tab-item";
			$scope.CategroyTab2Class = "tab-item active";
			$scope.CategroyTab3Class = "tab-item";
			$scope.CategroyTab4Class = "tab-item";
			//$scope.template = 'templates/';
		} else if (index == 3) {
			$scope.CategroyTab1Class = "tab-item";
			$scope.CategroyTab2Class = "tab-item";
			$scope.CategroyTab3Class = "tab-item active";
			$scope.CategroyTab4Class = "tab-item";
			//$scope.template = 'templates/baby-fashion/category-list-two-rows-image.html';
		} else {
			$scope.CategroyTab1Class = "tab-item";
			$scope.CategroyTab2Class = "tab-item";
			$scope.CategroyTab3Class = "tab-item";
			$scope.CategroyTab4Class = "tab-item active";
			//$scope.template = 'templates/';
		}
	};
	
	$scope.changeTabview = function() {
		if($scope.templatestatus==0){
			$scope.templatestatus='1';
			$scope.template=$scope.template1;
		}else if($scope.templatestatus==1){
			$scope.templatestatus='2';
			$scope.template=$scope.template2;
		}else{
			$scope.templatestatus='0';
			$scope.template=$scope.template0;
		}
		console.log($scope.templatestatus);
	};
	$ionicPopover.fromTemplateUrl('templates/baby-fashion/socialshare.html', {
		scope : $scope,
		}).then(function(socialsharepop) {
			$scope.socialsharepop = socialsharepop;
		});
	$scope.ShareShortList = function() {
		$scope.socialsharepop.show();
		
	};
	
	$scope.filters=[
	{'name':'Subcategory','tag_class':'FilterActive','icon':'','filters':[{'name':'Clothes & Shoes      -'},{'name':'Bath Time(384)'},{'name':'Caps, Gloves & Mittens (680)'},{'name':'Ethnic Wear (1137)'},{'name':'Footwear (384)'},{'name':'Frocks (384)'},{'name':'Inner Wear & Thermals (991)'},{'name':'Nightwear (384)'},{'name':'Onesies & Rompers (384)'},{'name':'Pajamas & Leggings (1140)'},{'name':'Party Wear (2484)'},{'name':'Rain Wear (184)'},{'name':'Set & Suits (1284)'},{'name':'Shirts (584)'},{'name':'Shorts, Skirts & Jeans (1384)'},{'name':'Socks & Tights (384)'}]},
	{'name':'Brands','tag_class':'','icon':'','filters':[{'name':'A.T.U.N'},{'name':'Abracadabra'},{'name':'Acute Angle'},{'name':'Adore'},{'name':'Anthill'},{'name':'AZ Baby'},{'name':'Baby League'},{'name':'Baby Mini'},{'name':'Baby Starters'},{'name':'Babyhug'},{'name':'Bachha Essential'},{'name':'Bee Born'},{'name':'Beebay'},{'name':'Baby Mini'},{'name':'Baby Starters'},{'name':'Babyhug'}],'filter_class':'filter_active'},
	{'name':'Price','tag_class':'','icon':'','filters':[{'name':'Rs 0 to 250'},{'name':'Rs 250 to 500'},{'name':'Rs 500 to 1000'},{'name':'Rs 1000 to 2000'}],'filter_class':'filter_hide'},
	{'name':'Discount','tag_class':'','icon':'','filters':[{'name':'Upto 10%'},{'name':'10%-20%'},{'name':'20%-30%'},{'name':'30%-40%'},{'name':'More than 40%'}],'filter_class':'filter_hide'},
	{'name':'Type','tag_class':'','icon':'','filters':[{'name':'small'},{'name':'large'},{'name':'Medium'},{'name':'Extra large'}]},
	{'name':'Age (5)','tag_class':'','icon':'','filters':[{'name':'0-1'},{'name':'1-2'},{'name':'2-3'},{'name':'3-4'},{'name':'4-5'},{'name':'5-6'},{'name':'6-7'},{'name':'7-8'},{'name':'8-9'},{'name':'9-10'},{'name':'Above 10'}],'filter_class':'filter_hide'},
	{'name':'Collection','tag_class':'','icon':'','filters':[{'name':'Flight Deck by Baby hug'},{'name':'Pokmon by Baby hug'},{'name':'Bleeding Bule by Baby hug'},{'name':'Marasala by Baby hug'}],'filter_class':'filter_hide'},
	{'name':'Color','tag_class':'','icon':'','filters':[{'name':'White'},{'name':'Black'},{'name':'Red'},{'name':'Blue'},{'name':'Orange'},{'name':'pink'},{'name':'Peach'},{'name':'Yellow'},{'name':'Grey'},{'name':'Brown'},{'name':'Maroon'},{'name':'Purple'},{'name':'Beige'},{'name':'Multi colours'}],'filter_class':'filter_hide'},
	{'name':'Material','tag_class':'','icon':'','filters':[{'name':'Acrylic (1)'},{'name':'Cotton (520)'},{'name':'Cotton Mixes or Cotton Poly (14)'},{'name':'Polyester (14)'}],'filter_class':'filter_hide'},
	{'name':'Premium','tag_class':'','icon':'','filters':[{'name':'Show Premium Products (322)'}],'filter_class':'filter_hide'},
	];
	$ionicModal.fromTemplateUrl('templates/baby-fashion/filter.html', {
		scope : $scope
	}).then(function(modal) {
		$scope.modalFilter = modal;
	});
	
	
	$scope.showfilersdata = function(index) {
		for(var i=0;i<$scope.filters.length;i++){
			if(index!=i){
				$scope.filters[i].tag_class='';
				$scope.filters[i].filter_class='filter_hide';
			}else{
				$scope.filters[i].tag_class='FilterActive';
				$scope.filters[i].filter_class='filter_active';
			}
		}
	  };
	
	
	$ionicModal.fromTemplateUrl('templates/baby-fashion/sortby.html', {
		scope : $scope,
		animation: 'slide-in-up'
	}).then(function(sortby) {
		$scope.sortby = sortby;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$ionicModal.fromTemplateUrl('templates/baby-fashion/personalize.html', {
		scope : $scope,
		animation: 'slide-in-up'
	}).then(function(personalize) {
		$scope.personalize = personalize;
	});
	$scope.goToDetail = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.ItemDetail');
	};
	
}).controller('TermandConditionCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.groups=[{"name":"1. General information"},{"name":"2. Account and Information"},{"name":"3. Pricing, Promotion & Coupon Codes"},{"name":"4. Third Party Offers"},{"name":"5. Transaction & Cancellations"},{"name":"6. User Conduct"},{"name":"7. Is it save to my Credit Card"},{"name":"8. Shop 'n' Earn Loyalty Cash"},{"name":"9. Guaranteed Saving Program"},{"name":"10. Other Terms"}];

$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
}).controller('PrivacypolicyCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.groups=[{"name":"1. Changes to Privacy Policy"},{"name":"2. Types of information Collected and Usesof Collected information"},{"name":"3. Release of Personally identifiable information"},{"name":"4. Release of Non-Personally identifiable information"},{"name":"5. Updating Information"},{"name":"6. Data tracking"},{"name":"7. Security of information"},{"name":"8. Privacy policy of Third Party Websites"},{"name":"9. Miscellaneous Privacy Issues"},{"name":"10. OPT-OUT of further usage of PERSONAL INFORMATION"},{"name":"11. OPT-OUT of NPII advertising"}];

$scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
}).controller('CustomerServicesCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToTermandCondition= function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.TermandCondition');
	};
	$scope.goToPrivacypolicy= function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Privacypolicy');
	};
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
})

.controller('TrackingorderCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
})
.controller('PremiumCtrl', function($scope, $rootScope, $stateParams, $state, $ionicHistory, $ionicPopover, $timeout, $ionicSlideBoxDelegate) {
	
	$scope.id = $stateParams.id;
	var pageid=$stateParams.id;
	//slideHasChanged($scope.id);
	//slideHasChangeds($scope.id);
	$scope.whichSlide = function(index) {
		if (index == 0) {

		} else if (index == 1) {

		} else if (index == 2) {

		} else if (index == 3) {

		} else if (index == 4) {

		} else if (index == 5) {

		} else if (index == 6) {

		} else if (index == 7) {

		}
	};
	
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	
	
	$scope.data = {
		slides : [{
			'title' : "Today's Boutiques",
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}, {
			'title' : 'Bestsellers',
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}, {
			'title' : 'Last Day',
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}, {
			'title' : 'Premium Brands',
			'template' : 'templates/premium-pages/premium_brands.html',
		}, {
			'title' : 'Shop By Category',
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}, {
			'title' : 'Shop By Age',
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}, {
			'title' : 'Upcoming Boutiques',
			'template' : 'templates/premium-pages/todays_boutiques.html',
		}]
	};
	$timeout(function() {
		$ionicSlideBoxDelegate.enableSlide(false);
		 //tabSlideBox.slideHasChanged($scope.id);
		 $ionicSlideBoxDelegate.slide($scope.id);
	},300);
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
}).controller('CartPageCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	
	$scope.cartItem=6;
	
	$scope.CartItemCount= function(amount) {
		$scope.cartItem=$scope.cartItem+(amount);
		if($scope.cartItem<=0){
			$scope.cartItem=0;
		}
	};
	
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToDeveleryPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('DeveleryAddress');
	};
}).controller('DeveleryAddressCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover, $ionicModal) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.OffersTab1Class = "tab-item";
	$scope.OffersTab2Class = "tab-item";
	$scope.OffersTab3Class = "tab-item active";
	$scope.OffersTab4Class = "tab-item";
	$scope.template = 'templates/cart/payment.html';
	$scope.changeTab = function(index) {
		if (index == 1) {
			$scope.OffersTab1Class = "tab-item active";
			$scope.OffersTab2Class = "tab-item";
			$scope.OffersTab3Class = "tab-item";
			$scope.OffersTab4Class = "tab-item";
			$scope.template = 'templates/';
		} else if (index == 2) {
			$scope.OffersTab1Class = "tab-item";
			$scope.OffersTab2Class = "tab-item active";
			$scope.OffersTab3Class = "tab-item";
			$scope.OffersTab4Class = "tab-item";
			$scope.template = 'templates/cart/delivery-from.html';
		} else if (index == 3) {
			$scope.OffersTab1Class = "tab-item";
			$scope.OffersTab2Class = "tab-item";
			$scope.OffersTab3Class = "tab-item active";
			$scope.OffersTab4Class = "tab-item";
			$scope.template = 'templates/cart/summary.html';
		} else {
			$scope.OffersTab1Class = "tab-item";
			$scope.OffersTab2Class = "tab-item";
			$scope.OffersTab3Class = "tab-item";
			$scope.OffersTab4Class = "tab-item active";
			$scope.template = 'templates/cart/payment.html';
		} 
	};
	$scope.onSummary = function() {
		$scope.changeTab(3);
	};
	
	$scope.SummaryTab1Class = "tab-item active";
	$scope.SummaryTab2Class = "tab-item";
	$scope.SummaryTab3Class = "tab-item ";
	$scope.SummaryTab = 'templates/cart/apply-coupon.html';
	$scope.changeTabs = function(index) {
		if (index == 1) {
			$scope.SummaryTab1Class = "tab-item active";
			$scope.SummaryTab2Class = "tab-item";
			$scope.SummaryTab3Class = "tab-item";
			$scope.SummaryTab = 'templates/cart/apply-coupon.html';
		} else if (index == 2) {
			$scope.SummaryTab1Class = "tab-item";
			$scope.SummaryTab2Class = "tab-item active";
			$scope.SummaryTab3Class = "tab-item";
			$scope.SummaryTab = 'templates/cart/loyalty-cash.html';
		} else {
			$scope.SummaryTab1Class = "tab-item";
			$scope.SummaryTab2Class = "tab-item";
			$scope.SummaryTab3Class = "tab-item active";
			$scope.SummaryTab = 'templates/cart/earn-payback.html';
		} 
	};
	
	$ionicModal.fromTemplateUrl('templates/popups/add-gift-wrap.html', {
		scope : $scope,
		animation: 'slide-in-up'
	}).then(function(addGiftWrap) {
		$scope.addGiftWrap = addGiftWrap;
	});
	
}).controller('ItemDetailCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	$scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
})




.controller('MyaccountCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
	
	$scope.toggleGroup = function(group) {
	    if ($scope.isGroupShown(group)) {
	      $scope.shownGroup = null;
	    } else {
	      $scope.shownGroup = group;
	    }
	  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
	
})

.controller('LoyaltyCashCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
	
}).controller('CashRefund', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
	
}).controller('CashCouponsCtrl', function($scope, $rootScope, $state, $ionicHistory, $ionicPopover) {
	
	$scope.goToDashboard = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Dashboard');
	};
	$scope.demo = 'android';
	$ionicPopover.fromTemplateUrl('templates/popups/more-popover.html', {
		scope : $scope,
	}).then(function(popover) {
		$scope.popover = popover;
	});
	$ionicPopover.fromTemplateUrl('templates/popups/socialshare.html', {
		scope : $scope,
	}).then(function(socialshare) {
		$scope.socialshare = socialshare;
	});
  $scope.goToCartPage = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Cart');
	};
	
	
})






.controller('PopoverCtrl', function($scope, $rootScope, $state, $ionicHistory) {
	
	$scope.whichSlide = function(index) {
		if (index == 0) {

		} else if (index == 1) {

		} else if (index == 2) {

		} else if (index == 3) {

		} else if (index == 4) {

		} else if (index == 5) {

		} else if (index == 6) {

		} else if (index == 7) {

		}
	};
	
	$scope.goToLoginRegister = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.LoginRegister');
	};
	$scope.goToTermandCondition= function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.TermandCondition');
	};
	$scope.goToPrivacypolicy= function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Privacypolicy');
	};
	$scope.goToCustomerServices= function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.CustomerServices');
	};
	$scope.goToNotifications = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Notifications');
	};
	$scope.goToTrackingorder = function() {
		$ionicHistory.nextViewOptions({
			historyRoot : true,
			disableAnimate : true,
		});
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$state.go('Menu.Trackingorder');
	};
	
	
});

