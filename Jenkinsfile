pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                     docker {
                        image 'maven:3-alpine'
                        args '-v /root/.m2:/root/.m2'
                            }
                        }
            steps {
                sh 'mvn -B -DskipTests clean package'
                }
            }
        stage('Build Docker Image') {
                steps {
                echo 'Starting to build docker image'
                script {
                    def customImage = docker.build("msmegaappimage:${env.BUILD_ID}")

            }
        }
		}
        stage('run docker Image') {
			agent {
				docker {image 'msmegaappimage:${env.BUILD_ID}'
						args '--name msmegaapp --detach --publish 8081:8081 --publish 49000:49000 msmegaappimage:${env.BUILD_ID}'
						}
			}
			steps {
				sh 'docker ps'
			}
		}
    }
}
