/* def gv */

pipeline {
    agent {
        docker { image 'node:14.18.2' }
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

