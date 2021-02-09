pipeline {
    agent any
	
	environment {
		def customImage = ''
	}
	
	tools {
		maven 'Maven 3.5.4' 
        	jdk 'jdk8' 
		dockerTool 'docker'
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
					 sh 'mvn -B -DskipTests clean package'
                }
            }
			
        stage('Build Docker Image') {
            steps {
                script {
                     customImage = docker.build("megaappimage:${env.BUILD_ID}")
				}
			}
		}
	    
	    stage('push Docker Image') {
            steps {
                script {
			sh "docker tag megaappimage:${env.BUILD_ID} 127.0.0.1:5002/megaappimage"
			
			sh "docker push 127.0.0.1:5002/megaappimage"
				}
			}
		}
		
        stage('run docker Image') {
			steps {
				script {
					sh "docker run --name msmega --detach --publish 8081:8081 --publish 45000:50000 127.0.0.1:5002/megaappimage/v2/_catalog"
				}
			}
		}
		stage ('Deploy to kubernetes') {
			steps {
				script {
					kubernetesDeploy(configs: "msmega.yaml", kubeconfigId: "kubeconfigcredential")
				}  
			}
		}
		
    }
}
