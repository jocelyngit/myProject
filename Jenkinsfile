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
				    sh "docker tag msmegaappimage:${env.BUILD_ID} 192.168.151.23:5001/msmegaappimage"
				    
				    sh "docker push 192.168.151.23:5001/msmegaappimage"
			   }
		    }
			    
	    }
		
        stage('run docker Image') {
			steps {
				script {
					sh "docker run --name msmega --detach --publish 8081:8081 --publish 45000:50000 192.168.151.23:5001/msmegaappimage"
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
