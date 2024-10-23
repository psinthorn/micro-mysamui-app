package main

import (
	"fmt"
	"net/http"
)

func (app *Config) Welcome(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Welcome to Accounting Application we're starting from now on :)")

}
