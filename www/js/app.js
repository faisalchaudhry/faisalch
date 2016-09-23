angular.module('FirstCoo', ['ionic', 'FirstCoo.controllers', 'tabSlideBox']).run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
}).config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	$stateProvider.state('Splash', {
		cache : false,
		url : '/Splash',
		templateUrl : 'templates/splash.html',
		controller : 'SplashCtlr'
	}).state('Menu', {
		url : '/Menu',
		abstract : true,
		templateUrl : 'templates/menu.html',
		controller : 'MenuCtlr'
	}).state('Menu.Dashboard', {
		url : '/Dashboard',
		views : {
			'menuContent' : {
				templateUrl : 'templates/dashboard.html',
				controller : 'DashboardCtlr'
			}
		}
	}).state('Menu.Notifications', {
		url : '/Notifications',
		views : {
			'menuContent' : {
				templateUrl : 'templates/notifications.html',
				controller : 'NotificationsCtlr'
			}
		}
	}).state('Menu.OfferZone', {
		url : '/OfferZone',
		views : {
			'menuContent' : {
				templateUrl : 'templates/offer-zone.html',
				controller : 'OfferZoneCtlr'
			}
		}
	}).state('Menu.RecentlyViewed', {
		url : '/RecentlyViewed',
		views : {
			'menuContent' : {
				templateUrl : 'templates/recently-viewed.html',
				controller : 'RecentlyViewedCtlr'
			}
		}
	}).state('Menu.ShortList', {
		url : '/ShortList',
		views : {
			'menuContent' : {
				templateUrl : 'templates/my-shortlist.html',
				controller : 'ShortListCtlr'
			}
		}
	}).state('Menu.QuickReorder', {
		url : '/QuickReorder',
		views : {
			'menuContent' : {
				templateUrl : 'templates/quick-reorder.html',
				controller : 'QuickReorderCtlr'
			}
		}
	}).state('Menu.LoginRegister', {
		url : '/LoginRegister',
		views : {
			'menuContent' : {
				templateUrl : 'templates/login-register.html',
				controller : 'LoginRegisterCtlr'
			}
		}
	}).state('Menu.BabyClothes', {
		url : '/BabyClothes',
		views : {
			'menuContent' : {
				templateUrl : 'templates/baby-fashion/baby-clothes.html',
				controller : 'BabyClothesCtlr'
			}
		}
	}).state('Menu.ShopByCategory', {
		url : '/ShopByCategory',
		views : {
			'menuContent' : {
				templateUrl : 'templates/baby-fashion/shop-by-category.html',
				controller : 'ShopByCategoryCtlr'
			}
		}
	}).state('Menu.TermandCondition', {
		url : '/TermandCondition',
		views : {
			'menuContent' : {
				templateUrl : 'templates/termandcondition.html',
				controller : 'TermandConditionCtrl'
			}
		}
	}).state('Menu.Privacypolicy', {
		url : '/Privacypolicy',
		views : {
			'menuContent' : {
				templateUrl : 'templates/privacypolicy.html',
				controller : 'PrivacypolicyCtrl'
			}
		}
	}).state('Menu.CustomerServices', {
		url : '/CustomerServices',
		views : {
			'menuContent' : {
				templateUrl : 'templates/customerservices.html',
				controller : 'CustomerServicesCtrl'
			}
		}
	}).state('Menu.Trackingorder', {
		url : '/Trackingorder',
		views : {
			'menuContent' : {
				templateUrl : 'templates/trackingorder.html',
				controller : 'TrackingorderCtrl'
			}
		}
	}).state('Menu.Premium', {
		url : '/Premium/:id',
		views : {
			'menuContent' : {
				templateUrl : 'templates/premium.html',
				controller : 'PremiumCtrl'
			}
		}
	}).state('Menu.Cart', {
		url : '/Cart',
		views : {
			'menuContent' : {
				templateUrl : 'templates/cart/cart.html',
				controller : 'CartPageCtrl'
			}
		}
	}).state('DeveleryAddress', {
		cache : false,
		url : '/DeveleryAddress',
		templateUrl : 'templates/cart/delivery-address.html',
		controller : 'DeveleryAddressCtrl'
	}).state('Menu.ItemDetail', {
		url : '/ItemDetail',
		views : {
			'menuContent' : {
				templateUrl : 'templates/item-detail.html',
				controller : 'ItemDetailCtrl'
			}
		}
	}).state('Menu.LoyaltyCash', {
		url : '/LoyaltyCash',
		views : {
			'menuContent' : {
				templateUrl : 'templates/loyaltycash.html',
				controller : 'LoyaltyCashCtrl'
			}
		}
	}).state('Menu.CashRefund', {
		url : '/CashRefund',
		views : {
			'menuContent' : {
				templateUrl : 'templates/cashrefund.html',
				controller : 'CashRefundCtrl'
			}
		}
	}).state('Menu.CashCoupons', {
		url : '/CashCoupons',
		views : {
			'menuContent' : {
				templateUrl : 'templates/cashcoupons.html',
				controller : 'CashCouponsCtrl'
			}
		}
	})
	
	
	
	
	
	
	
	.state('Menu.Myaccount', {
		url : '/Myaccount',
		views : {
			'menuContent' : {
				templateUrl : 'templates/my-account.html',
				controller : 'MyaccountCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/Splash');

});
