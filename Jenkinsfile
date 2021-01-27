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
				
					git url: 'https://github.com/jocelyngit/ms-mega-app-test.git'
					
					 withMaven (
					 maven: 'Maven 3.5.4',
					 mavenSettingsConfig: 'ae641922-8167-4405-a55f-892dfe910391',
					 mavenLocalRepo: '.repository') {
						sh 'mvn -B -DskipTests clean package'
					}
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
