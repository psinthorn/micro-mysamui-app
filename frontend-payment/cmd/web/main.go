package main

import (
	"html/template"
	"log"
)

type Config struct {
	port string
}

type application struct {
	config        Config
	infoLog       *log.Logger
	errorLog      *log.Logger
	templateCache map[string]*template.Template
	version       string
}
