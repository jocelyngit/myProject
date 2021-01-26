node {
    stage ('Clone repo and build') {
        
            git 'https://github.com/jocelyngit/ms-mega-app-test.git'
            
            sh 'mvn -B -DskipTests clean package'
        
    }
}
