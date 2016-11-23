angular.module('app.controllers', [])
  
.controller('adminCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite) {
	var db = $cordovaSQLite.openDB({name: "Gimatex.db", iosDatabaseLocation: 'Library'});

	$scope.pendingOrders = function(){
		if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] ==1){
			$state.go('menu.pendingOrders');
		}
		else if(window.localStorage['UserType'] == 2){
			var query = "SELECT table_sales_pers_master.sales_pers_master_sp_name FROM table_sales_pers_master WHERE trim(table_sales_pers_master.sales_pers_master_sales_pers) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.agentToCustomers', {'agentId':window.localStorage['ERP_Code'], 'agentName': res.rows.item(0).sales_pers_master_sp_name});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
		else if(window.localStorage['UserType'] == 4){
			var query = "SELECT table_sales_pers_master.sales_pers_master_sp_name FROM table_sales_pers_master WHERE trim(table_sales_pers_master.sales_pers_master_sales_pers) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.agentToCustomers', {'agentId':window.localStorage['ERP_Code'], 'agentName': res.rows.item(0).sales_pers_master_sp_name});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
		else if(window.localStorage['UserType'] == 5){
			var query = "SELECT table_sales_pers_master.sales_pers_master_sp_name FROM table_sales_pers_master WHERE trim(table_sales_pers_master.sales_pers_master_sales_pers) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.agentToCustomers', {'agentId':window.localStorage['ERP_Code'], 'agentName': res.rows.item(0).sales_pers_master_sp_name});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
		else if(window.localStorage['UserType'] == 3){
			var query = "SELECT DISTINCT sales_pers_master_sp_name, cust_name, table_track_your_order.track_your_order_cust_code, table_track_your_order.track_your_order_sales_pers FROM table_customer, table_track_your_order, table_sales_pers_master WHERE table_sales_pers_master.sales_pers_master_sales_pers = table_track_your_order.track_your_order_sales_pers AND table_customer.cust_code = table_track_your_order.track_your_order_cust_code AND trim(table_track_your_order.track_your_order_cust_code) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.customerOrderDetails', {'custId': res.rows.item(0).track_your_order_cust_code, 'custName':res.rows.item(0).cust_name, 'agentId':res.rows.item(0).track_your_order_sales_pers, 'agentName':res.rows.item(0).sales_pers_master_sp_name, 'productLine':window.localStorage['ProductLine']});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
	};

	$scope.receivableAgeing = function(){
		if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] ==1){
			$state.go('menu.receivableAgeing');
		}
		else if(window.localStorage['UserType'] == 2){
			var query = "SELECT table_sales_pers_master.sales_pers_master_sp_name FROM table_sales_pers_master WHERE trim(table_sales_pers_master.sales_pers_master_sales_pers) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.agentToCustomersAgeing', {'agentId':window.localStorage['ERP_Code'], 'agentName': res.rows.item(0).sales_pers_master_sp_name});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
		else if(window.localStorage['UserType'] == 3){
			var query = "SELECT DISTINCT sales_pers_master_sp_name, cust_name, table_track_your_order.track_your_order_cust_code, table_track_your_order.track_your_order_sales_pers FROM table_customer, table_track_your_order, table_sales_pers_master WHERE table_sales_pers_master.sales_pers_master_sales_pers = table_track_your_order.track_your_order_sales_pers AND table_customer.cust_code = table_track_your_order.track_your_order_cust_code AND trim(table_track_your_order.track_your_order_cust_code) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.customerAgeingDetails', {'custId': res.rows.item(0).track_your_order_cust_code, 'custName':res.rows.item(0).cust_name, 'agentId':res.rows.item(0).track_your_order_sales_pers, 'agentName':res.rows.item(0).sales_pers_master_sp_name, 'productLine':window.localStorage['ProductLine']});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
	}

	$scope.dispatches = function(){
		if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] ==1){
			$state.go('menu.dispatches');
		}
		else if(window.localStorage['UserType'] == 2){
			var query = "SELECT table_sales_pers_master.sales_pers_master_sp_name FROM table_sales_pers_master WHERE trim(table_sales_pers_master.sales_pers_master_sales_pers) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.agentToCustomersDispatches', {'agentId':window.localStorage['ERP_Code'], 'agentName': res.rows.item(0).sales_pers_master_sp_name});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
		else if(window.localStorage['UserType'] == 3){
			var query = "SELECT DISTINCT sales_pers_master_sp_name, cust_name, table_track_your_order.track_your_order_cust_code, table_track_your_order.track_your_order_sales_pers FROM table_customer, table_track_your_order, table_sales_pers_master WHERE table_sales_pers_master.sales_pers_master_sales_pers = table_track_your_order.track_your_order_sales_pers AND table_customer.cust_code = table_track_your_order.track_your_order_cust_code AND trim(table_track_your_order.track_your_order_cust_code) = '"+window.localStorage['ERP_Code']+"'";
			$cordovaSQLite.execute(db, query).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		$state.go('menu.customerDispatchDetails', {'custId': res.rows.item(0).track_your_order_cust_code, 'custName':res.rows.item(0).cust_name, 'agentId':res.rows.item(0).track_your_order_sales_pers, 'agentName':res.rows.item(0).sales_pers_master_sp_name, 'productLine':window.localStorage['ProductLine']});
		    	}
		    }, function (err) {
		        console.error(err);
		    });
		}
	}

}])

.controller('pendingOrdersCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$ionicLoading', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $ionicLoading, $state) {
	

	$scope.userType = window.localStorage['UserType'];
	$scope.cat1 = 'products';
	//$scope.category = '';
	$scope.agents = [];
	//alert($scope.products);
	
	if(window.localStorage['UserType'] == 1){
		$scope.products = window.localStorage['ProductLine'];
		var condition = "trim(order_summery_product_line) = trim('"+window.localStorage['ProductLine']+"')";
	}
	else{
		$scope.products = 'FAB';
		var condition = "trim(order_summery_product_line) = trim('"+$scope.products+"')";
	}
	$ionicLoading.show({template:"Loading..."});
	
	var query = "SELECT table_order_summery.order_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, sum(table_order_summery.order_summery_order_count) AS no_of_order, sum(table_order_summery.order_summery_sum_pend_qty) AS qty_sum FROM table_order_summery, table_sales_pers_master WHERE table_order_summery.order_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_order_summery.order_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
	//console.log(query);
    $cordovaSQLite.execute(db, query).then(function(res) {
    	//alert(res.rows.length);
    	if(res.rows.length > 0){
    		var total_no_of_order = 0;
    		var total_pending_qty = 0;
    		for(var i = 0;i<res.rows.length; i++){
    			$scope.agents.push(res.rows.item(i));
    			total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
    		}
    		$scope.total_order = total_no_of_order;
    		$scope.total_pending_qty = total_pending_qty;
    		//console.log($scope.agents);
    		$ionicLoading.hide();
    	}
    }, function (err) {
        console.error(err);
    });

	
	$scope.changeCat = function(cat){
		$scope.agents = [];
		$scope.cat1 = cat;
		if(window.localStorage['UserType'] == 1){
			$scope.products = window.localStorage['ProductLine'];
			var condition = "trim(order_summery_product_line) = trim('"+window.localStorage['ProductLine']+"')";
		}
		else{
				//$scope.products = 'FAB';
				var condition = "";
		}
		$ionicLoading.show({template:"Loading..."});
		if(cat == 'products'){
			var query = "SELECT table_order_summery.order_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, sum(table_order_summery.order_summery_order_count) AS no_of_order, sum(table_order_summery.order_summery_sum_pend_qty) AS qty_sum FROM table_order_summery, table_sales_pers_master WHERE table_order_summery.order_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(order_summery_product_line) = '"+$scope.products+"' GROUP BY table_order_summery.order_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else if(cat == 'agents'){
			
			var query = "SELECT table_order_summery.order_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, sum(table_order_summery.order_summery_order_count) AS no_of_order, sum(table_order_summery.order_summery_sum_pend_qty) AS qty_sum FROM table_order_summery, table_sales_pers_master WHERE table_order_summery.order_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_order_summery.order_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else{
			
			var query = "SELECT table_order_summery.order_summery_sales_pers, order_summery_product_line, table_customer.cust_name AS sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, table_order_summery.order_summery_order_count AS no_of_order, table_order_summery.order_summery_sum_pend_qty AS qty_sum, table_sales_pers_master.sales_pers_master_sp_name AS agent_name FROM table_order_summery, table_customer, table_sales_pers_master WHERE table_order_summery.order_summery_cust_code = table_customer.cust_code AND "+condition+"  GROUP BY table_order_summery.order_summery_cust_code ORDER BY table_customer.cust_name ASC";
		}

		$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	}

	

    $scope.searchBy = function(search){
    	$scope.agents = [];
    	$ionicLoading.show({template:"Loading..."});
    	var query = "SELECT table_order_summery.order_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, sum(table_order_summery.order_summery_order_count) AS no_of_order, sum(table_order_summery.order_summery_sum_pend_qty) AS qty_sum FROM table_order_summery, table_sales_pers_master WHERE table_order_summery.order_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(order_summery_product_line) = '"+search+"' GROUP BY table_order_summery.order_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
	    $cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
    }

    $scope.showCustomers = function(Id, Name, category){
    	$state.go('menu.agentToCustomers', {'agentId':Id, 'agentName': Name});
    }

    $scope.orderDetails = function(aId, cName, cId, aName, prodLine){
    	$state.go('menu.customerOrderDetails', {'custId': cId, 'custName':cName, 'agentId':aId, 'agentName':aName, 'productLine':prodLine});
    }
}])

.controller('agentToCustomersCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$ionicLoading', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $ionicLoading, $state) {

	$scope.title = $stateParams.agentName;
	$scope.agents = [];
	if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] == 1 || window.localStorage['UserType'] == 2){
		var condition = "trim(table_order_summery.order_summery_sales_pers) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 4){
		var condition = "trim(table_order_summery.order_summery_sales_pers_1) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 5){
		var condition = "trim(table_order_summery.order_summery_sales_pers_2) = trim('"+$stateParams.agentId+"')";
	}
	var query = "SELECT table_order_summery.order_summery_sales_pers, table_customer.cust_name AS sales_pers_master_sp_name, table_order_summery.order_summery_cust_code, sum(table_order_summery.order_summery_order_count) AS no_of_order, sum(table_order_summery.order_summery_sum_pend_qty) AS qty_sum, table_order_summery.order_summery_product_line FROM table_order_summery, table_customer WHERE table_order_summery.order_summery_cust_code = table_customer.cust_code AND "+condition+"  GROUP BY table_order_summery.order_summery_cust_code ORDER BY table_customer.cust_name ASC";
	console.log(query);
	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });

	$scope.orderDetail = function(cId, cName, aId, aName, prodLine){
		$state.go('menu.customerOrderDetails', {'custId': cId, 'custName':cName, 'agentId':aId, 'agentName':aName, 'productLine':prodLine});
	}

}])

.controller('customerOrderDetailsCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite, $ionicLoading) {

	var custId = $stateParams.custId;
	$scope.custName = $stateParams.custName;
	var agentId = $stateParams.agentId;
	$scope.agentName = $stateParams.agentName;
	var prodLine = $stateParams.productLine;

	$scope.orderDetails = [];
	
	var query = "SELECT table_track_your_order.*, table_item_master.item_master_item_descr FROM table_track_your_order, table_item_master WHERE table_track_your_order.track_your_order_item_code = table_item_master.item_master_item_code AND trim(table_track_your_order.track_your_order_sales_pers) = trim('"+agentId+"') AND trim(table_track_your_order.track_your_order_product_line) = trim('"+prodLine+"') AND trim(table_track_your_order.track_your_order_cust_code) = trim('"+custId+"')";
	console.log(query);
	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.orderDetails.push(res.rows.item(i));
	    			
	    		}
	    		
	    		console.log($scope.orderDetails);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	

}])

.controller('receivableAgeingCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite, $ionicLoading) {

	$scope.cat1 = 'products';
	//$scope.category = '';
	if(window.localStorage['UserType'] == 1){
		$scope.products = window.localStorage['ProductLine'];
		var condition = "trim(ageing_summery_product_line) = trim('"+window.localStorage['ProductLine']+"')";
	}
	else{
		$scope.products = 'FAB';
		var condition = "trim(ageing_summery_product_line) = trim('"+$scope.products+"')";
	}
	
	$scope.agents = [];
	//alert($scope.products);
	$ionicLoading.show({template:"Loading..."});
	var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code,sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum FROM table_ageing_summery, table_sales_pers_master WHERE  table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_ageing_summery.ageing_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
    $cordovaSQLite.execute(db, query).then(function(res) {
    	//alert(res.rows.length);
    	if(res.rows.length > 0){
    		//var total_no_of_order = 0;
    		var total_pending_qty = 0;
    		for(var i = 0;i<res.rows.length; i++){
    			$scope.agents.push(res.rows.item(i));
    			//total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
    		}
    		//$scope.total_order = total_no_of_order;
    		$scope.total_pending_qty = total_pending_qty;
    		//console.log($scope.agents);
    		$ionicLoading.hide();
    	}
    	else{
    		$ionicLoading.hide(); 
    	}
    }, function (err) {
        console.error(err);
    });

    $scope.searchBy = function(search){
    	$scope.agents = [];
    	$ionicLoading.show({template:"Loading..."});
    	var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code,sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum FROM table_ageing_summery, table_sales_pers_master WHERE  table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(table_ageing_summery.ageing_summery_product_line) = '"+search+"' GROUP BY table_ageing_summery.ageing_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
	    $cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		//var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			//total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		//$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
    }

    $scope.changeCat = function(cat){
		$scope.agents = [];
		$scope.cat1 = cat;
		if(window.localStorage['UserType'] == 1){
			$scope.products = window.localStorage['ProductLine'];
			var condition = "trim(ageing_summery_product_line) = trim('"+window.localStorage['ProductLine']+"')";
		}
		else{
				//$scope.products = 'FAB';
				var condition = "";
		}
		$ionicLoading.show({template:"Loading..."});
		if(cat == 'products'){
			var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code,sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum FROM table_ageing_summery, table_sales_pers_master WHERE  table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(table_ageing_summery.ageing_summery_product_line) = trim('"+$scope.products+"') GROUP BY table_ageing_summery.ageing_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else if(cat == 'agents'){
			var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, table_sales_pers_master.sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code, sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum FROM table_ageing_summery, table_sales_pers_master WHERE table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_ageing_summery.ageing_summery_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else{
			var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, ageing_summery_product_line, table_customer.cust_name AS sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code,  sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum, table_sales_pers_master.sales_pers_master_sp_name AS agent_name FROM table_ageing_summery, table_customer, table_sales_pers_master WHERE table_ageing_summery.ageing_summery_cust_code = table_customer.cust_code AND table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_ageing_summery.ageing_summery_cust_code ORDER BY table_customer.cust_name ASC";
		}

		$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	}

	$scope.showCustomers = function(Id, Name, category){
    	$state.go('menu.agentToCustomersAgeing', {'agentId':Id, 'agentName': Name});
    }

}])

.controller('agentToCustomersAgeingCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$ionicLoading', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $ionicLoading, $state) {

	$scope.title = $stateParams.agentName;
	$scope.agents = [];
	if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] == 1 || window.localStorage['UserType'] == 2){
		var condition = "trim(table_ageing_summery.ageing_summery_sales_pers) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 4){
		var condition = "trim(table_ageing_summery.ageing_summery_sales_pers_1) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 5){
		var condition = "trim(table_ageing_summery.ageing_summery_sales_pers_2) = trim('"+$stateParams.agentId+"')";
	}
	var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, table_customer.cust_name AS sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code, sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum, table_ageing_summery.ageing_summery_product_line FROM table_ageing_summery, table_customer WHERE table_ageing_summery.ageing_summery_cust_code = table_customer.cust_code AND "+condition+"  GROUP BY table_ageing_summery.ageing_summery_cust_code ORDER BY table_customer.cust_name ASC";
	//console.log(query)

	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		//var total_no_of_order = 0;
	    		var total_pending_qty = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			//total_no_of_order = parseInt(total_no_of_order) + parseInt(res.rows.item(i).no_of_order);
	    			total_pending_qty = parseInt(total_pending_qty) + parseInt(res.rows.item(i).qty_sum);
	    		}
	    		//$scope.total_order = total_no_of_order;
	    		$scope.total_pending_qty = total_pending_qty;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });

	$scope.orderDetail = function(cId, cName, aId, aName, prodLine){
		$state.go('menu.customerAgeingDetails', {'custId': cId, 'custName':cName, 'agentId':aId, 'agentName':aName, 'productLine':prodLine});
	}

}])

.controller('customerAgeingDetailsCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite, $ionicLoading) {

	var custId = $stateParams.custId;
	$scope.custName = $stateParams.custName;
	var agentId = $stateParams.agentId;
	$scope.agentName = $stateParams.agentName;
	var prodLine = $stateParams.productLine;

	$scope.ageingDetails = [];
	
	var query = "SELECT table_ageing.* FROM table_ageing WHERE trim(sales_pers) = trim('"+agentId+"') AND trim(product_line) = trim('"+prodLine+"') AND trim(cust_code) = trim('"+custId+"')";
	console.log(query)
	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.ageingDetails.push(res.rows.item(i));
	    			
	    		}
	    		
	    		console.log($scope.ageingDetails);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	

}])

.controller('dispatchesCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite, $ionicLoading) {

	$scope.cat1 = 'products';
	//$scope.category = '';
	if(window.localStorage['UserType'] == 1){
		$scope.products = window.localStorage['ProductLine'];
		var condition = "trim(dispatces_summary_product_line) = trim('"+window.localStorage['ProductLine']+"')";
	}
	else{
		$scope.products = 'FAB';
		var condition = "trim(dispatces_summary_product_line) = trim('"+$scope.products+"')";
	}
	
	$scope.agents = [];
	//alert($scope.products);
	$ionicLoading.show({template:"Loading..."});

	var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_dispatces_summary.dispatces_summary_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
    $cordovaSQLite.execute(db, query).then(function(res) {
    	//alert(res.rows.length);
    	if(res.rows.length > 0){
    		var total_no_of_invs = 0;
    		var total_qty = 0;
    		var total_amt = 0;
    		for(var i = 0;i<res.rows.length; i++){
    			$scope.agents.push(res.rows.item(i));
    			total_no_of_invs = parseInt(total_no_of_invs) + parseInt(res.rows.item(i).no_of_invs);
    			total_qty = parseInt(total_qty) + parseInt(res.rows.item(i).qty_sum);
    			total_amt = parseInt(total_amt) + parseInt(res.rows.item(i).sum_amt);
    		}
    		$scope.total_invs = total_no_of_invs;
    		$scope.total_pending_qty = total_qty;
    		$scope.total_amt = total_amt;
    		console.log($scope.agents);
    		$ionicLoading.hide();
    	}
    }, function (err) {
        console.error(err);
    });

    $scope.searchBy = function(search){
    	$scope.agents = [];
    	$ionicLoading.show({template:"Loading..."});
    	var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(table_dispatces_summary.dispatces_summary_product_line) = '"+search+"' GROUP BY table_dispatces_summary.dispatces_summary_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
	    $cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_invs = 0;
	    		var total_qty = 0;
	    		var total_amt = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_invs = parseInt(total_no_of_invs) + parseInt(res.rows.item(i).no_of_invs);
	    			total_qty = parseInt(total_qty) + parseInt(res.rows.item(i).qty_sum);
	    			total_amt = parseInt(total_amt) + parseInt(res.rows.item(i).sum_amt);
	    		}
	    		$scope.total_invs = total_no_of_invs;
	    		$scope.total_pending_qty = total_qty;
	    		$scope.total_amt = total_amt;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
    }

    $scope.changeCat = function(cat){
		$scope.agents = [];
		$scope.cat1 = cat;
		if(window.localStorage['UserType'] == 1){
			$scope.products = window.localStorage['ProductLine'];
			var condition = "trim(dispatces_summary_product_line) = trim('"+window.localStorage['ProductLine']+"')";
		}
		else{
				//$scope.products = 'FAB';
				var condition = "";
		}
		$ionicLoading.show({template:"Loading..."});
		if(cat == 'products'){
			var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND trim(table_dispatces_summary.dispatces_summary_product_line) = '"+$scope.products+"' GROUP BY table_dispatces_summary.dispatces_summary_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else if(cat == 'agents'){
			var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND "+condition+" GROUP BY table_dispatces_summary.dispatces_summary_sales_pers ORDER BY table_sales_pers_master.sales_pers_master_sp_name ASC";
		}
		else{
			var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code,table_customer.cust_name AS sales_pers_master_sp_name, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master, table_customer WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND table_dispatces_summary.dispatces_summary_cust_code = table_customer.cust_code AND "+condition+" GROUP BY table_dispatces_summary.dispatces_summary_cust_code ORDER BY table_customer.cust_name ASC";

			// var query = "SELECT table_ageing_summery.ageing_summery_sales_pers, ageing_summery_product_line, table_customer.cust_name AS sales_pers_master_sp_name, table_ageing_summery.ageing_summery_cust_code,  sum(table_ageing_summery.ageing_summery_sum_tot_os) AS qty_sum, table_sales_pers_master.sales_pers_master_sp_name AS agent_name FROM table_ageing_summery, table_customer, table_sales_pers_master WHERE table_ageing_summery.ageing_summery_cust_code = table_customer.cust_code AND table_ageing_summery.ageing_summery_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers  GROUP BY table_ageing_summery.ageing_summery_sales_pers ORDER BY table_customer.cust_name ASC";
		}

		$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_invs = 0;
	    		var total_qty = 0;
	    		var total_amt = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_invs = parseInt(total_no_of_invs) + parseInt(res.rows.item(i).no_of_invs);
	    			total_qty = parseInt(total_qty) + parseInt(res.rows.item(i).qty_sum);
	    			total_amt = parseInt(total_amt) + parseInt(res.rows.item(i).sum_amt);
	    		}
	    		$scope.total_invs = total_no_of_invs;
	    		$scope.total_pending_qty = total_qty;
	    		$scope.total_amt = total_amt;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	}

	$scope.showCustomers = function(Id, Name, category){
    	$state.go('menu.agentToCustomersDispatches', {'agentId':Id, 'agentName': Name});
    }

}])

.controller('agentToCustomersDispatchesCtrl', ['$scope', '$stateParams', '$cordovaSQLite', '$ionicLoading', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite, $ionicLoading, $state) {

	$scope.title = $stateParams.agentName;
	$scope.agents = [];
	// SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, table_sales_pers_master.sales_pers_master_sp_name, dispatces_summary_cust_code,table_customer.cust_name AS sales_pers_master_sp_name, dispatces_summary_site_code, dispatces_summary_product_line, sum(dispatces_summary_sum_amount) AS sum_amt, sum(dispatces_summary_sum_desp_qty) AS qty_sum, sum(dispatces_summary_sum_no_art) AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master, table_customer WHERE  table_dispatces_summary.dispatces_summary_sales_pers = table_sales_pers_master.sales_pers_master_sales_pers AND table_dispatces_summary.dispatces_summary_cust_code = table_customer.cust_code GROUP BY table_dispatces_summary.dispatces_summary_sales_pers ORDER BY table_customer.cust_name ASC
	if(window.localStorage['UserType'] == 0 || window.localStorage['UserType'] == 1 || window.localStorage['UserType'] == 2){
		var condition = "trim(table_dispatces_summary.dispatces_summary_sales_pers) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 4){
		var condition = "trim(table_dispatces_summary.dispatces_summary_sales_pers_1) = trim('"+$stateParams.agentId+"')";
	}
	else if(window.localStorage['UserType'] == 5){
		var condition = "trim(table_dispatces_summary.dispatces_summary_sales_pers_2) = trim('"+$stateParams.agentId+"')";
	}
	var query = "SELECT dispatces_summary_sales_pers, dispatces_summary_sales_pers_2, dispatces_summary_cust_code,table_customer.cust_name AS sales_pers_master_sp_name, dispatces_summary_site_code, dispatces_summary_product_line, dispatces_summary_sum_amount AS sum_amt, dispatces_summary_sum_desp_qty AS qty_sum, dispatces_summary_sum_no_art AS no_of_invs FROM table_dispatces_summary, table_sales_pers_master, table_customer WHERE table_dispatces_summary.dispatces_summary_cust_code = table_customer.cust_code AND "+condition+"  GROUP BY table_dispatces_summary.dispatces_summary_cust_code ORDER BY table_customer.cust_name ASC";
	//console.log(query)

	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		var total_no_of_invs = 0;
	    		var total_qty = 0;
	    		var total_amt = 0;
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.agents.push(res.rows.item(i));
	    			total_no_of_invs = parseInt(total_no_of_invs) + parseInt(res.rows.item(i).no_of_invs);
	    			total_qty = parseInt(total_qty) + parseInt(res.rows.item(i).qty_sum);
	    			total_amt = parseInt(total_amt) + parseInt(res.rows.item(i).sum_amt);
	    		}
	    		$scope.total_invs = total_no_of_invs;
	    		$scope.total_pending_qty = total_qty;
	    		$scope.total_amt = total_amt;
	    		//console.log($scope.agents);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });

	$scope.orderDetail = function(cId, cName, aId, aName, prodLine){
		$state.go('menu.customerDispatchDetails', {'custId': cId, 'custName':cName, 'agentId':aId, 'agentName':aName, 'productLine':prodLine});
	}

}])

.controller('customerDispatchDetailsCtrl', ['$scope', '$stateParams', '$state', '$cordovaSQLite', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaSQLite, $ionicLoading) {

	var custId = $stateParams.custId;
	$scope.custName = $stateParams.custName;
	var agentId = $stateParams.agentId;
	$scope.agentName = $stateParams.agentName;
	var prodLine = $stateParams.productLine;

	$scope.dispatchDetails = [];
	
	var query = "SELECT table_dispatces.*, table_item_master.item_master_item_descr FROM table_dispatces, table_item_master WHERE table_dispatces.dispatces_item_code = table_item_master.item_master_item_code AND trim(table_dispatces.dispatces_sales_pers) = trim('"+agentId+"') AND trim(table_dispatces.dispatces_product_line) = trim('"+prodLine+"') AND trim(table_dispatces.dispatces_cust_code) = trim('"+custId+"')";
	//console.log(query)
	$cordovaSQLite.execute(db, query).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.dispatchDetails.push(res.rows.item(i));
	    			
	    		}
	    		
	    		//console.log($scope.ageingDetails);
	    		$ionicLoading.hide();
	    	}
	    }, function (err) {
	        console.error(err);
	    });
	

}])

.controller('contactCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('downloadsCtrl', ['$scope', '$stateParams', '$cordovaInAppBrowser', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaInAppBrowser) {
	$scope.downloadBrchr = function(){
		
		var options = {
	      location: 'yes',
	      clearcache: 'yes',
	      toolbar: 'no'
	   };

	   
	      $cordovaInAppBrowser.open('http://gimatex.co.in/gforce/files/downloads/brochure.pdf', '_blank', options)
			
	      .then(function(event) {
	         // success
	      })
			
	      .catch(function(event) {
	         // error
	      });
	   

		// var url = "http://gimatex.co.in/gforce/files/downloads/brochure.pdf";
	 //    var targetPath = "file:///storage/emulated/0/" + "gfbrochure.pdf";
	 //    var trustHosts = true;
	 //    var options = {};

	 //    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
	 //      .then(function(result) {
	 //        // Success!
	 //        $cordovaFileOpener2.open(
		// 	    targetPath,
		// 	    'application/pdf'
		// 	  ).then(function() {
		// 	      // Success!
		// 	      alert("Success");
		// 	  }, function(err) {
		// 	      // An error occurred. Show a message to the user
		// 	      console.log(err)
		// 	  });
	 //      }, function(err) {
	 //        // Error
	 //        console.log(err)
	 //      });

		
	}

}])

.controller('availableStockCtrl', ['$scope', '$stateParams', '$cordovaSQLite', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite) {
	$scope.ItemGroup = [];
	$scope.stocks = [];
	var sql = "SELECT DISTINCT Item_group FROM table_available_stock";
	$cordovaSQLite.execute(db, sql).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.ItemGroup.push(res.rows.item(i));
		    		var sql1 = "SELECT * FROM table_available_stock WHERE Item_group = '"+res.rows.item(i).Item_group+"'"
		    		$cordovaSQLite.execute(db, sql1).then(function(res1) {
				    	//alert(res.rows.length);
				    	if(res1.rows.length > 0){
				    		
				    		for(var j = 0;j<res1.rows.length; j++){
				    			$scope.stocks.push(res1.rows.item(j));
				    			
				    		}
				    		
				    		//console.log($scope.ageingDetails);
				    		//$ionicLoading.hide();
				    	}
				    }, function (err) {
				        console.error(err);
				    });
		    	}
	    		
	    		
	    			
	    		}
	    		
	    		//console.log($scope.ageingDetails);
	    		//$ionicLoading.hide();
	    	
	    }, function (err) {
	        console.error(err);
	    });

}])
      
.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $http) {

	$scope.login = function(){
		//alert("hi");
		var data = {"User":{"username":$scope.login.username,"password":"g-forcegima142","MobileMacId":""}};
		$http.post('http://192.168.1.40/gimatex/users/mobile_login.json', data)
		.then(function(response){
			console.log(response);
			console.log(response['data'].data['User']);
			var userData = response['data'].data['User'];
			
			//console.log(response['data'].User['Type']);
			window.localStorage['UserType'] = userData.Type;
			window.localStorage['ProductLine'] = userData.ProductLine;
			window.localStorage['ERP_Code'] = userData.ERP_Code;
			$state.go('menu.admin');
		}, function(error){

		});
		
	}

}])

.controller('qaSpecificationCtrl', ['$scope', '$stateParams', '$cordovaSQLite', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaSQLite) {

	$scope.qa = {};

	$scope.plys = [];
	$scope.prodTypes = [];

	$scope.example13model = [];
	$scope.example13data = [
    {id: 1, label: "David"},
    {id: 2, label: "Jhon"},
    {id: 3, label: "Lisa"},
    {id: 4, label: "Nicole"},
    {id: 5, label: "Danny"}];;

	$scope.example13settings = {
	     smartButtonMaxItems: 3,
	    smartButtonTextConverter: function(itemText, originalItem) {
	        if (itemText === 'Jhon') {
	        return 'Jhonny!';
	        }

	        return itemText;
	    },
	    scrollableHeight: '200px',
        scrollable: true,
	};

	var sql = "SELECT DISTINCT quote_ply FROM table_Quote";
	$cordovaSQLite.execute(db, sql).then(function(res) {
	    	//alert(res.rows.length);
	    	if(res.rows.length > 0){
	    		for(var i = 0;i<res.rows.length; i++){
	    			$scope.plys.push(res.rows.item(i));
	    		}
	    	}
	});

	$scope.productType = function(){
		//alert($scope.qa.myply);
		$scope.prodTypes = [];
		var sql = "SELECT DISTINCT quote_group_code FROM table_Quote WHERE quote_ply = "+$scope.qa.myply;

		$cordovaSQLite.execute(db, sql).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		for(var i = 0;i<res.rows.length; i++){
		    			
		    			$scope.prodTypes.push(res.rows.item(i));
		    		}
		    	}
		});
	}

	$scope.getProducts = function(){
		$scope.example13data = [];
		var sql = "SELECT  quote_count_code FROM table_Quote WHERE quote_group_code = '"+$scope.qa.productType+"'";
		console.log(sql);
		$cordovaSQLite.execute(db, sql).then(function(res) {
		    	//alert(res.rows.length);
		    	if(res.rows.length > 0){
		    		for(var i = 0;i<res.rows.length; i++){
		    			var data = {id:res.rows.item(i).quote_group_code, label:res.rows.item(i).quote_group_code}
		    			$scope.example13data.push(data);
		    		}
		    	}
		});
	}
}])
 