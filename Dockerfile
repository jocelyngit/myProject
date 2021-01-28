FROM jdk:8-jdk-alpine
ARG JAR_FILE=target/ms-mega-app.jar
WORKDIR /opt/app
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
