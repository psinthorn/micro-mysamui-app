package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
)

const webServerPort = "80"

type Config struct {
	DB *sql.DB
}

func main() {
	fmt.Println("Accounting API service is starting please wait...")

	app := Config{}

	// start web server
	app.webServer()

}

func (app *Config) webServer() {
	log.Printf("Accounting API service is starting on port: %s", webServerPort)
	serv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webServerPort),
		Handler: app.routes(),
	}

	err := serv.ListenAndServe()
	if err != nil {
		log.Panic(err)
	}

}
