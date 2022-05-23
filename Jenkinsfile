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
                sh 'npm run generate $.NAME \'GOLD,SILVER,SWORD\' http://www.google.com 20 10' 
            }
        }
        stage("build") {
            steps {
                echo 'building'
                sh 'npm run build' 
            }
        }
        stage("test") {
            steps {
                echo 'test'
            } 
        }
        stage("deploy") {
            steps {
                echo 'deploy'
                sh 'npm run  bsc_testnet:deploy' 
            }
        }
    }   
}

