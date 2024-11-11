# Multi stage golang backend api service for broker-service 

# Stage 1: Builder container
FROM go:1.18-alpine as builder

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
RUN CGO_ENABLED=0 go build -o brokerServiceAPI ./cmd/api

# Expose the port the application runs on
EXPOSE 8082

# Optional
# Change the permission of the binary
RUN chmod +x /app/brokerServiceAPI

# Stage 2: Production image
FROM alpine:latest

# Create a new directory to store the application
RUN mkdir /app

# Set the working directory
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/brokerServiceAPI /app/brokerServiceAPI

# Run the application
CMD ["/app/brokerServiceAPI"]

# ------------------------------------------------------------------------------------------------------------------------------