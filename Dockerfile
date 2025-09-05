# Multi-stage build for Spring Boot
FROM maven:3.8.6-openjdk-17 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml first
COPY pom.xml .

# Download dependencies
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]