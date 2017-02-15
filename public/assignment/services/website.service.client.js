(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    
    function WebsiteService() {
        var websites = [
            { "_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem", created: new Date()} ,
            { "_id": "234", "name": "Twitter",  "developerId": "456", "description": "Lorem", created: new Date() },
            { "_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem", created: new Date() },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem", created: new Date() },
            { "_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem", created: new Date() },
            { "_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem", created: new Date() }
        ];
        var api = {
            "createWebsite": createWebsite,
            "findWebsiteByUser": findWebsiteByUser,
            "findWebsiteById": findWebsiteById,
            "deleteWebsite": deleteWebsite,
            "updateWebsite": updateWebsite
        };
        return api;

        function findWebsiteByUser(userId) {
            var user_websites = [];
            for (var w in websites) {
                if (websites[w].developerId === userId) {
                    user_websites.push(angular.copy(websites[w]));
                }
            }
            return user_websites;
        }

        function findWebsiteById(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    return angular.copy(websites[w]);
                }
            }
            return null;
        }
        function deleteWebsite(websiteId) {
            for(var w in websites) {
                if(websites[w]._id === websiteId) {
                    websites.splice(w, 1);
                }
            }
        }

        function createWebsite(userId, website) {
            website.developerId = userId;
            website._id = (new Date()).getTime();
            website.created = (new Date());
            websites.push(website);
            return website;
        }

        function updateWebsite(websiteId, website) {
            for(var w in websites) {
                if( websites[w]._id === websiteId) {
                    websites[w].name = website.name;
                    websites[w].description = website.description;
                    return websites[w];
                }
            }
            return null;
        }
    }
})();