pipeline {
    agent any
	
	tools {
		maven 'Maven 3.5.4' 
        jdk 'jdk8' 
	}

    stages {
	
			stage ('Initialize') {
				steps {
					sh '''
						echo "PATH = ${PATH}"
						echo "M2_HOME = ${M2_HOME}"
					''' 
				}
			}
			
			stage('Build') {
				steps {
					sh 'chmod +x mvnw ./mvnw -B -DskipTests clean package'
                }
            }
			
        stage('Build Docker Image') {
            steps {
                script {
                    def customImage = docker.build("msmegaappimage:${env.BUILD_ID}")
				}
			}
		}
		
        stage('run docker Image') {
			steps {
				script {
					sh "docker run --name msmega --detach --publish 8081:8081 --publish 45000:45000 msmegaappimage:${env.BUILD_ID}"
				}
			}
		}
		stage ('Deploy to kubernetes') {
			steps {
				script {
					kubernetesDeploy(configs: "msmega-deployment.yml", kubeconfigId: "kubeconfigid")
				}
			}
		}
		
    }
}
