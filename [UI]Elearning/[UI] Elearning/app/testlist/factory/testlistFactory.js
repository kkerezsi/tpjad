testlistModule

.factory('testlistFactory', function (Restangular, $q) {
    return {
        getTests: function () {
            return $q(function (resolve, reject) {
                resolve(
                    //Lista de teste
                    [{
                    // Asta e primul test
                    id: 1,
                    username: "IamTheGod",
                    domain: "This is a domain",
                    description: "This is a biocelular test",
                    questions: [
                        {
                            id: 1,
                            value: "What are cells ?",
                            options: [
                                {
                                    id: 123,
                                    text: "Normal life forms",
                                    isAnswer: false
                                },
                                {
                                    id: 124,
                                    text: "Abnormal life forms",
                                    isAnswer: false
                                },
                                {
                                    id: 125,
                                    text: "None from the above",
                                    isAnswer: true
                                },
                            ]
                        },
                        {
                            id: 2,
                            value: "What are mitocondrias?",
                            options: [
                                {
                                    text: "Energy supliers",
                                    isAnswer: true
                                },
                                {
                                    text: "Abnormal life forms",
                                    isAnswer: false
                                },
                                {
                                    text: "None from the above",
                                    isAnswer: false
                                },
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    username: "IamTheGod2",
                    domain: "This is a domain",
                    description: "This is a programming test",
                },
                {
                    id: 3,
                    username: "IamTheGod3",
                    domain: "This is a domain",
                    description: "This is a math test",
                },
                {
                    id: 4,
                    username: "IamTheGod",
                    domain: "This is a domain",
                    description: "This is a chemistry test",
                },
                ]);
            });
        },
        addTest: function () {
            return $q(function (resolve, reject) {
                setTimeout(function () {
                    resolve("added test");
                }, 300);
            });
        }
    }
});