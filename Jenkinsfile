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
		
					bat '''
						echo "M2_HOME = ${M2_HOME}"
						echo  "JAVA_HOME = ${JAVA_HOME}"
					''' 
				}
			}
			
			stage('Build') {
				steps {
					 bat 'mvn -B -DskipTests clean package'
                }
            }
			
        stage('Build Docker Image') {
            steps {
		    		bat 'docker pull openjdk:8-jdk-alpine'
		    
		    		bat "docker build -t megaappimage:${env.BUILD_ID} ."
			}
		}
	    
	    stage('push Docker Image') {
            steps {
                script {
			bat "docker tag megaappimage:${env.BUILD_ID} localhost:5000/megaappimage"
			
			bat "docker push localhost:5000/megaappimage"
				}
			}
		}
		stage ('Deploy to kubernetes') {
			steps {
				script {
					kubernetesDeploy(configs: "msmega.yaml", kubeconfigId: "kubeglobalcredentialid")
				}  
			}
		}
		
    }
}
