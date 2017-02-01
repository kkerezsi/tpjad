testlistModule

.factory('testlistFactory', function (Restangular, $q) {
    return {
        getTests: getTests,
        addTest: addTest,
        editTest: editTest,
        beginTest: beginTest,
        getScores: getScores
    };

    function getTests() {
        return Restangular.one('GetAllTests').post();
    }

    function addTest(test) {
        console.log(test);
        return Restangular.all("/AddTest").post(test);
    }

    function editTest(test) {
        return Restangular.all("/EditTest").post(test);
    }

    function beginTest(testResults) {
        return Restangular.all("/Submit").post(testResults);
    }

    function getScores(username) {
        return Restangular.all("/Results").post({ username: username });
    }



    //    $q(function (resolve, reject) {
    //        resolve(
    //            //Lista de teste
    //            [{
    //                // Asta e primul test
    //                id: 1,
    //                username: "IamTheGod",
    //                domain: "This is a domain",
    //                description: "This is a biocelular test",
    //                questions: [
    //                    {
    //                        id: 1,
    //                        text: "What are cells ?",
    //                        answeres: [
    //                            {
    //                                id: 123,
    //                                text: "Normal life forms",
    //                                isCorrect: false
    //                            },
    //                            {
    //                                id: 124,
    //                                text: "Abnormal life forms",
    //                                isCorrect: false
    //                            },
    //                            {
    //                                id: 125,
    //                                text: "None from the above",
    //                                isCorrect: true
    //                            }
    //                        ]
    //                    },
    //                     {
    //                         id: 1,
    //                         text: "What are cells ?",
    //                         answeres: [
    //                             {
    //                                 id: 123,
    //                                 text: "Normal life forms",
    //                                 isCorrect: false
    //                             },
    //                             {
    //                                 id: 124,
    //                                 text: "Abnormal life forms",
    //                                 isCorrect: false
    //                             },
    //                             {
    //                                 id: 125,
    //                                 text: "None from the above",
    //                                 isCorrect: true
    //                             }
    //                         ]
    //                     }
    //                ]
    //            },
    //        {
    //            id: 2,
    //            username: "IamTheGod2",
    //            domain: "This is a domain",
    //            description: "This is a programming test",
    //        },
    //        {
    //            id: 3,
    //            username: "IamTheGod3",
    //            domain: "This is a domain",
    //            description: "This is a math test",
    //        },
    //        {
    //            id: 4,
    //            username: "IamTheGod",
    //            domain: "This is a domain",
    //            description: "This is a chemistry test",
    //        },
    //            ]);
    //    });
    //},
});
