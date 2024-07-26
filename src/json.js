export const json = {
    "logoPosition": "right",
    "completedHtml": "<h3>Merci d'avoir rempli ce questionnaire</h3>",
    "pages": [
        {
            "name": "page1",
            "questionTitleLocation": "top",
            "title": "\nPage 1",
            "elements": [
                {
                    "type": "rating",
                    "name": "question3",
                    "title": "Quel est votre expérience",
                    "isRequired": true,
                    "autoGenerate": false,
                    "rateValues": [
                        "<2 years",
                        "2-5 years",
                        "5-10 years",
                        "10-15years",
                        "15+ years"
                    ]
                },
                {
                    "type": "imagepicker",
                    "name": "question2",
                    "title": "Évaluez vos compétences dans les langages suivants",
                    "clearIfInvisible": "onComplete",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "image 1",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=be939ae4-1afc-4f74-b96a-b7a15db759b7"
                        },
                        {
                            "value": "image 2",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=59639a42-56f8-4d9a-82c6-56e8e5ce5415"
                        },
                        {
                            "value": "image 3",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=9a701cc0-e149-446d-b6bf-e426f2b82b6a"
                        },
                        {
                            "value": "Image 4",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2d72f9b5-8546-4fef-b4bb-f46c9b1fe4a4"
                        },
                        {
                            "value": "Image 5",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b7098c00-3b29-4f98-a20f-2c7e332c7aca"
                        },
                        {
                            "value": "Image 6",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=665afaad-be60-4ea4-b43e-2af96be05357"
                        },
                        {
                            "value": "Image 7",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d94f12c3-645d-4250-9648-f090e025d7ea"
                        },
                        {
                            "value": "Image 8",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c69aff1a-2583-4dbb-8064-5d264073960c"
                        },
                        {
                            "value": "Image 9",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=589ea6ef-b8e4-4ba2-b346-ec4d90bf43c4"
                        },
                        {
                            "value": "Image 10",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3cac8103-18c3-40a1-b36e-8713ddda4311"
                        },
                        {
                            "value": "Image 11",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b2d1caf7-d4c5-4d8e-a9a8-2a2d73e6452a"
                        },
                        {
                            "value": "Image 12",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e63566bb-aba8-4ac1-ae41-0e67c2dc775e"
                        },
                        {
                            "value": "Image 13",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=decff021-35b1-46b2-b86a-b48dac06a8e9"
                        },
                        {
                            "value": "Image 14",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a921fd10-d580-4eaf-85dc-7d665832567e"
                        },
                        {
                            "value": "Image 15",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=55e055f3-c821-4649-884d-e5f08b65e834"
                        },
                        {
                            "value": "Image 16",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=196762c1-aa74-4b0b-a61c-240876661e07"
                        },
                        {
                            "value": "Image 17",
                            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=35329eee-7f0c-4280-899a-6ac98d675da4"
                        }
                    ],
                    "minImageWidth": 96,
                    "minImageHeight": 96,
                    "maxImageWidth": 96,
                    "maxImageHeight": 96,
                    "multiSelect": true
                },
                {
                    "type": "text",
                    "name": "question4",
                    "title": "Si vous voulez ajouter un langage :"
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question1",
                    "title": "Quel type de développeur êtes-vous?",
                    "isRequired": true,
                    "choices": [
                        "Développeur Front-end",
                        "Développeur Back-end",
                        "Développeur Full Stack",
                        "Développeur Mobile",
                        "Ingénieur DevOps",
                        "Architecte Cloud",
                        "Data Scientist",
                        "Ingénieur QA"
                    ],
                    "showOtherItem": true
                },
                {
                    "type": "text",
                    "name": "question6",
                    "title": "Si vous voulez ajouter un métier:"
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "matrix",
                    "name": "question5",
                    "title": "Évaluez vos compétences dans les langages suivants",
                    "defaultValue": {
                        "JavaScript": "pratiquant",
                        "Java": "pratiquant",
                        "C": "pratiquant",
                        "C++": "pratiquant",
                        "HTML": "pratiquant",
                        "CSS": "pratiquant",
                        "Scala": "pratiquant",
                        "UML": "pratiquant",
                        "SQL": "pratiquant",
                        "Python": "pratiquant",
                        "JSON": "pratiquant",
                        "Bash": "pratiquant",
                        "Groovy": "pratiquant",
                        "Lua": "pratiquant",
                        "PHP": "pratiquant",
                        "TypeScript": "pratiquant",
                        "R": "pratiquant"
                    },
                    "columns": [
                        {
                            "value": "non_pratiquant",
                            "text": "Non pratiquant"
                        },
                        {
                            "value": "pratiquant",
                            "text": "Pratiquant"
                        },
                        {
                            "value": "expert",
                            "text": "Expert"
                        },
                        {
                            "value": "maitre",
                            "text": "Maître"
                        }
                    ],
                    "rows": [
                        {
                            "value": "JavaScript",
                            "visibleIf": "{question2} contains 'image 1' "
                        },
                        {
                            "value": "Java",
                            "visibleIf": "{question2} contains 'image 2' "
                        },
                        {
                            "value": "C",
                            "visibleIf": "{question2} contains 'image 3' "
                        },
                        {
                            "value": "C++",
                            "visibleIf": "{question2} contains 'Image 4' "
                        },
                        {
                            "value": "HTML",
                            "visibleIf": "{question2} contains 'Image 5' "
                        },
                        {
                            "value": "CSS",
                            "visibleIf": "{question2} contains 'Image 6' "
                        },
                        {
                            "value": "Scala",
                            "visibleIf": "{question2} contains 'Image 7' "
                        },
                        {
                            "value": "UML",
                            "visibleIf": "{question2} contains 'Image 8' "
                        },
                        {
                            "value": "SQL",
                            "visibleIf": "{question2} contains 'Image 9' "
                        },
                        {
                            "value": "Python",
                            "visibleIf": "{question2} contains 'Image 10' "
                        },
                        {
                            "value": "JSON",
                            "visibleIf": "{question2} contains 'Image 11' "
                        },
                        {
                            "value": "Bash",
                            "visibleIf": "{question2} contains 'Image 12' "
                        },
                        {
                            "value": "Groovy",
                            "visibleIf": "{question2} contains 'Image 13' "
                        },
                        {
                            "value": "Lua",
                            "visibleIf": "{question2} contains 'Image 14' "
                        },
                        {
                            "value": "PHP",
                            "visibleIf": "{question2} contains 'Image 15' "
                        },
                        {
                            "value": "TypeScript",
                            "visibleIf": "{question2} contains 'Image 16' "
                        },
                        {
                            "value": "R",
                            "visibleIf": "{question2} contains 'Image 17' "
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "comp_packages",
                    "title": "Sélectionnez les packages de compétences informatiques",
                    "choices": [
                        "IDE et Éditeurs de Code",
                        "Outils de Visualisation et Collaboration",
                        "Frameworks Web",
                        "Frameworks de Test",
                        "Frameworks Divers",
                        "Frameworks de Big Data",
                        "Outils DevOps 1",
                        "Outils DevOps 2",
                        "Outils de Monitoring et Sécurité",
                        "Outils de Sécurité 1",
                        "Outils de Sécurité 2",
                        "Outils de Sécurité 3",
                        "Outils Cloud AWS",
                        "Outils Cloud AWS Avancé",
                        "Autres Outils Cloud",
                        "Outils de Réseau et Sécurité"
                    ]
                },
                {
                    "type": "matrixdynamic",
                    "name": "ide_and_editors",
                    "visibleIf": "{comp_packages} contains 'IDE et Éditeurs de Code'",
                    "title": "IDE et Éditeurs de Code",
                    "defaultValue": [
                        {
                            "skill": "IntelliJ",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "WebStorm",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "CLion",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Visual Studio Code",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "QtCreator",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "LucidChart",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Crowdin",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "visualization_and_collaboration",
                    "visibleIf": "{comp_packages} contains 'Outils de Visualisation et Collaboration'",
                    "title": "Outils de Visualisation et Collaboration",
                    "defaultValue": [
                        {
                            "skill": "Tableau",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Zeplin",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "PowerBi",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Jira",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Confluence",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Office365",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "TestFairy",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "web_frameworks",
                    "visibleIf": "{comp_packages} contains 'Frameworks Web'",
                    "title": "Frameworks Web",
                    "defaultValue": [
                        {
                            "skill": "React",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Backbone.js",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Knockout",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "nodejs",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Spring",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Spring Boot",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Spring Cloud Contract",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Framework",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "test_frameworks",
                    "visibleIf": "{comp_packages} contains 'Frameworks de Test'",
                    "title": "Frameworks de Test",
                    "defaultValue": [
                        {
                            "skill": "Mockito",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Cucumber",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Behave",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Gurkin",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "JUnit",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "TestNG",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "RestAssured",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Framework",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "divers_frameworks",
                    "visibleIf": "{comp_packages} contains 'Frameworks Divers'",
                    "title": "Frameworks Divers",
                    "defaultValue": [
                        {
                            "skill": "Qt",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Liquibase",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "SIf4",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "cypress.io",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Lombok",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Debezium",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "dockerize",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Framework",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "big_data_frameworks",
                    "visibleIf": "{comp_packages} contains 'Frameworks de Big Data'",
                    "title": "Frameworks de Big Data",
                    "defaultValue": [
                        {
                            "skill": "Apache Spark",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Hive",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Hadoop",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "QMF",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Akka (Toolkit)",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Gatling",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Apache CXF",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Framework",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "devops_tools_1",
                    "visibleIf": "{comp_packages} contains 'Outils DevOps 1'",
                    "title": "Outils DevOps 1",
                    "defaultValue": [
                        {
                            "skill": "Jenkins",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "GitLab",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Mesos Marathon",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Consul",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Docker",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Terraform",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Artifactory",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "devops_tools_2",
                    "visibleIf": "{comp_packages} contains 'Outils DevOps 2'",
                    "title": "Outils DevOps 2",
                    "defaultValue": [
                        {
                            "skill": "Logstash",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Zookeeper",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Coreos",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "ActiveMQ",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Sysdig",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Apigee",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "count.ly",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "monitoring_and_security",
                    "visibleIf": "{comp_packages} contains 'Outils de Monitoring et Sécurité'",
                    "title": "Outils de Monitoring et Sécurité",
                    "defaultValue": [
                        {
                            "skill": "Selenium",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Kibana",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "ElasticSearch",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "MySQL",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Redis",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "DataBricks",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "iWelcome",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "security_tools_1",
                    "visibleIf": "{comp_packages} contains 'Outils de Sécurité 1'",
                    "title": "Outils de Sécurité 1",
                    "defaultValue": [
                        {
                            "skill": "WSO2",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "OKTA",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Cordova",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Kentico",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Slack",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Runscope",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Liferay",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "security_tools_2",
                    "visibleIf": "{comp_packages} contains 'Outils de Sécurité 2'",
                    "title": "Outils de Sécurité 2",
                    "defaultValue": [
                        {
                            "skill": "Google Authenticator",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "JWT",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "SonarQube",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "npm",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Maven",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Make",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "CMake",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "security_tools_3",
                    "visibleIf": "{comp_packages} contains 'Outils de Sécurité 3'",
                    "title": "Outils de Sécurité 3",
                    "defaultValue": [
                        {
                            "skill": "SBT",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "SOAP",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Roadmunk",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Illustrator",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Runners",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "PhoneGap",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "ESLint",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "aws_cloud_tools",
                    "visibleIf": "{comp_packages} contains 'Outils Cloud AWS'",
                    "title": "Outils Cloud AWS",
                    "defaultValue": [
                        {
                            "skill": "AWS EC2",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Beanstalk",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "S3",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Lambda",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "CloudWatch",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "CloudTrail",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "SQS",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "aws_cloud_advanced_tools",
                    "visibleIf": "{comp_packages} contains 'Outils Cloud AWS Avancé'",
                    "title": "Outils Cloud AWS Avancé",
                    "defaultValue": [
                        {
                            "skill": "SNS",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Step Functions",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "API Gateway",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "VPC",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "CloudFormation",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "IoT",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "ELB",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "other_cloud_tools",
                    "visibleIf": "{comp_packages} contains 'Autres Outils Cloud'",
                    "title": "Autres Outils Cloud",
                    "defaultValue": [
                        {
                            "skill": "GuardDuty",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "LAM",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "KMS",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "S3 Glacier",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Elasticache",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "OpenVPN",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Apache Tomcat",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                },
                {
                    "type": "matrixdynamic",
                    "name": "network_and_security_tools",
                    "visibleIf": "{comp_packages} contains 'Outils de Réseau et Sécurité'",
                    "title": "Outils de Réseau et Sécurité",
                    "defaultValue": [
                        {
                            "skill": "HTTP/s",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "MQTT",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Z-Wave",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Zigbee",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "PagerDuty",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Swagger",
                            "level": "pratiquant"
                        },
                        {
                            "skill": "Undertow",
                            "level": "pratiquant"
                        }
                    ],
                    "columns": [
                        {
                            "name": "skill",
                            "title": "Outil",
                            "cellType": "text",
                            "readOnly": true
                        },
                        {
                            "name": "level",
                            "title": "Niveau",
                            "cellType": "rating",
                            "autoGenerate": false,
                            "rateCount": 4,
                            "rateValues": [
                                "non pratiquant",
                                "pratiquant",
                                "expert",
                                {
                                    "value": "maitre",
                                    "text": "maître"
                                }
                            ]
                        },
                        {
                            "name": "précision",
                            "title": "Précision sur votre niveau",
                            "cellType": "checkbox",
                            "choices": [
                                {
                                    "value": "précision",
                                    "text": "..."
                                }
                            ]
                        },
                        {
                            "name": "description",
                            "title": " ",
                            "cellType": "comment",
                            "visibleIf": "{row.précision} contains 'précision'",
                            "rows": 2
                        }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 7
                }
            ]
        },
        {
            "name": "page3",
            "visibleIf": "{question2.JavaScript} = 'maitre' or {question2.Java} = 'maitre' or {question2.C} = 'maitre' or {question2.C++} = 'maitre' or {question2.HTML} = 'maitre' or {question2.CSS} = 'maitre' or {question2.Scala} = 'maitre' or {question2.UML} = 'maitre' or {question2.SQL} = 'maitre' or {question2.Python} = 'maitre' or {question2.JSON} = 'maitre' or {question2.XML} = 'maitre' or {question2.Bash} = 'maitre' or {question2.Groovy} = 'maitre' or {question2.Lua} = 'maitre' or {question2.PHP} = 'maitre' or {question2.TypeScript} = 'maitre' or {question2.BoxTalk} = 'maitre' or {ide_and_editors[0].level} = 'maitre' or {ide_and_editors[1].level} = 'maitre' or {ide_and_editors[2].level} = 'maitre' or {ide_and_editors[3].level} = 'maitre' or {ide_and_editors[4].level} = 'maitre' or {ide_and_editors[5].level} = 'maitre' or {ide_and_editors[6].level} = 'maitre' or {visualization_and_collaboration[0].level} = 'maitre' or {visualization_and_collaboration[1].level} = 'maitre' or {visualization_and_collaboration[2].level} = 'maitre' or {visualization_and_collaboration[3].level} = 'maitre' or {visualization_and_collaboration[4].level} = 'maitre' or {visualization_and_collaboration[5].level} = 'maitre' or {visualization_and_collaboration[6].level} = 'maitre' or {web_frameworks[0].level} = 'maitre' or {web_frameworks[1].level} = 'maitre' or {web_frameworks[2].level} = 'maitre' or {web_frameworks[3].level} = 'maitre' or {web_frameworks[4].level} = 'maitre' or {web_frameworks[5].level} = 'maitre' or {web_frameworks[6].level} = 'maitre' or {test_frameworks[0].level} = 'maitre' or {test_frameworks[1].level} = 'maitre' or {test_frameworks[2].level} = 'maitre' or {test_frameworks[3].level} = 'maitre' or {test_frameworks[4].level} = 'maitre' or {test_frameworks[5].level} = 'maitre' or {test_frameworks[6].level} = 'maitre' or {divers_frameworks[0].level} = 'maitre' or {divers_frameworks[1].level} = 'maitre' or {divers_frameworks[2].level} = 'maitre' or {divers_frameworks[3].level} = 'maitre' or {divers_frameworks[4].level} = 'maitre' or {divers_frameworks[5].level} = 'maitre' or {divers_frameworks[6].level} = 'maitre' or {big_data_frameworks[0].level} = 'maitre' or {big_data_frameworks[1].level} = 'maitre' or {big_data_frameworks[2].level} = 'maitre' or {big_data_frameworks[3].level} = 'maitre' or {big_data_frameworks[4].level} = 'maitre' or {big_data_frameworks[5].level} = 'maitre' or {big_data_frameworks[6].level} = 'maitre' or {devops_tools_1[0].level} = 'maitre' or {devops_tools_1[1].level} = 'maitre' or {devops_tools_1[2].level} = 'maitre' or {devops_tools_1[3].level} = 'maitre' or {devops_tools_1[4].level} = 'maitre' or {devops_tools_1[5].level} = 'maitre' or {devops_tools_1[6].level} = 'maitre' or {devops_tools_2[0].level} = 'maitre' or {devops_tools_2[1].level} = 'maitre' or {devops_tools_2[2].level} = 'maitre' or {devops_tools_2[3].level} = 'maitre' or {devops_tools_2[4].level} = 'maitre' or {devops_tools_2[5].level} = 'maitre' or {devops_tools_2[6].level} = 'maitre' or {monitoring_and_security[0].level} = 'maitre' or {monitoring_and_security[1].level} = 'maitre' or {monitoring_and_security[2].level} = 'maitre' or {monitoring_and_security[3].level} = 'maitre' or {monitoring_and_security[4].level} = 'maitre' or {monitoring_and_security[5].level} = 'maitre' or {monitoring_and_security[6].level} = 'maitre' or {security_tools_1[0].level} = 'maitre' or {security_tools_1[1].level} = 'maitre' or {security_tools_1[2].level} = 'maitre' or {security_tools_1[3].level} = 'maitre' or {security_tools_1[4].level} = 'maitre' or {security_tools_1[5].level} = 'maitre' or {security_tools_1[6].level} = 'maitre' or {security_tools_2[0].level} = 'maitre' or {security_tools_2[1].level} = 'maitre' or {security_tools_2[2].level} = 'maitre' or {security_tools_2[3].level} = 'maitre' or {security_tools_2[4].level} = 'maitre' or {security_tools_2[5].level} = 'maitre' or {security_tools_2[6].level} = 'maitre' or {security_tools_3[0].level} = 'maitre' or {security_tools_3[1].level} = 'maitre' or {security_tools_3[2].level} = 'maitre' or {security_tools_3[3].level} = 'maitre' or {security_tools_3[4].level} = 'maitre' or {security_tools_3[5].level} = 'maitre' or {security_tools_3[6].level} = 'maitre' or {aws_cloud_tools[0].level} = 'maitre' or {aws_cloud_tools[1].level} = 'maitre' or {aws_cloud_tools[2].level} = 'maitre' or {aws_cloud_tools[3].level} = 'maitre' or {aws_cloud_tools[4].level} = 'maitre' or {aws_cloud_tools[5].level} = 'maitre' or {aws_cloud_tools[6].level} = 'maitre' or {aws_cloud_advanced_tools[0].level} = 'maitre' or {aws_cloud_advanced_tools[1].level} = 'maitre' or {aws_cloud_advanced_tools[2].level} = 'maitre' or {aws_cloud_advanced_tools[3].level} = 'maitre' or {aws_cloud_advanced_tools[4].level} = 'maitre' or {aws_cloud_advanced_tools[5].level} = 'maitre' or {aws_cloud_advanced_tools[6].level} = 'maitre' or {other_cloud_tools[0].level} = 'maitre' or {other_cloud_tools[1].level} = 'maitre' or {other_cloud_tools[2].level} = 'maitre' or {other_cloud_tools[3].level} = 'maitre' or {other_cloud_tools[4].level} = 'maitre' or {other_cloud_tools[5].level} = 'maitre' or {other_cloud_tools[6].level} = 'maitre' or {network_and_security_tools[0].level} = 'maitre' or {network_and_security_tools[1].level} = 'maitre' or {network_and_security_tools[2].level} = 'maitre' or {network_and_security_tools[3].level} = 'maitre' or {network_and_security_tools[4].level} = 'maitre' or {network_and_security_tools[5].level} = 'maitre' or {network_and_security_tools[6].level} = 'maitre'",
            "elements": [
                {
                    "type": "html",
                    "name": "mentorship_info",
                    "html": "Vous avez été identifié comme maître dans un langage ou une compétence. Voulez-vous mentoré d'autres personnes?"
                },
                {
                    "type": "radiogroup",
                    "name": "mentorship_offer",
                    "title": "Voulez-vous être un mentor?",
                    "choices": [
                        "Oui",
                        "Non"
                    ]
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "text",
                    "name": "question7",
                    "title": "Si tu veux que la Dirtech d'Arolla ait ton profil, donne ton nom :"
                }
            ]
        }
    ],
    "triggers": [
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Front-end'",
            "setToName": "question2.HTML",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Front-end'",
            "setToName": "question2.CSS",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Front-end'",
            "setToName": "question2.JavaScript",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Back-end'",
            "setToName": "question2.PHP",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Back-end'",
            "setToName": "question2.SQL",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Full Stack'",
            "setToName": "question2.HTML",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Full Stack'",
            "setToName": "question2.CSS",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Full Stack'",
            "setToName": "question2.JavaScript",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Full Stack'",
            "setToName": "question2.PHP",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Full Stack'",
            "setToName": "question2.SQL",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Mobile'",
            "setToName": "question2.Android",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Développeur Mobile'",
            "setToName": "question2.iOS",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Ingénieur DevOps'",
            "setToName": "question2.Docker",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Ingénieur DevOps'",
            "setToName": "question2.Kubernetes",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Architecte Cloud'",
            "setToName": "question2.AWS",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Architecte Cloud'",
            "setToName": "question2.Azure",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Data Scientist'",
            "setToName": "question2.Python",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Data Scientist'",
            "setToName": "question2.R",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Ingénieur QA'",
            "setToName": "question2.Selenium",
            "setValue": "pratiquant"
        },
        {
            "type": "setvalue",
            "expression": "{question1} contains 'Ingénieur QA'",
            "setToName": "question2.JUnit",
            "setValue": "pratiquant"
        }
    ]
};