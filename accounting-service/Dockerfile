# Multi stage Dockerfile

# Stage 1: Build the application image
# 1.1 Create a Dockerfile in the root of the project
# 1.2 Add the following content to the Dockerfile
FROM go:18-alpine as builder

# Create a new directory to store the application
RUN mkdir /app

# Set the working directory
WORKDIR /app

# Copy the go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source code into the container
COPY . .

# Build the application 
RUN CGO_ENABLED=0 go build -o accountingServiceAPI ./cmd/api  

# Expose the port the application runs on
EXPOSE 8080


# Optional 
# Change the permission of the binary
RUN chmod +x /app/accountingServiceAPI

# ------------------------------------------------------------------------------------------------------------------------------

# Stage 2: Production image
FROM alpine:latest

# Create a new directory to store the application
RUN mkdir /app

# Set the working directory
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/accountingServiceAPI /app/accountingServiceAPI

# Run the application
CMD ["/app/accountingServiceAPI"]

# ------------------------------------------------------------------------------------------------------------------------------

