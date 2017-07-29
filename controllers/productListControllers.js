/**
 * Created by zhangdianjun on 2017/7/19.
 */
angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter,
                                             productListActiveClass, productListPageCount) {
    var selectedCategory = null;
    $scope.selectedPage = 1;
    $scope.pageSize = productListPageCount;
    $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
        //每次点击选择分类，展示内容都是第一页
        $scope.selectedPage = 1;
    }
    //选择页码
    $scope.selectPage = function (newPage) {
        $scope.selectedPage = newPage;
    }
    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null ||
                product.category == selectedCategory;
    }
    $scope.getCategoryClass = function (category) {
        return selectedCategory == category ? productListActiveClass : "";
    }
    //使用样式
    $scope.getPageClass = function (page) {
        return $scope.selectedPage == page ? productListActiveClass : "";
    }
});