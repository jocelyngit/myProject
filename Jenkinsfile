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
                     customImage = docker.build("msmegaappimage:${env.BUILD_ID}")
				}
			}
		}
	    
	    stage ('push image to local registry') {
		    steps {
			    script {	    
				    sh "docker push http://localhost:5000/v2/msmegaappimage:${env.BUILD_ID}"
			   }
		    }
			    
	    }
		
        stage('run docker Image') {
			steps {
				script {
					sh "docker run --name msmega --detach --publish 8081:8081 --publish 45000:45000 http://localhost:5000/msmegaappimage:${env.BUILD_ID}"
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
