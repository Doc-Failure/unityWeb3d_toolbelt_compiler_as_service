/* def gv */

pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
  /*   parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    } */
    stages {
        stage("init") {
            steps {
                echo 'init'
                sh 'node --version'
                /* script {
                   gv = load "script.groovy" 
                } */
            }
        }
        stage("build") {
            steps {
                echo 'building'
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
                /* script {
                    gv.deployApp()
                } */
            }
        }
    }   
}

