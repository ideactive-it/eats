angular.module('eatsadmin').factory('CategoriaResource', function($resource){
    var resource = $resource('api/categoria/:CategoriaId',{CategoriaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});