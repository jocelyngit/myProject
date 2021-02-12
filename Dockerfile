FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/ms-mega-app.jar
WORKDIR /opt/app
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0
