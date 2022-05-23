/* def gv */

pipeline {
    agent {
        docker { image 'node:14.18.2' }
    }
    parameters {
        stringParam('Nft_name', '')
        stringParam('Tokens_Name', '')
        stringParam('Ipfs_Endpoint', '')
        stringParam('Minting_Percentage', '')
        stringParam('Minting_Quantity', '')
    }

    triggers {
        genericTrigger {
            /* genericVariables {
                genericVariable {
                key("VARIABLE_FROM_POST")
                value("\$.something")
                expressionType("JSONPath") //Optional, defaults to JSONPath
                regexpFilter("") //Optional, defaults to empty string
                defaultValue("") //Optional, defaults to empty string
                }
            } */
            /* genericRequestVariables {
                genericRequestVariable {
                key("requestParameterName")
                regexpFilter("")
                }
            }
            genericHeaderVariables {
                genericHeaderVariable {
                key("requestHeaderName")
                regexpFilter("")
                }
            } */
            token('abc123')
            tokenCredentialId('')
            printContributedVariables(true)
            printPostContent(true)
            silentResponse(false)
        }
    }
  /*   parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    } */
    stages {
        stage("init") {
            steps {
                echo 'init'
                sh 'npm install' 
                sh 'npm run generate NOME \'GOLD,SILVER,SWORD\' http://www.google.com 20 10' 
                /* script {
                   gv = load "script.groovy" 
                } */
            }
        }
        stage("build") {
            steps {
                echo 'building'
                sh 'npm run build' 
                //docker run -v /local/path:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/Contract.sol
                /* script {
                    gv.buildApp()
                } */
            }
        }
        stage("test") {
            /* when {
                expression {
                    params.executeTests
                }
            }*/
            steps {

                echo 'test'
               /*  script {
                    gv.testApp()
                } */
            } 
        }
        stage("deploy") {
            steps {
                echo 'deploy'
                sh 'npm run  aurora_testnet:deploy' 
                /* script {
                    gv.deployApp()
                } */
            }
        }
    }   
}

